"use client";

import { useMemo, useState } from "react";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

const plans = [
  { id: "1", duration: "1 mês", base: 15, tag: "Flexível", note: "Para começar" },
  { id: "3", duration: "3 meses", base: 29, tag: "Equilíbrio", note: "Mais liberdade" },
  { id: "6", duration: "6 meses", base: 49, tag: "Mais escolhido", note: "Boa relação preço / duração" },
  { id: "12", duration: "12 meses", base: 69, tag: "Melhor valor", note: "Menor custo mensal" },
];
const deviceMultipliers: Record<number, number> = { 1: 1, 2: 1.6, 3: 2.05, 4: 2.45 };
const deviceLabels: Record<number, string> = { 1: "1 dispositivo", 2: "2 dispositivos", 3: "3 dispositivos", 4: "4 dispositivos" };

export function PricingMatrix() {
  const [devices, setDevices] = useState(1);
  const adjusted = useMemo(() => plans.map((plan) => ({ ...plan, price: Math.round(plan.base * deviceMultipliers[devices]) })), [devices]);
  const buildMessage = (duration: string, price: number) => `Olá! 👋\n\nTenho interesse no plano IPTVBR:\n\n📦 Plano: ${duration}\n📺 Dispositivos: ${devices}\n💰 Preço: €${price.toFixed(2)}\n\nGostaria de receber o link de pagamento.`;

  return (
    <div className="pricing-matrix" id="planos">
      <div className="pricing-benchmark-note"><div><strong>Preços de referência para lançamento</strong><span>Benchmark do mercado português, a confirmar antes de publicar como oferta final.</span></div><span className="benchmark-badge">EUR · pt-PT</span></div>
      <div className="device-selector" role="tablist" aria-label="Número de dispositivos">
        {[1,2,3,4].map((count) => <button key={count} className={devices === count ? "is-active" : ""} role="tab" aria-selected={devices === count} onClick={() => setDevices(count)}><span className="selector-icon">{count}</span>{deviceLabels[count]}</button>)}
      </div>
      <div className="premium-pricing-grid">
        {adjusted.map((plan, index) => <article className={`premium-price-card ${index === 2 ? "is-featured" : ""}`} key={plan.id}>
          {index === 2 ? <span className="popular-ribbon">MAIS ESCOLHIDO</span> : null}
          <div className="price-card-top"><span className="price-kicker">{plan.tag}</span><span className="price-duration">{plan.duration}</span></div>
          <div className="price-value"><small>€</small>{plan.price.toFixed(2).replace(".", ",")}</div>
          <span className="price-per-month">{plan.duration === "1 mês" ? "Preço total" : `≈ €${(plan.price / Number(plan.id)).toFixed(2).replace(".", ",")} / mês`}</span>
          <ul><li>Qualidade HD / Full HD / 4K quando disponível</li><li>EPG e organização por categorias</li><li>Compatível com {deviceLabels[devices]}</li><li>Suporte e configuração por WhatsApp</li></ul>
          <a className="price-cta" href={buildWhatsAppUrl(buildMessage(plan.duration, plan.price))} target="_blank" rel="noopener noreferrer">Escolher plano <span>↗</span></a>
          <span className="price-note">{plan.note}</span>
        </article>)}
      </div>
      <div className="pricing-footnote"><span>ⓘ</span> Ao escolher, o WhatsApp abre já com duração, número de dispositivos e preço selecionados.</div>
    </div>
  );
}