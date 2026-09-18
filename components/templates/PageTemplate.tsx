import Image from "next/image";
import Link from "next/link";
import { BadgeCheck, BookOpen, CheckCircle2, ChevronRight, MessageCircle, MonitorSmartphone, ShieldCheck, TvMinimal } from "lucide-react";
import { getChildRoutes, getRoute, type RouteDefinition } from "@/config/routes";
import { getContentRecord } from "@/config/content";
import { WhatsAppButton } from "@/components/conversion/WhatsAppButton";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { articleSchema, breadcrumbSchema, webPageSchema } from "@/lib/schema";
import { getRecommendedLinks } from "@/lib/links";
import { FAQ } from "@/components/faq/FAQ";
import { HubGrid } from "@/components/content/HubGrid";
import { PricingTable } from "@/components/pricing/PricingTable";
import { ContentFramework } from "@/components/content/ContentFramework";

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
    default: return { label: "Ver preços", href: "/precos/" };
  }
}

const quickBenefits = [
  { icon: <TvMinimal />, title: "Vários dispositivos", text: "TV, Smart TV, streaming e mobile" },
  { icon: <BookOpen />, title: "Guias pt-PT", text: "Passos claros de instalação" },
  { icon: <ShieldCheck />, title: "Informação clara", text: "Condições apresentadas sem ruído" },
  { icon: <MessageCircle />, title: "Suporte direto", text: "Contacto simples pelo WhatsApp" },
];

export function PageTemplate({ route }: { route: RouteDefinition }) {
  const content = getContentRecord(route);
  const children = getChildRoutes(route.slug);
  const recommendedLinks = getRecommendedLinks(route, 6);
  const parent = route.parent && route.parent !== "/" ? getRoute(route.parent) : undefined;
  const primary = primaryDestination(route);
  const isArticle = route.type === "blog" && route.slug !== "/blog/";
  const isPricingPage = route.slug === "/precos/";
  const isCommercialPricingPage = ["/iptv-portugal/", "/subscricao-iptv/", "/comprar-iptv/"].includes(route.slug);
  const schemas = isArticle
    ? [articleSchema(route), breadcrumbSchema(route, parent)]
    : [webPageSchema(route), breadcrumbSchema(route, parent)];
  const related = (children.length
    ? children
    : recommendedLinks.map((item) => getRoute(item.href)).filter((item): item is RouteDefinition => Boolean(item))
  ).slice(0, 6);

  return (
    <main id="main-content" className="inner-page">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas) }} />

      <section className="ref-inner-hero">
        <div className="container ref-inner-hero-grid">
          <div className="ref-inner-hero-copy">
            <nav className="breadcrumbs" aria-label="Breadcrumb">
              <Link href="/">Início</Link>
              {parent ? <><span aria-hidden="true">/</span><Link href={parent.slug}>{parent.title}</Link></> : null}
              <span aria-hidden="true">/</span>
              <span aria-current="page">{route.title}</span>
            </nav>

            <span className="ref-page-chip">{typeLabel(route)}</span>
            <h1>{route.title}</h1>
            <p className="ref-inner-lead">{content.intro}</p>

            <div className="ref-inner-actions">
              <Button href={primary.href} variant="primary">{primary.label}</Button>
              <WhatsAppButton message={content.ctaMessage} />
            </div>
          </div>

          <div className="ref-inner-visual" aria-hidden="true">
            <div className="ref-inner-visual-glow" />
            <Image
              src="/images/hero/iptvbr-premium-room.svg"
              alt=""
              width={620}
              height={420}
              priority
              className="ref-inner-visual-image"
            />
            <div className="ref-inner-visual-badge"><CheckCircle2 size={15} /> IPTVBR · Portugal</div>
          </div>
        </div>
      </section>

      <section className="ref-inner-benefits" aria-label="Principais benefícios">
        <div className="container ref-inner-benefits-grid">
          {quickBenefits.map((item) => (
            <div className="ref-inner-benefit-card" key={item.title}>
              <span>{item.icon}</span>
              <div><strong>{item.title}</strong><small>{item.text}</small></div>
            </div>
          ))}
        </div>
      </section>

      {isPricingPage ? (
        <section className="ref-pricing-page">
          <div className="container">
            <div className="ref-pricing-heading">
              <span className="ref-label">IPTVBR · PLANOS</span>
              <h2>Preços IPTV em Portugal</h2>
              <p>Escolhe o período e o número de dispositivos. Os preços abaixo utilizam a configuração comercial atual do site.</p>
            </div>
            <PricingTable />
          </div>
        </section>
      ) : null}

      {isCommercialPricingPage ? (
        <section className="ref-pricing-page">
          <div className="container">
            <div className="ref-pricing-heading">
              <span className="ref-label">PLANOS IPTVBR</span>
              <h2>Escolhe a configuração certa para ti.</h2>
              <p>Compara os períodos disponíveis e abre o WhatsApp com o plano escolhido já identificado.</p>
            </div>
            <PricingTable compact />
          </div>
        </section>
      ) : null}

      {!isPricingPage && !isCommercialPricingPage ? (
        <>
          <section className="ref-content-intro">
            <div className="container ref-content-intro-grid">
              <div>
                <span className="ref-label">GUIA IPTV</span>
                <h2>Informação organizada para encontrares rapidamente o que precisas.</h2>
              </div>
              <p>{content.sections[0]?.paragraphs[0] || content.intro}</p>
            </div>
          </section>
          <ContentFramework takeaways={content.takeaways} steps={content.steps} entities={content.entities} />
        </>
      ) : null}

      {isPricingPage ? (
        <section className="ref-light-section">
          <div className="container ref-three-grid">
            <article><BadgeCheck /><h3>Preços apresentados com clareza</h3><p>Consulta a duração, dispositivos e preço antes de avançar.</p></article>
            <article><MonitorSmartphone /><h3>Vários dispositivos</h3><p>Seleciona a configuração que corresponde à forma como utilizas o serviço.</p></article>
            <article><MessageCircle /><h3>Pedido orientado</h3><p>O WhatsApp abre com uma mensagem preparada para acelerar o próximo passo.</p></article>
          </div>
        </section>
      ) : null}

      {children.length > 0 ? (
        <Section
          eyebrow={route.type === "blog" ? "Explorar" : "Percurso"}
          title={route.type === "blog" ? "Conteúdo organizado por tema." : "Escolhe a próxima etapa."}
          description={route.type === "blog" ? "Artigos editoriais ligados a dispositivos, aplicações, tecnologia e suporte." : "Páginas relacionadas para continuares a navegar dentro do mesmo tema."}
          className="section-surface ref-related-section"
        >
          <HubGrid routes={children.slice(0, 8)} />
        </Section>
      ) : null}

      <div className="container ref-reading-layout">
        <article>
          {content.sections.map((section, index) => (
            <section className="ref-prose-section" key={section.heading + "-" + index}>
              <span className="ref-section-number">0{index + 1}</span>
              <h2>{section.heading}</h2>
              {section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
              {section.links?.length ? (
                <div className="ref-link-grid">
                  {section.links.map((link) => (
                    <Link className="ref-link-card" key={link.href} href={link.href}>
                      <span>{link.label}</span><ChevronRight size={16} />
                    </Link>
                  ))}
                </div>
              ) : null}
            </section>
          ))}
        </article>

        <aside className="ref-reading-aside">
          <div className="ref-aside-card">
            <span className="ref-label">A SEGUIR</span>
            <h2>Continua pelo caminho certo.</h2>
            <div>
              {related.slice(0, 4).map((item) => (
                <Link href={item.slug} key={item.slug}>
                  <small>{typeLabel(item)}</small>
                  <strong>{item.title}</strong>
                  <ChevronRight size={15} />
                </Link>
              ))}
            </div>
          </div>
        </aside>
      </div>

      <Section eyebrow="Perguntas frequentes" title="Respostas curtas para as tuas dúvidas." description="FAQ organizado para apoiar a leitura e facilitar o próximo passo." className="section-surface ref-faq-section">
        <FAQ items={content.faq} />
      </Section>

      {related.length ? (
        <Section
          eyebrow="Conteúdo relacionado"
          title="Continua a explorar IPTVBR."
          description="Guias, dispositivos, aplicações e páginas de apoio ligados ao mesmo cluster."
        >
          <HubGrid routes={related} />
        </Section>
      ) : null}

      <section className="ref-final-cta">
        <div className="container ref-final-cta-inner">
          <div>
            <span className="ref-label">PRÓXIMO PASSO</span>
            <h2>Precisas de ajuda para escolher?</h2>
            <p>Fala diretamente connosco e recebe orientação sobre a próxima etapa.</p>
          </div>
          <div className="ref-final-actions">
            <WhatsAppButton message={content.ctaMessage} />
            <Button href="/precos/" variant="primary">Ver preços</Button>
          </div>
        </div>
      </section>
    </main>
  );
}
