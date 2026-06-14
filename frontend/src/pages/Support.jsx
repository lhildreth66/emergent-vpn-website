import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { SUPPORT_EMAIL } from "@/lib/constants";
import { Envelope, Question, Lock, CreditCard, WifiHigh, UserCircle, Shield } from "@phosphor-icons/react";

const TOPICS = [
  { icon: UserCircle, label: "Account access" },
  { icon: CreditCard, label: "Subscription or billing questions" },
  { icon: Question, label: "Free trial questions" },
  { icon: WifiHigh, label: "VPN connection issues" },
  { icon: Question, label: "App setup" },
  { icon: Lock, label: "Privacy or security questions" },
  { icon: Shield, label: "General troubleshooting" },
];

export default function Support() {
  useEffect(() => {
    document.title = "Support — Emergent VPN";
  }, []);

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white">
      <Header />
      <main className="mx-auto max-w-3xl px-6 py-20 md:px-12 md:py-28">
        <div className="tac-label mb-4">// SUPPORT</div>
        <h1
          data-testid="support-title"
          className="font-display text-4xl font-black tracking-tighter sm:text-5xl"
        >
          Emergent VPN Support
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-zinc-400">
          Need help with Emergent VPN? We're here to help with account
          questions, billing, subscriptions, setup, connection issues, and
          general app support.
        </p>

        <div className="hairline my-12" />

        <div className="tac-label mb-6">// WE CAN HELP WITH</div>
        <ul className="space-y-3">
          {TOPICS.map(({ icon: Icon, label }) => (
            <li key={label} className="flex items-center gap-4 border border-white/5 bg-[#0F0F0F] px-5 py-4">
              <Icon weight="duotone" className="h-5 w-5 flex-none text-cyan-400" />
              <span className="text-sm text-zinc-300">{label}</span>
            </li>
          ))}
        </ul>

        <div className="mt-14 border border-white/10 bg-[#0F0F0F] p-8">
          <div className="tac-label mb-4">// CONTACT SUPPORT</div>
          <p className="text-base leading-relaxed text-zinc-400">
            Email us and we'll respond as quickly as possible — typically
            within one business day.
          </p>
          <a
            data-testid="support-email-link"
            href={`mailto:${SUPPORT_EMAIL}`}
            className="mt-6 inline-flex items-center gap-3 rounded-sm bg-cyan-400 px-7 py-4 font-mono text-xs font-bold uppercase tracking-[0.18em] text-black transition-colors hover:bg-cyan-300"
          >
            <Envelope weight="bold" className="h-4 w-4" />
            {SUPPORT_EMAIL}
          </a>
        </div>
      </main>
      <Footer />
    </div>
  );
}
