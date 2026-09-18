import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Hero } from "@/components/hero/Hero";
import { Section } from "@/components/ui/Section";
import { WhatsAppButton } from "@/components/conversion/WhatsAppButton";
import { ReferencePricing } from "@/components/pricing/ReferencePricing";
import { ReviewShowcase } from "@/components/reviews/ReviewShowcase";
import { getChildRoutes, getRoute } from "@/config/routes";
import { buildMetadata } from "@/lib/seo/metadata";

const journey = [
  { step: "01", title: "Descobrir", text: "Começa pelo essencial: o que é IPTV, como funciona e que fatores deves validar.", href: "/guias/o-que-e-iptv/" },
  { step: "02", title: "Escolher", text: "Compara planos, dispositivos, aplicações e condições comerciais sem depender de slogans.", href: "/comparar/como-escolher-iptv-portugal/" },
  { step: "03", title: "Configurar", text: "Encontra o guia certo para o teu dispositivo e a aplicação que estás a utilizar.", href: "/guias/como-instalar-iptv/" },
  { step: "04", title: "Resolver", text: "Quando algo falhar, começa pelo diagnóstico certo antes de alterar várias configurações.", href: "/suporte/" },
];

const deviceRoutes = getChildRoutes("/dispositivos/").slice(0, 6);
const appRoutes = getChildRoutes("/apps/").slice(0, 4);
const guideRoutes = getChildRoutes("/guias/").slice(0, 4);

export function generateMetadata(): Metadata {
  const route = getRoute("/");
  return route ? buildMetadata(route) : {};
}

export default function HomePage() {
  return (
    <main id="main-content" className="home-page">
      <Hero />

      <div className="container home-launchbar" aria-label="Ações rápidas">
        <div><span className="launch-dot" /> Novo · experiência IPTVBR renovada para Portugal</div>
        <Link href="/precos/">Ver planos <span aria-hidden="true">→</span></Link>
        <WhatsAppButton message="Olá, quero conhecer os planos IPTVBR e saber como funciona em Portugal." />
      </div>

      <section className="trust-strip trust-strip-strong" aria-label="Princípios da IPTVBR">
        <div className="container trust-strip-inner">
          <span><b>pt-PT</b> conteúdo local</span>
          <span><b>Dispositivos</b> por contexto</span>
          <span><b>WhatsApp</b> contacto direto</span>
          <span><b>SEO</b> arquitetura organizada</span>
        </div>
      </section>

      <section className="section home-banner-section">
        <div className="container">
          <Link className="home-banner" href="/dispositivos/">
            <div className="home-banner-copy">
              <p className="eyebrow">Onde queres assistir?</p>
              <h2>Escolhe o dispositivo. Nós mostramos o caminho.</h2>
              <p>Fire TV, Smart TV, Samsung, LG, Android TV, Google TV e mais — com páginas específicas para instalação e suporte.</p>
              <span className="banner-link">Explorar dispositivos →</span>
            </div>
            <div className="home-banner-image">
              <Image src="/images/hero/iptvbr-living-room.webp" alt="Ambiente premium de streaming em casa" width={1536} height={1024} sizes="(max-width: 720px) 100vw, 50vw" />
            </div>
          </Link>
        </div>
      </section>

      <Section
        eyebrow="Uma jornada simples"
        title="Da descoberta ao suporte, sem páginas soltas."
        description="O site foi desenhado como uma rede de conteúdo: cada etapa aponta para a próxima decisão ou tarefa útil."
      >
        <div className="journey-grid journey-grid-premium">
          {journey.map((item) => (
            <Link className="journey-card" href={item.href} key={item.step}>
              <span className="journey-step">{item.step}</span>
              <div className="journey-icon" aria-hidden="true">{item.step === "01" ? "◈" : item.step === "02" ? "⌁" : item.step === "03" ? "△" : "✦"}</div>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
              <span className="card-link">Continuar →</span>
            </Link>
          ))}
        </div>
      </Section>

      <Section
        eyebrow="Planos IPTV"
        title="Uma área de preços que cresce com o negócio."
        description="A apresentação foi preparada para mostrar os planos de forma clara. Valores comerciais só devem ser tratados como oferta quando estiverem validados."
        className="section-surface pricing-home-section"
      >
        <ReferencePricing />
      </Section>

      <Section
        eyebrow="Onde queres assistir?"
        title="Começa pelo teu dispositivo."
        description="As páginas por dispositivo ligam compatibilidade, aplicações, instalação e resolução de problemas num só percurso."
      >
        <div className="device-grid device-grid-premium">
          {deviceRoutes.map((route, index) => (
            <Link className="device-card" href={route.slug} key={route.slug}>
              <span className="device-visual" aria-hidden="true"><span>{["TV", "▣", "S", "LG", "A", "G"][index] ?? "TV"}</span></span>
              <div>
                <span className="card-kicker">Dispositivo</span>
                <h3>{route.title.replace("IPTV no ", "").replace("IPTV na ", "")}</h3>
                <p>{route.description}</p>
              </div>
              <span className="device-arrow" aria-hidden="true">↗</span>
            </Link>
          ))}
        </div>
      </Section>

      <section className="split-feature split-feature-premium">
        <div className="container split-feature-grid">
          <div className="split-copy">
            <p className="eyebrow">Experiência de marca</p>
            <h2>Uma página inicial com mais ritmo, mais imagem e caminhos mais claros.</h2>
            <p className="section-lead">Hero visual, banners, planos, dispositivos, guias e contacto direto foram organizados para criar uma experiência de streaming moderna sem perder a arquitetura SEO.</p>
            <div className="feature-pills">
              <Link href="/apps/">Explorar aplicações</Link>
              <Link href="/guias/">Ver todos os guias</Link>
              <Link href="/suporte/">Abrir suporte</Link>
            </div>
          </div>
          <div className="signal-panel signal-panel-premium" aria-label="Fluxo de configuração IPTV">
            <div className="signal-head"><span>FLUXO IPTVBR</span><b>01—04</b></div>
            <div className="signal-track" />
            <div className="signal-node active"><span>1</span><strong>Dispositivo</strong><small>Onde vais assistir</small></div>
            <div className="signal-node"><span>2</span><strong>Aplicação</strong><small>Escolher o player</small></div>
            <div className="signal-node"><span>3</span><strong>Configuração</strong><small>Instalar e testar</small></div>
            <div className="signal-node"><span>4</span><strong>Suporte</strong><small>Diagnosticar e resolver</small></div>
          </div>
        </div>
      </section>

      <Section
        eyebrow="Aplicações"
        title="Encontra a app certa para o teu fluxo."
        description="Cada página de aplicação deve explicar o contexto de utilização e encaminhar para instalação e troubleshooting."
        className="section-surface"
      >
        <div className="compact-grid compact-grid-premium">
          {appRoutes.map((route) => (
            <Link className="compact-card" href={route.slug} key={route.slug}>
              <span className="app-logo-placeholder" aria-hidden="true">▶</span>
              <span className="card-kicker">Aplicação</span>
              <h3>{route.title}</h3>
              <p>{route.description}</p>
              <span className="card-link">Abrir guia →</span>
            </Link>
          ))}
        </div>
      </Section>

      <Section
        eyebrow="Guias"
        title="Respostas antes de precisares de suporte."
        description="Conteúdo prático para entender conceitos, instalar aplicações e diagnosticar reprodução."
      >
        <div className="guide-grid guide-grid-premium">
          {guideRoutes.map((route, index) => (
            <Link className="guide-card" href={route.slug} key={route.slug}>
              <span className="guide-number">0{index + 1}</span>
              <div><span className="card-kicker">Guia prático</span><h3>{route.title}</h3><p>{route.description}</p></div>
              <span className="guide-arrow">↗</span>
            </Link>
          ))}
        </div>
      </Section>

      <section className="section section-surface review-section">
        <div className="container">
          <ReviewShowcase />
        </div>
      </section>

      <Section eyebrow="Transparência" title="Informação comercial sem promessas inventadas.">
        <div className="transparency-grid">
          <article className="transparency-card"><span className="transparency-mark">01</span><h3>Dados verificados</h3><p>Preços, teste, compatibilidade, limites de dispositivos e condições comerciais só entram como factos quando estiverem confirmados.</p></article>
          <article className="transparency-card"><span className="transparency-mark">02</span><h3>Benchmark não é oferta</h3><p>Referências de mercado ajudam a orientar a estratégia, mas não são apresentadas ao visitante como uma oferta IPTVBR.</p></article>
          <article className="transparency-card"><span className="transparency-mark">03</span><h3>Direitos de conteúdo</h3><p>A tecnologia IPTV é tratada separadamente das autorizações necessárias para distribuir conteúdos protegidos.</p></article>
        </div>
      </Section>

      <section className="section section-cta">
        <div className="container cta-panel cta-panel-hero cta-panel-premium">
          <div><p className="eyebrow">Fala connosco</p><h2>Queres confirmar preço, compatibilidade ou configuração?</h2><p className="muted">O caminho comercial atual começa pelo WhatsApp, onde as condições podem ser confirmadas antes do pagamento.</p></div>
          <div className="hero-actions"><WhatsAppButton message="Olá, gostaria de confirmar os planos, preços e compatibilidade do IPTVBR." /><Link className="button button-secondary" href="/suporte/">Visitar suporte</Link></div>
        </div>
      </section>

    </main>
  );
}