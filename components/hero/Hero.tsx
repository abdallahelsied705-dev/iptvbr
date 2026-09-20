import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BadgeCheck, CheckCircle2, MessageCircle, TvMinimal } from "lucide-react";
import { WhatsAppButton } from "@/components/conversion/WhatsAppButton";

function HeroBenefit({ icon, title, detail }: { icon: React.ReactNode; title: string; detail: string }) {
  return <div className="reference-hero-benefit">
    <span>{icon}</span><div><strong>{title}</strong><small>{detail}</small></div>
  </div>;
}

function HeroActions({ mobile = false }: { mobile?: boolean }) {
  return <div className={`reference-hero-actions${mobile ? " reference-hero-actions-mobile" : ""}`}>
    <Link href="#planos" className="reference-blue-button"><span className="hero-cta-icon"><ArrowRight size={18} /></span><span className="button-copy"><strong>Ver planos</strong><small>Comparar opções</small></span></Link>
    <WhatsAppButton message="Olá! Quero conhecer os planos IPTVBR para Portugal." detail="Resposta rápida" />
  </div>;
}

export function Hero() {
  return <section className="reference-hero" aria-labelledby="hero-title">
    <div className="container reference-hero-grid">
      <div className="reference-hero-collage">
        <Image
          className="reference-hero-collage-image"
          src="/images/hero/iptv-portugal-entertainment-collage.webp"
          alt="Entretenimento IPTV em Portugal com futebol, televisão, costa portuguesa e cinema em casa"
          fill
          priority
          quality={80}
          sizes="(max-width: 720px) 335px, (max-width: 1050px) 390px, 430px"
        />
        <div className="reference-hero-circle"><strong>IPTV</strong><span>PORTUGAL</span><small>7 anos de experiência</small></div>
      </div>

      <div className="reference-hero-copy">
        <div className="reference-hero-mark"><span /><strong>IPTVBR</strong><small>PORTUGAL</small></div>
        <p className="reference-hero-eyebrow">ENTRETENIMENTO DIGITAL PARA PORTUGAL</p>
        <h1 id="hero-title">O teu entretenimento IPTV, <span>num só lugar.</span></h1>
        <p className="reference-hero-lead">Escolhe o teu plano, encontra a configuração certa e segue os guias para o teu dispositivo. Um percurso simples, em português de Portugal.</p>
        <ul className="reference-hero-bullets">
          <li><CheckCircle2 /> Planos apresentados com clareza</li>
          <li><CheckCircle2 /> Compatibilidade com vários dispositivos</li>
          <li><CheckCircle2 /> Suporte direto pelo WhatsApp</li>
        </ul>
        <HeroActions />
      </div>
      <HeroActions mobile />
    </div>

    <div className="container reference-hero-proof">
      <HeroBenefit icon={<TvMinimal />} title="Vários dispositivos" detail="TV, streaming, móvel e PC" />
      <HeroBenefit icon={<BadgeCheck />} title="Guias pt-PT" detail="Instalação e configuração" />
      <HeroBenefit icon={<MessageCircle />} title="Suporte direto" detail="Atendimento pelo WhatsApp" />
      <div className="reference-hero-price"><span>A partir dos</span><strong>preços atuais</strong><small>Consulta os planos abaixo</small></div>
    </div>
  </section>;
}
