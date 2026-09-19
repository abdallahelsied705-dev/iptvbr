"use client";

import Link from "next/link";
import { useEffect, useId, useState } from "react";
import { navigation } from "@/config/navigation";

export function MobileMenu() {
  const [open, setOpen] = useState(false);
  const menuId = useId();

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  return (
    <div className="mobile-menu">
      <button
        className="menu-trigger"
        type="button"
        aria-expanded={open}
        aria-controls={menuId}
        onClick={() => setOpen((value) => !value)}
      >
        <span>{open ? "Fechar" : "Menu"}</span>
      </button>

      {open ? (
        <div id={menuId} className="mobile-menu-panel">
          <nav aria-label="Navegação móvel">
            <ul className="mobile-nav-list">
              {navigation.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} onClick={() => setOpen(false)}>
                    {item.label}
                  </Link>
                  {item.children?.length ? <div className="mobile-subnav">{item.children.map((child) => <Link href={child.href} key={child.href} onClick={() => setOpen(false)}>{child.label}</Link>)}</div> : null}
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
      ) : null}
    </div>
  );
}
