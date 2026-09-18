import Link from "next/link";

export function Logo({ compact = false }: { compact?: boolean }) {
  return (
    <Link className={`brand brand-pro${compact ? " brand-compact" : ""}`} href="/" aria-label="IPTVBR — Início">
      <span className="brand-logo" aria-hidden="true">
        <svg viewBox="0 0 48 48" role="img">
          <defs>
            <linearGradient id="iptvbr-logo-g" x1="8" x2="40" y1="8" y2="40" gradientUnits="userSpaceOnUse">
              <stop stopColor="#67d1ff" />
              <stop offset="1" stopColor="#1fb6ff" />
            </linearGradient>
          </defs>
          <rect x="1" y="1" width="46" height="46" rx="14" fill="#07111f" stroke="rgba(103,209,255,.35)" />
          <path d="M16 12.5v23" stroke="#f4f8fc" strokeWidth="4" strokeLinecap="round" />
          <path d="M22 13.5 35.5 24 22 34.5V13.5Z" fill="url(#iptvbr-logo-g)" />
          <circle cx="36.5" cy="12" r="3.3" fill="#d4a94a" />
        </svg>
      </span>
      <span className="brand-copy"><strong>IPTVBR</strong><small>PORTUGAL</small></span>
    </Link>
  );
}