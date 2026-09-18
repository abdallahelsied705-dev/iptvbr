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
      <span className="whatsapp-button-icon" aria-hidden="true">
        <svg viewBox="0 0 24 24" width="18" height="18" fill="none"><path d="M20.5 3.5A9.87 9.87 0 0 0 13.47.51 9.95 9.95 0 0 0 4.91 15.9L3.5 21l5.23-1.37a9.94 9.94 0 0 0 4.74 1.2h.01c5.49 0 9.95-4.46 9.95-9.95a9.88 9.88 0 0 0-2.93-7.38Zm-7.02 15.63h-.01a8.23 8.23 0 0 1-4.19-1.15l-.3-.18-3.1.81.83-3.02-.2-.31a8.25 8.25 0 1 1 6.97 3.85Zm4.53-6.19c-.25-.12-1.48-.73-1.71-.81-.23-.08-.4-.12-.56.12-.17.25-.65.81-.8.98-.15.17-.29.19-.54.06-.25-.12-1.04-.38-1.98-1.22-.73-.65-1.22-1.45-1.36-1.69-.14-.25-.01-.38.11-.5.11-.11.25-.29.37-.44.12-.15.16-.25.24-.42.08-.17.04-.31-.02-.44-.06-.12-.56-1.35-.77-1.85-.2-.48-.41-.42-.56-.43-.14-.01-.31-.01-.48-.01-.17 0-.44.06-.67.31-.23.25-.88.86-.88 2.1s.9 2.43 1.02 2.6c.12.17 1.77 2.7 4.3 3.79.6.26 1.07.42 1.44.54.61.19 1.16.16 1.59.1.49-.07 1.48-.61 1.69-1.2.21-.59.21-1.1.15-1.2-.06-.1-.23-.15-.48-.27Z" fill="currentColor"/></svg>
      </span>
      <span>Falar no WhatsApp</span>
    </Link>
  );
}