import Link from "next/link";
import { navigation } from "@/config/navigation";
import { MobileMenu } from "@/components/navigation/MobileMenu";
import { Logo } from "@/components/brand/Logo";
import { WhatsAppButton } from "@/components/conversion/WhatsAppButton";

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="top-announcement"><div className="container top-announcement-inner"><span><i /> IPTVBR Portugal · conteúdo em pt-PT</span><Link href="/precos/">Ver planos →</Link></div></div>
      <a className="skip-link" href="#main-content">Saltar para o conteúdo</a>
      <div className="container header-inner">
        <Logo />
        <nav aria-label="Navegação principal" className="desktop-navigation">
          <ul className="nav-list">
            {navigation.map((item) => (
              <li key={item.href} className={item.children ? "nav-has-children" : undefined}>
                <Link href={item.href}>{item.label}{item.children ? <span className="nav-caret" aria-hidden="true">⌄</span> : null}</Link>
                {item.children ? <div className="nav-dropdown">{item.children.map((child) => <Link href={child.href} key={child.href}>{child.label}</Link>)}</div> : null}
              </li>
            ))}
          </ul>
        </nav>
        <div className="desktop-header-cta"><WhatsAppButton message="Olá, quero falar sobre os planos IPTVBR em Portugal." /></div>
        <MobileMenu />
      </div>
    </header>
  );
}