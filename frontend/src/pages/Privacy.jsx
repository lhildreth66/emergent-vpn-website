import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { SUPPORT_EMAIL } from "@/lib/constants";

const LAST_UPDATED = "June 12, 2026";

const COLLECT = [
  "Email address (used to create and manage your account)",
  "Account information (name, account ID)",
  "Subscription status (active, expired, trial)",
  "Basic diagnostic information (app version, operating system version)",
];

const DONT_COLLECT = [
  "Browsing history or DNS queries",
  "VPN traffic content",
  "Messages, emails, or communications",
  "Photos, files, or documents",
  "Keystrokes or clipboard contents",
  "Your real IP address once connected",
];

const USE = [
  "Creating and managing your account",
  "Processing and verifying your subscription",
  "Operating and improving the VPN service",
  "Responding to customer support requests",
  "Complying with legal obligations",
];

const THIRD_PARTY = [
  {
    name: "Google Play / Google LLC",
    purpose:
      "Handles all in-app purchase transactions, subscription billing, and payment processing. We do not receive or store your payment card information. See Google's Privacy Policy at policies.google.com/privacy.",
  },
  {
    name: "RevenueCat",
    purpose:
      "Processes subscription status and entitlement verification. RevenueCat receives your anonymized user ID and subscription events to confirm active entitlements. See RevenueCat's Privacy Policy at revenuecat.com/privacy.",
  },
];

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

        <Section title="Overview">
          <p className="text-base leading-relaxed text-zinc-400">
            Emergent VPN ("we", "us", or "our") operates the Emergent VPN mobile
            application (the "App"). This Privacy Policy explains what personal
            information we collect, how we use it, and your rights regarding your
            data. By using the App you agree to this policy.
          </p>
        </Section>

        <Section title="Information We Collect">
          <ul className="space-y-2">
            {COLLECT.map((i) => (
              <Item key={i}>{i}</Item>
            ))}
          </ul>
        </Section>

        <Section title="Information We Do Not Collect">
          <p className="mb-4 text-base leading-relaxed text-zinc-400">
            We operate a strict no-logs VPN service. We do not record, store, or
            share any of the following:
          </p>
          <ul className="space-y-2">
            {DONT_COLLECT.map((i) => (
              <Item key={i} negative>
                {i}
              </Item>
            ))}
          </ul>
        </Section>

        <Section title="How We Use Your Information">
          <ul className="space-y-2">
            {USE.map((i) => (
              <Item key={i}>{i}</Item>
            ))}
          </ul>
        </Section>

        <Section title="Subscriptions and Billing">
          <p className="text-base leading-relaxed text-zinc-400">
            Emergent VPN offers optional paid subscriptions (monthly and annual)
            with a 7-day free trial, available through the Google Play Store.{" "}
            <strong className="text-white">
              All payment processing is handled exclusively by Google Play.
            </strong>{" "}
            We do not collect, process, or store your payment card details. Your
            subscription status is verified through Google Play and RevenueCat.
            Subscriptions auto-renew unless cancelled at least 24 hours before
            the end of the current period. You can manage or cancel your
            subscription at any time in your Google Play account settings.
          </p>
        </Section>

        <Section title="Third-Party Services">
          <p className="mb-6 text-base leading-relaxed text-zinc-400">
            We use the following third-party services that may receive limited
            account or subscription data:
          </p>
          <div className="space-y-6">
            {THIRD_PARTY.map((t) => (
              <div key={t.name} className="border-l-2 border-cyan-400/30 pl-5">
                <div className="font-display text-base font-bold text-white">
                  {t.name}
                </div>
                <p className="mt-1 text-sm leading-relaxed text-zinc-400">
                  {t.purpose}
                </p>
              </div>
            ))}
          </div>
        </Section>

        <Section title="Data Retention">
          <p className="text-base leading-relaxed text-zinc-400">
            We retain your account information for as long as your account is
            active. If you request deletion of your account, we will delete your
            personal data within <strong className="text-white">30 days</strong>{" "}
            of receiving your verified request, except where we are required by
            law to retain it longer. Anonymised and aggregated data that cannot
            identify you may be retained indefinitely.
          </p>
        </Section>

        <Section title="Data Security">
          <p className="text-base leading-relaxed text-zinc-400">
            We use industry-standard encryption and secure infrastructure to
            protect your data in transit and at rest. Access to personal data is
            restricted to personnel who need it to operate the service.
          </p>
        </Section>

        <Section title="Children's Privacy">
          <p className="text-base leading-relaxed text-zinc-400">
            Emergent VPN is not directed at children under the age of 13. We do
            not knowingly collect personal information from children under 13. If
            you believe a child under 13 has provided us with personal
            information, please contact us at{" "}
            <a href={`mailto:${SUPPORT_EMAIL}`} className="text-cyan-400 hover:underline">
              {SUPPORT_EMAIL}
            </a>{" "}
            and we will delete it promptly.
          </p>
        </Section>

        <Section title="Your Rights (GDPR / CCPA)">
          <p className="mb-4 text-base leading-relaxed text-zinc-400">
            Depending on your jurisdiction, you may have the right to:
          </p>
          <ul className="space-y-2">
            {[
              "Access the personal data we hold about you",
              "Correct inaccurate personal data",
              "Request deletion of your personal data",
              "Object to or restrict processing of your data",
              "Data portability (receive your data in a machine-readable format)",
              "Withdraw consent at any time (where processing is based on consent)",
            ].map((r) => (
              <Item key={r}>{r}</Item>
            ))}
          </ul>
          <p className="mt-4 text-base leading-relaxed text-zinc-400">
            To exercise any of these rights, contact us at{" "}
            <a href={`mailto:${SUPPORT_EMAIL}`} className="text-cyan-400 hover:underline">
              {SUPPORT_EMAIL}
            </a>
            . See the{" "}
            <a href="/delete-account" className="text-cyan-400 hover:underline">
              Account &amp; Data Deletion
            </a>{" "}
            page for deletion instructions.
          </p>
        </Section>

        <Section title="Changes to This Policy">
          <p className="text-base leading-relaxed text-zinc-400">
            We may update this Privacy Policy from time to time. We will notify
            you of material changes by updating the "Last updated" date at the
            top of this page. Continued use of the App after changes constitutes
            acceptance of the updated policy.
          </p>
        </Section>

        <Section title="Contact Us">
          <p className="text-base leading-relaxed text-zinc-400">
            Questions or concerns about this Privacy Policy?
          </p>
          <p className="mt-3 text-base leading-relaxed text-zinc-400">
            <strong className="text-white">Emergent VPN</strong>
            <br />
            Email:{" "}
            <a
              data-testid="privacy-email"
              href={`mailto:${SUPPORT_EMAIL}`}
              className="text-cyan-400 hover:underline"
            >
              {SUPPORT_EMAIL}
            </a>
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
