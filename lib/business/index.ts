import { businessTruth, getActivePricing, type PricingPlan } from "@/config/business";

export function getVerifiedDevices(): string[] | undefined {
  if (businessTruth.devices.verification !== "verified") return undefined;
  return businessTruth.devices.production?.length ? [...businessTruth.devices.production] : undefined;
}

export function getVerifiedTrial() {
  if (businessTruth.trial.verification !== "verified") return undefined;
  return businessTruth.trial.production;
}

export function getVerifiedSimultaneousDevices(): number | undefined {
  if (businessTruth.simultaneousDevices.verification !== "verified") return undefined;
  return businessTruth.simultaneousDevices.production ?? undefined;
}

export function getVerifiedChannels() {
  if (businessTruth.channels.verification !== "verified") return undefined;
  return businessTruth.channels.production;
}

export function getVerifiedVod() {
  if (businessTruth.vod.verification !== "verified") return undefined;
  return businessTruth.vod.production;
}

export function getVerifiedRefunds() {
  if (businessTruth.refunds.verification !== "verified") return undefined;
  return businessTruth.refunds.production;
}

export function getVerifiedRights() {
  if (businessTruth.rights.verification !== "verified") return undefined;
  return businessTruth.rights.production;
}

export function getVerifiedCompany() {
  if (businessTruth.company.verification !== "verified") return undefined;
  return businessTruth.company.production;
}

export function getCommercialSnapshot(): {
  pricing: PricingPlan[] | undefined;
  trial: ReturnType<typeof getVerifiedTrial>;
  devices: string[] | undefined;
  simultaneousDevices: number | undefined;
  channels: ReturnType<typeof getVerifiedChannels>;
  vod: ReturnType<typeof getVerifiedVod>;
  refunds: ReturnType<typeof getVerifiedRefunds>;
} {
  return {
    pricing: getActivePricing(),
    trial: getVerifiedTrial(),
    devices: getVerifiedDevices(),
    simultaneousDevices: getVerifiedSimultaneousDevices(),
    channels: getVerifiedChannels(),
    vod: getVerifiedVod(),
    refunds: getVerifiedRefunds(),
  };
}
