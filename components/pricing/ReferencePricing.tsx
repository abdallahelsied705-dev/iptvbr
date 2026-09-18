import Link from "next/link";
import { PricingTable } from "@/components/pricing/PricingTable";
import { formatEuro, getPricingPlans } from "@/config/pricing";

export function ReferencePricing() {
  const plans = getPricingPlans();
  const firstPlan = plans[0];
  return (
    <div className="pricing-showcase">
      <div className="pricing-market-strip">
        <div>
          <span className="card-kicker">Preço de entrada</span>
          <strong>{firstPlan ? formatEuro(firstPlan.basePrice) : "€15,00"}</strong>
          <span>para 1 dispositivo / {firstPlan?.duration.toLowerCase() ?? "1 mês"}</span>
        </div>
        <div>
          <span className="card-kicker">Como comprar</span>
          <strong>WhatsApp</strong>
          <span>mensagem automática com plano + dispositivos</span>
        </div>
        <div>
          <span className="card-kicker">Planos</span>
          <strong>{plans.length}</strong>
          <span>durações disponíveis</span>
        </div>
      </div>
      <PricingTable compact />
      <div className="pricing-home-bottom">
        <Link className="button button-ghost" href="/precos/">Ver a página completa de preços →</Link>
      </div>
    </div>
  );
}