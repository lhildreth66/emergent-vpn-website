import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { SUPPORT_EMAIL } from "@/lib/constants";
import { Envelope, Trash, ShieldCheck, Clock } from "@phosphor-icons/react";

const SUBJECT = "Account Deletion Request";

export default function DeleteAccount() {
  useEffect(() => {
    document.title = "Account Deletion Request — Emergent VPN";
  }, []);

  const mailto = `mailto:${SUPPORT_EMAIL}?subject=${encodeURIComponent(SUBJECT)}`;

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white">
      <Header />
      <main className="mx-auto max-w-3xl px-6 py-20 md:px-12 md:py-28">
        <div className="tac-label mb-4">// USER RIGHTS</div>
        <h1
          data-testid="delete-title"
          className="font-display text-4xl font-black tracking-tighter sm:text-5xl"
        >
          Request Account and Data Deletion
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-zinc-400">
          Users may request deletion of their Emergent VPN account and
          associated personal data.
        </p>

        {/* Primary action */}
        <div className="mt-10 border border-white/10 bg-[#0F0F0F] p-8">
          <div className="flex items-start gap-4">
            <Envelope weight="duotone" className="h-8 w-8 flex-none text-cyan-400" />
            <div>
              <h2 className="font-display text-xl font-bold tracking-tight">
                Email us to request deletion
              </h2>
              <p className="mt-2 text-sm text-zinc-400">
                Send an email with the subject{" "}
                <span className="font-mono text-cyan-400">&ldquo;{SUBJECT}&rdquo;</span>{" "}
                including the details below.
              </p>
              <a
                data-testid="delete-email-btn"
                href={mailto}
                className="mt-6 inline-flex items-center gap-2 rounded-sm bg-cyan-400 px-6 py-3 font-mono text-xs font-bold uppercase tracking-[0.18em] text-black transition-colors hover:bg-cyan-300"
              >
                <Envelope weight="bold" className="h-4 w-4" />
                Email {SUPPORT_EMAIL}
              </a>
            </div>
          </div>

          <div className="hairline my-8" />

          <div>
            <div className="tac-label mb-3">// INCLUDE IN YOUR EMAIL</div>
            <ul className="space-y-2 text-base text-zinc-300">
              <li className="flex items-start gap-3">
                <span aria-hidden className="mt-2 inline-block h-1.5 w-1.5 bg-cyan-400" />
                Registered email address
              </li>
              <li className="flex items-start gap-3">
                <span aria-hidden className="mt-2 inline-block h-1.5 w-1.5 bg-cyan-400" />
                Full name (if applicable)
              </li>
            </ul>
          </div>
        </div>

        {/* Data summary cards */}
        <div className="mt-10 grid gap-px overflow-hidden border border-white/10 bg-white/10 md:grid-cols-2">
          <Card icon={Trash} title="Data Deleted" tone="cyan">
            <ul className="mt-4 space-y-2 text-sm text-zinc-300">
              <Bullet>User account</Bullet>
              <Bullet>Profile information</Bullet>
              <Bullet>Associated records</Bullet>
            </ul>
          </Card>
          <Card icon={ShieldCheck} title="Data Retained" tone="muted">
            <ul className="mt-4 space-y-2 text-sm text-zinc-400">
              <Bullet muted>Billing and payment records required by law</Bullet>
              <Bullet muted>Fraud prevention records where legally required</Bullet>
            </ul>
          </Card>
        </div>

        {/* Processing time */}
        <div className="mt-10 flex items-start gap-4 border border-white/10 bg-[#0F0F0F] p-6">
          <Clock weight="duotone" className="h-7 w-7 flex-none text-cyan-400" />
          <div>
            <div className="tac-label">Processing time</div>
            <p className="mt-1 font-display text-xl font-bold tracking-tight">
              Up to 30 days
            </p>
          </div>
        </div>

        {/* Contact */}
        <div className="mt-12">
          <div className="tac-label mb-3">// CONTACT</div>
          <a
            data-testid="delete-contact-email"
            href={`mailto:${SUPPORT_EMAIL}`}
            className="font-display text-xl font-bold tracking-tight text-cyan-400 hover:text-cyan-300"
          >
            {SUPPORT_EMAIL}
          </a>
        </div>
      </main>
      <Footer />
    </div>
  );
}

function Card({ icon: Icon, title, tone = "cyan", children }) {
  return (
    <div className="bg-[#0F0F0F] p-8">
      <Icon
        weight="duotone"
        className={`h-8 w-8 ${tone === "cyan" ? "text-cyan-400" : "text-zinc-400"}`}
      />
      <h3 className="mt-5 font-display text-xl font-bold tracking-tight">
        {title}
      </h3>
      {children}
    </div>
  );
}

function Bullet({ children, muted = false }) {
  return (
    <li className="flex items-start gap-3">
      <span
        aria-hidden
        className={`mt-2 inline-block h-1.5 w-1.5 flex-none ${
          muted ? "bg-zinc-600" : "bg-cyan-400"
        }`}
      />
      <span>{children}</span>
    </li>
  );
}
