"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { BadgeCheck, Check, MessageCircle, MonitorSmartphone, Plus, TvMinimal } from "lucide-react";
import { buildPlanWhatsAppMessage, formatEuro, getPricingPlans, type DeviceCount } from "@/config/pricing";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

const deviceOptions: { value: DeviceCount; label: string; note: string }[] = [
  { value: 1, label: "1 dispositivo", note: "Para uso individual" },
  { value: 2, label: "2 dispositivos", note: "Para dois ecrãs" },
  { value: 3, label: "3 dispositivos", note: "Para família e vários ecrãs" },
];

const features = [
  { icon: <Check />, text: "Qualidade HD / Full HD / 4K quando disponível" },
  { icon: <TvMinimal />, text: "Canais e conteúdos organizados por categorias" },
  { icon: <MonitorSmartphone />, text: "Compatibilidade com vários dispositivos" },
  { icon: <BadgeCheck />, text: "Configuração orientada para o teu equipamento" },
  { icon: <MessageCircle />, text: "Suporte e pedido diretamente pelo WhatsApp" },
];

export function PricingTable({ compact = false }: { compact?: boolean }) {
  const plans = useMemo(() => getPricingPlans(), []);
  const [devices, setDevices] = useState<DeviceCount>(1);

  return (
    <div className={"reference-pricing " + (compact ? "reference-pricing-compact" : "")}>
      <div className="reference-device-tabs" role="tablist" aria-label="Número de dispositivos">
        {deviceOptions.map((option) => (
          <button
            key={option.value}
            type="button"
            role="tab"
            aria-selected={devices === option.value}
            className={devices === option.value ? "is-active" : ""}
            onClick={() => setDevices(option.value)}
          >
            <span className="reference-device-tab-icon">
              {option.value === 1 ? <TvMinimal size={18} /> : <MonitorSmartphone size={18} />}
            </span>
            <span><strong>{option.label}</strong><small>{option.note}</small></span>
          </button>
        ))}
      </div>

      <div className="reference-pricing-grid">
        {plans.map((plan) => {
          const price = plan.prices[devices];
          const monthly = price / Math.max(plan.months, 1);
          const message = buildPlanWhatsAppMessage(plan, devices);
          return (
            <article className={"reference-price-card " + (plan.badge === "Mais procurado" ? "is-featured" : "")} key={plan.duration}>
              <div className="reference-price-head">
                <span>{plan.badge || "Plano IPTV"}</span>
                <small>{devices} {devices === 1 ? "dispositivo" : "dispositivos"}</small>
              </div>

              <h3>{plan.duration}</h3>

              <div className="reference-price-band">
                <strong>{formatEuro(price).replace(" ", " ")}</strong>
                <span>{plan.months > 1 ? "≈ " + formatEuro(monthly) + " / mês" : "Preço total"}</span>
              </div>

              <div className="reference-price-content">
                <ul>
                  {features.map((feature) => (
                    <li key={feature.text}>
                      <span>{feature.icon}</span>
                      <span>{feature.text}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <Link
                className="reference-price-cta"
                href={buildWhatsAppUrl(message)}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>Escolher plano</span>
                <span><Plus size={17} strokeWidth={2.6} /></span>
              </Link>

              <p className="reference-price-note">Pedido preparado com a duração e o número de dispositivos selecionados.</p>
            </article>
          );
        })}
      </div>

      <div className="reference-pricing-foot">
        <div><BadgeCheck size={18} /><span>Confirma os detalhes pelo WhatsApp antes do pagamento.</span></div>
        <Link href="/suporte/">Precisas de ajuda?</Link>
      </div>
    </div>
  );
}
