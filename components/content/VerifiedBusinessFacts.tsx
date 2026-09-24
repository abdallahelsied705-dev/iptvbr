import {
  getVerifiedChannels,
  getVerifiedCompany,
  getVerifiedDevices,
  getVerifiedRefunds,
  getVerifiedSimultaneousDevices,
  getVerifiedTrial,
  getVerifiedVod,
} from "@/lib/business";

export function VerifiedBusinessFacts() {
  const devices = getVerifiedDevices();
  const trial = getVerifiedTrial();
  const simultaneousDevices = getVerifiedSimultaneousDevices();
  const channels = getVerifiedChannels();
  const vod = getVerifiedVod();
  const refunds = getVerifiedRefunds();
  const company = getVerifiedCompany();

  const items: { label: string; value: string }[] = [];

  if (devices?.length) items.push({ label: "Dispositivos confirmados", value: devices.join(", ") });
  if (simultaneousDevices) items.push({ label: "Dispositivos simultâneos", value: String(simultaneousDevices) });
  if (trial) items.push({ label: "Teste", value: trial.available ? (trial.duration ? `Disponível · ${trial.duration}` : "Disponível") : "Não disponível" });
  if (channels) {
    items.push({
      label: "Canais",
      value: channels.count ? `${channels.count.toLocaleString("pt-PT")} (confirmado)` : (channels.description ?? "Informação confirmada"),
    });
  }
  if (vod) {
    items.push({
      label: "VOD",
      value: vod.count ? `${vod.count.toLocaleString("pt-PT")} (confirmado)` : (vod.description ?? "Informação confirmada"),
    });
  }
  if (refunds) {
    items.push({
      label: "Reembolso",
      value: refunds.available ? (refunds.window ? `Disponível · ${refunds.window}` : "Disponível") : "Não disponível",
    });
  }
  if (company?.legalName) items.push({ label: "Entidade", value: company.legalName });

  if (!items.length) return null;

  return (
    <section className="verified-facts" aria-label="Dados comerciais confirmados">
      <div className="verified-facts-heading">
        <span className="card-kicker">Dados confirmados</span>
        <p>Informação atualizada sobre a oferta IPTVBR.</p>
      </div>
      <div className="verified-facts-grid">
        {items.map((item) => (
          <article className="verified-fact" key={item.label}>
            <span>{item.label}</span>
            <strong>{item.value}</strong>
          </article>
        ))}
      </div>
    </section>
  );
}
