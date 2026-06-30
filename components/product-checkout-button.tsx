"use client";

import { useState } from "react";

export function ProductCheckoutButton(props: { product: string }) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleCheckout() {
    setLoading(true);
    setError("");
    try {
      const response = await fetch("/api/checkout/start", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ product: props.product }),
      });

      if (!response.ok) {
        const data = await response.json().catch(() => ({}));
        throw new Error(data.error ?? "Checkout could not start.");
      }

      const data = (await response.json()) as { orderId: string; checkoutUrl: string };
      document.cookie = `ood_order_id=${data.orderId};path=/;max-age=86400;samesite=lax`;
      window.location.href = data.checkoutUrl;
    } catch (nextError) {
      setError(nextError instanceof Error ? nextError.message : "Checkout failed");
    } finally {
      setLoading(false);
    }
  }

  if (error) {
    return (
      <div className="space-y-2">
        <button
          type="button"
          disabled={loading}
          onClick={() => void handleCheckout()}
          className="inline-flex rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm text-stone-100 transition hover:border-white/16 hover:bg-white/[0.08] disabled:cursor-not-allowed disabled:opacity-60"
        >
          {loading ? "Opening checkout…" : "Unlock Now"}
        </button>
        <p className="text-sm text-red-300">{error}</p>
      </div>
    );
  }

  return (
    <button
      type="button"
      disabled={loading}
      onClick={() => void handleCheckout()}
      className="inline-flex rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm text-stone-100 transition hover:border-white/16 hover:bg-white/[0.08] disabled:cursor-not-allowed disabled:opacity-60"
    >
      {loading ? "Opening checkout…" : "Unlock Now"}
    </button>
  );
}
