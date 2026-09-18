import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { WhatsAppButton } from "@/components/conversion/WhatsAppButton";

function FeatureIcon({ children }: { children: ReactNode }) {
  return <span className="hero-feature-icon" aria-hidden="true">{children}</span>;
}

function PlayIcon() {
  return <svg viewBox="0 0 24 24" width="18" height="18" fill="none" aria-hidden="true"><path d="M8 5.5v13L19 12 8 5.5Z" fill="currentColor" /></svg>;
}

function DeviceIcon() {
  return <svg viewBox="0 0 24 24" width="20" height="20" fill="none" aria-hidden="true"><rect x="3" y="4" width="12" height="9" rx="2" stroke="currentColor" strokeWidth="1.8"/><path d="M7 18h4m-6 2h8m8-10h-5m5 0v7m0-7-5 4m5-4-5-4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>;
}

function ChannelsIcon() {
  return <svg viewBox="0 0 24 24" width="20" height="20" fill="none" aria-hidden="true"><rect x="3" y="6" width="18" height="12" rx="2" stroke="currentColor" strokeWidth="1.8"/><path d="m8 3 4 3 4-3M8 10h8M8 14h5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/></svg>;
}

function SupportIcon() {
  return <svg viewBox="0 0 24 24" width="20" height="20" fill="none" aria-hidden="true"><path d="M4 12a8 8 0 0 1 16 0" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/><path d="M4 13v3.5a2 2 0 0 0 2 2h1.5V12H5a1 1 0 0 0-1 1Zm16 0v3.5a2 2 0 0 1-2 2h-1.5V12H19a1 1 0 0 1 1 1Z" stroke="currentColor" strokeWidth="1.8"/><path d="M9 20h6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/></svg>;
}

export function Hero() {
  return (
    <section className="hero hero-homepage" aria-labelledby="hero-title">
      <div className="hero-background" aria-hidden="true">
        <Image
          src="/images/hero/iptvbr-hero-background.webp"
          alt=""
          fill
          priority
          sizes="100vw"
          className="hero-background-image"
        />
      </div>
      <div className="hero-background-overlay" aria-hidden="true" />
      <div className="hero-vignette" aria-hidden="true" />
      <div className="hero-light-orb hero-light-orb-a" aria-hidden="true" />
      <div className="hero-light-orb hero-light-orb-b" aria-hidden="true" />

      <div className="container hero-home-inner">
        <div className="hero-home-copy">
          <div className="hero-badge hero-badge-live"><span /> IPTVBR · IPTV em Portugal</div>
          <p className="eyebrow">Entretenimento digital, sem complicações</p>
          <h1 id="hero-title">O teu entretenimento.<br /><em>Num só lugar.</em></h1>
          <p className="hero-home-lead">Encontra planos, dispositivos, aplicações e guias num único percurso. Escolhe a configuração certa e fala diretamente connosco pelo WhatsApp.</p>

          <div className="hero-home-actions">
            <Link className="button button-primary button-large hero-cta-glow" href="#planos">
              <PlayIcon />
              Ver planos
            </Link>
            <WhatsAppButton message="Olá! Quero conhecer os planos IPTVBR para Portugal." />
          </div>

          <div className="hero-feature-row" aria-label="Principais vantagens">
            <div className="hero-feature-item"><FeatureIcon><ChannelsIcon /></FeatureIcon><div><strong>Planos flexíveis</strong><span>Escolhe duração e dispositivos</span></div></div>
            <div className="hero-feature-item"><FeatureIcon><DeviceIcon /></FeatureIcon><div><strong>Vários dispositivos</strong><span>TV, streaming, móvel e PC</span></div></div>
            <div className="hero-feature-item"><FeatureIcon><SupportIcon /></FeatureIcon><div><strong>Suporte direto</strong><span>Atendimento pelo WhatsApp</span></div></div>
          </div>
        </div>

        <div className="hero-scene-overlay" aria-hidden="true">
          <div className="hero-floating-info hero-floating-info-price">
            <span>A partir de</span>
            <strong>€14,99</strong>
            <small>plano de referência · 1 dispositivo</small>
          </div>
          <div className="hero-floating-info hero-floating-info-support">
            <span><i /> Atendimento</span>
            <strong>WhatsApp</strong>
            <small>fala connosco diretamente</small>
          </div>
          <div className="hero-scene-badge"><span className="hero-scene-badge-icon">4K</span><div><strong>Qualidade</strong><small>quando disponível</small></div></div>
        </div>
      </div>

      <div className="hero-bottom-trust container">
        <div className="hero-trust-item"><strong>Guias pt-PT</strong><span>Instalação e suporte por dispositivo</span></div>
        <div className="hero-trust-item"><strong>Apps compatíveis</strong><span>Orientação para o teu fluxo de utilização</span></div>
        <div className="hero-trust-item"><strong>Compra orientada</strong><span>O pedido começa diretamente no WhatsApp</span></div>
        <div className="hero-scroll-cue" aria-hidden="true"><span /> Explorar</div>
      </div>
    </section>
  );
}