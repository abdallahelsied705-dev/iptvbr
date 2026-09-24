import { navigation } from "@/config/navigation";
import { MobileMenu } from "@/components/navigation/MobileMenu";
import { WhatsAppButton } from "@/components/conversion/WhatsAppButton";
import { Logo } from "@/components/brand/Logo";
import Link from "next/link";

export function SiteHeader() {
  return (
    <header className="site-header site-header-premium">
      <a className="skip-link" href="#main-content">Saltar para o conteúdo</a>
      <div className="container header-inner">
        <Logo compact />
        <nav aria-label="Navegação principal" className="desktop-navigation">
          <ul className="nav-list">
            <li><Link href="/iptv-portugal/">IPTV Portugal</Link></li>
            <li><Link href="/precos/">Preços</Link></li>
            {navigation.filter(item => ["/dispositivos/","/apps/"].includes(item.href)).map((item) => (
              <li key={item.href} className={`nav-has-children ${item.href === "/dispositivos/" ? "nav-devices" : ""}`}><Link href={item.href}>{item.label}<span className="nav-caret">⌄</span></Link><div className="nav-dropdown">{item.children?.map((child) => <Link href={child.href} key={child.href}>{child.label}</Link>)}</div></li>
            ))}
            <li><Link href="/guias/">Guias</Link></li>
            <li><Link href="/blog/">Blog</Link></li>
            <li><Link href="/suporte/">Suporte</Link></li>
          </ul>
        </nav>
        <div className="desktop-header-cta"><WhatsAppButton /></div>
        <MobileMenu />
      </div>
    </header>
  );
}
