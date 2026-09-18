export function ReviewShowcase() {
  return (
    <div className="review-panel">
      <div className="review-rating-head">
        <div>
          <p className="card-kicker">Avaliações</p>
          <h3>Uma secção pronta para receber testemunhos reais.</h3>
        </div>
        <div className="review-score" aria-label="Avaliações reais pendentes">
          <span>★★★★★</span>
          <small>avaliações reais a publicar</small>
        </div>
      </div>
      <div className="review-grid">
        <article className="review-card review-placeholder">
          <span className="review-avatar">01</span>
          <div><strong>Primeiro testemunho</strong><p>Avaliação de cliente a inserir depois do lançamento.</p></div>
        </article>
        <article className="review-card review-placeholder">
          <span className="review-avatar">02</span>
          <div><strong>Experiência de suporte</strong><p>Espaço reservado para uma opinião verificada sobre o atendimento.</p></div>
        </article>
        <article className="review-card review-placeholder">
          <span className="review-avatar">03</span>
          <div><strong>Qualidade da experiência</strong><p>Adicionar apenas testemunhos reais e autorizados pelo cliente.</p></div>
        </article>
      </div>
    </div>
  );
}