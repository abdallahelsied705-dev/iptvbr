import Link from "next/link";

export default function NotFound() {
  return (
    <main id="main-content" className="section">
      <div className="container">
        <p className="eyebrow">404</p>
        <h1>Página não encontrada</h1>
        <p className="muted">O conteúdo que procura pode ter sido movido ou ainda não foi publicado.</p>
        <div className="hero-actions">
          <Link className="button button-primary" href="/">Voltar ao início</Link>
          <Link className="button" href="/suporte/">Abrir suporte</Link>
        </div>
      </div>
    </main>
  );
}
