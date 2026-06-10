import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { SUPPORT_EMAIL } from "@/lib/constants";

const LAST_UPDATED = "December 1, 2025";

const COLLECT = [
  "Email address",
  "Account information",
  "Subscription status",
  "Basic diagnostic information",
];

const DONT_COLLECT = [
  "Browsing history",
  "VPN traffic content",
  "Messages",
  "Photos",
  "Files",
  "Keystrokes",
];

const USE = [
  "Account management",
  "Subscription verification",
  "Service operation",
  "Customer support",
];

const SECURITY = ["Industry standard encryption", "Secure account management"];

export default function Privacy() {
  useEffect(() => {
    document.title = "Privacy Policy — Emergent VPN";
  }, []);

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white">
      <Header />
      <main className="mx-auto max-w-3xl px-6 py-20 md:px-12 md:py-28">
        <div className="tac-label mb-4">// LEGAL</div>
        <h1
          data-testid="privacy-title"
          className="font-display text-4xl font-black tracking-tighter sm:text-5xl"
        >
          Privacy Policy
        </h1>
        <p className="mt-4 font-mono text-xs uppercase tracking-[0.18em] text-zinc-500">
          Last updated: {LAST_UPDATED}
        </p>

        <div className="hairline my-12" />

        <Section title="Information We Collect">
          <ul className="space-y-2">
            {COLLECT.map((i) => (
              <Item key={i}>{i}</Item>
            ))}
          </ul>
        </Section>

        <Section title="Information We Do Not Collect">
          <ul className="space-y-2">
            {DONT_COLLECT.map((i) => (
              <Item key={i} negative>
                {i}
              </Item>
            ))}
          </ul>
        </Section>

        <Section title="How Information Is Used">
          <ul className="space-y-2">
            {USE.map((i) => (
              <Item key={i}>{i}</Item>
            ))}
          </ul>
        </Section>

        <Section title="Data Security">
          <ul className="space-y-2">
            {SECURITY.map((i) => (
              <Item key={i}>{i}</Item>
            ))}
          </ul>
        </Section>

        <Section title="Contact Information">
          <p className="text-base leading-relaxed text-zinc-400">
            Questions about this Privacy Policy? Contact us at{" "}
            <a
              data-testid="privacy-email"
              href={`mailto:${SUPPORT_EMAIL}`}
              className="text-cyan-400 hover:underline"
            >
              {SUPPORT_EMAIL}
            </a>
            .
          </p>
        </Section>

        <div className="hairline my-12" />
        <p className="font-mono text-xs uppercase tracking-[0.18em] text-zinc-500">
          Last updated: {LAST_UPDATED}
        </p>
      </main>
      <Footer />
    </div>
  );
}

function Section({ title, children }) {
  return (
    <section className="mb-12">
      <h2 className="font-display text-2xl font-bold tracking-tight text-white">
        {title}
      </h2>
      <div className="mt-5">{children}</div>
    </section>
  );
}

function Item({ children, negative = false }) {
  return (
    <li className="flex items-start gap-3 text-base leading-relaxed text-zinc-300">
      <span
        aria-hidden
        className={`mt-2 inline-block h-1.5 w-1.5 flex-none ${
          negative ? "bg-zinc-600" : "bg-cyan-400"
        }`}
      />
      <span className={negative ? "text-zinc-400 line-through decoration-zinc-700" : ""}>
        {children}
      </span>
    </li>
  );
}
