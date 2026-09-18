import Link from "next/link";
import { businessTruth, getActivePricing } from "@/config/business";
import { WhatsAppButton } from "@/components/conversion/WhatsAppButton";

export function ReferencePricing() {
  const plans = getActivePricing();
  const displayPlans = plans ?? businessTruth.pricing.benchmark;

  return (
    <div className="pricing-showcase">
      <div className="pricing-grid pricing-grid-home">
        {displayPlans.map((plan, index) => (
          <article className={`pricing-card pricing-card-home ${index === 2 ? "pricing-card-featured" : ""}`} key={`${plan.duration}-${plan.price}`}>
            {index === 2 ? <span className="pricing-popular">Mais procurado</span> : null}
            <div className="pricing-card-head">
              <span className="pricing-duration">{plan.duration}</span>
              <span className="pricing-mini">{plans ? "Confirmado" : "Referência"}</span>
            </div>
            <strong>€{plan.price.toFixed(2).replace(".", ",")}</strong>
            <span className="pricing-per">por período</span>
            <ul>
              <li>Fluxo simples de compra</li>
              <li>Compatibilidade por dispositivo</li>
              <li>Atendimento em WhatsApp</li>
            </ul>
            <Link className="button button-secondary pricing-cta" href="/comprar-iptv/">Ver condições</Link>
          </article>
        ))}
      </div>
      {plans ? (
        <p className="pricing-disclaimer pricing-confirmed">Os valores apresentados foram validados no Business Truth.</p>
      ) : (
        <div className="pricing-disclaimer">
          <strong>Nota importante:</strong> estes valores são benchmarks de referência e ainda não representam uma oferta IPTVBR confirmada. Confirma o preço atual pelo WhatsApp antes do pagamento.
        </div>
      )}
      <div className="pricing-actions">
        <WhatsAppButton message="Olá, gostaria de confirmar os preços e condições dos planos IPTVBR." />
        <Link className="button button-ghost" href="/precos/">Comparar todos os detalhes</Link>
      </div>
    </div>
  );
}