import crypto from "node:crypto";

import { NextResponse } from "next/server";

import { DEEP_DIVE_SKUS, getAgentRevenueWebhookSecrets, skuCodeForProductSlug } from "@/lib/constants";
import { generateReportFromConfirmedPayment } from "@/lib/server/generate-report";
import { createOrder, getOrder, updateOrder } from "@/lib/server/store";

function verifySignature(rawBody: string, signatureHeader: string, secrets: string[]): boolean {
  if (secrets.length === 0) return false;

  const parts = signatureHeader.split(",");
  const tPart = parts.find((p) => p.startsWith("t="));
  const v1Part = parts.find((p) => p.startsWith("v1="));
  if (!tPart || !v1Part) return false;

  const t = tPart.slice(2);
  const v1 = v1Part.slice(3);
  const signedPayload = `${t}.${rawBody}`;

  return secrets.some((secret) => {
    const expected = crypto.createHmac("sha256", secret).update(signedPayload).digest("hex");
    return crypto.timingSafeEqual(Buffer.from(v1), Buffer.from(expected));
  });
}

export async function POST(request: Request) {
  const rawBody = await request.text();
  const signature = request.headers.get("matrix-signature") ?? "";

  const secrets = getAgentRevenueWebhookSecrets();
  if (secrets.length === 0) {
    return NextResponse.json(
      { error: "Webhook secret not configured" },
      { status: 503 },
    );
  }

  if (!verifySignature(rawBody, signature, secrets)) {
    return NextResponse.json({ error: "Invalid signature" }, { status: 400 });
  }

  const event = JSON.parse(rawBody) as {
    event: string;
    data: {
      link_id?: string;
      payment_id?: string;
      amount_minor?: number;
      currency?: string;
      product_name?: string;
      customer_email?: string;
      metadata?: Record<string, string>;
    };
  };

  if (event.event !== "payment.succeeded") {
    return NextResponse.json({ received: true, skipped: event.event });
  }

  const productSlug = event.data.metadata?.product;
  if (!productSlug) {
    return NextResponse.json({ received: true, error: "No product in metadata" }, { status: 400 });
  }

  const skuCode = skuCodeForProductSlug(productSlug);
  const sku = skuCode ? Object.values(DEEP_DIVE_SKUS).find((item) => item.code === skuCode) : null;
  if (!sku) {
    return NextResponse.json({ received: true, error: "Unknown product" }, { status: 400 });
  }

  const existingOrderId = event.data.metadata?.order_id;
  const existingOrder = existingOrderId ? await getOrder(existingOrderId) : null;

  let order;
  if (existingOrder) {
    order = await updateOrder(existingOrder.id, {
      paymentStatus: "paid",
      stripeSessionId: event.data.payment_id ?? existingOrder.stripeSessionId,
      email: event.data.customer_email ?? existingOrder.email,
    });
  } else {
    order = await createOrder({
      email: event.data.customer_email ?? "",
      stripeSessionId: event.data.payment_id ?? `link_${event.data.link_id}_${Date.now()}`,
      paymentStatus: "paid",
      sku,
      reportKind: "deep_dive",
    });
  }

  if (order?.intakeSessionId) {
    try {
      await generateReportFromConfirmedPayment(order.id);
    } catch (error) {
      console.error("Report generation failed for order", order.id, error);
    }
  }

  return NextResponse.json({ received: true, orderId: order?.id });
}
