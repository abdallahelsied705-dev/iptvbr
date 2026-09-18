import type { ReactNode } from "react";
import { Container } from "@/components/ui/Container";

export function Section({
  eyebrow,
  title,
  description,
  children,
  className = "",
  id,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  children?: ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={`section ${className}`.trim()}>
      <Container>
        {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
        <h2>{title}</h2>
        {description ? <p className="section-lead">{description}</p> : null}
        {children}
      </Container>
    </section>
  );
}