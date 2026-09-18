import type { Metadata } from "next";
import Link from "next/link";
import { Hero } from "@/components/hero/Hero";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { PricingMatrix } from "@/components/pricing/PricingMatrix";
import { DeviceShowcase } from "@/components/devices/DeviceShowcase";
import { ReviewShowcase } from "@/components/reviews/ReviewShowcase";
import { WhatsAppButton } from "@/components/conversion/WhatsAppButton";
import { getChildRoutes, getRoute } from "@/config/routes";
import { buildMetadata } from "@/lib/seo/metadata";

const steps = [
  { n: "01", title: "Escolhe o plano", text: "Seleciona a duração e o número de dispositivos que queres usar.", icon: "✓" },
  { n: "02", title: "Fala connosco", text: "O WhatsApp recebe automaticamente os detalhes da tua escolha.", icon: "↗" },
  { n: "03", title: "Recebe a orientação", text: "Confirmamos as condições e explicamos os próximos passos.", icon: "→" },
];
const appRoutes = getChildRoutes("/apps/").slice(0, 4);
const guideRoutes = getChildRoutes("/guias/").slice(0, 4);

export function generateMetadata(): Metadata { const route = getRoute("/"); return route ? buildMetadata(route) : {}; }

export default function HomePage() {
  return <main id="main-content">
    <Hero />

    <section className="stats-band"><div className="container stats-grid"><Reveal><span>01</span><strong>Planos flexíveis</strong><p>Escolhe duração e dispositivos.</p></Reveal><Reveal delay={80}><span>02</span><strong>WhatsApp direto</strong><p>Pedido preparado automaticamente.</p></Reveal><Reveal delay={160}><span>03</span><strong>Guias pt-PT</strong><p>Instalação e suporte por dispositivo.</p></Reveal><Reveal delay={240}><span>04</span><strong>Experiência premium</strong><p>Navegação pensada para conversão.</p></Reveal></div></section>

    <Section eyebrow="PLANOS IPTV" title="Escolhe a combinação certa para a tua casa." description="Alterna entre 1 e 4 dispositivos. O preço e a mensagem de WhatsApp são atualizados no momento." className="pricing-section-home">
      <Reveal><PricingMatrix /></Reveal>
    </Section>

    <section className="visual-break"><div className="visual-break-image" /><div className="container visual-break-content"><span className="eyebrow">UMA EXPERIÊNCIA COMPLETA</span><h2>Mais do que um plano. Um percurso.</h2><p>Do primeiro clique ao suporte, tudo foi organizado para reduzir dúvidas e tornar cada decisão evidente.</p><Link className="button button-light" href="/guias/">Explorar os guias</Link></div></section>

    <Section eyebrow="DISPOSITIVOS" title="Vê no equipamento que já tens." description="Encontra rapidamente o percurso certo para TV, streaming stick, telemóvel ou computador." className="section-surface"><Reveal><DeviceShowcase /></Reveal></Section>

    <Section eyebrow="3 PASSOS" title="Do plano ao primeiro acesso." description="Um fluxo simples, sem formulários desnecessários." className="steps-section"><div className="steps-grid">{steps.map((step, i) => <Reveal delay={i*90} key={step.n}><article className="step-card"><span className="step-icon">{step.icon}</span><small>{step.n}</small><h3>{step.title}</h3><p>{step.text}</p></article></Reveal>)}</div></Section>

    <Section eyebrow="APLICAÇÕES" title="Escolhe a app que combina com o teu dispositivo." description="Guias dedicados para instalar e configurar aplicações populares." className="section-surface"><Reveal><div className="app-showcase-grid">{appRoutes.map((route, i) => <Link href={route.slug} className="app-card-premium" key={route.slug}><span className="app-number">0{i+1}</span><div><strong>{route.title}</strong><p>{route.description}</p></div><span>↗</span></Link>)}</div></Reveal></Section>

    <Section eyebrow="GUIAS & SUPORTE" title="Quando tens uma dúvida, começa pelo caminho certo." description="Conteúdo útil para instalar, configurar e resolver problemas comuns." ><Reveal><div className="guide-grid-premium">{guideRoutes.map((route, i) => <Link href={route.slug} className="guide-card-premium" key={route.slug}><span>{String(i+1).padStart(2,"0")}</span><h3>{route.title}</h3><p>{route.description}</p><strong>Ver guia →</strong></Link>)}</div></Reveal></Section>

    <section className="review-section"><div className="container"><Reveal><div className="review-section-head"><div><span className="eyebrow">AVALIAÇÕES</span><h2>Uma área pronta para prova social real.</h2></div><p>Os cartões atuais são exemplos de estrutura. Substitui pelos testemunhos verificados dos teus clientes.</p></div><ReviewShowcase /></Reveal></div></section>

    <section className="final-cta"><div className="container final-cta-inner"><div><span className="eyebrow">FALAR AGORA</span><h2>Tens o dispositivo. Nós ajudamos no próximo passo.</h2><p>Envia a tua dúvida ou escolhe um plano e o WhatsApp abre com os dados já preenchidos.</p></div><div className="hero-actions"><WhatsAppButton message="Olá! Quero ajuda para escolher o melhor plano IPTVBR para o meu dispositivo." /><Link href="/suporte/" className="button button-secondary">Abrir suporte</Link></div></div></section>
  </main>;
}