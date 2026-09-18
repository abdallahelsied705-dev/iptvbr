import Link from "next/link";
import { Logo } from "@/components/brand/Logo";
import { WhatsAppButton } from "@/components/conversion/WhatsAppButton";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div className="footer-brand-block"><Logo /><p className="muted">Informação IPTV em português de Portugal, organizada por intenção, dispositivo e etapa da jornada.</p><WhatsAppButton message="Olá, gostaria de falar com a IPTVBR em Portugal." /></div>
        <div><h2>Explorar</h2><Link href="/iptv-portugal/">IPTV Portugal</Link><Link href="/precos/">Preços</Link><Link href="/dispositivos/">Dispositivos</Link><Link href="/apps/">Aplicações</Link></div>
        <div><h2>Aprender</h2><Link href="/guias/">Guias</Link><Link href="/comparar/">Comparações</Link><Link href="/suporte/">Suporte</Link><Link href="/legalidade/">Legalidade</Link></div>
        <div><h2>Informação</h2><Link href="/sobre-nos/">Sobre nós</Link><Link href="/contacto/">Contacto</Link><Link href="/termos/">Termos</Link><Link href="/politica-privacidade/">Privacidade</Link></div>
      </div>
      <div className="container footer-bottom"><span>© {new Date().getFullYear()} IPTVBR</span><span>Dados comerciais sujeitos a verificação antes de serem apresentados como factos.</span></div>
    </footer>
  );
}