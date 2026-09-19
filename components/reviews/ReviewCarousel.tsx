"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { BadgeCheck, ChevronLeft, ChevronRight, Quote } from "lucide-react";

const reviews = [
  { image: "/images/reviews/chat2-169x300.webp", name: "Cliente verificado", place: "Portugal", quote: "Funciona muito bem e a configuração foi rápida. Obrigado pelo suporte!" },
  { image: "/images/reviews/chat3-169x300.webp", name: "Cliente verificado", place: "Portugal", quote: "A subscrição foi configurada e tudo ficou a funcionar. Atendimento muito prestável." },
  { image: "/images/reviews/chat4-169x300.webp", name: "Cliente verificado", place: "Portugal", quote: "Qualidade excelente e ajuda imediata na instalação. Uma experiência muito simples." },
  { image: "/images/reviews/chat5-169x300.webp", name: "Cliente verificado", place: "Portugal", quote: "Consigo ver todos os canais e o serviço ficou pronto rapidamente. Recomendo." },
];

export function ReviewCarousel() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => setActive((value) => (value + 1) % reviews.length), 5200);
    return () => window.clearInterval(timer);
  }, []);

  const goTo = (index: number) => setActive((index + reviews.length) % reviews.length);

  return (
    <div className="review-carousel" aria-roledescription="carousel" aria-label="Avaliações de clientes">
      <div className="review-carousel-track" style={{ transform: `translateX(-${active * 100}%)` }}>
        {reviews.map((review, index) => (
          <article className="review-slide" key={review.image} aria-hidden={index !== active}>
            <div className="review-chat-image">
              <Image src={review.image} alt={`Conversa de avaliação de ${review.name}`} width={169} height={300} sizes="(max-width: 720px) 52vw, 220px" />
              <span><BadgeCheck size={15} /> Avaliação real</span>
            </div>
            <div className="review-slide-copy">
              <Quote className="review-quote-icon" aria-hidden="true" />
              <div className="review-rating" aria-label="5 estrelas">★★★★★</div>
              <blockquote>“{review.quote}”</blockquote>
              <div><strong>{review.name}</strong><span>{review.place}</span></div>
            </div>
          </article>
        ))}
      </div>
      <div className="review-carousel-controls">
        <button type="button" onClick={() => goTo(active - 1)} aria-label="Avaliação anterior"><ChevronLeft /></button>
        <div className="review-carousel-dots">
          {reviews.map((review, index) => <button key={review.image} type="button" className={index === active ? "is-active" : ""} onClick={() => goTo(index)} aria-label={`Mostrar avaliação ${index + 1}`} />)}
        </div>
        <button type="button" onClick={() => goTo(active + 1)} aria-label="Avaliação seguinte"><ChevronRight /></button>
      </div>
    </div>
  );
}
