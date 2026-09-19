import { getCommercialReleaseStatus } from "@/config/release";

export function ReleaseStatus() {
  const status = getCommercialReleaseStatus();

  if (status === "ready") return null;

  return (
    <aside className="verification-note" aria-label="Estado de publicação comercial">
      <strong>Publicação comercial aguardando validação.</strong>
      <span>
        Os dados de oferta continuam protegidos até serem confirmados no Business Truth. O site não transforma benchmarks em factos comerciais.
      </span>
    </aside>
  );
}
