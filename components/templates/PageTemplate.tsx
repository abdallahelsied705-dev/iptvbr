import Link from "next/link";
import Image from "next/image";
import { getChildRoutes, getRoute, type RouteDefinition } from "@/config/routes";
import { getContentRecord } from "@/config/content";
import { WhatsAppButton } from "@/components/conversion/WhatsAppButton";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { articleSchema, breadcrumbSchema, faqSchema, webPageSchema } from "@/lib/schema";
import { getRecommendedLinks } from "@/lib/links";
import { FAQ } from "@/components/faq/FAQ";
import { BusinessStatus } from "@/components/content/BusinessStatus";
import { VerifiedBusinessFacts } from "@/components/content/VerifiedBusinessFacts";
import { HubGrid } from "@/components/content/HubGrid";
import { PricingPreview } from "@/components/pricing/PricingPreview";
import { ContentFramework } from "@/components/content/ContentFramework";
import { ContentBriefMeta } from "@/components/content/ContentBriefMeta";
import { ReleaseStatus } from "@/components/content/ReleaseStatus";
import { getContentBrief } from "@/config/content-briefs";
import { getImageAlt } from "@/config/image-seo";
import { DeviceLogo, deviceBrandForSlug } from "@/components/brand/DeviceLogo";

function typeLabel(route: RouteDefinition) {
  switch (route.type) {
    case "money": return "Área comercial";
    case "device": return "Dispositivo";
    case "app": return "Aplicação";
    case "guide": return "Guia IPTV";
    case "support": return "Suporte";
    case "comparison": return "Comparação";
    case "legal": return "Informação";
    default: return "IPTV Portugal";
  }
}

function primaryDestination(route: RouteDefinition) {
  switch (route.type) {
    case "support": return { label: "Explorar suporte", href: "/suporte/" };
    case "guide": return { label: "Ver guias", href: "/guias/" };
    case "device": return { label: "Ver dispositivos", href: "/dispositivos/" };
    case "app": return { label: "Ver aplicações", href: "/apps/" };
    case "comparison": return { label: "Comparar opções", href: "/comparar/" };
    case "legal": return route.slug === "/contacto/"
      ? { label: "Explorar legalidade", href: "/legalidade/" }
      : { label: "Contactar", href: "/contacto/" };
    case "blog": return { label: "Explorar o blog", href: "/blog/" };
    default: return { label: "Ver opções", href: "/precos/" };
  }
}

export function PageTemplate({ route }: { route: RouteDefinition }) {
  const content = getContentRecord(route);
  const brief = getContentBrief(route);
  const children = getChildRoutes(route.slug);
  const recommendedLinks = getRecommendedLinks(route, 6);
  const parent = route.parent && route.parent !== "/" ? getRoute(route.parent) : undefined;
  const primary = primaryDestination(route);
  const isArticle = route.type === "blog" && route.slug !== "/blog/";
  const deviceBrand = route.type === "device" && route.slug !== "/dispositivos/" ? deviceBrandForSlug(route.slug) : null;
  const schemas = isArticle
    ? [articleSchema(route), breadcrumbSchema(route, parent), faqSchema(content.faq)]
    : [webPageSchema(route), breadcrumbSchema(route, parent), faqSchema(content.faq)];
  const related = (children.length ? children : recommendedLinks.map((item) => getRoute(item.href)).filter((item): item is RouteDefinition => Boolean(item))).slice(0, 6);

  return (
    <main id="main-content" className={isArticle ? "article-page" : route.slug === "/blog/" ? "blog-index-page" : undefined}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas) }} />

      <section className="page-hero">
        <div className="container narrow">
          <nav className="breadcrumbs" aria-label="Breadcrumb">
            <Link href="/">Início</Link>
            {parent ? <><span aria-hidden="true">/</span><Link href={parent.slug}>{parent.title}</Link></> : null}
            <span aria-hidden="true">/</span>
            <span aria-current="page">{route.title}</span>
          </nav>
          <div className="page-hero-chip">{typeLabel(route)}</div>
          <h1>{route.title}</h1>
          <p className="hero-lead">{content.intro}</p>
          <ContentBriefMeta min={brief.targetWords[0]} max={brief.targetWords[1]} />
          {route.type === "money" ? <BusinessStatus /> : null}
          {route.type === "money" ? <VerifiedBusinessFacts /> : null}
          {route.type === "money" ? <ReleaseStatus /> : null}
          <div className="hero-actions">
            <Button href={primary.href} variant="primary">{primary.label}</Button>
            <WhatsAppButton message={content.ctaMessage} />
          </div>
        </div>
      </section>

      {isArticle && route.image ? (
        <div className="container article-cover-wrap">
          <Image className="article-cover" src={route.image} alt={getImageAlt(route)} width={1200} height={675} sizes="(max-width: 900px) 100vw, 1180px" priority />
        </div>
      ) : null}

      <ContentFramework takeaways={content.takeaways} steps={content.steps} entities={content.entities} />

      {deviceBrand ? (
        <div className="container device-page-identity">
          <div className="device-page-logo"><DeviceLogo brand={deviceBrand} size={76} /></div>
          <div><span>GUIA POR DISPOSITIVO</span><strong>Configuração pensada para este ecossistema.</strong><p>Aplicação, comando, rede e diagnóstico explicados no contexto do equipamento.</p></div>
          <Link href="/dispositivos/">Comparar dispositivos →</Link>
        </div>
      ) : null}

      {children.length > 0 ? (
        <Section
          eyebrow={route.type === "blog" ? "Explorar" : "Percurso"}
          title={route.type === "blog" ? "Conteúdo organizado por tema." : "Escolhe a próxima etapa."}
          description={route.type === "blog" ? "Artigos editoriais ligados a dispositivos, aplicações, tecnologia e suporte." : "Os conteúdos abaixo pertencem diretamente a esta área da arquitetura e mantêm o percurso simples."}
          className="section-surface"
        >
          <HubGrid routes={route.type === "blog" ? children : children.slice(0, 8)} />
        </Section>
      ) : null}

      <div className="container content-layout">
        <article>
          {content.sections.map((section, index) => (
            <section className="prose-section" key={`${section.heading}-${index}`}>
              <p className="section-index">0{index + 1}</p>
              <h2>{section.heading}</h2>
              {section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
              {section.links?.length ? (
                <div className="link-grid">
                  {section.links.map((link) => <Link className="pill-link" key={link.href} href={link.href}>{link.label} <span aria-hidden="true">→</span></Link>)}
                </div>
              ) : null}
            </section>
          ))}
        </article>

        <aside className="page-aside">
          <div className="aside-card">
            <span className="card-kicker">A seguir</span>
            <h2>Continua pelo caminho certo.</h2>
            <div className="aside-links">
              {related.slice(0, 4).map((item) => (
                <Link href={item.slug} key={item.slug}>
                  <span>{typeLabel(item)}</span>
                  <strong>{item.title}</strong>
                  <i aria-hidden="true">↗</i>
                </Link>
              ))}
            </div>
          </div>
        </aside>
      </div>

      {route.slug === "/precos/" ? (
        <Section eyebrow="Referência de mercado" title="Uma estrutura pronta para receber os preços reais." description="Os valores abaixo ficam isolados como benchmark até serem confirmados como oferta IPTVBR." className="section-surface">
          <PricingPreview />
        </Section>
      ) : null}

      <Section eyebrow="Perguntas frequentes" title="Respostas curtas para esta etapa." description="FAQ para apoiar a leitura e reduzir fricção durante a jornada." className="section-surface">
        <FAQ items={content.faq} />
      </Section>

      {related.length ? (
        <Section eyebrow={route.type === "blog" ? "Em destaque" : "Rede interna"} title={route.type === "blog" ? "Conteúdo para continuar a explorar." : "Conteúdos relacionados"} description={route.type === "blog" ? "Artigos, guias e páginas de apoio são ligados por tema e etapa da jornada." : "A arquitetura liga páginas do mesmo cluster e passos naturais da jornada."}>
          <HubGrid routes={related} />
        </Section>
      ) : null}

      <section className="section section-cta">
        <div className="container cta-panel">
          <div>
            <p className="eyebrow">Próximo passo</p>
            <h2>Precisas de ajuda para decidir o próximo passo?</h2>
            <p className="muted">O fluxo atual direciona o utilizador para o WhatsApp, onde as condições comerciais podem ser confirmadas antes do pagamento.</p>
          </div>
          <div className="hero-actions">
            <WhatsAppButton message={content.ctaMessage} />
            <Button href="/suporte/" variant="secondary">Ir para o suporte</Button>
          </div>
        </div>
      </section>
    </main>
  );
}
