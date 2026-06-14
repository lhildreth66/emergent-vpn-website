import { Link } from "react-router-dom";
import Logo from "@/components/Logo";
import { PLAY_STORE_URL } from "@/lib/constants";

export default function Header() {
  return (
    <header
      data-testid="site-header"
      className="sticky top-0 z-50 w-full border-b border-white/5 bg-[#0A0A0A]/80 backdrop-blur-xl"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-12">
        <Logo />
        <nav className="hidden items-center gap-8 md:flex">
          <a
            data-testid="nav-features"
            href="/#features"
            className="font-mono text-xs uppercase tracking-[0.2em] text-zinc-400 transition-colors hover:text-cyan-400"
          >
            Features
          </a>
          <a
            data-testid="nav-how"
            href="/#how"
            className="font-mono text-xs uppercase tracking-[0.2em] text-zinc-400 transition-colors hover:text-cyan-400"
          >
            How it works
          </a>
          <a
            data-testid="nav-faq"
            href="/#faq"
            className="font-mono text-xs uppercase tracking-[0.2em] text-zinc-400 transition-colors hover:text-cyan-400"
          >
            FAQ
          </a>
          <Link
            data-testid="nav-privacy"
            to="/privacy"
            className="font-mono text-xs uppercase tracking-[0.2em] text-zinc-400 transition-colors hover:text-cyan-400"
          >
            Privacy
          </Link>
          <Link
            data-testid="nav-support"
            to="/support"
            className="font-mono text-xs uppercase tracking-[0.2em] text-zinc-400 transition-colors hover:text-cyan-400"
          >
            Support
          </Link>
        </nav>
        <a
          data-testid="header-download-btn"
          href={PLAY_STORE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden rounded-sm bg-cyan-400 px-5 py-2.5 font-mono text-[11px] font-bold uppercase tracking-[0.18em] text-black shadow-[0_0_30px_-8px_rgba(0,229,255,0.7)] transition-all hover:bg-cyan-300 sm:inline-flex"
        >
          Get the App
        </a>
      </div>
    </header>
  );
}
