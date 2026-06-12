import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PlayStoreButton from "@/components/PlayStoreButton";
import { SUPPORT_EMAIL } from "@/lib/constants";
import {
  ShieldCheck,
  Lightning,
  GlobeHemisphereWest,
  Prohibit,
  WifiHigh,
  EyeSlash,
  CursorClick,
  UserPlus,
  Hand,
  Lock,
  ArrowRight,
} from "@phosphor-icons/react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FEATURES = [
  {
    icon: CursorClick,
    title: "One-Tap Protection",
    body: "Connect with a single tap. No setup, no config files, no friction.",
    span: "md:col-span-2",
  },
  {
    icon: ShieldCheck,
    title: "WireGuard Technology",
    body: "Modern, lean, and audited cryptography for state-of-the-art tunneling.",
    span: "md:col-span-1",
  },
  {
    icon: Lightning,
    title: "Fast VPN Servers",
    body: "Low-latency endpoints optimized for streaming, calls, and gaming.",
    span: "md:col-span-1",
  },
  {
    icon: Prohibit,
    title: "No Ads",
    body: "Zero trackers. Zero ads. Zero interruptions.",
    span: "md:col-span-1",
  },
  {
    icon: WifiHigh,
    title: "Secure Public Wi-Fi",
    body: "Hostile networks become safe. Encrypt everything, everywhere.",
    span: "md:col-span-1",
  },
  {
    icon: EyeSlash,
    title: "Privacy Focused",
    body: "We don't sell your data. We don't profile you. We don't watch.",
    span: "md:col-span-2",
  },
];

const STEPS = [
  { n: "01", title: "Install Emergent VPN", desc: "Get the app from the Google Play Store." },
  { n: "02", title: "Create an account", desc: "Sign up with an email — it takes seconds." },
  { n: "03", title: "Choose a server", desc: "Pick the location that fits your needs." },
  { n: "04", title: "Connect securely", desc: "One tap. Your tunnel is up. You're protected." },
];

const FAQS = [
  {
    q: "What is Emergent VPN?",
    a: "Emergent VPN is a mobile VPN service that encrypts your internet connection using WireGuard, protecting your privacy and securing your traffic on any network.",
  },
  {
    q: "Does Emergent VPN keep logs of my browsing?",
    a: "No. We do not record your browsing history, VPN traffic content, messages, files, or keystrokes. See our Privacy Policy for the complete list of what we collect and what we don't.",
  },
  {
    q: "Why WireGuard?",
    a: "WireGuard is a modern VPN protocol with a small, auditable codebase, strong cryptographic primitives, and excellent performance compared to legacy protocols like OpenVPN or IPsec.",
  },
  {
    q: "Will it slow down my connection?",
    a: "WireGuard is one of the fastest VPN protocols available. In most cases you won't notice any meaningful difference in speed.",
  },
  {
    q: "Is Emergent VPN safe on public Wi-Fi?",
    a: "Yes — that is one of the primary use cases. Once connected, all your traffic is encrypted end-to-end through our servers, so airport, hotel, and café networks can no longer observe your activity.",
  },
  {
    q: "How do I delete my account?",
    a: "Email support@emergentvpn.com with the subject 'Account Deletion Request'. See the Data Deletion page for full instructions.",
  },
];

export default function Home() {
  return (
    <div className="relative min-h-screen bg-[#0A0A0A] text-white">
      <Header />

      {/* HERO */}
      <section
        data-testid="hero-section"
        className="relative isolate overflow-hidden border-b border-white/5"
      >
        {/* Background image with heavy overlay */}
        <div
          aria-hidden
          className="absolute inset-0 -z-10 bg-cover bg-center opacity-40"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1750969185331-e03829f72c7d)",
          }}
        />
        <div
          aria-hidden
          className="absolute inset-0 -z-10 bg-gradient-to-b from-black/70 via-black/80 to-[#0A0A0A]"
        />
        <div
          aria-hidden
          className="absolute inset-0 -z-10 opacity-[0.08]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(0,229,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(0,229,255,0.6) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        <div className="mx-auto grid max-w-7xl gap-12 px-6 pb-24 pt-20 md:grid-cols-12 md:px-12 md:pt-32 lg:pb-32">
          <div className="md:col-span-8">
            <div className="tac-label mb-6 inline-flex items-center gap-2">
              <span className="inline-block h-1.5 w-1.5 animate-pulse rounded-full bg-cyan-400" />
              <span>SYSTEM // SECURE-TUNNEL ENABLED</span>
            </div>
            <h1
              data-testid="hero-headline"
              className="font-display text-5xl font-black leading-[0.95] tracking-tighter text-white sm:text-6xl lg:text-7xl"
            >
              Private, Secure
              <br />
              <span className="text-cyan-400">VPN Protection.</span>
            </h1>
            <p
              data-testid="hero-subtitle"
              className="mt-8 max-w-2xl text-lg leading-relaxed text-zinc-400 sm:text-xl"
            >
              Protect your internet connection with fast, secure
              WireGuard-powered VPN technology.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <PlayStoreButton testId="hero-download-btn" />
              <Link
                data-testid="hero-privacy-btn"
                to="/privacy"
                className="group inline-flex items-center gap-2 rounded-sm border border-zinc-700 px-6 py-4 font-mono text-xs font-bold uppercase tracking-[0.18em] text-white transition-all hover:border-cyan-400 hover:text-cyan-300"
              >
                Privacy Policy
                <ArrowRight
                  weight="bold"
                  className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
                />
              </Link>
            </div>

            <dl className="mt-16 grid max-w-2xl grid-cols-3 gap-6 border-t border-white/10 pt-8">
              <div>
                <dt className="tac-label">Protocol</dt>
                <dd className="mt-2 font-display text-2xl font-bold">
                  WireGuard
                </dd>
              </div>
              <div>
                <dt className="tac-label">Logs</dt>
                <dd className="mt-2 font-display text-2xl font-bold">None</dd>
              </div>
              <div>
                <dt className="tac-label">Ads</dt>
                <dd className="mt-2 font-display text-2xl font-bold">Zero</dd>
              </div>
            </dl>
          </div>

          {/* Trust card */}
          <div className="hidden md:col-span-4 md:block">
            <div className="relative h-full">
              <div className="absolute -inset-1 -z-10 bg-cyan-500/10 blur-2xl" />
              <div className="flex h-full flex-col gap-4 border border-white/10 bg-[#0F0F0F]/80 p-6 backdrop-blur-sm">
                {[
                  { icon: "🔒", label: "Encrypted Connection", desc: "AES-256 encryption on every session" },
                  { icon: "🚫", label: "No Activity Logs", desc: "We never record what you do online" },
                  { icon: "📶", label: "Public Wi-Fi Protection", desc: "Stay safe on any network" },
                  { icon: "⚡", label: "One-Tap Connect", desc: "Protected in seconds, no setup needed" },
                ].map(({ icon, label, desc }) => (
                  <div key={label} className="flex items-start gap-4 border border-white/5 bg-black/30 p-4">
                    <span className="text-2xl leading-none">{icon}</span>
                    <div>
                      <div className="font-display text-sm font-bold text-white">{label}</div>
                      <div className="mt-0.5 font-mono text-[11px] leading-snug text-zinc-500">{desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES — Bento */}
      <section
        id="features"
        data-testid="features-section"
        className="relative border-b border-white/5 py-24 md:py-32"
      >
        <div className="mx-auto max-w-7xl px-6 md:px-12">
          <div className="mb-16 grid items-end gap-8 md:grid-cols-12">
            <div className="md:col-span-7">
              <div className="tac-label mb-4">// FEATURES</div>
              <h2 className="font-display text-4xl font-black leading-tight tracking-tighter sm:text-5xl">
                Built for privacy.
                <br />
                <span className="text-cyan-400">Tuned for speed.</span>
              </h2>
            </div>
            <div className="md:col-span-5">
              <p className="text-base leading-relaxed text-zinc-400">
                Every feature is engineered to keep your connection encrypted
                and your data invisible — without compromising performance.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-px overflow-hidden border border-white/10 bg-white/10 md:grid-cols-3">
            {FEATURES.map(({ icon: Icon, title, body, span }, idx) => (
              <div
                key={title}
                data-testid={`feature-${title.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}
                className={`group relative bg-[#0F0F0F] p-8 transition-colors hover:bg-[#121212] sm:p-10 ${span}`}
              >
                <Icon
                  weight="duotone"
                  className="h-9 w-9 text-cyan-400 transition-transform duration-300 group-hover:-translate-y-0.5"
                />
                <h3 className="mt-6 font-display text-xl font-bold tracking-tight">
                  {title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-zinc-400">
                  {body}
                </p>
                <span className="absolute right-6 top-6 font-mono text-[10px] uppercase tracking-[0.2em] text-zinc-700">
                  /{String(idx + 1).padStart(2, "0")}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section
        id="how"
        data-testid="how-section"
        className="relative border-b border-white/5 py-24 md:py-32"
      >
        <div className="mx-auto max-w-7xl px-6 md:px-12">
          <div className="mb-16 max-w-2xl">
            <div className="tac-label mb-4">// HOW IT WORKS</div>
            <h2 className="font-display text-4xl font-black leading-tight tracking-tighter sm:text-5xl">
              Four steps to a secure tunnel.
            </h2>
          </div>

          <ol className="grid gap-6 md:grid-cols-4">
            {STEPS.map(({ n, title, desc }, i) => (
              <li
                key={n}
                data-testid={`step-${n}`}
                className="relative border border-white/10 bg-[#0F0F0F] p-8 transition-colors hover:border-cyan-400/50"
              >
                <span className="font-mono text-xs text-cyan-400">{n}</span>
                <h3 className="mt-4 font-display text-xl font-bold tracking-tight">
                  {title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-zinc-400">
                  {desc}
                </p>
                {i < STEPS.length - 1 && (
                  <ArrowRight
                    weight="bold"
                    className="absolute -right-3 top-1/2 hidden h-5 w-5 -translate-y-1/2 bg-[#0A0A0A] text-cyan-400 md:block"
                  />
                )}
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* PRICING */}
      <section
        id="pricing"
        data-testid="pricing-section"
        className="relative border-b border-white/5 py-24 md:py-32"
      >
        <div className="mx-auto max-w-7xl px-6 md:px-12">
          <div className="mb-16 max-w-2xl">
            <div className="tac-label mb-4">// PLANS</div>
            <h2 className="font-display text-4xl font-black leading-tight tracking-tighter sm:text-5xl">
              Start free. Stay protected.
            </h2>
            <p className="mt-4 text-base leading-relaxed text-zinc-400">
              All plans include a{" "}
              <span className="text-cyan-400 font-bold">7-day free trial</span>. Cancel
              anytime through Google Play.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {/* Free Trial */}
            <div
              data-testid="plan-trial"
              className="border border-white/10 bg-[#0F0F0F] p-8"
            >
              <div className="tac-label mb-4">Free Trial</div>
              <div className="font-display text-4xl font-black">7 days</div>
              <div className="mt-1 font-mono text-xs uppercase tracking-[0.18em] text-zinc-500">
                No charge
              </div>
              <ul className="mt-8 space-y-3 text-sm text-zinc-400">
                {["Full VPN access", "WireGuard protocol", "No credit card required at start", "Auto-renews to monthly plan"].map((f) => (
                  <li key={f} className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 flex-none bg-cyan-400" />
                    {f}
                  </li>
                ))}
              </ul>
              <a
                href="https://play.google.com/store/apps/details?id=com.emergentvpn"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex w-full items-center justify-center rounded-sm border border-zinc-700 px-6 py-3 font-mono text-xs font-bold uppercase tracking-[0.18em] text-white transition-colors hover:border-cyan-400 hover:text-cyan-300"
              >
                Start Free Trial
              </a>
            </div>

            {/* Monthly */}
            <div
              data-testid="plan-monthly"
              className="relative border border-cyan-400/50 bg-[#0F0F0F] p-8"
            >
              <div className="absolute -top-3 left-8">
                <span className="bg-cyan-400 px-3 py-1 font-mono text-[10px] font-bold uppercase tracking-[0.18em] text-black">
                  Most Popular
                </span>
              </div>
              <div className="tac-label mb-4">Monthly</div>
              <div className="font-display text-4xl font-black">
                $4.99
                <span className="font-mono text-base font-normal text-zinc-400">/mo</span>
              </div>
              <div className="mt-1 font-mono text-xs uppercase tracking-[0.18em] text-zinc-500">
                Billed monthly
              </div>
              <ul className="mt-8 space-y-3 text-sm text-zinc-400">
                {["Full VPN access", "WireGuard protocol", "All server locations", "Cancel anytime in Google Play"].map((f) => (
                  <li key={f} className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 flex-none bg-cyan-400" />
                    {f}
                  </li>
                ))}
              </ul>
              <a
                href="https://play.google.com/store/apps/details?id=com.emergentvpn"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex w-full items-center justify-center rounded-sm bg-cyan-400 px-6 py-3 font-mono text-xs font-bold uppercase tracking-[0.18em] text-black transition-colors hover:bg-cyan-300"
              >
                Get Monthly
              </a>
            </div>

            {/* Annual */}
            <div
              data-testid="plan-annual"
              className="relative border border-white/10 bg-[#0F0F0F] p-8"
            >
              <div className="absolute -top-3 left-8">
                <span className="bg-zinc-700 px-3 py-1 font-mono text-[10px] font-bold uppercase tracking-[0.18em] text-zinc-300">
                  Best Value
                </span>
              </div>
              <div className="tac-label mb-4">Annual</div>
              <div className="font-display text-4xl font-black">
                $39.99
                <span className="font-mono text-base font-normal text-zinc-400">/yr</span>
              </div>
              <div className="mt-1 font-mono text-xs uppercase tracking-[0.18em] text-zinc-500">
                Save ~33% vs monthly
              </div>
              <ul className="mt-8 space-y-3 text-sm text-zinc-400">
                {["Full VPN access", "WireGuard protocol", "All server locations", "Cancel anytime in Google Play"].map((f) => (
                  <li key={f} className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 flex-none bg-cyan-400" />
                    {f}
                  </li>
                ))}
              </ul>
              <a
                href="https://play.google.com/store/apps/details?id=com.emergentvpn"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex w-full items-center justify-center rounded-sm border border-zinc-700 px-6 py-3 font-mono text-xs font-bold uppercase tracking-[0.18em] text-white transition-colors hover:border-cyan-400 hover:text-cyan-300"
              >
                Get Annual
              </a>
            </div>
          </div>

          <p className="mt-8 text-center font-mono text-xs uppercase tracking-[0.18em] text-zinc-600">
            Subscriptions managed through Google Play · Prices in USD · Taxes may apply
          </p>
        </div>
      </section>

      {/* ABOUT */}
      <section
        id="about"
        data-testid="about-section"
        className="relative border-b border-white/5 py-24 md:py-32"
      >
        <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 md:grid-cols-12 md:px-12">
          <div className="md:col-span-7">
            <div className="tac-label mb-4">// ABOUT</div>
            <h2 className="font-display text-4xl font-black leading-tight tracking-tighter sm:text-5xl">
              An encrypted tunnel between you and the open internet.
            </h2>
            <p className="mt-8 text-lg leading-relaxed text-zinc-400">
              Emergent VPN helps protect your internet connection by creating an
              encrypted tunnel between your device and the internet. Whether
              you&rsquo;re using public Wi-Fi, traveling, or working remotely,
              Emergent VPN provides secure, reliable protection.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              {["WireGuard", "AES-256", "No-Logs", "Audited"].map((tag) => (
                <span
                  key={tag}
                  className="border border-white/15 px-4 py-2 font-mono text-xs uppercase tracking-[0.18em] text-zinc-300"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
          <div className="md:col-span-5">
            <div className="relative border border-white/10 bg-[#0F0F0F] p-8">
              <Lock weight="duotone" className="h-10 w-10 text-cyan-400" />
              <p className="mt-6 font-display text-2xl font-bold leading-snug tracking-tight">
                &ldquo;We can&rsquo;t sell what we never collected.&rdquo;
              </p>
              <p className="mt-4 text-sm text-zinc-500">
                — Emergent VPN principle
              </p>
              <div className="mt-8 grid grid-cols-2 gap-4 border-t border-white/10 pt-6 text-sm">
                <div>
                  <div className="tac-label">Encryption</div>
                  <div className="mt-1 font-display font-bold">Modern</div>
                </div>
                <div>
                  <div className="tac-label">Tracking</div>
                  <div className="mt-1 font-display font-bold">Disabled</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* VIDEO */}
      <section
        id="video"
        data-testid="video-section"
        className="relative border-b border-white/5 py-24 md:py-32"
      >
        <div className="mx-auto max-w-7xl px-6 md:px-12">
          <div className="mb-10 max-w-2xl">
            <div className="tac-label mb-4">// DEMO</div>
            <h2 className="font-display text-4xl font-black leading-tight tracking-tighter sm:text-5xl">
              See Emergent VPN in Action
            </h2>
            <p className="mt-4 text-base leading-relaxed text-zinc-400">
              Watch a quick overview of how Emergent VPN helps protect your privacy online.
            </p>
          </div>
          <div className="mx-auto" style={{ maxWidth: "900px" }}>
            <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
              <iframe
                src="https://www.youtube.com/embed/lb86aNV2TKA"
                title="Emergent VPN — Product Overview"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 h-full w-full border border-white/10"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section
        id="faq"
        data-testid="faq-section"
        className="relative border-b border-white/5 py-24 md:py-32"
      >
        <div className="mx-auto grid max-w-7xl gap-16 px-6 md:grid-cols-12 md:px-12">
          <div className="md:col-span-4">
            <div className="tac-label mb-4">// FAQ</div>
            <h2 className="font-display text-4xl font-black leading-tight tracking-tighter sm:text-5xl">
              Questions, answered.
            </h2>
            <p className="mt-6 text-sm leading-relaxed text-zinc-400">
              Still curious? Email us anytime at{" "}
              <a
                href={`mailto:${SUPPORT_EMAIL}`}
                className="text-cyan-400 hover:underline"
              >
                {SUPPORT_EMAIL}
              </a>
              .
            </p>
          </div>
          <div className="md:col-span-8">
            <Accordion
              type="single"
              collapsible
              className="w-full"
              data-testid="faq-accordion"
            >
              {FAQS.map((item, i) => (
                <AccordionItem
                  key={i}
                  value={`item-${i}`}
                  className="border-white/10"
                >
                  <AccordionTrigger
                    data-testid={`faq-trigger-${i}`}
                    className="text-left font-display text-lg font-semibold tracking-tight hover:text-cyan-400 hover:no-underline"
                  >
                    {item.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-base leading-relaxed text-zinc-400">
                    {item.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* SUPPORT / CTA */}
      <section
        id="support"
        data-testid="support-section"
        className="relative overflow-hidden"
      >
        <div
          aria-hidden
          className="absolute inset-0 -z-10 opacity-[0.06]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(0,229,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(0,229,255,0.6) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        <div className="mx-auto max-w-7xl px-6 py-24 md:px-12 md:py-32">
          <div className="border border-white/10 bg-[#0F0F0F] p-10 md:p-16">
            <div className="grid gap-10 md:grid-cols-12 md:items-center">
              <div className="md:col-span-8">
                <div className="tac-label mb-4">// SUPPORT</div>
                <h2 className="font-display text-3xl font-black tracking-tighter sm:text-4xl">
                  Need help? We respond fast.
                </h2>
                <p className="mt-4 text-base text-zinc-400">
                  Questions, feedback, or issues — reach out and a human will
                  reply.
                </p>
                <a
                  data-testid="support-email-link"
                  href={`mailto:${SUPPORT_EMAIL}`}
                  className="mt-6 inline-flex items-center gap-3 font-display text-xl font-bold tracking-tight text-cyan-400 hover:text-cyan-300"
                >
                  {SUPPORT_EMAIL}
                  <ArrowRight weight="bold" className="h-5 w-5" />
                </a>
              </div>
              <div className="md:col-span-4 md:text-right">
                <PlayStoreButton testId="support-download-btn" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
