import Link from "next/link";
import { cookies } from "next/headers";

import { ReportStatusPoller } from "@/components/report-status-poller";
import { RitualCard } from "@/components/ritual-card";
import { SectionLabel } from "@/components/section-label";
import { Shell } from "@/components/shell";
import { generateReportFromConfirmedPayment, generateReportFromOrder } from "@/lib/server/generate-report";
import { getOrder, getReport } from "@/lib/server/store";

type CheckoutSuccessPageProps = {
  searchParams: Promise<{
    session_id?: string;
    order_id?: string;
    mock?: string;
    needs_intake?: string;
    product?: string;
  }>;
};

export default async function CheckoutSuccessPage({
  searchParams,
}: CheckoutSuccessPageProps) {
  const { order_id: queryOrderId, mock, product } = await searchParams;
  const cookieStore = await cookies();
  const cookieOrderId = cookieStore.get("ood_order_id")?.value;
  const orderId = queryOrderId ?? cookieOrderId;
  const order = orderId ? await getOrder(orderId) : null;
  const needsIntake = Boolean(order && !order.intakeSessionId);
  let report = order?.reportId ? await getReport(order.reportId) : null;

  if (order && !needsIntake && !report) {
    if (mock === "1") {
      report = await generateReportFromConfirmedPayment(order.id);
    } else if (order.paymentStatus === "paid") {
      report = await generateReportFromOrder(order.id);
    }
  }

  const intakeHref = order
    ? `/quiz?product=${encodeURIComponent(product ?? "")}&order=${encodeURIComponent(order.id)}`
    : "/shop";

  return (
    <Shell className="mx-auto max-w-3xl">
      <RitualCard className="space-y-6">
        <SectionLabel>Checkout success</SectionLabel>
        <h1 className="font-serif text-4xl text-stone-50 sm:text-5xl">
          {needsIntake
            ? "Payment captured. Complete your intake to generate the report."
            : "Payment captured. Your report is being assembled."}
        </h1>
        <p className="text-lg leading-8 text-stone-300">
          {needsIntake
            ? "The purchase is complete. We still need the birth details and delivery email that personalize the report."
            : "We're composing your paid report, downloadable assets, and email delivery link now."}
        </p>

        {needsIntake ? (
          <Link
            href={intakeHref}
            className="inline-flex rounded-full bg-stone-100 px-5 py-3 text-sm font-semibold text-stone-950 transition hover:bg-cyan-100"
          >
            Continue to intake
          </Link>
        ) : (
          <ReportStatusPoller
            reportId={report?.id}
            orderId={order?.id}
            initialStatus={report?.status ?? order?.reportStatus ?? "queued"}
          />
        )}

        {report?.status === "ready" ? (
          <Link
            href={`/report/${report.id}?email=${encodeURIComponent(report.email)}`}
            className="inline-flex rounded-full bg-stone-100 px-5 py-3 text-sm font-semibold text-stone-950 transition hover:bg-cyan-100"
          >
            Open my report
          </Link>
        ) : null}

        <div className="space-y-2 text-sm leading-7 text-stone-400">
          <p>Order ID: {order?.id ?? "pending"}</p>
          <p>Delivery email: {order?.email ?? "pending"}</p>
          <p>Status: {needsIntake ? "intake_required" : report?.status ?? order?.reportStatus ?? "queued"}</p>
        </div>
      </RitualCard>
    </Shell>
  );
}
