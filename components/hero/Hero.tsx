import Image from "next/image";
import Link from "next/link";
import { WhatsAppButton } from "@/components/conversion/WhatsAppButton";

export function Hero() {
  return (
    <section className="hero hero-home">
      <div className="hero-orb hero-orb-a" aria-hidden="true" />
      <div className="hero-orb hero-orb-b" aria-hidden="true" />
      <div className="hero-noise" aria-hidden="true" />
      <div className="container hero-grid">
        <div className="hero-copy hero-copy-premium">
          <div className="hero-badge"><span /> IPTV em Portugal · plataforma local</div>
          <p className="eyebrow">IPTVBR / experiência digital em pt-PT</p>
          <h1>IPTV em Portugal, com uma experiência <em>mais premium.</em></h1>
          <p className="hero-lead">
            Encontra o plano, o dispositivo, a aplicação e o guia certo num só lugar. Informação clara, navegação rápida e atendimento direto pelo WhatsApp.
          </p>
          <div className="hero-actions">
            <Link className="button button-primary button-lg" href="/precos/">Ver planos e preços</Link>
            <WhatsAppButton message="Olá, quero conhecer os planos IPTVBR e saber como funciona em Portugal." />
          </div>
          <div className="hero-microproof" aria-label="Destaques">
            <span><i>✓</i> Conteúdo pt-PT</span>
            <span><i>✓</i> Guias por dispositivo</span>
            <span><i>✓</i> Atendimento WhatsApp</span>
          </div>
        </div>

        <div className="hero-visual hero-visual-premium">
          <div className="hero-image-wrap">
            <Image
              src="/images/hero/iptvbr-living-room.webp"
              alt="Sala moderna com televisão e ambiente de streaming inspirado em Portugal"
              width={1536}
              height={1024}
              priority
              sizes="(max-width: 900px) 100vw, 56vw"
            />
            <div className="hero-image-shade" />
            <div className="hero-screen-card">
              <span>EXPERIÊNCIA IPTVBR</span>
              <strong>Escolhe onde queres assistir.</strong>
              <p>Smart TV · Fire TV · Android TV · PC · mais</p>
            </div>
            <div className="hero-chip hero-chip-top"><b>PT</b> Portugal</div>
            <div className="hero-chip hero-chip-bottom"><b>01</b> Escolher dispositivo</div>
          </div>
        </div>
      </div>
    </section>
  );
}