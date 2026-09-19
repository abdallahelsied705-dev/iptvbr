export function ContentBriefMeta({
  min,
  max,
}: {
  min: number;
  max: number;
}) {
  return (
    <p className="content-depth-note">
      Conteúdo editorial alvo: {min.toLocaleString("pt-PT")}–{max.toLocaleString("pt-PT")} palavras, ajustado à intenção e à complexidade real do tema.
    </p>
  );
}
