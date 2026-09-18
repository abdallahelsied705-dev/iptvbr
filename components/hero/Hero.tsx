import Image from "next/image";
import Link from "next/link";
import { WhatsAppButton } from "@/components/conversion/WhatsAppButton";

export function Hero() {
  return (
    <section className="hero hero-premium">
      <div className="hero-bg-image" aria-hidden="true" />
      <div className="hero-grid-lines" aria-hidden="true" />
      <div className="hero-glow hero-glow-a" aria-hidden="true" />
      <div className="hero-glow hero-glow-b" aria-hidden="true" />
      <div className="container hero-grid">
        <div className="hero-copy hero-copy-premium">
          <div className="hero-badge"><span /> IPTV PORTUGAL · IPTVBR</div>
          <p className="eyebrow">Entretenimento digital, sem complicações.</p>
          <h1>O teu entretenimento. <em>Num só lugar.</em></h1>
          <p className="hero-lead">Explora planos flexíveis, encontra a melhor configuração para o teu dispositivo e fala connosco diretamente pelo WhatsApp.</p>
          <div className="hero-actions">
            <Link className="button button-primary button-large" href="#planos">Ver planos IPTV</Link>
            <WhatsAppButton message="Olá! Quero conhecer os planos IPTVBR para Portugal." />
          </div>
          <div className="hero-proof-row hero-proof-premium" aria-label="Principais vantagens">
            <span><strong>HD / 4K</strong> quando disponível</span>
            <span><strong>Multi-device</strong> por plano</span>
            <span><strong>WhatsApp</strong> atendimento direto</span>
          </div>
        </div>
        <div className="hero-visual hero-visual-premium">
          <div className="hero-media-card">
            <Image src="/images/hero/iptvbr-premium-living-room.webp" alt="Sala moderna com televisão e ambiente de streaming" width={1536} height={1024} priority sizes="(max-width: 900px) 100vw, 55vw" />
            <div className="hero-media-shade" />
            <div className="hero-media-top"><span>IPTVBR</span><span className="live-dot"><i /> LIVE EXPERIENCE</span></div>
            <div className="hero-media-bottom"><span>PORTUGAL</span><strong>Escolhe. Liga. Assiste.</strong><p>Guias, dispositivos, apps e suporte num único percurso.</p></div>
          </div>
          <div className="hero-floating-card hero-floating-price"><span>DESDE</span><strong>€14,99</strong><small>referência · 1 dispositivo</small></div>
          <div className="hero-floating-card hero-floating-support"><span>SUPORTE</span><strong>WhatsApp</strong><small>resposta direta</small></div>
        </div>
      </div>
    </section>
  );
}