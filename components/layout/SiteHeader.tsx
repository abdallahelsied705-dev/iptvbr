import Link from "next/link";
import { navigation } from "@/config/navigation";
import { MobileMenu } from "@/components/navigation/MobileMenu";
import { WhatsAppButton } from "@/components/conversion/WhatsAppButton";

function Logo() {
  return <span className="brand-logo"><span className="brand-logo-mark">▶</span><span className="brand-logo-word">IPTV<span>BR</span></span><small>PORTUGAL</small></span>;
}

export function SiteHeader() {
  return (
    <header className="site-header site-header-premium">
      <a className="skip-link" href="#main-content">Saltar para o conteúdo</a>
      <div className="container header-inner">
        <Link className="brand" href="/" aria-label="IPTVBR — Início"><Logo /></Link>
        <nav aria-label="Navegação principal" className="desktop-navigation">
          <ul className="nav-list">
            <li><Link href="/iptv-portugal/">IPTV Portugal</Link></li>
            <li><Link href="/precos/">Preços</Link></li>
            {navigation.filter(item => ["/dispositivos/","/apps/"].includes(item.href)).map((item) => (
              <li key={item.href} className="nav-has-children"><Link href={item.href}>{item.label}<span className="nav-caret">⌄</span></Link><div className="nav-dropdown">{item.children?.map((child) => <Link href={child.href} key={child.href}>{child.label}</Link>)}</div></li>
            ))}
            <li><Link href="/guias/">Guias</Link></li>
            <li><Link href="/blog/">Blog</Link></li>
            <li><Link href="/suporte/">Suporte</Link></li>
          </ul>
        </nav>
        <div className="desktop-header-cta"><WhatsAppButton message="Olá! Quero falar com a IPTVBR sobre um plano em Portugal." /></div>
        <MobileMenu />
      </div>
    </header>
  );
}