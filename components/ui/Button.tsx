import Link from "next/link";
import type { ReactNode } from "react";

export function Button({
  href,
  children,
  variant = "primary",
  external = false,
}: {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost" | "premium";
  external?: boolean;
}) {
  const className = `button button-${variant}`;
  return (
    <Link
      className={className}
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
    >
      {children}
    </Link>
  );
}
