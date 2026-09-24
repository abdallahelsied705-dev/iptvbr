"use client";

import { useMemo, useState } from "react";
import { buildWhatsAppUrl, trialWhatsAppMessage } from "@/lib/whatsapp";

const plans = [
  { id: "1", duration: "1 mês", tag: "Flexível", note: "Para começar" },
  { id: "3", duration: "3 meses", tag: "Equilíbrio", note: "Mais liberdade" },
  { id: "6", duration: "6 meses", tag: "Mais escolhido", note: "Boa relação preço / duração" },
  { id: "12", duration: "12 meses", tag: "Melhor valor", note: "Menor custo mensal" },
];
// Preço total em EUR por número de dispositivos, na ordem de `plans` (1, 3, 6, 12 meses).
const prices: Record<number, number[]> = {
  1: [12.99, 22.99, 34.99, 49.99],
  2: [19.99, 36.99, 54.99, 74.99],
  3: [26.99, 47.99, 69.99, 94.99],
  4: [32.99, 57.99, 84.99, 114.99],
};
const deviceLabels: Record<number, string> = { 1: "1 dispositivo", 2: "2 dispositivos", 3: "3 dispositivos", 4: "4 dispositivos" };
const planFeatures = [
  "Qualidade de streaming 4K Ultra HD",
  "Mais de 45.000 canais em direto no mundo",
  "Mais de 120.000 filmes e séries",
  "Eventos PPV premium incluídos",
  "Acesso instantâneo ao catálogo VOD",
  "EPG inteligente e Catch-Up TV",
  "Suporte 24/7 em português",
  "Compatibilidade com vários dispositivos",
];

export function PricingMatrix() {
  const [devices, setDevices] = useState(1);
  const adjusted = useMemo(() => plans.map((plan, index) => ({ ...plan, price: prices[devices][index] })), [devices]);
  const buildMessage = (duration: string, price: number) => `Olá! 👋\n\nTenho interesse no plano IPTVBR:\n\n📦 Plano: ${duration}\n📺 Dispositivos: ${devices}\n💰 Preço: €${price.toFixed(2)}\n\nGostaria de receber o link de pagamento.`;

  return (
    <div className="pricing-matrix" id="planos">
      <div className="device-selector" role="tablist" aria-label="Número de dispositivos">
        {[1,2,3,4].map((count) => <button key={count} className={devices === count ? "is-active" : ""} role="tab" aria-selected={devices === count} onClick={() => setDevices(count)}><span className="selector-icon">{count}</span>{deviceLabels[count]}</button>)}
      </div>
      <div className="premium-pricing-grid">
        {adjusted.map((plan, index) => <article className={`premium-price-card ${index === 2 ? "is-featured" : ""}`} key={plan.id}>
          {index === 2 ? <span className="popular-ribbon">MAIS ESCOLHIDO</span> : null}
          <div className="price-card-top"><span className="price-kicker">{plan.tag}</span><span className="price-duration">{plan.duration}</span></div>
          <div className="price-value"><small>€</small>{plan.price.toFixed(2).replace(".", ",")}</div>
          <span className="price-per-month">{plan.duration === "1 mês" ? "Preço total" : `≈ €${(plan.price / Number(plan.id)).toFixed(2).replace(".", ",")} / mês`}</span>
          <ul>{planFeatures.map((feature) => <li key={feature}>{feature}</li>)}</ul>
          <a className="price-cta" href={buildWhatsAppUrl(buildMessage(plan.duration, plan.price))} target="_blank" rel="noopener noreferrer">Escolher plano <span>↗</span></a>
          <span className="price-note">{plan.note}</span>
        </article>)}
      </div>
      <div className="pricing-trial">
        <div><strong>Teste grátis de 24 horas</strong><span>Experimenta no teu dispositivo antes de escolher um plano.</span></div>
        <a className="pricing-trial-cta" href={buildWhatsAppUrl(trialWhatsAppMessage)} target="_blank" rel="noopener noreferrer">Pedir teste grátis <span>↗</span></a>
      </div>
      <div className="pricing-footnote"><span>ⓘ</span> Ao escolher, o WhatsApp abre já com duração, número de dispositivos e preço selecionados.</div>
    </div>
  );
}
