import { PLAY_STORE_URL } from "@/lib/constants";

export default function PlayStoreButton({ variant = "primary", testId }) {
  const base =
    "group inline-flex items-center gap-3 rounded-sm px-6 py-4 transition-all";
  const styles =
    variant === "primary"
      ? `${base} bg-cyan-400 text-black hover:bg-cyan-300 shadow-[0_0_40px_-10px_rgba(0,229,255,0.7)]`
      : `${base} border border-zinc-700 text-white bg-transparent hover:border-cyan-400 hover:text-cyan-300`;

  return (
    <a
      data-testid={testId || "play-store-btn"}
      href={PLAY_STORE_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={styles}
    >
      <svg
        viewBox="0 0 24 24"
        className="h-7 w-7"
        aria-hidden
        fill="currentColor"
      >
        <path d="M3.6 1.7C3.2 2 3 2.5 3 3.2v17.6c0 .7.2 1.2.6 1.5l9.5-9.5L3.6 1.7z" />
        <path d="m14.7 11.2 2.8-2.8L5.2 1.1c-.4-.2-.8-.2-1.1-.1l10.6 10.2z" />
        <path d="m14.7 12.8-10.6 10.2c.3.1.7.1 1.1-.1l12.3-7.3-2.8-2.8z" />
        <path d="m20.9 10.6-3.4-2-3.1 3 3.1 3 3.4-2c1-.6 1-2.4 0-3z" />
      </svg>
      <div className="text-left leading-tight">
        <div className="font-mono text-[10px] uppercase tracking-[0.18em] opacity-80">
          Download on
        </div>
        <div className="font-display text-base font-extrabold tracking-tight">
          Google Play
        </div>
      </div>
    </a>
  );
}
