import Link from "next/link";

export function Logo({ compact = false }: { compact?: boolean }) {
  return (
    <Link className={`brand brand-pro${compact ? " brand-compact" : ""}`} href="/" aria-label="IPTVBR — Início">
      <span className="brand-symbol" aria-hidden="true">
        <svg viewBox="0 0 56 56" focusable="false">
          <defs>
            <linearGradient id="iptvbr-logo-g" x1="8" x2="48" y1="7" y2="49" gradientUnits="userSpaceOnUse">
              <stop stopColor="#62a6ff" />
              <stop offset="1" stopColor="#2368df" />
            </linearGradient>
          </defs>
          <rect x="2" y="2" width="52" height="52" rx="17" fill="url(#iptvbr-logo-g)" />
          <path d="M18 15v26M18 15h11c5.8 0 9 2.5 9 6.6 0 4.2-3.4 6.7-9.2 6.7H18m11 0c6.3 0 9.8 2.4 9.8 6.5 0 4-3.4 6.2-9.7 6.2H18" fill="none" stroke="#fff" strokeWidth="4.5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M38 10.5h6.5" stroke="#ffcf42" strokeWidth="3" strokeLinecap="round" />
          <path d="M38 45.5h6.5" stroke="#32d583" strokeWidth="3" strokeLinecap="round" />
        </svg>
      </span>
      <span className="brand-copy"><strong>IPTV<span>BR</span></strong><small>PORTUGAL</small></span>
    </Link>
  );
}
