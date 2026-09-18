import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { WhatsAppButton } from "@/components/conversion/WhatsAppButton";

function Icon({ children }: { children: ReactNode }) {
  return <span className="hero-v4-icon" aria-hidden="true">{children}</span>;
}
function PlayIcon() {
  return <svg viewBox="0 0 24 24" width="18" height="18" fill="none"><path d="M8 5.5v13L19 12 8 5.5Z" fill="currentColor" /></svg>;
}
function CheckIcon() {
  return <svg viewBox="0 0 24 24" width="17" height="17" fill="none"><path d="m5 12 4 4L19 6" stroke="currentColor" strokeWidth="2.1" strokeLinecap="round" strokeLinejoin="round"/></svg>;
}
function DeviceIcon() {
  return <svg viewBox="0 0 24 24" width="18" height="18" fill="none"><rect x="3" y="4" width="13" height="9" rx="2" stroke="currentColor" strokeWidth="1.7"/><path d="M7 18h5m-7 2h9M19 8v8m-3-4h6" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round"/></svg>;
}
function ChatIcon() {
  return <svg viewBox="0 0 24 24" width="18" height="18" fill="none"><path d="M20 11.5a7.5 7.5 0 0 1-8 7.5 8.5 8.5 0 0 1-3.5-.8L4 19.5l1.3-3.5A7.4 7.4 0 0 1 4.5 12 7.5 7.5 0 1 1 20 11.5Z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round"/><path d="M8 12h.01M12 12h.01M16 12h.01" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round"/></svg>;
}

export function Hero() {
  return (
    <section className="hero hero-homepage hero-v4" aria-labelledby="hero-title">
      <div className="hero-v4-media" aria-hidden="true">
        <Image
          src="/images/hero/iptvbr-hero-background.webp"
          alt=""
          fill
          priority
          sizes="100vw"
          className="hero-v4-image"
        />
        <div className="hero-v4-scrim" />
        <div className="hero-v4-glow" />
      </div>

      <div className="container hero-v4-inner">
        <div className="hero-v4-content">
          <div className="hero-v4-kicker"><span /> IPTVBR <b>Portugal</b></div>
          <p className="hero-v4-eyebrow">Entretenimento digital, pensado para ti</p>
          <h1 id="hero-title">O teu entretenimento.<br /><em>Sem complicações.</em></h1>
          <p className="hero-v4-lead">
            Escolhe o plano, vê os dispositivos compatíveis e encontra o guia certo.
            Tudo num percurso simples, com apoio direto pelo WhatsApp.
          </p>

          <div className="hero-v4-actions">
            <Link className="button button-primary button-large hero-v4-primary" href="#planos">
              <PlayIcon /> Ver planos
            </Link>
            <WhatsAppButton message="Olá! Quero conhecer os planos IPTVBR para Portugal." />
          </div>

          <div className="hero-v4-benefits" aria-label="Vantagens">
            <div><Icon><CheckIcon /></Icon><span><strong>Planos flexíveis</strong><small>1 a 3 dispositivos</small></span></div>
            <div><Icon><DeviceIcon /></Icon><span><strong>Multi-dispositivo</strong><small>TV, mobile, streaming e PC</small></span></div>
            <div><Icon><ChatIcon /></Icon><span><strong>Suporte direto</strong><small>Atendimento pelo WhatsApp</small></span></div>
          </div>
        </div>

        <div className="hero-v4-showcase" aria-label="Destaques IPTVBR">
          <div className="hero-v4-panel">
            <div className="hero-v4-panel-top">
              <div><span className="hero-v4-dot" /> Disponível em Portugal</div>
              <span className="hero-v4-panel-tag">PT-PT</span>
            </div>
            <div className="hero-v4-panel-main">
              <span className="hero-v4-panel-eyebrow">A partir de</span>
              <strong>€14,99</strong>
              <span className="hero-v4-panel-copy">plano de referência · 1 dispositivo</span>
            </div>
            <div className="hero-v4-panel-divider" />
            <div className="hero-v4-panel-grid">
              <div><b>1–3</b><span>dispositivos</span></div>
              <div><b>Guias</b><span>pt-PT</span></div>
              <div><b>WhatsApp</b><span>suporte</span></div>
            </div>
          </div>

          <div className="hero-v4-float hero-v4-float-top"><span className="hero-v4-status-dot" /> Atendimento <b>WhatsApp</b></div>
          <div className="hero-v4-float hero-v4-float-bottom"><span>4K</span><div><b>Qualidade</b><small>quando disponível</small></div></div>
        </div>
      </div>

      <div className="container hero-v4-bottom">
        <div className="hero-v4-bottom-item"><span>01</span><div><b>Escolhe o plano</b><small>Duração e dispositivos</small></div></div>
        <div className="hero-v4-bottom-line" />
        <div className="hero-v4-bottom-item"><span>02</span><div><b>Fala connosco</b><small>Pedido preparado no WhatsApp</small></div></div>
        <div className="hero-v4-bottom-line" />
        <div className="hero-v4-bottom-item"><span>03</span><div><b>Segue o guia</b><small>Instalação e configuração</small></div></div>
        <div className="hero-v4-bottom-note">IPTVBR <span>•</span> Portugal</div>
      </div>
    </section>
  );
}
