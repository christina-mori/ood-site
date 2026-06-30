import { type SKU } from "@/lib/types";

export const APP_NAME = "O.O.D";
export const APP_TAGLINE = "Object of Desire";
export const APP_DOMAIN =
  process.env.NEXT_PUBLIC_APP_URL ?? "http://localhost:3000";

export const ENTERTAINMENT_DISCLAIMER =
  "For entertainment and self-reflection only. O.O.D does not provide medical, legal, financial, or mental health advice.";

export const DEEP_DIVE_SKUS: Record<
  "relationship" | "career" | "money" | "healing" | "allField" | "bundle" | "wallpaper",
  SKU
> = {
  relationship: {
    code: "crossover-relationship",
    title: "Relationship Deep Dive",
    price: 299,
    currency: "USD",
    deliveryMode: "instant_digital",
  },
  career: {
    code: "crossover-career",
    title: "Career Deep Dive",
    price: 299,
    currency: "USD",
    deliveryMode: "instant_digital",
  },
  money: {
    code: "crossover-money",
    title: "Personal Growth",
    price: 299,
    currency: "USD",
    deliveryMode: "instant_digital",
  },
  healing: {
    code: "crossover-healing",
    title: "Health",
    price: 299,
    currency: "USD",
    deliveryMode: "instant_digital",
  },
  allField: {
    code: "crossover-all-field-bundle",
    title: "All-Field Bundle",
    price: 899,
    currency: "USD",
    deliveryMode: "instant_digital",
  },
  bundle: {
    code: "crossover-bundle",
    title: "Cross-Over Bundle",
    price: 1999,
    currency: "USD",
    deliveryMode: "instant_digital",
  },
  wallpaper: {
    code: "signal-wallpaper",
    title: "Signal Wallpaper Add-On",
    price: 499,
    currency: "USD",
    deliveryMode: "instant_digital",
  },
};

export const PAID_PRODUCT_SLUG_TO_SKU_CODE = {
  "relationship-deep-dive": DEEP_DIVE_SKUS.relationship.code,
  "career-deep-dive": DEEP_DIVE_SKUS.career.code,
  "money-deep-dive": DEEP_DIVE_SKUS.money.code,
  "healing-deep-dive": DEEP_DIVE_SKUS.healing.code,
  "all-field-bundle": DEEP_DIVE_SKUS.allField.code,
} as const satisfies Record<string, SKU["code"]>;

export const AGENT_REVENUE_PAYMENT_LINKS: Record<string, string> = {
  "relationship-deep-dive": process.env.NEXT_PUBLIC_PAYMENT_LINK_RELATIONSHIP ?? "",
  "career-deep-dive": process.env.NEXT_PUBLIC_PAYMENT_LINK_CAREER ?? "",
  "money-deep-dive": process.env.NEXT_PUBLIC_PAYMENT_LINK_MONEY ?? "",
  "healing-deep-dive": process.env.NEXT_PUBLIC_PAYMENT_LINK_HEALING ?? "",
  "all-field-bundle": process.env.NEXT_PUBLIC_PAYMENT_LINK_ALL_FIELD ?? "",
  "crossover-bundle": process.env.NEXT_PUBLIC_PAYMENT_LINK_CROSSOVER_BUNDLE ?? "",
  "signal-wallpaper": process.env.NEXT_PUBLIC_PAYMENT_LINK_SIGNAL_WALLPAPER ?? "",
};

export function getAgentRevenueWebhookSecrets(): string[] {
  const secret = process.env.AGENT_REVENUE_WEBHOOK_SECRET;
  return secret ? [secret] : [];
}

export function skuCodeForProductSlug(product?: string) {
  if (!product) return undefined;
  return PAID_PRODUCT_SLUG_TO_SKU_CODE[
    product as keyof typeof PAID_PRODUCT_SLUG_TO_SKU_CODE
  ];
}

export const DEMO_EMAIL = "ritual@ood.aura";

export const TRACKING_EVENTS = {
  landingView: "landing_view",
  quizStart: "quiz_start",
  quizComplete: "quiz_complete",
  previewView: "preview_view",
  emailGateComplete: "email_gate_complete",
  crossoverReportGenerated: "crossover_report_generated",
  checkoutStart: "checkout_start",
  paymentSuccess: "payment_success",
  reportOpen: "report_open",
  shareClick: "share_click",
  repeatPurchase: "repeat_purchase",
} as const;
