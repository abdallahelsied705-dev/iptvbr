import { businessTruth, getActivePricing } from "@/config/business";

export type ReleaseStatus = "ready" | "blocked";

export function getCommercialReleaseStatus(): ReleaseStatus {
  const pricingReady = Boolean(getActivePricing()?.length);
  const devicesReady =
    businessTruth.devices.verification === "verified" &&
    businessTruth.devices.production.length > 0;
  const rightsReady =
    businessTruth.rights.verification === "verified" &&
    Boolean(businessTruth.rights.production?.verified);
  const companyReady =
    businessTruth.company.verification === "verified" &&
    Boolean(businessTruth.company.production);
  const trialConsistent =
    businessTruth.trial.verification !== "verified" ||
    Boolean(businessTruth.trial.production);

  return pricingReady && devicesReady && rightsReady && companyReady && trialConsistent
    ? "ready"
    : "blocked";
}

export function getReleaseChecklist() {
  return {
    pricing: businessTruth.pricing.verification === "verified" && businessTruth.pricing.production.length > 0,
    trial: businessTruth.trial.verification === "verified" && Boolean(businessTruth.trial.production),
    devices: businessTruth.devices.verification === "verified" && businessTruth.devices.production.length > 0,
    simultaneousDevices:
      businessTruth.simultaneousDevices.verification === "verified" &&
      typeof businessTruth.simultaneousDevices.production === "number",
    channels: businessTruth.channels.verification === "verified" && Boolean(businessTruth.channels.production),
    vod: businessTruth.vod.verification === "verified" && Boolean(businessTruth.vod.production),
    uptime: businessTruth.uptime.verification === "verified" && Boolean(businessTruth.uptime.production),
    refunds: businessTruth.refunds.verification === "verified" && Boolean(businessTruth.refunds.production),
    rights: businessTruth.rights.verification === "verified" && Boolean(businessTruth.rights.production?.verified),
    company: businessTruth.company.verification === "verified" && Boolean(businessTruth.company.production),
  } as const;
}