import Link from "next/link";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

export function WhatsAppButton({ message = "Olá, gostaria de obter informações sobre a IPTVBR." }: { message?: string }) {
  return (
    <Link
      className="button button-whatsapp"
      href={buildWhatsAppUrl(message)}
      aria-label="Contactar o IPTVBR pelo WhatsApp"
      target="_blank"
      rel="noopener noreferrer"
    >
      <span className="whatsapp-icon" aria-hidden="true">◔</span>
      Falar no WhatsApp
    </Link>
  );
}