import { businessTruth } from "@/config/business";

export function buildWhatsAppUrl(message: string) {
  return `https://wa.me/${businessTruth.whatsapp}?text=${encodeURIComponent(message)}`;
}
