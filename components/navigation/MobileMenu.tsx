"use client";

import Link from "next/link";
import { useEffect, useId, useState } from "react";
import { navigation } from "@/config/navigation";

export function MobileMenu() {
  const [open, setOpen] = useState(false);
  const menuId = useId();

  useEffect(() => {
    if (!open) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <div className={`mobile-menu${open ? " is-open" : ""}`}>
      <button
        className="menu-trigger"
        type="button"
        aria-expanded={open}
        aria-controls={menuId}
        onClick={() => setOpen((value) => !value)}
      >
        <span>{open ? "Fechar" : "Menu"}</span>
        <svg aria-hidden="true" viewBox="0 0 20 20"><path d={open ? "M5 5l10 10M15 5 5 15" : "M3 6h14M3 10h14M3 14h14"} /></svg>
      </button>

      {open ? (
        <>
        <button className="mobile-menu-backdrop" type="button" aria-label="Fechar menu" onClick={() => setOpen(false)} />
        <div id={menuId} className="mobile-menu-panel">
          <div className="mobile-menu-heading"><span>NAVEGAÇÃO</span><strong>Explora a IPTVBR</strong></div>
          <nav aria-label="Navegação móvel">
            <ul className="mobile-nav-list">
              {navigation.map((item) => (
                <li key={item.href}>
                  {item.children?.length ? (
                    <details>
                      <summary>{item.label}<span aria-hidden="true">⌄</span></summary>
                      <div className="mobile-subnav">
                        <Link className="mobile-parent-link" href={item.href} onClick={() => setOpen(false)}>Ver todos</Link>
                        {item.children.map((child) => <Link href={child.href} key={child.href} onClick={() => setOpen(false)}>{child.label}</Link>)}
                      </div>
                    </details>
                  ) : <Link href={item.href} onClick={() => setOpen(false)}>{item.label}</Link>}
                </li>
              ))}
              <li>
                <Link className="button button-primary" href="/precos/" onClick={() => setOpen(false)}>
                  Ver preços
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        </>
      ) : null}
    </div>
  );
}
