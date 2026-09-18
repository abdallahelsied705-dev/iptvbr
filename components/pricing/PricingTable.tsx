"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { buildPlanWhatsAppMessage, formatEuro, getPricingPlans, type DeviceCount } from "@/config/pricing";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

const deviceOptions: { value: DeviceCount; label: string; note: string }[] = [
  { value: 1, label: "1 dispositivo", note: "Para uso individual" },
  { value: 2, label: "2 dispositivos", note: "Para dois ecrãs em simultâneo" },
  { value: 3, label: "3 dispositivos", note: "Para famílias e vários ecrãs" },
];

export function PricingTable({ compact = false }: { compact?: boolean }) {
  const plans = useMemo(() => getPricingPlans(), []);
  const [devices, setDevices] = useState<DeviceCount>(1);

  return (
    <div className={`pricing-system ${compact ? "pricing-system-compact" : ""}`}>
      <div className="pricing-toolbar">
        <div>
          <span className="card-kicker">Configuração</span>
          <h3>Quantos dispositivos queres usar?</h3>
          <p>Escolhe o número de dispositivos em simultâneo e os valores são atualizados automaticamente.</p>
        </div>
        <div className="device-switcher" role="tablist" aria-label="Número de dispositivos">
          {deviceOptions.map((option) => (
            <button
              key={option.value}
              type="button"
              role="tab"
              aria-selected={devices === option.value}
              className={`device-switch ${devices === option.value ? "is-active" : ""}`}
              onClick={() => setDevices(option.value)}
            >
              <strong>{option.label}</strong>
              <small>{option.note}</small>
            </button>
          ))}
        </div>
      </div>

      <div className="pricing-table-grid">
        {plans.map((plan) => {
          const price = plan.prices[devices];
          const monthly = price / Math.max(plan.months, 1);
          return (
            <article className={`price-plan-card ${plan.badge === "Mais procurado" ? "is-featured" : ""}`} key={`${plan.duration}-${devices}`}>
              {plan.badge ? <span className="price-plan-badge">{plan.badge}</span> : null}
              <div className="price-plan-topline">
                <span>{plan.duration}</span>
                <span>{devices} {devices === 1 ? "dispositivo" : "dispositivos"}</span>
              </div>
              <h4>{formatEuro(price)}</h4>
              <p className="price-monthly">≈ {formatEuro(monthly)} / mês</p>
              <ul className="price-feature-list">
                <li>Atendimento direto pelo WhatsApp</li>
                <li>Configuração orientada para o teu dispositivo</li>
                <li>Pedido de pagamento enviado após a escolha</li>
                <li>Sem checkout complicado no site</li>
              </ul>
              <Link
                className="button button-primary pricing-whatsapp-cta"
                href={buildWhatsAppUrl(buildPlanWhatsAppMessage(plan, devices))}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="whatsapp-button-icon" aria-hidden="true">◔</span>
                Escolher este plano
              </Link>
              <p className="price-plan-helper">A mensagem abrirá no WhatsApp com plano, duração e número de dispositivos.</p>
            </article>
          );
        })}
      </div>

      <div className="pricing-footnote">
        <div>
          <span className="pricing-footnote-icon">✓</span>
          <div>
            <strong>Compra orientada pelo WhatsApp</strong>
            <p>Depois de escolheres o plano, a mensagem pré-preenchida abre diretamente no WhatsApp para confirmar os detalhes e receber o link de pagamento.</p>
          </div>
        </div>
        <Link className="button button-ghost" href="/suporte/">Precisas de ajuda?</Link>
      </div>
    </div>
  );
}