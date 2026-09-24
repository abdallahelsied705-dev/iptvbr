import { businessInput } from "@/config/business-data.generated";

export type VerificationState = "verified" | "unverified";

export type PricingPlan = {
  duration: string;
  price: number;
  currency: "EUR";
  label?: string;
};

/**
 * Single source of truth for business facts used by the site.
 * Public static facts can live here; commercial facts come from the generated input.
 * Benchmark data is intentionally kept separate from production facts.
 */
export const businessTruth = {
  domain: "https://www.iptvbr.pt",
  locale: "pt-PT",
  whatsapp: "212710141872",
  paymentFlow: "whatsapp-payment-link" as const,

  pricing: {
    verification: businessInput.pricing.verification as VerificationState,
    production: businessInput.pricing.production.map((plan) => ({ ...plan })),
    benchmark: [
      { duration: "1 mês", price: 16.99, currency: "EUR" as const },
      { duration: "3 meses", price: 30.99, currency: "EUR" as const },
      { duration: "6 meses", price: 49.99, currency: "EUR" as const },
      { duration: "12 meses", price: 62.99, currency: "EUR" as const },
    ],
  },

  trial: {
    verification: businessInput.trial.verification as VerificationState,
    production: businessInput.trial.production,
  },

  devices: {
    verification: businessInput.devices.verification as VerificationState,
    production: [...businessInput.devices.production],
  },

  simultaneousDevices: {
    verification: businessInput.simultaneousDevices.verification as VerificationState,
    production: businessInput.simultaneousDevices.production,
  },

  channels: {
    verification: businessInput.channels.verification as VerificationState,
    production: businessInput.channels.production,
  },

  vod: {
    verification: businessInput.vod.verification as VerificationState,
    production: businessInput.vod.production,
  },

  uptime: {
    verification: businessInput.uptime.verification as VerificationState,
    production: businessInput.uptime.production,
  },

  refunds: {
    verification: businessInput.refunds.verification as VerificationState,
    production: businessInput.refunds.production,
  },

  rights: {
    verification: businessInput.rights.verification as VerificationState,
    production: businessInput.rights.production,
  },

  company: {
    verification: businessInput.company.verification as VerificationState,
    production: businessInput.company.production,
  },
} as const;

export function hasVerifiedPricing() {
  return businessTruth.pricing.verification === "verified" && businessTruth.pricing.production.length > 0;
}

export function getActivePricing(): PricingPlan[] | undefined {
  return hasVerifiedPricing() ? businessTruth.pricing.production : undefined;
}

export function getVerifiedBusinessStatus() {
  return {
    pricing: businessTruth.pricing.verification === "verified",
    trial: businessTruth.trial.verification === "verified",
    devices: businessTruth.devices.verification === "verified",
    simultaneousDevices: businessTruth.simultaneousDevices.verification === "verified",
    channels: businessTruth.channels.verification === "verified",
    vod: businessTruth.vod.verification === "verified",
    uptime: businessTruth.uptime.verification === "verified",
    refunds: businessTruth.refunds.verification === "verified",
    rights: businessTruth.rights.verification === "verified",
    company: businessTruth.company.verification === "verified",
  };
}
