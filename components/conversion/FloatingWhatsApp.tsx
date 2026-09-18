import Link from "next/link";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

export function FloatingWhatsApp() {
  return <Link className="floating-whatsapp" href={buildWhatsAppUrl("Olá! 👋 Vim do site IPTVBR e quero ajuda para escolher um plano.")} aria-label="Falar com IPTVBR no WhatsApp" target="_blank" rel="noopener noreferrer"><span className="floating-wa-icon">⌕</span><span className="floating-wa-copy"><strong>Fala connosco</strong><small>WhatsApp · Portugal</small></span></Link>;
}