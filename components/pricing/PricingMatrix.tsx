"use client";

import { useMemo, useState } from "react";
import { BadgeCheck, Check, MonitorSmartphone, Tv, MessageCircle, Plus } from "lucide-react";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

const plans = [
  { id: "1", duration: "1 mês", base: 15, tag: "Plano flexível", note: "Para começar" },
  { id: "3", duration: "3 meses", base: 29, tag: "Boa opção", note: "Mais liberdade" },
  { id: "6", duration: "6 meses", base: 49, tag: "Mais escolhido", note: "Boa relação duração / preço" },
  { id: "12", duration: "12 meses", base: 69, tag: "Melhor valor", note: "Menor custo mensal" },
];

const deviceMultipliers: Record<number, number> = { 1: 1, 2: 1.6, 3: 2.05, 4: 2.45 };
const deviceLabels: Record<number, string> = {
  1: "1 dispositivo",
  2: "2 dispositivos",
  3: "3 dispositivos",
  4: "4 dispositivos",
};

const features = [
  { icon: <Tv size={17} strokeWidth={2} />, text: "Canais de TV ao vivo e conteúdos disponíveis" },
  { icon: <BadgeCheck size={17} strokeWidth={2} />, text: "Qualidade HD / Full HD / 4K quando disponível" },
  { icon: <MonitorSmartphone size={17} strokeWidth={2} />, text: "Compatível com vários dispositivos" },
  { icon: <Check size={17} strokeWidth={2} />, text: "EPG e organização por categorias" },
  { icon: <MessageCircle size={17} strokeWidth={2} />, text: "Suporte e configuração pelo WhatsApp" },
];

export function PricingMatrix() {
  const [devices, setDevices] = useState(1);

  const adjusted = useMemo(
    () => plans.map((plan) => ({
      ...plan,
      price: Math.round(plan.base * deviceMultipliers[devices]),
    })),
    [devices],
  );

  const buildMessage = (duration: string, price: number) =>
    `Olá! 👋

Tenho interesse no plano IPTVBR:

📦 Plano: ${duration}
📺 Dispositivos: ${devices}
💰 Preço: €${price.toFixed(2)}

Gostaria de receber o link de pagamento.`;

  return (
    <div className="pricing-reference" id="planos">
      <div className="pricing-reference-intro">
        <div>
          <span className="pricing-reference-kicker">PLANOS IPTVBR</span>
          <h3>Escolhe o teu plano IPTV</h3>
          <p>Seleciona a duração e o número de dispositivos. Os preços apresentados são os valores atualmente configurados no site.</p>
        </div>
        <div className="pricing-reference-badge">
          <span />
          EUR · pt-PT
        </div>
      </div>

      <div className="pricing-reference-switch" role="tablist" aria-label="Número de dispositivos">
        {[1, 2, 3, 4].map((count) => (
          <button
            key={count}
            type="button"
            role="tab"
            aria-selected={devices === count}
            className={devices === count ? "is-active" : ""}
            onClick={() => setDevices(count)}
          >
            <span className="pricing-reference-device-icon" aria-hidden="true">
              {count === 1 ? <Tv size={16} /> : <MonitorSmartphone size={16} />}
            </span>
            <span>{deviceLabels[count]}</span>
          </button>
        ))}
      </div>

      <div className="pricing-reference-grid">
        {adjusted.map((plan, index) => (
          <article
            className={`pricing-reference-card ${index === 2 ? "is-featured" : ""}`}
            key={plan.id}
          >
            <div className="pricing-reference-card-top">
              <span className="pricing-reference-tag">{plan.tag}</span>
              {index === 2 ? <span className="pricing-reference-popular">Mais escolhido</span> : null}
            </div>

            <h4>{plan.duration}</h4>

            <div className="pricing-reference-price">
              <span>€</span>
              <strong>{plan.price.toFixed(2).replace(".", ",")}</strong>
            </div>

            <p className="pricing-reference-monthly">
              {plan.duration === "1 mês"
                ? "Preço total"
                : `≈ €${(plan.price / Number(plan.id)).toFixed(2).replace(".", ",")} / mês`}
            </p>

            <div className="pricing-reference-rule" />

            <ul>
              {features.map((feature) => (
                <li key={feature.text}>
                  <span className="pricing-reference-feature-icon">{feature.icon}</span>
                  <span>{feature.text}</span>
                </li>
              ))}
            </ul>

            <a
              className="pricing-reference-cta"
              href={buildWhatsAppUrl(buildMessage(plan.duration, plan.price))}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>Escolher plano</span>
              <span className="pricing-reference-cta-icon"><Plus size={16} strokeWidth={2.5} /></span>
            </a>

            <p className="pricing-reference-note">{plan.note}</p>
          </article>
        ))}
      </div>
    </div>
  );
}
