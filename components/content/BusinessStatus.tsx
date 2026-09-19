import { businessTruth } from "@/config/business";

export function BusinessStatus() {
  const verificationFields = [
    businessTruth.pricing.verification,
    businessTruth.trial.verification,
    businessTruth.devices.verification,
    businessTruth.simultaneousDevices.verification,
    businessTruth.channels.verification,
    businessTruth.vod.verification,
    businessTruth.refunds.verification,
    businessTruth.rights.verification,
  ];

  const pending = verificationFields.some((value) => value === "unverified");
  if (!pending) return null;

  return (
    <aside className="verification-note" aria-label="Estado dos dados comerciais">
      <strong>Dados comerciais em validação.</strong>
      <span>
        Preços, teste, compatibilidade e outras condições só devem ser apresentados como oferta quando estiverem confirmados.
      </span>
    </aside>
  );
}
