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
import { VerifiedBusinessFacts } from "@/components/content/VerifiedBusinessFacts";
import { HubGrid } from "@/components/content/HubGrid";
import { PricingPreview } from "@/components/pricing/PricingPreview";
import { ContentFramework } from "@/components/content/ContentFramework";
import { getImageAlt } from "@/config/image-seo";
import { getExternalResources } from "@/config/external-resources";
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

function sectionId(heading: string, index: number) {
  const value = heading.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
  return value || `secao-${index + 1}`;
}

function summarySentence(value: string) {
  const sentence = value.match(/^.*?[.!?](?:\s|$)/)?.[0]?.trim() ?? value;
  return sentence.length > 180 ? `${sentence.slice(0, 177).trim()}…` : sentence;
}

export function PageTemplate({ route }: { route: RouteDefinition }) {
  const content = getContentRecord(route);
  const children = getChildRoutes(route.slug);
  const recommendedLinks = getRecommendedLinks(route, 6);
  const parent = route.parent && route.parent !== "/" ? getRoute(route.parent) : undefined;
  const primary = primaryDestination(route);
  const isArticle = route.type === "blog" && route.slug !== "/blog/";
  const articleWords = [content.intro, ...content.sections.flatMap((section) => [section.heading, ...section.paragraphs])].join(" ").trim().split(/\s+/).filter(Boolean).length;
  const readingMinutes = Math.max(4, Math.ceil(articleWords / 210));
  const deviceBrand = route.type === "device" && route.slug !== "/dispositivos/" ? deviceBrandForSlug(route.slug) : null;
  const externalResources = isArticle ? getExternalResources(route.slug) : [];
  const schemas = isArticle
    ? [articleSchema(route), breadcrumbSchema(route, parent), faqSchema(content.faq)]
    : [webPageSchema(route), breadcrumbSchema(route, parent), faqSchema(content.faq)];
  const related = (children.length ? children : recommendedLinks.map((item) => getRoute(item.href)).filter((item): item is RouteDefinition => Boolean(item)))
    .filter((item) => !isArticle || (item.slug !== "/blog/" && item.slug !== route.parent))
    .slice(0, 6);

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
          {isArticle ? <div className="article-meta"><span>Guia editorial</span><span>{readingMinutes} min de leitura</span><span>{content.sections.length} secções</span></div> : null}
          {route.type === "money" ? <VerifiedBusinessFacts /> : null}
          <div className="hero-actions">
            <Button href={isArticle ? "/precos/" : primary.href} variant="primary">{isArticle ? "Ver preços e planos" : primary.label}</Button>
            <WhatsAppButton />
          </div>
        </div>
      </section>

      {route.slug === "/precos/" ? (
        <Section eyebrow="Planos IPTVBR" title="Escolhe a duração e o número de dispositivos." description="Preços finais em euros. O pedido segue para o WhatsApp com o plano escolhido." className="section-surface">
          <PricingPreview />
        </Section>
      ) : null}

      {isArticle && route.image ? (
        <div className="container article-cover-wrap">
          <Image className="article-cover" src={route.image} alt={getImageAlt(route)} width={1200} height={675} sizes="(max-width: 900px) 100vw, 1180px" priority />
        </div>
      ) : null}

      <ContentFramework
        takeaways={content.sections.slice(0, 3).map((section) => summarySentence(section.paragraphs[0]))}
        steps={content.sections.map((section) => section.heading)}
        entities={content.entities}
        variant={isArticle ? "article" : "contextual"}
      />

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
        <article className={isArticle ? "article-prose" : undefined}>
          {content.sections.map((section, index) => (
            <section className="prose-section" id={sectionId(section.heading, index)} key={`${section.heading}-${index}`}>
              <p className="section-index">0{index + 1}</p>
              <h2>{section.heading}</h2>
              {section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
              {section.links?.length ? (
                <div className="link-grid">
                  {section.links.map((link) => <Link className="pill-link" key={link.href} href={link.href}>{link.label} <span aria-hidden="true">→</span></Link>)}
                </div>
              ) : null}
              {isArticle && index === 1 ? <div className="article-inline-cta"><span>PRÓXIMO PASSO</span><strong>Compara os planos e escolhe a duração adequada ao teu dispositivo.</strong><div className="article-inline-actions"><Button href="/precos/" variant="primary">Ver preços e planos</Button><WhatsAppButton /></div></div> : null}
            </section>
          ))}
          {isArticle ? (
            <section className="prose-section article-resource-network" aria-labelledby="rede-editorial-iptvbr">
              <p className="section-index">+</p>
              <h2 id="rede-editorial-iptvbr">Continua na rede editorial IPTVBR</h2>
              <p>Este artigo faz parte de uma rede de guias ligados por intenção. Usa os caminhos abaixo para regressar ao ponto central, comparar opções ou aprofundar o tema sem perder contexto.</p>
              <div className="link-grid">
                <Link className="pill-link" href="/">IPTV Portugal — página inicial <span aria-hidden="true">→</span></Link>
                <Link className="pill-link" href="/blog/">Explorar todos os artigos <span aria-hidden="true">→</span></Link>
                <Link className="pill-link" href="/precos/">Comparar preços e planos <span aria-hidden="true">→</span></Link>
                <Link className="pill-link" href="/dispositivos/">Escolher o dispositivo <span aria-hidden="true">→</span></Link>
              </div>
              {externalResources.length ? (
                <div className="article-external-resources">
                  <p className="card-kicker">Recursos externos relacionados</p>
                  <p>Referências de terceiros para comparação editorial; a inclusão não representa recomendação nem validação das respetivas ofertas.</p>
                  <div className="link-grid">
                    {externalResources.map((resource) => (
                      <a className="pill-link" href={resource.href} key={resource.href} target="_blank" rel="nofollow external noopener noreferrer">
                        {resource.label} <span aria-hidden="true">↗</span>
                      </a>
                    ))}
                  </div>
                </div>
              ) : null}
            </section>
          ) : null}
        </article>

        <aside className="page-aside">
          {isArticle ? <nav className="article-toc" aria-label="Índice do artigo"><span className="card-kicker">Neste artigo</span>{content.sections.map((section, index) => <Link href={`#${sectionId(section.heading, index)}`} key={section.heading}><i>{String(index + 1).padStart(2, "0")}</i>{section.heading}</Link>)}</nav> : null}
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
            {isArticle ? <Button href="/precos/" variant="primary">Ver preços e planos</Button> : <WhatsAppButton />}
            {isArticle ? <WhatsAppButton /> : null}
            <Button href="/suporte/" variant="secondary">Ir para o suporte</Button>
          </div>
        </div>
      </section>
    </main>
  );
}
