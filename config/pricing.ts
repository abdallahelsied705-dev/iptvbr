import { businessTruth, getActivePricing } from "@/config/business";

export type DeviceCount = 1 | 2 | 3;

export type PricingPlan = {
  duration: string;
  months: number;
  basePrice: number;
  prices: Record<DeviceCount, number>;
  monthlyOneDevice: number;
  badge?: string;
};

const devicePrices: Record<DeviceCount, Record<number, number>> = {
  1: { 1: 15, 3: 29, 6: 49, 12: 69 },
  2: { 1: 25, 3: 49, 6: 79, 12: 109 },
  3: { 1: 34, 3: 66, 6: 99, 12: 139 },
};

const fallbackDurations = [
  { duration: "1 Mês", months: 1 },
  { duration: "3 Meses", months: 3 },
  { duration: "6 Meses", months: 6 },
  { duration: "12 Meses", months: 12 },
];

function priceFor(months: number, devices: DeviceCount) {
  return devicePrices[devices][months] ?? 0;
}

export function getPricingPlans(): PricingPlan[] {
  const active = getActivePricing();
  const source = active?.length ? active : fallbackDurations.map(({ duration, months }) => ({ duration, price: priceFor(months, 1), currency: "EUR" as const }));

  return source.map((plan, index) => {
    const months = Number(plan.duration.match(/\d+/)?.[0] ?? fallbackDurations[index]?.months ?? 1);
    const basePrice = plan.price;
    return {
      duration: plan.duration,
      months,
      basePrice,
      prices: {
        1: basePrice,
        2: priceFor(months, 2),
        3: priceFor(months, 3),
      },
      monthlyOneDevice: basePrice / Math.max(months, 1),
      badge: months === 6 ? "Mais procurado" : months === 12 ? "Melhor valor" : undefined,
    };
  });
}

export function formatEuro(value: number) {
  return new Intl.NumberFormat("pt-PT", { style: "currency", currency: "EUR", maximumFractionDigits: 2 }).format(value);
}

export function buildPlanWhatsAppMessage(plan: PricingPlan, devices: DeviceCount) {
  const price = plan.prices[devices];
  return `Olá, quero subscrever o plano ${plan.duration} para ${devices} ${devices === 1 ? "dispositivo" : "dispositivos"} por ${formatEuro(price)}. Gostaria de receber as instruções para pagamento.`;
}

export function getPricingBenchmarkNote() {
  const verified = businessTruth.pricing.verification === "verified" && Boolean(getActivePricing()?.length);
  return verified
    ? "Preços apresentados para a configuração escolhida. A confirmação final é feita pelo WhatsApp antes do pagamento."
    : "Estrutura de preços preparada a partir de referências de mercado e do posicionamento definido para a IPTVBR."
}