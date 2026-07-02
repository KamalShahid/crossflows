import { useState, type FormEvent } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Mail, Phone, MapPin, Linkedin, Twitter, Loader2, Check } from "lucide-react";
import PageShell from "../components/PageShell";
import HeroBackground from "../components/HeroBackground";
import CTAButton from "../components/CTAButton";
import { bottomCTA } from "../data/home";
import { CONTACT } from "../data/contact";

const productInterestOptions = [
  { value: "smarttalk", label: "SmartTalk™ — AI Communication Platform" },
  { value: "learnmate", label: "LearnMate™ — Education & Learning Platform" },
  { value: "worksync", label: "WorkSync™ — Workflow & Operations Platform" },
  { value: "driveflow", label: "DriveFlow™ — Logistics & Coordination Platform" },
  { value: "general", label: "General Inquiry" },
];

interface FormState {
  name: string;
  company: string;
  email: string;
  phone: string;
  productInterest: string;
  message: string;
}

const initial: FormState = {
  name: "",
  company: "",
  email: "",
  phone: "",
  productInterest: "general",
  message: "",
};

type Status = "idle" | "submitting" | "success" | "error";

export default function Contact() {
  const [form, setForm] = useState<FormState>(initial);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [status, setStatus] = useState<Status>("idle");

  const update = <K extends keyof FormState>(key: K, value: FormState[K]) => {
    setForm((f) => ({ ...f, [key]: value }));
    setErrors((e) => ({ ...e, [key]: undefined }));
  };

  const validate = (): boolean => {
    const next: typeof errors = {};
    if (!form.name.trim()) next.name = "Please enter your name.";
    if (!form.company.trim()) next.company = "Company is required.";
    if (!form.email.trim()) {
      next.email = "We’ll need an email to reach you.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) {
      next.email = "That email doesn’t look right.";
    }
    if (!form.message.trim()) next.message = "Tell us a little about what you’re building.";
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validate()) return;
    setStatus("submitting");
    console.log("[Contact form submission]", form);
    await new Promise((r) => setTimeout(r, 900));
    setStatus("success");
    setForm(initial);
  };

  return (
    <PageShell
      title="Contact · Cross Flows Synergy"
      description="Talk to the Cross Flows Synergy team — book a demo, get a quote, or just say hello."
    >
      <section className="relative isolate overflow-hidden">
        <HeroBackground variant="subtle" />
        <div className="relative mx-auto grid max-w-7xl gap-12 px-5 pb-20 pt-20 sm:px-8 sm:pt-28 lg:grid-cols-[2fr_3fr] lg:items-start">
          <div className="flex flex-col gap-8">
            <div>
              <motion.span
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                className="font-mono text-xs uppercase tracking-[0.24em] text-[var(--color-accent)]"
              >
                Contact
              </motion.span>
              <motion.h1
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: 0.05 }}
                className="mt-4 font-display text-balance text-4xl font-bold leading-[1.06] tracking-tight sm:text-5xl md:text-6xl"
              >
                {bottomCTA.headline}
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: 0.15 }}
                className="mt-5 max-w-md text-base leading-relaxed text-[var(--color-text-muted)]"
              >
                {bottomCTA.subheading}
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: 0.22 }}
                className="mt-6 flex flex-wrap gap-3"
              >
                {bottomCTA.buttons
                  .filter((b) => b.label !== "Book a Demo")
                  .map((b) => (
                    <CTAButton key={b.label} to={b.to} variant="secondary">
                      {b.label}
                    </CTAButton>
                  ))}
              </motion.div>
            </div>

            <div className="flex flex-col gap-4 text-sm">
              <a
                href={CONTACT.emailHref}
                className="flex items-center gap-3 text-[var(--color-text-primary)] hover:text-[var(--color-accent)]"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-lg border border-[var(--color-border)] bg-[var(--color-surface)] text-[var(--color-accent)]">
                  <Mail className="h-4 w-4" />
                </span>
                {CONTACT.email}
              </a>
              <a
                href={CONTACT.phoneHref}
                className="flex items-center gap-3 text-[var(--color-text-primary)] hover:text-[var(--color-accent)]"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-lg border border-[var(--color-border)] bg-[var(--color-surface)] text-[var(--color-accent)]">
                  <Phone className="h-4 w-4" />
                </span>
                {CONTACT.phone}
              </a>
              <div className="flex items-start gap-3 text-[var(--color-text-primary)]/85">
                <span className="flex h-10 w-10 items-center justify-center rounded-lg border border-[var(--color-border)] bg-[var(--color-surface)] text-[var(--color-accent)]">
                  <MapPin className="h-4 w-4" />
                </span>
                <span className="leading-relaxed">
                  {CONTACT.address.line1}
                  <br />
                  {CONTACT.address.line2}
                </span>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <a
                href="#"
                aria-label="LinkedIn"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-[var(--color-border)] text-[var(--color-text-muted)] hover:border-[var(--color-accent)]/60 hover:text-[var(--color-accent)]"
              >
                <Linkedin className="h-4 w-4" />
              </a>
              <a
                href="#"
                aria-label="Twitter / X"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-[var(--color-border)] text-[var(--color-text-muted)] hover:border-[var(--color-accent)]/60 hover:text-[var(--color-accent)]"
              >
                <Twitter className="h-4 w-4" />
              </a>
            </div>

            <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-5">
              <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-[var(--color-accent)]">
                What happens next
              </p>
              <ul className="mt-3 flex flex-col gap-2 text-sm text-[var(--color-text-muted)]">
                <li>1. We read every form. A real person responds within one business day.</li>
                <li>2. A 20-minute scoping call to understand your workflow.</li>
                <li>3. A tailored 30-minute live demo against your real data — no slides.</li>
              </ul>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
            className="relative overflow-hidden rounded-3xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6 sm:p-10"
          >
            <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[var(--color-accent)]/20 blur-3xl" />
            <AnimatePresence mode="wait">
              {status === "success" ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="relative flex min-h-[520px] flex-col items-center justify-center gap-5 text-center"
                >
                  <span className="flex h-16 w-16 items-center justify-center rounded-full bg-[var(--color-accent)] text-black">
                    <Check className="h-8 w-8" strokeWidth={3} />
                  </span>
                  <h2 className="font-display text-3xl font-bold tracking-tight">
                    We’ll be in touch within 24 hours.
                  </h2>
                  <p className="max-w-md text-base text-[var(--color-text-muted)]">
                    Thanks for reaching out. Someone from the team will reply directly from a real
                    inbox — promise.
                  </p>
                  <button
                    type="button"
                    onClick={() => setStatus("idle")}
                    className="mt-2 font-mono text-xs uppercase tracking-[0.22em] text-[var(--color-accent)]"
                  >
                    Send another →
                  </button>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={onSubmit}
                  className="relative flex flex-col gap-5"
                  noValidate
                >
                  <div className="grid gap-4 sm:grid-cols-2">
                    <Field
                      label="Full name"
                      name="name"
                      value={form.name}
                      onChange={(v) => update("name", v)}
                      error={errors.name}
                      required
                      autoComplete="name"
                    />
                    <Field
                      label="Company"
                      name="company"
                      value={form.company}
                      onChange={(v) => update("company", v)}
                      error={errors.company}
                      required
                      autoComplete="organization"
                    />
                  </div>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <Field
                      label="Work email"
                      name="email"
                      type="email"
                      value={form.email}
                      onChange={(v) => update("email", v)}
                      error={errors.email}
                      required
                      autoComplete="email"
                    />
                    <Field
                      label="Phone (optional)"
                      name="phone"
                      type="tel"
                      value={form.phone}
                      onChange={(v) => update("phone", v)}
                      autoComplete="tel"
                    />
                  </div>

                  <label className="flex flex-col gap-2">
                    <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-[var(--color-text-muted)]">
                      Product Interest
                    </span>
                    <select
                      value={form.productInterest}
                      onChange={(e) => update("productInterest", e.target.value)}
                      className="rounded-xl border border-[var(--color-border)] bg-[var(--color-bg)]/60 px-4 py-3 text-sm text-[var(--color-text-primary)] focus:border-[var(--color-accent)] focus:outline-none"
                    >
                      {productInterestOptions.map((opt) => (
                        <option key={opt.value} value={opt.value}>
                          {opt.label}
                        </option>
                      ))}
                    </select>
                  </label>

                  <label className="flex flex-col gap-2">
                    <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-[var(--color-text-muted)]">
                      What business challenge are you solving?
                    </span>
                    <textarea
                      value={form.message}
                      onChange={(e) => update("message", e.target.value)}
                      rows={5}
                      className={
                        "rounded-xl border bg-[var(--color-bg)]/60 px-4 py-3 text-sm text-[var(--color-text-primary)] placeholder:text-[var(--color-text-muted)] focus:outline-none " +
                        (errors.message
                          ? "border-[#ff6b86]"
                          : "border-[var(--color-border)] focus:border-[var(--color-accent)]")
                      }
                      placeholder="A few sentences on the workflow, the volume, and what success looks like."
                    />
                    {errors.message && (
                      <span className="text-xs text-[#ff8fa1]">{errors.message}</span>
                    )}
                  </label>

                  <button
                    type="submit"
                    disabled={status === "submitting"}
                    className="group relative mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-[var(--color-accent)] px-6 py-3 font-display text-sm font-semibold text-black shadow-[0_10px_40px_rgba(0,212,255,0.35)] transition hover:scale-[1.02] active:scale-95 disabled:cursor-not-allowed disabled:opacity-70"
                  >
                    {status === "submitting" ? (
                      <>
                        <Loader2 className="h-4 w-4 animate-spin" />
                        Sending…
                      </>
                    ) : (
                      <>Send message</>
                    )}
                  </button>
                  <p className="text-xs text-[var(--color-text-muted)]">
                    By submitting, you agree to our privacy policy. We never share contact data.
                  </p>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>
    </PageShell>
  );
}

interface FieldProps {
  label: string;
  name: string;
  value: string;
  onChange: (v: string) => void;
  error?: string;
  required?: boolean;
  type?: string;
  autoComplete?: string;
}

function Field({
  label,
  name,
  value,
  onChange,
  error,
  required,
  type = "text",
  autoComplete,
}: FieldProps) {
  return (
    <label className="flex flex-col gap-2">
      <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-[var(--color-text-muted)]">
        {label}
        {required && <span className="ml-1 text-[var(--color-accent)]">*</span>}
      </span>
      <input
        type={type}
        name={name}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        autoComplete={autoComplete}
        className={
          "rounded-xl border bg-[var(--color-bg)]/60 px-4 py-3 text-sm text-[var(--color-text-primary)] placeholder:text-[var(--color-text-muted)] focus:outline-none " +
          (error
            ? "border-[#ff6b86]"
            : "border-[var(--color-border)] focus:border-[var(--color-accent)]")
        }
      />
      {error && <span className="text-xs text-[#ff8fa1]">{error}</span>}
    </label>
  );
}
