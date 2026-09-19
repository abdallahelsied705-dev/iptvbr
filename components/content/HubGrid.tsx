import Link from "next/link";
import Image from "next/image";
import type { RouteDefinition } from "@/config/routes";
import { getImageAlt } from "@/config/image-seo";

function label(type: RouteDefinition["type"]) {
  switch (type) {
    case "device": return "Dispositivo";
    case "app": return "Aplicação";
    case "guide": return "Guia";
    case "support": return "Suporte";
    case "comparison": return "Comparação";
    case "blog": return "Artigo";
    case "money": return "Comercial";
    default: return "Conteúdo";
  }
}

export function HubGrid({ routes }: { routes: RouteDefinition[] }) {
  return (
    <div className="section-grid">
      {routes.map((item) => (
        <article className={`card ${item.type === "blog" && item.image ? "article-card" : ""}`} key={item.slug}>
          {item.type === "blog" && item.image ? (
            <Link className="article-card-image" href={item.slug} aria-label={`Ler ${item.title}`}>
              <Image src={item.image} alt={getImageAlt(item)} fill sizes="(max-width: 720px) 100vw, (max-width: 1100px) 50vw, 380px" />
            </Link>
          ) : null}
          <div className={item.type === "blog" && item.image ? "article-card-content" : undefined}>
            <p className="card-kicker">{label(item.type)}</p>
            <h3><Link href={item.slug}>{item.title}</Link></h3>
            <p className="muted">{item.description}</p>
            <Link className="card-link" href={item.slug}>Ler artigo <span aria-hidden="true">→</span></Link>
          </div>
        </article>
      ))}
    </div>
  );
}
