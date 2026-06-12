import { useEffect, useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { SUPPORT_EMAIL } from "@/lib/constants";
import { Trash, ShieldCheck, Clock, CheckCircle } from "@phosphor-icons/react";

const REQUEST_TYPES = [
  "Delete my account and all personal data",
  "Delete my account data only (keep account)",
  "Export my data",
  "Other privacy request",
];

export default function DeleteAccount() {
  useEffect(() => {
    document.title = "Account & Data Deletion — Emergent VPN";
  }, []);

  const [form, setForm] = useState({
    name: "",
    email: "",
    accountEmail: "",
    requestType: REQUEST_TYPES[0],
    notes: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const body = [
      `Name: ${form.name}`,
      `Contact Email: ${form.email}`,
      `Account Email: ${form.accountEmail}`,
      `Request Type: ${form.requestType}`,
      form.notes ? `Additional Notes: ${form.notes}` : "",
    ]
      .filter(Boolean)
      .join("\n");

    const mailto = `mailto:${SUPPORT_EMAIL}?subject=${encodeURIComponent(
      "Account Deletion Request"
    )}&body=${encodeURIComponent(body)}`;

    window.location.href = mailto;
    setSubmitted(true);
  };

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
          You have the right to request deletion of your Emergent VPN account
          and associated personal data at any time. Fill out the form below and
          we will process your request within{" "}
          <strong className="text-white">30 days</strong>.
        </p>

        {/* Processing time banner */}
        <div className="mt-8 flex items-center gap-4 border border-white/10 bg-[#0F0F0F] px-6 py-4">
          <Clock weight="duotone" className="h-6 w-6 flex-none text-cyan-400" />
          <p className="text-sm text-zinc-400">
            Deletion requests are processed within{" "}
            <strong className="text-white">30 days</strong> of verification. You
            will receive a confirmation email when complete.
          </p>
        </div>

        {/* Form */}
        {submitted ? (
          <div
            data-testid="delete-success"
            className="mt-10 flex flex-col items-center gap-4 border border-cyan-400/30 bg-[#0F0F0F] p-10 text-center"
          >
            <CheckCircle weight="duotone" className="h-12 w-12 text-cyan-400" />
            <h2 className="font-display text-2xl font-bold tracking-tight">
              Request sent
            </h2>
            <p className="text-base text-zinc-400">
              Your email client should have opened. If it did not, email us
              directly at{" "}
              <a
                href={`mailto:${SUPPORT_EMAIL}`}
                className="text-cyan-400 hover:underline"
              >
                {SUPPORT_EMAIL}
              </a>{" "}
              with the subject <em>Account Deletion Request</em>.
            </p>
          </div>
        ) : (
          <form
            data-testid="delete-form"
            onSubmit={handleSubmit}
            className="mt-10 space-y-6 border border-white/10 bg-[#0F0F0F] p-8"
          >
            <div className="tac-label mb-2">// DELETION REQUEST FORM</div>

            <Field label="Your Name" required>
              <input
                data-testid="delete-name"
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                placeholder="Full name"
                className="w-full border border-white/10 bg-[#0A0A0A] px-4 py-3 font-mono text-sm text-white placeholder-zinc-600 outline-none focus:border-cyan-400"
              />
            </Field>

            <Field label="Contact Email" required>
              <input
                data-testid="delete-email"
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                placeholder="email@example.com"
                className="w-full border border-white/10 bg-[#0A0A0A] px-4 py-3 font-mono text-sm text-white placeholder-zinc-600 outline-none focus:border-cyan-400"
              />
            </Field>

            <Field label="Account Email (email used to register)" required>
              <input
                data-testid="delete-account-email"
                type="email"
                name="accountEmail"
                value={form.accountEmail}
                onChange={handleChange}
                required
                placeholder="account@example.com"
                className="w-full border border-white/10 bg-[#0A0A0A] px-4 py-3 font-mono text-sm text-white placeholder-zinc-600 outline-none focus:border-cyan-400"
              />
            </Field>

            <Field label="Request Type" required>
              <select
                data-testid="delete-request-type"
                name="requestType"
                value={form.requestType}
                onChange={handleChange}
                required
                className="w-full border border-white/10 bg-[#0A0A0A] px-4 py-3 font-mono text-sm text-white outline-none focus:border-cyan-400"
              >
                {REQUEST_TYPES.map((t) => (
                  <option key={t} value={t}>
                    {t}
                  </option>
                ))}
              </select>
            </Field>

            <Field label="Additional Notes (optional)">
              <textarea
                data-testid="delete-notes"
                name="notes"
                value={form.notes}
                onChange={handleChange}
                rows={3}
                placeholder="Any additional information…"
                className="w-full border border-white/10 bg-[#0A0A0A] px-4 py-3 font-mono text-sm text-white placeholder-zinc-600 outline-none focus:border-cyan-400"
              />
            </Field>

            <button
              data-testid="delete-submit"
              type="submit"
              className="inline-flex w-full items-center justify-center gap-2 rounded-sm bg-cyan-400 px-6 py-4 font-mono text-xs font-bold uppercase tracking-[0.18em] text-black transition-colors hover:bg-cyan-300"
            >
              <Trash weight="bold" className="h-4 w-4" />
              Submit Deletion Request
            </button>

            <p className="text-center font-mono text-[10px] uppercase tracking-[0.18em] text-zinc-600">
              This will open your email client pre-filled with your request.
            </p>
          </form>
        )}

        {/* What gets deleted */}
        <div className="mt-10 grid gap-px overflow-hidden border border-white/10 bg-white/10 md:grid-cols-2">
          <div className="bg-[#0F0F0F] p-8">
            <Trash weight="duotone" className="h-8 w-8 text-cyan-400" />
            <h3 className="mt-5 font-display text-xl font-bold tracking-tight">
              Data Deleted
            </h3>
            <ul className="mt-4 space-y-2 text-sm text-zinc-300">
              {["Account and profile", "Email address", "Subscription records", "Usage data"].map((i) => (
                <Bullet key={i}>{i}</Bullet>
              ))}
            </ul>
          </div>
          <div className="bg-[#0F0F0F] p-8">
            <ShieldCheck weight="duotone" className="h-8 w-8 text-zinc-400" />
            <h3 className="mt-5 font-display text-xl font-bold tracking-tight">
              Data Retained by Law
            </h3>
            <ul className="mt-4 space-y-2 text-sm text-zinc-400">
              {["Billing records required by tax law", "Fraud prevention records where legally required"].map((i) => (
                <Bullet key={i} muted>{i}</Bullet>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12">
          <div className="tac-label mb-3">// DIRECT CONTACT</div>
          <p className="text-sm text-zinc-400">
            You can also email us directly at{" "}
            <a
              data-testid="delete-contact-email"
              href={`mailto:${SUPPORT_EMAIL}?subject=${encodeURIComponent("Account Deletion Request")}`}
              className="text-cyan-400 hover:underline"
            >
              {SUPPORT_EMAIL}
            </a>{" "}
            with the subject <em>Account Deletion Request</em>.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}

function Field({ label, required = false, children }) {
  return (
    <div>
      <label className="mb-2 block font-mono text-xs uppercase tracking-[0.18em] text-zinc-400">
        {label}
        {required && <span className="ml-1 text-cyan-400">*</span>}
      </label>
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
