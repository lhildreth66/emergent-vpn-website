import { Link } from "react-router-dom";
import Logo from "@/components/Logo";

export default function Footer() {
  return (
    <footer
      data-testid="site-footer"
      className="border-t border-white/5 bg-[#0A0A0A]"
    >
      <div className="mx-auto max-w-7xl px-6 py-16 md:px-12">
        <div className="grid gap-12 md:grid-cols-3">
          <div>
            <Logo />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-zinc-500">
              Fast, private, and secure VPN protection built on WireGuard.
            </p>
          </div>
          <div>
            <div className="tac-label mb-4">Product</div>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  data-testid="footer-features"
                  href="/#features"
                  className="text-zinc-400 transition-colors hover:text-cyan-400"
                >
                  Features
                </a>
              </li>
              <li>
                <a
                  data-testid="footer-how"
                  href="/#how"
                  className="text-zinc-400 transition-colors hover:text-cyan-400"
                >
                  How it works
                </a>
              </li>
              <li>
                <a
                  data-testid="footer-faq"
                  href="/#faq"
                  className="text-zinc-400 transition-colors hover:text-cyan-400"
                >
                  FAQ
                </a>
              </li>
            </ul>
          </div>
          <div>
            <div className="tac-label mb-4">Legal & Support</div>
            <ul className="space-y-3 text-sm">
              <li>
                <Link
                  data-testid="footer-privacy"
                  to="/privacy"
                  className="text-zinc-400 transition-colors hover:text-cyan-400"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  data-testid="footer-support"
                  to="/support"
                  className="text-zinc-400 transition-colors hover:text-cyan-400"
                >
                  Support
                </Link>
              </li>
              <li>
                <Link
                  data-testid="footer-delete"
                  to="/delete-account"
                  className="text-zinc-400 transition-colors hover:text-cyan-400"
                >
                  Data Deletion Request
                </Link>
              </li>
              <li>
                <a
                  data-testid="footer-email"
                  href="mailto:support@emergentvpn.com"
                  className="text-zinc-400 transition-colors hover:text-cyan-400"
                >
                  support@emergentvpn.com
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="hairline mt-12" />
        <div className="mt-6 flex flex-col items-start justify-between gap-3 text-xs text-zinc-500 md:flex-row md:items-center">
          <p data-testid="footer-copyright">
            Copyright © {new Date().getFullYear()} Emergent VPN. All rights
            reserved.
          </p>
          <p className="font-mono uppercase tracking-[0.2em]">
            <span className="text-cyan-400">●</span> Encrypted by WireGuard
          </p>
        </div>
      </div>
    </footer>
  );
}
