import type { Metadata } from "next";
import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  Check,
  CheckCircle2,
  ChevronDown,
  MessageCircle,
  MonitorSmartphone,
  Play,
  Radio,
  TvMinimal,
} from "lucide-react";
import { Hero } from "@/components/hero/Hero";
import { PricingMatrix } from "@/components/pricing/PricingMatrix";
import { WhatsAppButton } from "@/components/conversion/WhatsAppButton";
import { HomeMotion } from "@/components/home/HomeMotion";
import { ReviewCarousel } from "@/components/reviews/ReviewCarousel";
import { buildOrganizationSchema, webPageSchema } from "@/lib/schema";
import { getRoute } from "@/config/routes";
import { DeviceLogo, type DeviceBrand } from "@/components/brand/DeviceLogo";

const devices: { label: string; brand: DeviceBrand; href: string }[] = [
  { label: "Fire TV", brand: "firetv", href: "/dispositivos/iptv-firestick/" },
  { label: "Android TV", brand: "androidtv", href: "/dispositivos/iptv-android-tv/" },
  { label: "Apple TV", brand: "appletv", href: "/dispositivos/iptv-apple-tv/" },
  { label: "Samsung Smart TV", brand: "samsung", href: "/dispositivos/iptv-samsung/" },
  { label: "LG webOS", brand: "lg", href: "/dispositivos/iptv-lg/" },
  { label: "Roku", brand: "roku", href: "/dispositivos/iptv-roku/" },
  { label: "Chromecast", brand: "chromecast", href: "/dispositivos/iptv-chromecast/" },
  { label: "NVIDIA Shield", brand: "nvidia", href: "/dispositivos/iptv-nvidia-shield/" },
  { label: "Windows", brand: "windows", href: "/dispositivos/iptv-windows/" },
  { label: "Android", brand: "android", href: "/dispositivos/iptv-android/" },
  { label: "Formuler", brand: "formuler", href: "/dispositivos/iptv-formuler/" },
  { label: "Mobile", brand: "mobile", href: "/dispositivos/iptv-telemovel/" },
];

const faq = [
  "O que é IPTV e como funciona?",
  "O IPTVBR é compatível com a minha televisão?",
  "Quais dispositivos posso utilizar?",
  "Como escolher o plano certo?",
  "Como funciona o pagamento?",
  "Quanto tempo demora a ativação?",
  "Posso usar vários dispositivos?",
  "Preciso de uma aplicação específica?",
  "Como configuro o serviço passo a passo?",
  "Existe suporte após a compra?",
  "O IPTV é legal em Portugal?",
  "Como falar com a equipa IPTVBR?",
];

const featureCards = [
  { icon: <TvMinimal size={24} />, title: "Experiência IPTV completa", text: "Uma experiência pensada para televisão, filmes, séries e conteúdos ao vivo, com uma interface simples.", image: "/images/features/experiencia-iptv-pro.webp", alt: "Sala moderna com televisão e experiência IPTV organizada" },
  { icon: <TvMinimal size={24} />, title: "Filmes e séries", text: "Explora uma biblioteca organizada e encontra rapidamente o conteúdo que procuras.", image: "/images/features/filmes-series-pro.webp", alt: "Cinema em casa com filmes e séries numa televisão de grande formato" },
  { icon: <MonitorSmartphone size={24} />, title: "Canais ao vivo", text: "Acede ao teu percurso de visualização com categorias e guias preparados para diferentes dispositivos.", image: "/images/features/canais-ao-vivo-pro.webp", alt: "Televisão com seleção visual de canais em direto" },
  { icon: <MonitorSmartphone size={24} />, title: "Desporto em direto", text: "Segue conteúdos desportivos e mantém o foco na experiência de visualização.", image: "/images/features/desporto-em-direto-pro.webp", alt: "Estádio de futebol preparado para uma transmissão desportiva em direto" },
  { icon: <MonitorSmartphone size={24} />, title: "Instalação simples", text: "Guias dedicados ajudam-te a instalar e configurar a aplicação no equipamento que já tens.", image: "/images/features/instalacao-simples-pro.webp", alt: "Instalação de um dispositivo de streaming junto à televisão e ao router" },
  { icon: <MessageCircle size={24} />, title: "Suporte direto", text: "Quando precisares de ajuda, o contacto segue diretamente para o WhatsApp.", image: "/images/features/suporte-direto-pro.webp", alt: "Especialista de suporte a ajudar um cliente com a configuração IPTV" },
];

export const metadata: Metadata = {
  title: "IPTV Portugal: Planos, Apps e Guias",
  description: "Compara planos IPTV em Portugal, consulta dispositivos compatíveis, aplicações, guias de instalação, preços e suporte em português.",
  alternates: { canonical: "https://iptvbr.pt/" },
  openGraph: {
    type: "website",
    locale: "pt_PT",
    siteName: "IPTVBR",
    title: "IPTV Portugal: Planos, Apps e Guias | IPTVBR",
    description: "Planos IPTV em Portugal, dispositivos compatíveis, aplicações, instalação e suporte em português.",
    url: "https://iptvbr.pt/",
    images: [{ url: "/images/social/iptvbr-social-share.png", width: 1200, height: 630, alt: "IPTVBR Portugal — planos, aplicações e guias IPTV" }],
  },
  twitter: { card: "summary_large_image", images: ["/images/social/iptvbr-social-share.png"] },
};

function SectionLabel({ children, dark = false }: { children: ReactNode; dark?: boolean }) {
  return <span className={`ref-label ${dark ? "ref-label-dark" : ""}`}>{children}</span>;
}

export default function HomePage() {
  const homeRoute = getRoute("/")!;
  const homeSchemas = [
    buildOrganizationSchema(),
    { "@context": "https://schema.org", "@type": "WebSite", name: "IPTVBR", url: "https://iptvbr.pt/", inLanguage: "pt-PT" },
    webPageSchema(homeRoute),
  ];
  return (
    <main id="main-content" className="reference-home">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(homeSchemas) }} />
      <HomeMotion />
      <Hero />

      <section className="ref-stats" aria-label="Destaques">
        <div className="container ref-stats-grid">
          <div><TvMinimal size={35} /><strong>Vários dispositivos</strong><span>TV, streaming e mobile</span></div>
          <div><MonitorSmartphone size={35} /><strong>Experiência ao vivo</strong><span>Canais e conteúdos</span></div>
          <div><TvMinimal size={35} /><strong>Filmes e séries</strong><span>Conteúdo organizado</span></div>
          <div><BadgeCheck size={35} /><strong>Suporte direto</strong><span>Atendimento em português</span></div>
        </div>
      </section>

      <section className="ref-promo" aria-label="Oferta IPTVBR">
        <div className="container ref-promo-inner">
          <div className="ref-promo-icon"><Play fill="currentColor" /></div>
          <div><span>ENTRETENIMENTO SEM COMPLICAÇÕES</span><strong>Escolhe o plano certo e recebe ajuda para começar.</strong></div>
          <Link href="#planos" className="ref-promo-link">Explorar planos <ChevronDown size={16} /></Link>
        </div>
      </section>

      <section className="ref-section ref-pricing">
        <div className="container">
          <SectionLabel>IPTVBR · PLANOS</SectionLabel>
          <h2>Planos IPTV para a <span className="ref-accent">tua forma de ver.</span></h2>
          <p className="ref-section-intro">Escolhe a duração e o número de dispositivos. Mantemos os preços atualmente configurados no site e apresentamos tudo de forma clara.</p>
          <PricingMatrix />
        </div>
      </section>

      <section className="ref-section ref-dark ref-devices">
        <div className="container ref-centered">
          <SectionLabel dark>COMPATIBILIDADE</SectionLabel>
          <h2>Vê IPTV nos <span className="ref-accent">dispositivos que já tens.</span></h2>
          <p className="ref-dark-intro">Uma apresentação simples e organizada para encontrares rapidamente o equipamento certo.</p>
          <div className="ref-device-grid">
            {devices.map((device) => (
              <Link className="ref-device-card" href={device.href} key={device.label} aria-label={`Ver guia IPTV para ${device.label}`}>
                <span className="ref-device-icon"><DeviceLogo brand={device.brand} /></span>
                <strong>{device.label}</strong>
                <small>Ver guia <span aria-hidden="true">→</span></small>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="ref-section ref-steps">
        <div className="container ref-centered">
          <SectionLabel>COMO COMEÇAR</SectionLabel>
          <h2><span className="ref-accent">3 passos</span> para começares.</h2>
          <div className="ref-steps-grid">
            <article><span>1</span><h3>Escolhe o teu plano</h3><p>Seleciona a duração e o número de dispositivos que queres utilizar.</p></article>
            <article><span>2</span><h3>Confirma o pedido</h3><p>Fala connosco pelo WhatsApp para confirmar os dados e seguir o processo.</p></article>
            <article><span>3</span><h3>Instala e começa</h3><p>Segue o guia do teu dispositivo e prepara o teu acesso.</p></article>
          </div>
        </div>
      </section>

      <section className="ref-section ref-dark ref-compare">
        <div className="container ref-centered">
          <SectionLabel dark>PORQUÊ IPTVBR</SectionLabel>
          <h2>O que deves procurar num <span className="ref-accent">serviço IPTV.</span></h2>
          <p className="ref-dark-intro">Uma comparação visual simples para tornar a decisão mais fácil.</p>
          <div className="ref-compare-grid">
            <article><h3>Televisão tradicional</h3><ul><li><CheckCircle2 /> Menos flexibilidade</li><li><CheckCircle2 /> Pacotes pouco ajustáveis</li><li><CheckCircle2 /> Dependência de equipamento</li><li><CheckCircle2 /> Experiência mais rígida</li></ul></article>
            <article className="ref-compare-featured"><h3>IPTVBR <span>PT-PT</span></h3><ul><li><Check /> Configuração por dispositivo</li><li><Check /> Percurso de compra simples</li><li><Check /> Guias e suporte direto</li><li><Check /> Planos apresentados com clareza</li></ul></article>
            <article><h3>Serviços pouco claros</h3><ul><li><CheckCircle2 /> Informação incompleta</li><li><CheckCircle2 /> Pacotes difíceis de comparar</li><li><CheckCircle2 /> Suporte pouco evidente</li><li><CheckCircle2 /> Processo confuso</li></ul></article>
          </div>
        </div>
      </section>

      <section className="ref-section ref-explained">
        <div className="container">
          <div className="ref-explained-head">
            <div><SectionLabel>TECNOLOGIA SEM COMPLICAÇÕES</SectionLabel><h2>Percebe o IPTV.<br /><span>Decide com confiança.</span></h2></div>
            <p>Três conceitos essenciais para compreender a tecnologia, preparar o equipamento e avaliar uma opção antes de avançar.</p>
          </div>
          <div className="ref-explained-grid">
            <article><span className="ref-explained-number">01</span><span className="ref-explained-icon"><TvMinimal /></span><h3>O que é IPTV?</h3><p>Televisão distribuída através de redes IP e reproduzida numa aplicação compatível. O dispositivo, a ligação e a origem do conteúdo fazem parte da experiência.</p><Link href="/guias/o-que-e-iptv/">Compreender o conceito <ArrowRight /></Link></article>
            <article><span className="ref-explained-number">02</span><span className="ref-explained-icon"><MonitorSmartphone /></span><h3>Como funciona?</h3><p>A aplicação recebe a configuração, organiza canais e programação e entrega o vídeo ao equipamento escolhido através da ligação à internet.</p><Link href="/guias/como-funciona-iptv/">Ver como funciona <ArrowRight /></Link></article>
            <article><span className="ref-explained-number">03</span><span className="ref-explained-icon"><BadgeCheck /></span><h3>O que deves avaliar?</h3><p>Compatibilidade, clareza das condições, qualidade da aplicação, estabilidade da rede e um canal de suporte que responda quando precisas.</p><Link href="/comparar/como-escolher-iptv-portugal/">Usar a checklist <ArrowRight /></Link></article>
          </div>
        </div>
      </section>

      <section className="ref-section ref-dark ref-features">
        <div className="container ref-centered">
          <SectionLabel dark>RECURSOS</SectionLabel>
          <h2>Descobre a <span className="ref-accent">experiência IPTVBR.</span></h2>
          <div className="ref-feature-grid">
            {featureCards.map((feature) => (
              <article key={feature.title} className="ref-feature-card">
                <div className="ref-feature-image">
                  <Image src={feature.image} alt={feature.alt} fill sizes="(max-width: 720px) 100vw, 290px" />
                </div>
                <div className="ref-feature-icon">{feature.icon}</div>
                <div className="ref-feature-body"><h3>{feature.title}</h3><p>{feature.text}</p><Link href="/guias/">Explorar <ChevronDown size={15} /></Link></div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="ref-section ref-faq">
        <div className="container ref-centered">
          <SectionLabel>PERGUNTAS FREQUENTES</SectionLabel>
          <h2>Respostas rápidas às <span className="ref-accent">tuas dúvidas.</span></h2>
          <div className="ref-faq-grid">
            {faq.map((question) => (
              <details key={question}>
                <summary>{question}<span><ChevronDown size={16} /></span></summary>
                <p>Encontra esta informação nos nossos guias ou fala connosco diretamente pelo WhatsApp para receber orientação sobre o teu caso.</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="ref-section ref-dark ref-why">
        <div className="container ref-centered">
          <SectionLabel dark>ESCOLHA INFORMADA</SectionLabel>
          <h2>Uma experiência pensada para <span className="ref-accent">ser clara.</span></h2>
          <div className="ref-why-grid">
            <article><span><BadgeCheck /></span><h3>Informação transparente</h3><p>Preços, dispositivos e passos apresentados num só percurso.</p></article>
            <article><span><MonitorSmartphone /></span><h3>Vários dispositivos</h3><p>Encontra o caminho certo para TV, streaming, mobile e computador.</p></article>
            <article><span><CheckCircle2 /></span><h3>Processo simples</h3><p>Menos passos desnecessários entre a escolha e o próximo passo.</p></article>
            <article><span><MessageCircle /></span><h3>Contacto direto</h3><p>O WhatsApp é o canal principal para dúvidas e orientação.</p></article>
          </div>
        </div>
      </section>

      <section className="ref-section ref-sports">
        <div className="container ref-sports-grid">
          <div className="ref-sports-copy">
            <SectionLabel>DESPORTO & ENTRETENIMENTO</SectionLabel>
            <h2>Vive cada momento. <span>Em qualquer ecrã.</span></h2>
            <p>Desporto em direto, entretenimento e uma experiência fluida nos teus dispositivos favoritos — com configuração simples e apoio quando precisares.</p>
            <div className="ref-mini-cards">
              <div><span className="ref-mini-icon"><Radio /></span><strong>Direto em alta qualidade</strong><span>Imagem estável e nítida</span></div>
              <div><span className="ref-mini-icon"><MonitorSmartphone /></span><strong>Todos os teus ecrãs</strong><span>TV, mobile e tablet</span></div>
              <div><span className="ref-mini-icon"><BadgeCheck /></span><strong>Planos flexíveis</strong><span>Escolhe a duração ideal</span></div>
            </div>
            <div className="ref-sports-price">
              <div><span>PLANOS A PARTIR DE</span><strong><small>€</small>16,99</strong><em>Preço total · 1 dispositivo</em></div>
              <div className="ref-sports-actions"><Link href="#planos" className="ref-button">Ver todos os planos <ArrowRight size={16} /></Link><Link href="/dispositivos/">Ver dispositivos</Link></div>
            </div>
          </div>
          <div className="ref-sports-art">
            <div className="ref-sports-orbit" aria-hidden="true" />
            <span className="ref-sports-live"><i /> DIRETO · 4K</span>
            <Image src="/images/features/sports-streaming-devices.webp" alt="Transmissão de futebol, basquetebol e automobilismo em televisão, tablet e telemóvel" width={1400} height={933} sizes="(max-width: 1050px) 90vw, 52vw" />
            <div className="ref-sports-proof"><CheckCircle2 /><span><strong>Compatível</strong><small>Vários dispositivos</small></span></div>
          </div>
        </div>
      </section>

      <section className="ref-section ref-dark ref-coverage">
        <div className="container ref-centered">
          <SectionLabel dark>PORTUGAL</SectionLabel>
          <h2>IPTV para <span className="ref-accent">clientes em Portugal.</span></h2>
          <div className="ref-coverage-box">
            <strong>Atendimento pensado para Portugal</strong>
            <p>Conteúdo, guias e comunicação em português de Portugal, com um percurso simples desde a escolha do plano até à configuração.</p>
            <div className="ref-coverage-tags"><span>Lisboa</span><span>Porto</span><span>Braga</span><span>Coimbra</span><span>Faro</span><span>Setúbal</span><span>Leiria</span><span>Madeira</span><span>Açores</span></div>
          </div>
        </div>
      </section>

      <section className="ref-section ref-reviews">
        <div className="container ref-centered">
          <SectionLabel>EXPERIÊNCIA</SectionLabel>
          <h2>O que dizem os <span className="ref-accent">nossos clientes.</span></h2>
          <p className="ref-section-intro">Experiências reais partilhadas por clientes depois da configuração do serviço.</p>
          <ReviewCarousel />
        </div>
      </section>

      <section className="ref-section ref-dark ref-reseller">
        <div className="container ref-reseller-inner">
          <div className="ref-reseller-copy">
            <SectionLabel dark>IPTVBR · BUSINESS</SectionLabel>
            <h2>Transforma uma oportunidade num <span>negócio digital.</span></h2>
            <p>Um percurso dedicado a parceiros que procuram começar ou desenvolver uma operação IPTV, com informação comercial organizada, orientação e suporte num canal separado do cliente final.</p>
            <div className="ref-reseller-benefits">
              <div><BadgeCheck /><span><strong>Estrutura para parceiros</strong><small>Processo comercial organizado</small></span></div>
              <div><MonitorSmartphone /><span><strong>Solução flexível</strong><small>Preparada para vários cenários</small></span></div>
              <div><MessageCircle /><span><strong>Contacto dedicado</strong><small>Acompanhamento pelo WhatsApp</small></span></div>
            </div>
            <div className="ref-tag-row"><span>IPTV Reseller</span><span>Preços de atacado</span><span>White Label</span><span>Business Partner</span></div>
            <div className="ref-reseller-actions"><Link href="/reseller/" className="ref-button ref-button-blue">Conhecer o programa <ArrowRight size={16} /></Link><small>Sem compromisso · Informação clara</small></div>
          </div>
          <div className="ref-reseller-art">
            <span className="ref-reseller-status"><i /> PROGRAMA DE PARCEIROS</span>
            <Image src="/images/features/iptv-business-partnership.webp" alt="Dois parceiros de negócio a formalizar uma parceria tecnológica IPTV" width={1200} height={1000} sizes="(max-width: 1050px) 90vw, 46vw" />
            <div className="ref-reseller-float"><BadgeCheck /><span><strong>IPTVBR Business</strong><small>Parceria orientada ao crescimento</small></span></div>
          </div>
        </div>
      </section>

      <section className="ref-section ref-cta">
        <div className="container">
          <div className="ref-cta-main">
            <SectionLabel>COMEÇA AGORA</SectionLabel>
            <h2>Pronto para melhorar a tua <span className="ref-accent">experiência de TV?</span></h2>
            <p>Escolhe um plano ou fala diretamente connosco para orientação.</p>
            <div className="ref-actions"><WhatsAppButton message="Olá! Quero ajuda para escolher o melhor plano IPTVBR para Portugal." /><Link href="#planos" className="ref-button ref-button-outline">Ver planos</Link></div>
          </div>
          <div className="ref-news">
            <div className="ref-news-head"><SectionLabel>GUIAS & ATUALIZAÇÕES</SectionLabel><h2>Últimos conteúdos</h2></div>
            <div className="ref-news-grid">
              <Link href="/blog/checklist-antes-de-subscrever-iptv/" className="ref-news-card"><strong>Checklist antes de subscrever</strong><p>Dez critérios para decidir com mais segurança.</p><span>Ler artigo →</span></Link>
              <Link href="/blog/iptv-wifi-ou-cabo-ethernet/" className="ref-news-card"><strong>Wi-Fi ou cabo Ethernet?</strong><p>Como conseguir uma ligação mais estável.</p><span>Ler artigo →</span></Link>
              <Link href="/blog/seguranca-apps-iptv/" className="ref-news-card"><strong>Segurança nas apps IPTV</strong><p>Protege credenciais, dados e dispositivos.</p><span>Ler artigo →</span></Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
