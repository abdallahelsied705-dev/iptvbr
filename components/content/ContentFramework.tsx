import { Section } from "@/components/ui/Section";

export function ContentFramework({
  takeaways,
  steps,
  entities,
  variant = "default",
}: {
  takeaways: string[];
  steps: string[];
  entities: string[];
  variant?: "default" | "article";
}) {
  return (
    <Section
      eyebrow={variant === "article" ? "Resumo do artigo" : "Leitura guiada"}
      title={variant === "article" ? "O que vais aprender." : "O essencial antes de avançar."}
      description={variant === "article" ? "Pontos específicos deste guia e o percurso de leitura recomendado." : "Uma estrutura rápida para perceber o tema, validar os pontos importantes e chegar ao próximo passo sem ruído."}
      className="section-surface"
    >
      <div className={`content-framework-grid ${variant === "article" ? "content-framework-article" : ""}`}>
        {variant !== "article" ? <div className="framework-card">
          <p className="card-kicker">Pontos-chave</p>
          <ul className="framework-list">
            {takeaways.map((item) => <li key={item}>{item}</li>)}
          </ul>
        </div> : null}
        <div className="framework-card">
          <p className="card-kicker">Percurso</p>
          <ol className="framework-steps">
            {steps.map((item, index) => (
              <li key={item}>
                <span aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
                <strong>{item}</strong>
              </li>
            ))}
          </ol>
        </div>
        <div className="framework-card">
          <p className="card-kicker">Entidades</p>
          <div className="entity-pills">
            {entities.map((entity) => <span key={entity}>{entity}</span>)}
          </div>
        </div>
      </div>
    </Section>
  );
}
