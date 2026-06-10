import { Link } from "react-router-dom";

export default function Logo({ compact = false }) {
  return (
    <Link
      to="/"
      data-testid="brand-logo-link"
      className="group inline-flex items-center gap-3"
      aria-label="Emergent VPN home"
    >
      <span className="relative inline-flex h-9 w-9 items-center justify-center">
        <svg viewBox="0 0 64 64" className="h-9 w-9" aria-hidden>
          <path
            d="M32 8 L52 16 V32 C52 44 43 53 32 56 C21 53 12 44 12 32 V16 Z"
            fill="none"
            stroke="#00E5FF"
            strokeWidth="3"
            strokeLinejoin="round"
          />
          <text
            x="32"
            y="40"
            textAnchor="middle"
            fontFamily="Outfit, Inter, system-ui, sans-serif"
            fontSize="20"
            fontWeight="900"
            fill="#00E5FF"
            letterSpacing="-0.5"
          >
            EV
          </text>
        </svg>
        <span className="absolute inset-0 -z-10 rounded-full bg-cyan-400/0 blur-xl transition-all duration-300 group-hover:bg-cyan-400/30" />
      </span>
      {!compact && (
        <span className="font-display text-base font-extrabold tracking-tight text-white">
          EMERGENT<span className="text-cyan-400">VPN</span>
        </span>
      )}
    </Link>
  );
}
