import Image from "next/image";
import Link from "next/link";
import { BadgeCheck, CheckCircle2, MessageCircle, MonitorSmartphone, Play, TvMinimal } from "lucide-react";
import { WhatsAppButton } from "@/components/conversion/WhatsAppButton";

function HeroBenefit({ icon, title, detail }: { icon: React.ReactNode; title: string; detail: string }) {
  return (
    <div className="reference-hero-benefit">
      <span>{icon}</span>
      <div><strong>{title}</strong><small>{detail}</small></div>
    </div>
  );
}

export function Hero() {
  return (
    <section className="reference-hero" aria-labelledby="hero-title">
      <div className="reference-hero-grid container">
        <div className="reference-hero-visual" aria-hidden="true">
          <Image
            src="/images/hero/iptvbr-portugal-collage.webp"
            alt=""
            fill
            priority
            sizes="(max-width: 1050px) 82vw, 500px"
            className="reference-hero-collage-image"
          />
        </div>

        <div className="reference-hero-copy">
          <div className="reference-hero-mark">
            <span />
            <strong>IPTVBR</strong>
            <small>PORTUGAL</small>
          </div>

          <p className="reference-hero-eyebrow">ENTRETENIMENTO DIGITAL PARA PORTUGAL</p>

          <h1 id="hero-title">
            O teu entretenimento IPTV, <span>num só lugar.</span>
          </h1>

          <p className="reference-hero-lead">
            Descobre planos, dispositivos, aplicações e guias num único percurso.
            Escolhe a configuração certa e fala diretamente connosco.
          </p>

          <ul className="reference-hero-bullets">
            <li><CheckCircle2 /> Planos apresentados com clareza</li>
            <li><CheckCircle2 /> Compatível com vários dispositivos</li>
            <li><CheckCircle2 /> Suporte direto pelo WhatsApp</li>
          </ul>

          <div className="reference-hero-actions">
            <Link href="#planos" className="reference-blue-button">
              <Play size={17} /> Ver planos
            </Link>
            <WhatsAppButton message="Olá! Quero conhecer os planos IPTVBR para Portugal." />
          </div>
        </div>
      </div>

      <div className="container reference-hero-proof">
        <HeroBenefit icon={<TvMinimal />} title="Vários dispositivos" detail="TV, streaming, móvel e PC" />
        <HeroBenefit icon={<BadgeCheck />} title="Guias pt-PT" detail="Instalação e configuração" />
        <HeroBenefit icon={<MessageCircle />} title="Suporte direto" detail="Atendimento pelo WhatsApp" />
        <div className="reference-hero-price">
          <span>ESCOLHE O TEU PLANO</span>
          <strong>Consulta os preços atuais</strong>
          <small>1, 2 ou 3 dispositivos</small>
        </div>
      </div>
    </section>
  );
}
