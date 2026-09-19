import Link from "next/link";
import type { RouteDefinition } from "@/config/routes";

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
        <article className="card" key={item.slug}>
          <p className="card-kicker">{label(item.type)}</p>
          <h3>{item.title}</h3>
          <p className="muted">{item.description}</p>
          <Link className="card-link" href={item.slug}>Explorar →</Link>
        </article>
      ))}
    </div>
  );
}
