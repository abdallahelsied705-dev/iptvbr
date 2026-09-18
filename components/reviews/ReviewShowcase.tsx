const reviews = [
  { initials: "JR", name: "João R.", place: "Lisboa", text: "Gostei da forma como tudo está explicado. Escolhi o dispositivo e falei com o suporte sem perder tempo." },
  { initials: "MS", name: "Mariana S.", place: "Porto", text: "A navegação é simples e o contacto pelo WhatsApp torna o pedido muito mais direto." },
  { initials: "CM", name: "Carlos M.", place: "Braga", text: "Os guias são claros e ajudam a perceber qual a app mais adequada para o equipamento." },
];

export function ReviewShowcase() {
  return (
    <div className="reviews-showcase">
      <div className="reviews-summary">
        <span className="review-stars">★★★★★</span>
        <strong>Experiência construída para clientes reais.</strong>
        <p>Exemplos visuais de avaliação. Substitui por avaliações verificadas quando estiverem disponíveis.</p>
      </div>
      <div className="reviews-grid">
        {reviews.map((review) => <article className="review-card" key={review.name}><div className="review-head"><span className="review-avatar">{review.initials}</span><div><strong>{review.name}</strong><span>{review.place}</span></div><span className="verified-pill">exemplo</span></div><div className="review-rating">★★★★★</div><p>“{review.text}”</p></article>)}
      </div>
    </div>
  );
}