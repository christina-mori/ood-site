import { NextResponse } from "next/server";
import { z } from "zod";

import {
  AGENT_REVENUE_PAYMENT_LINKS,
  DEEP_DIVE_SKUS,
  skuCodeForProductSlug,
} from "@/lib/constants";
import { createOrder } from "@/lib/server/store";

const checkoutStartSchema = z.object({
  product: z.string().min(1),
  email: z.string().email().optional(),
});

export async function POST(request: Request) {
  const body = await request.json();
  const parsed = checkoutStartSchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json(
      { error: "Invalid checkout payload", issues: parsed.error.flatten() },
      { status: 400 },
    );
  }

  const { product } = parsed.data;

  const paymentLink = AGENT_REVENUE_PAYMENT_LINKS[product];
  if (!paymentLink) {
    return NextResponse.json(
      { error: "Payment link not configured for this product" },
      { status: 503 },
    );
  }

  const skuCode = skuCodeForProductSlug(product);
  const sku = skuCode
    ? Object.values(DEEP_DIVE_SKUS).find((item) => item.code === skuCode)
    : null;

  if (!sku) {
    return NextResponse.json({ error: "Product not found" }, { status: 404 });
  }

  const order = await createOrder({
    email: parsed.data.email ?? "",
    stripeSessionId: `pending_${product}`,
    sku,
    reportKind: "deep_dive",
  });

  const checkoutUrl = `${paymentLink}?metadata_order_id=${order.id}&metadata_product=${product}`;

  return NextResponse.json({
    orderId: order.id,
    checkoutUrl,
  });
}
