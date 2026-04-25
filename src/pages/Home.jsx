import { useState } from "react";
import {
  Sparkles,
  Zap,
  ShieldCheck,
  Layers,
  ArrowRight,
  Github,
  Twitter,
  Menu,
  X,
} from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "Features", href: "#features" },
  { label: "How it works", href: "#how" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
];

const features = [
  {
    icon: Zap,
    title: "Lightning fast",
    body: "Built on a modern stack with edge-ready rendering so pages feel instant on any device.",
  },
  {
    icon: ShieldCheck,
    title: "Secure by default",
    body: "Sensible defaults, hardened headers, and zero-trust patterns keep your users safe.",
  },
  {
    icon: Layers,
    title: "Composable",
    body: "Drop-in components and a clean design system you can extend without fighting the framework.",
  },
  {
    icon: Sparkles,
    title: "Delightful UX",
    body: "Thoughtful interactions, accessible primitives, and motion that respects user preferences.",
  },
];

const steps = [
  { n: "01", title: "Clone", body: "Pull the starter and install dependencies in one command." },
  { n: "02", title: "Customize", body: "Swap colors, copy, and components to match your brand." },
  { n: "03", title: "Ship", body: "Deploy anywhere static hosting runs — Vercel, Netlify, or your own." },
];

const tiers = [
  {
    name: "Starter",
    price: "$0",
    period: "forever",
    features: ["1 project", "Community support", "Core components"],
    cta: "Get started",
    highlighted: false,
  },
  {
    name: "Pro",
    price: "$19",
    period: "per month",
    features: ["Unlimited projects", "Priority support", "Premium templates", "Team workspace"],
    cta: "Start free trial",
    highlighted: true,
  },
  {
    name: "Team",
    price: "$49",
    period: "per month",
    features: ["Everything in Pro", "SSO & audit logs", "Dedicated success manager"],
    cta: "Contact sales",
    highlighted: false,
  },
];

const faqs = [
  {
    q: "Do I need an account to try it?",
    a: "Nope — the starter is open source and works out of the box. Sign up only when you want hosted features.",
  },
  {
    q: "Can I bring my own components?",
    a: "Yes. The system is unopinionated about your component library and works alongside Radix, shadcn, or your own.",
  },
  {
    q: "Is it production ready?",
    a: "Absolutely. The defaults are tuned for real workloads and the build output is small and cacheable.",
  },
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-40 border-b border-border/60 bg-background/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="#" className="flex items-center gap-2 font-semibold tracking-tight">
            <span className="grid h-8 w-8 place-items-center rounded-lg bg-foreground text-background">
              <Sparkles className="h-4 w-4" />
            </span>
            Lumen
          </a>
          <nav className="hidden items-center gap-8 md:flex">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-sm text-muted-foreground transition hover:text-foreground"
              >
                {l.label}
              </a>
            ))}
          </nav>
          <div className="hidden items-center gap-3 md:flex">
            <a
              href="#"
              className="text-sm text-muted-foreground transition hover:text-foreground"
            >
              Sign in
            </a>
            <a
              href="#pricing"
              className="inline-flex items-center gap-1 rounded-full bg-foreground px-4 py-2 text-sm font-medium text-background transition hover:opacity-90"
            >
              Get started <ArrowRight className="h-4 w-4" />
            </a>
          </div>
          <button
            type="button"
            aria-label="Toggle menu"
            className="md:hidden"
            onClick={() => setMenuOpen((v) => !v)}
          >
            {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
        {menuOpen && (
          <div className="border-t border-border/60 bg-background md:hidden">
            <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-4">
              {navLinks.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  className="text-sm text-muted-foreground"
                  onClick={() => setMenuOpen(false)}
                >
                  {l.label}
                </a>
              ))}
              <a
                href="#pricing"
                className="inline-flex items-center justify-center gap-1 rounded-full bg-foreground px-4 py-2 text-sm font-medium text-background"
              >
                Get started <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        )}
      </header>

      <section className="relative overflow-hidden">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 -top-32 h-[500px] bg-[radial-gradient(ellipse_at_center,_hsl(var(--teal)/0.18),_transparent_60%)]"
        />
        <div className="mx-auto max-w-6xl px-6 pb-20 pt-20 md:pt-28">
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/60 px-3 py-1 text-xs text-muted-foreground">
              <span className="h-1.5 w-1.5 rounded-full bg-teal" />
              New — v1.0 is here
            </span>
            <h1 className="mt-6 text-balance text-5xl font-semibold tracking-tight md:text-7xl">
              Build beautiful products,
              <span className="block bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
                without the busywork.
              </span>
            </h1>
            <p className="mx-auto mt-6 max-w-xl text-balance text-base text-muted-foreground md:text-lg">
              A modern starter for teams who care about craft. Composable
              components, sensible defaults, and a build pipeline that just works.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a
                href="#pricing"
                className="inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-3 text-sm font-medium text-background transition hover:opacity-90"
              >
                Start building <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="#features"
                className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-3 text-sm font-medium text-foreground transition hover:bg-secondary"
              >
                See features
              </a>
            </div>
            <p className="mt-6 text-xs text-muted-foreground">
              No credit card required. Free forever for personal use.
            </p>
          </div>

          <div className="mx-auto mt-16 max-w-5xl">
            <div className="rounded-2xl border border-border bg-card p-2 shadow-2xl shadow-foreground/5">
              <div className="rounded-xl bg-secondary/40 p-6 md:p-10">
                <div className="grid grid-cols-3 gap-4">
                  {[1, 2, 3].map((i) => (
                    <div
                      key={i}
                      className="h-24 rounded-lg bg-background/80 ring-1 ring-border md:h-32"
                    />
                  ))}
                </div>
                <div className="mt-4 grid grid-cols-2 gap-4">
                  <div className="h-32 rounded-lg bg-background/80 ring-1 ring-border md:h-48" />
                  <div className="h-32 rounded-lg bg-background/80 ring-1 ring-border md:h-48" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="features" className="border-t border-border/60 bg-secondary/30">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
              Everything you need, nothing you don't
            </h2>
            <p className="mt-4 text-muted-foreground">
              Opinionated where it counts, flexible everywhere else.
            </p>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {features.map((f) => (
              <div
                key={f.title}
                className="rounded-2xl border border-border bg-background p-6 transition hover:-translate-y-0.5 hover:shadow-lg hover:shadow-foreground/5"
              >
                <div className="grid h-10 w-10 place-items-center rounded-lg bg-secondary">
                  <f.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 font-semibold">{f.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{f.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="how" className="border-t border-border/60">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="grid gap-12 md:grid-cols-2 md:items-center">
            <div>
              <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
                From zero to production in three steps
              </h2>
              <p className="mt-4 text-muted-foreground">
                A workflow tuned for speed without taking shortcuts on quality.
              </p>
            </div>
            <ol className="space-y-4">
              {steps.map((s) => (
                <li
                  key={s.n}
                  className="flex gap-4 rounded-xl border border-border bg-card p-5"
                >
                  <span className="font-mono text-sm text-muted-foreground">{s.n}</span>
                  <div>
                    <h3 className="font-semibold">{s.title}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">{s.body}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section id="pricing" className="border-t border-border/60 bg-secondary/30">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
              Simple pricing
            </h2>
            <p className="mt-4 text-muted-foreground">
              Pay only for what you need. Cancel anytime.
            </p>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {tiers.map((t) => (
              <div
                key={t.name}
                className={cn(
                  "rounded-2xl border bg-background p-6",
                  t.highlighted
                    ? "border-foreground shadow-xl shadow-foreground/10"
                    : "border-border"
                )}
              >
                {t.highlighted && (
                  <span className="inline-flex rounded-full bg-foreground px-2.5 py-0.5 text-xs font-medium text-background">
                    Most popular
                  </span>
                )}
                <h3 className="mt-3 text-lg font-semibold">{t.name}</h3>
                <div className="mt-4 flex items-baseline gap-1">
                  <span className="text-4xl font-semibold tracking-tight">{t.price}</span>
                  <span className="text-sm text-muted-foreground">/ {t.period}</span>
                </div>
                <ul className="mt-6 space-y-2 text-sm">
                  {t.features.map((feat) => (
                    <li key={feat} className="flex items-start gap-2">
                      <span className="mt-1 h-1.5 w-1.5 rounded-full bg-foreground" />
                      <span className="text-muted-foreground">{feat}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href="#"
                  className={cn(
                    "mt-6 inline-flex w-full items-center justify-center rounded-full px-4 py-2.5 text-sm font-medium transition",
                    t.highlighted
                      ? "bg-foreground text-background hover:opacity-90"
                      : "border border-border hover:bg-secondary"
                  )}
                >
                  {t.cta}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="faq" className="border-t border-border/60">
        <div className="mx-auto max-w-3xl px-6 py-20">
          <h2 className="text-center text-3xl font-semibold tracking-tight md:text-4xl">
            Frequently asked questions
          </h2>
          <div className="mt-10 divide-y divide-border rounded-2xl border border-border bg-card">
            {faqs.map((item, i) => {
              const open = openFaq === i;
              return (
                <button
                  key={item.q}
                  type="button"
                  onClick={() => setOpenFaq(open ? -1 : i)}
                  className="flex w-full flex-col items-start gap-2 p-6 text-left"
                >
                  <div className="flex w-full items-center justify-between gap-4">
                    <span className="font-medium">{item.q}</span>
                    <span
                      className={cn(
                        "text-muted-foreground transition",
                        open && "rotate-45"
                      )}
                      aria-hidden
                    >
                      +
                    </span>
                  </div>
                  {open && (
                    <p className="text-sm text-muted-foreground">{item.a}</p>
                  )}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      <section className="border-t border-border/60 bg-foreground text-background">
        <div className="mx-auto max-w-6xl px-6 py-16 text-center">
          <h2 className="text-balance text-3xl font-semibold tracking-tight md:text-4xl">
            Ready to build something great?
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-sm opacity-80">
            Spin up a new project in minutes and ship the next version of your product this week.
          </p>
          <a
            href="#"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-background px-5 py-3 text-sm font-medium text-foreground transition hover:opacity-90"
          >
            Get started for free <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </section>

      <footer className="border-t border-border/60">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-8 md:flex-row">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span className="grid h-6 w-6 place-items-center rounded-md bg-foreground text-background">
              <Sparkles className="h-3 w-3" />
            </span>
            © {new Date().getFullYear()} Lumen. All rights reserved.
          </div>
          <div className="flex items-center gap-4 text-muted-foreground">
            <a href="#" aria-label="GitHub" className="transition hover:text-foreground">
              <Github className="h-4 w-4" />
            </a>
            <a href="#" aria-label="Twitter" className="transition hover:text-foreground">
              <Twitter className="h-4 w-4" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
