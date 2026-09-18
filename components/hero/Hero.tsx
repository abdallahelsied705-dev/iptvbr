import Image from "next/image";
import Link from "next/link";
import {
  BadgeCheck,
  CheckCircle2,
  MessageCircle,
  MonitorSmartphone,
  Play,
  TvMinimal,
} from "lucide-react";
import { WhatsAppButton } from "@/components/conversion/WhatsAppButton";

function Benefit({
  icon,
  title,
  detail,
}: {
  icon: React.ReactNode;
  title: string;
  detail: string;
}) {
  return (
    <div className="hero-pro-benefit">
      <span className="hero-pro-benefit-icon" aria-hidden="true">{icon}</span>
      <span className="hero-pro-benefit-copy">
        <strong>{title}</strong>
        <small>{detail}</small>
      </span>
    </div>
  );
}

export function Hero() {
  return (
    <section className="hero hero-pro" aria-labelledby="hero-title">
      <div className="hero-pro-bg" aria-hidden="true">
        <Image
          src="/images/hero/iptvbr-hero-background.webp"
          alt=""
          fill
          priority
          sizes="100vw"
          className="hero-pro-bg-image"
        />
        <div className="hero-pro-overlay" />
      </div>

      <div className="container hero-pro-inner">
        <div className="hero-pro-copy">
          <div className="hero-pro-badge">
            <span className="hero-pro-badge-dot" />
            IPTVBR <b>Portugal</b>
          </div>

          <p className="hero-pro-eyebrow">Entretenimento digital para Portugal</p>

          <h1 id="hero-title">
            O teu entretenimento.
            <span>Num só lugar.</span>
          </h1>

          <p className="hero-pro-lead">
            Planos, dispositivos, aplicações e guias num percurso simples.
            Escolhe como queres ver e fala connosco diretamente pelo WhatsApp.
          </p>

          <div className="hero-pro-actions">
            <Link className="button button-primary hero-pro-primary" href="#planos">
              <Play size={18} strokeWidth={2.4} aria-hidden="true" />
              Ver planos
            </Link>
            <WhatsAppButton message="Olá! Quero conhecer os planos IPTVBR para Portugal." />
          </div>

          <div className="hero-pro-divider" />

          <div className="hero-pro-benefits" aria-label="Principais vantagens">
            <Benefit
              icon={<CheckCircle2 size={18} strokeWidth={2} />}
              title="Planos flexíveis"
              detail="1 a 3 dispositivos"
            />
            <Benefit
              icon={<MonitorSmartphone size={18} strokeWidth={2} />}
              title="Multi-dispositivo"
              detail="TV, mobile, streaming e PC"
            />
            <Benefit
              icon={<MessageCircle size={18} strokeWidth={2} />}
              title="Suporte direto"
              detail="Atendimento pelo WhatsApp"
            />
          </div>
        </div>

        <div className="hero-pro-visual" aria-label="Informação do serviço">
          <div className="hero-pro-visual-glow" aria-hidden="true" />

          <div className="hero-pro-card">
            <div className="hero-pro-card-head">
              <div className="hero-pro-card-brand">
                <span className="hero-pro-card-mark"><TvMinimal size={16} strokeWidth={2.2} /></span>
                <span>
                  <strong>IPTVBR</strong>
                  <small>ENTRETENIMENTO EM PORTUGAL</small>
                </span>
              </div>
              <span className="hero-pro-live">
                <span /> DISPONÍVEL
              </span>
            </div>

            <div className="hero-pro-card-body">
              <span className="hero-pro-card-kicker">A PARTIR DE</span>
              <strong className="hero-pro-price">€14,99</strong>
              <p>Configuração de referência · 1 dispositivo</p>

              <div className="hero-pro-card-rule" />

              <div className="hero-pro-card-list">
                <div>
                  <BadgeCheck size={17} aria-hidden="true" />
                  <span><b>Guias pt-PT</b><small>Instalação e configuração</small></span>
                </div>
                <div>
                  <BadgeCheck size={17} aria-hidden="true" />
                  <span><b>Vários dispositivos</b><small>Escolhe a tua configuração</small></span>
                </div>
                <div>
                  <BadgeCheck size={17} aria-hidden="true" />
                  <span><b>WhatsApp</b><small>Pedido e suporte direto</small></span>
                </div>
              </div>
            </div>

            <div className="hero-pro-card-bottom">
              <span><i /> PT-PT</span>
              <span>1–3 dispositivos</span>
              <span>Suporte direto</span>
            </div>
          </div>
        </div>
      </div>

      <div className="container hero-pro-bottom">
        <div>
          <span>01</span>
          <b>Escolhe o plano</b>
          <small>Duração e dispositivos</small>
        </div>
        <div>
          <span>02</span>
          <b>Fala connosco</b>
          <small>Pedido preparado no WhatsApp</small>
        </div>
        <div>
          <span>03</span>
          <b>Instala e começa</b>
          <small>Segue o guia do teu dispositivo</small>
        </div>
      </div>
    </section>
  );
}
