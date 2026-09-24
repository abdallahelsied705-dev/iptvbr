import { businessTruth } from "@/config/business";
import { siteConfig } from "@/config/site";

// Nome do site em todas as mensagens, para saber de que site vem cada pedido.
const siteName = siteConfig.url.replace(/^https?:\/\/(www\.)?/, "");

export const trialWhatsAppMessage = "Olá! 👋 Gostaria de pedir o teste grátis de 24 horas da IPTVBR.\n\n📺 Dispositivo: ";

export function buildWhatsAppUrl(message: string) {
  return `https://wa.me/${businessTruth.whatsapp}?text=${encodeURIComponent(`🌐 Site: ${siteName}\n\n${message}`)}`;
}
