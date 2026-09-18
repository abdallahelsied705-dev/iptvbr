import type { Metadata, ReactNode } from "next";
import Link from "next/link";
import {
  Apple,
  BadgeCheck,
  BadgePercent,
  Check,
  ChevronDown,
  Clapperboard,
  Clock3,
  Gamepad2,
  Headphones,
  Laptop,
  MessageCircle,
  MonitorSmartphone,
  Radio,
  RadioTower,
  ShieldCheck,
  Smartphone,
  Tv,
  TvMinimal,
  UserRound,
  Video,
  WalletCards,
  X,
} from "lucide-react";
import { Hero } from "@/components/hero/Hero";
import { PricingMatrix } from "@/components/pricing/PricingMatrix";
import { WhatsAppButton } from "@/components/conversion/WhatsAppButton";

const devices = [
  { label: "Fire TV", icon: <Tv size={27} /> },
  { label: "Android TV", icon: <TvMinimal size={27} /> },
  { label: "Apple TV", icon: <Apple size={27} /> },
  { label: "Samsung Smart TV", icon: <Tv size={27} /> },
  { label: "LG webOS", icon: <Tv size={27} /> },
  { label: "Roku", icon: <MonitorSmartphone size={27} /> },
  { label: "Chromecast", icon: <Radio size={27} /> },
  { label: "NVIDIA Shield", icon: <Gamepad2 size={27} /> },
  { label: "Windows", icon: <Laptop size={27} /> },
  { label: "Android", icon: <Smartphone size={27} /> },
  { label: "Formuler", icon: <TvMinimal size={27} /> },
  { label: "Mobile", icon: <Smartphone size={27} /> },
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
  {
    icon: <Video size={24} />,
    title: "Experiência IPTV completa",
    text: "Uma experiência pensada para televisão, filmes, séries e conteúdos ao vivo, com uma interface simples.",
    imagePos: "36% 30%",
  },
  {
    icon: <Clapperboard size={24} />,
    title: "Filmes e séries",
    text: "Explora uma biblioteca organizada e encontra rapidamente o conteúdo que procuras.",
    imagePos: "73% 25%",
  },
  {
    icon: <RadioTower size={24} />,
    title: "Canais ao vivo",
    text: "Acede ao teu percurso de visualização com categorias e guias preparados para diferentes dispositivos.",
    imagePos: "72% 74%",
  },
  {
    icon: <Gamepad2 size={24} />,
    title: "Desporto em direto",
    text: "Segue conteúdos desportivos e mantém o foco na experiência de visualização.",
    imagePos: "54% 85%",
  },
  {
    icon: <MonitorSmartphone size={24} />,
    title: "Instalação simples",
    text: "Guias dedicados ajudam-te a instalar e configurar a aplicação no equipamento que já tens.",
    imagePos: "15% 70%",
  },
  {
    icon: <Headphones size={24} />,
    title: "Suporte direto",
    text: "Quando precisares de ajuda, o contacto segue diretamente para o WhatsApp.",
    imagePos: "84% 62%",
  },
];

export const metadata: Metadata = {\n  title: "IPTVBR — IPTV em Portugal",\n  description: "Planos IPTV, dispositivos, aplicações e guias em português de Portugal.",\n};\n
function SectionLabel({ children, dark = false }: { children: ReactNode; dark?: boolean }) {
  return <span className={`ref-label ${dark ? "ref-label-dark" : ""}`}>{children}</span>;
}

export default function HomePage() {
  return (
    <main id="main-content" className="reference-home">
      <Hero />

      <section className="ref-stats" aria-label="Destaques">
        <div className="container ref-stats-grid">
          <div><Tv size={35} /><strong>Vários dispositivos</strong><span>TV, streaming e mobile</span></div>
          <div><RadioTower size={35} /><strong>Experiência ao vivo</strong><span>Canais e conteúdos</span></div>
          <div><Clapperboard size={35} /><strong>Filmes e séries</strong><span>Conteúdo organizado</span></div>
          <div><BadgeCheck size={35} /><strong>Suporte direto</strong><span>Atendimento em português</span></div>
        </div>
      </section>

      <section className="ref-section ref-pricing">
        <div className="container">
          <SectionLabel>IPTVBR · PLANOS</SectionLabel>
          <h2>Planos IPTV para a tua forma de ver.</h2>
          <p className="ref-section-intro">Escolhe a duração e o número de dispositivos. Mantemos os preços atualmente configurados no site e apresentamos tudo de forma clara.</p>
          <PricingMatrix />
        </div>
      </section>

      <section className="ref-section ref-dark ref-devices">
        <div className="container ref-centered">
          <SectionLabel dark>COMPATIBILIDADE</SectionLabel>
          <h2>Vê IPTV nos dispositivos que já tens.</h2>
          <p className="ref-dark-intro">Uma apresentação simples e organizada para encontrares rapidamente o equipamento certo.</p>
          <div className="ref-device-grid">
            {devices.map((device) => (
              <div className="ref-device-card" key={device.label}>
                <span className="ref-device-icon">{device.icon}</span>
                <strong>{device.label}</strong>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="ref-section ref-steps">
        <div className="container ref-centered">
          <SectionLabel>COMO COMEÇAR</SectionLabel>
          <h2>3 passos para começares.</h2>
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
          <h2>O que deves procurar num serviço IPTV.</h2>
          <p className="ref-dark-intro">Uma comparação visual simples para tornar a decisão mais fácil.</p>
          <div className="ref-compare-grid">
            <article><h3>Televisão tradicional</h3><ul><li><X /> Menos flexibilidade</li><li><X /> Pacotes pouco ajustáveis</li><li><X /> Dependência de equipamento</li><li><X /> Experiência mais rígida</li></ul></article>
            <article className="ref-compare-featured"><h3>IPTVBR <span>PT-PT</span></h3><ul><li><Check /> Configuração por dispositivo</li><li><Check /> Percurso de compra simples</li><li><Check /> Guias e suporte direto</li><li><Check /> Planos apresentados com clareza</li></ul></article>
            <article><h3>Serviços pouco claros</h3><ul><li><X /> Informação incompleta</li><li><X /> Pacotes difíceis de comparar</li><li><X /> Suporte pouco evidente</li><li><X /> Processo confuso</li></ul></article>
          </div>
        </div>
      </section>

      <section className="ref-section ref-explained">
        <div className="container ref-centered">
          <SectionLabel>TECNOLOGIA</SectionLabel>
          <h2>IPTV explicado de forma simples.</h2>
          <p className="ref-section-intro">Tudo o que precisas de saber antes de escolher um plano.</p>
          <div className="ref-explained-grid">
            <article><Tv size={34} /><h3>O que é IPTV?</h3><p>IPTV significa televisão entregue através de uma ligação à internet. A forma de utilização depende do serviço, aplicação e dispositivo.</p></article>
            <article><RadioTower size={34} /><h3>Como funciona?</h3><p>O conteúdo é entregue através de uma ligação de dados e apresentado numa aplicação compatível com o equipamento escolhido.</p></article>
            <article><ShieldCheck size={34} /><h3>O que procurar?</h3><p>Procura informação clara, compatibilidade, guias de instalação, canais de apoio e condições comerciais fáceis de compreender.</p><Link href="/guias/" className="ref-button">Ler os guias <ChevronDown size={16} /></Link></article>
          </div>
        </div>
      </section>

      <section className="ref-section ref-dark ref-features">
        <div className="container ref-centered">
          <SectionLabel dark>RECURSOS</SectionLabel>
          <h2>Descobre a experiência IPTVBR.</h2>
          <div className="ref-feature-grid">
            {featureCards.map((feature) => (
              <article key={feature.title} className="ref-feature-card">
                <div className="ref-feature-image" style={{ backgroundImage: `linear-gradient(180deg, rgba(0,0,0,.03) 20%, rgba(0,0,0,.82) 100%), url("/images/hero/iptvbr-hero-background.webp")`, backgroundPosition: feature.imagePos }} />
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
          <h2>Respostas rápidas às tuas dúvidas.</h2>
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
          <h2>Uma experiência pensada para ser clara.</h2>
          <div className="ref-why-grid">
            <article><span><WalletCards /></span><h3>Informação transparente</h3><p>Preços, dispositivos e passos apresentados num só percurso.</p></article>
            <article><span><MonitorSmartphone /></span><h3>Vários dispositivos</h3><p>Encontra o caminho certo para TV, streaming, mobile e computador.</p></article>
            <article><span><Clock3 /></span><h3>Processo simples</h3><p>Menos passos desnecessários entre a escolha e o próximo passo.</p></article>
            <article><span><MessageCircle /></span><h3>Contacto direto</h3><p>O WhatsApp é o canal principal para dúvidas e orientação.</p></article>
          </div>
        </div>
      </section>

      <section className="ref-section ref-sports">
        <div className="container ref-sports-grid">
          <div>
            <SectionLabel>DESPORTO & ENTRETENIMENTO</SectionLabel>
            <h2>Não percas os teus conteúdos favoritos.</h2>
            <p>A estrutura da experiência foi pensada para destacar conteúdos ao vivo, entretenimento e diferentes dispositivos sem complicar a navegação.</p>
            <div className="ref-mini-cards">
              <div><Video /><strong>Streams ao vivo</strong><span>Experiência simples</span></div>
              <div><Clock3 /><strong>Disponibilidade</strong><span>Quando precisares</span></div>
              <div><BadgePercent /><strong>Planos flexíveis</strong><span>Escolhe a configuração</span></div>
            </div>
            <div className="ref-sports-price"><strong>A partir dos preços atuais</strong><span>Consulta todos os planos e dispositivos.</span><Link href="#planos" className="ref-button">Ver planos <ChevronDown size={16} /></Link></div>
          </div>
          <div className="ref-sports-art" aria-hidden="true">
            <div className="ref-sports-art-ring" />
            <div className="ref-sports-art-tile tile-a"><Tv /></div>
            <div className="ref-sports-art-tile tile-b"><Video /></div>
            <div className="ref-sports-art-tile tile-c"><Gamepad2 /></div>
            <div className="ref-sports-art-tile tile-d"><MonitorSmartphone /></div>
          </div>
        </div>
      </section>

      <section className="ref-section ref-dark ref-coverage">
        <div className="container ref-centered">
          <SectionLabel dark>PORTUGAL</SectionLabel>
          <h2>IPTV para clientes em Portugal.</h2>
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
          <h2>Uma área preparada para avaliações reais.</h2>
          <div className="ref-review-card">
            <div className="ref-review-user"><span><UserRound /></span><div><strong>Cliente IPTVBR</strong><small>Portugal</small></div><b>★★★★★</b></div>
            <p>“O percurso é simples, os guias estão organizados e consigo perceber rapidamente qual é o caminho certo para o meu dispositivo.”</p>
            <div className="ref-review-footer"><span><BadgeCheck size={15} /> Estrutura pronta para avaliações verificadas</span><span>‹ &nbsp; • &nbsp; • &nbsp; ›</span></div>
          </div>
        </div>
      </section>

      <section className="ref-section ref-dark ref-reseller">
        <div className="container ref-reseller-inner">
          <div><SectionLabel dark>IPTV BUSINESS</SectionLabel><h2>Programa de revenda IPTV.</h2><p>Estrutura dedicada para parceiros que procuram informação de produto, planos e suporte num fluxo separado do cliente final.</p><div className="ref-tag-row"><span>IPTV Reseller</span><span>Preços de atacado</span><span>White Label</span><span>Partner</span></div><Link href="/reseller/" className="ref-button ref-button-blue">Começar como parceiro <ChevronDown size={16} /></Link></div>
          <div className="ref-reseller-art"><div /><div /><span>IPTV<br /><small>BUSINESS</small></span></div>
        </div>
      </section>

      <section className="ref-section ref-cta">
        <div className="container">
          <div className="ref-cta-main">
            <SectionLabel>COMEÇA AGORA</SectionLabel>
            <h2>Pronto para melhorar a tua experiência de TV?</h2>
            <p>Escolhe um plano ou fala diretamente connosco para orientação.</p>
            <div className="ref-actions"><WhatsAppButton message="Olá! Quero ajuda para escolher o melhor plano IPTVBR para Portugal." /><Link href="#planos" className="ref-button ref-button-outline">Ver planos</Link></div>
          </div>
          <div className="ref-news">
            <div className="ref-news-head"><SectionLabel>GUIAS & ATUALIZAÇÕES</SectionLabel><h2>Últimos conteúdos</h2></div>
            <div className="ref-news-grid">
              <Link href="/blog/" className="ref-news-card"><strong>IPTV em vários dispositivos</strong><p>Como organizar a tua utilização em casa.</p><span>Ler artigo →</span></Link>
              <Link href="/guias/" className="ref-news-card"><strong>Como instalar IPTV</strong><p>Guia prático para encontrar o caminho certo.</p><span>Ver guia →</span></Link>
              <Link href="/suporte/" className="ref-news-card"><strong>Ajuda e suporte</strong><p>Onde começar quando tens uma dúvida.</p><span>Abrir suporte →</span></Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
