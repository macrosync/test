import { useState } from "react";
import {
  ShieldCheck,
  FileSearch,
  Gavel,
  GraduationCap,
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  Clock,
  Star,
  Menu,
  X,
} from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "FAQ", href: "#faq" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

const services = [
  {
    icon: ShieldCheck,
    title: "Personalized Credit Solutions",
    body: "Tailored strategies to address your unique credit challenges and improve your financial health.",
  },
  {
    icon: FileSearch,
    title: "Credit Report Analysis",
    body: "In-depth review of your credit report to identify errors, inaccuracies, or negative items affecting your score.",
  },
  {
    icon: Gavel,
    title: "Dispute Resolution",
    body: "We handle disputes with credit bureaus and creditors to remove inaccurate or unfair entries from your report.",
  },
  {
    icon: GraduationCap,
    title: "Ongoing Support & Education",
    body: "Guidance and tools to help you maintain a healthy credit score and make informed financial decisions.",
  },
];

const faqs = [
  {
    q: "How does credit repair work?",
    a: "We start by reviewing your credit report from all three bureaus, identifying inaccurate, outdated, or unverifiable items, and then dispute them on your behalf. Alongside disputes, we coach you on the habits that help raise and maintain your score.",
  },
  {
    q: "How long does the credit repair process take?",
    a: "Most clients see meaningful changes within 3 to 6 months. The exact timeline depends on the items on your report, how quickly bureaus respond, and how consistently positive credit behaviors are practiced.",
  },
  {
    q: "Can you guarantee my credit score will improve?",
    a: "By law, no credit repair company can guarantee a specific score increase. What we can guarantee is a thorough, fully compliant process and clear communication every step of the way.",
  },
  {
    q: "Will credit repair help with all types of negative credit items?",
    a: "Credit repair is most effective on inaccurate, unverifiable, or improperly reported items. Legitimate, accurately reported negative items typically remain, but we can help you build a plan to offset their impact over time.",
  },
];

const testimonials = [
  {
    name: "DJ Energizer",
    body: "I was overwhelmed by my poor credit score, but their team guided me through every step. Within a few months, I saw a significant improvement, and now I'm able to qualify for loans I never thought possible!",
  },
  {
    name: "Tia Belcher",
    body: "After years of struggling with credit issues, I finally turned to this service. They identified errors on my report, handled the disputes, and helped me raise my score by 100 points. I'm beyond grateful!",
  },
  {
    name: "Joseph Nichols",
    body: "Their credit repair services helped me improve my score enough to refinance my car! Now I'm saving a ton with much lower monthly payments. Their expertise and dedication made it possible.",
  },
  {
    name: "Winslow Celestin",
    body: "I went from being denied credit to getting approved for my dream car, all thanks to their credit repair services. Their professionalism and dedication truly transformed my financial future.",
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
            <span className="grid h-9 w-9 place-items-center rounded-lg bg-foreground font-bold text-background">
              F1
            </span>
            <span className="leading-tight">
              <span className="block text-sm font-semibold">Family 1st</span>
              <span className="block text-xs font-medium text-muted-foreground">
                Financial
              </span>
            </span>
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
              href="tel:+13213823869"
              className="text-sm text-muted-foreground transition hover:text-foreground"
            >
              +1 321-382-3869
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-1 rounded-full bg-foreground px-4 py-2 text-sm font-medium text-background transition hover:opacity-90"
            >
              Apply Now <ArrowRight className="h-4 w-4" />
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
                href="#contact"
                className="inline-flex items-center justify-center gap-1 rounded-full bg-foreground px-4 py-2 text-sm font-medium text-background"
                onClick={() => setMenuOpen(false)}
              >
                Apply Now <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        )}
      </header>

      <section className="relative overflow-hidden">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 -top-32 h-[520px] bg-[radial-gradient(ellipse_at_center,_hsl(var(--teal)/0.18),_transparent_60%)]"
        />
        <div className="mx-auto max-w-6xl px-6 pb-20 pt-20 md:pt-28">
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/60 px-3 py-1 text-xs font-medium uppercase tracking-wider text-muted-foreground">
              <span className="h-1.5 w-1.5 rounded-full bg-teal" />
              Family 1st Financial
            </span>
            <h1 className="mt-6 text-balance text-5xl font-semibold tracking-tight md:text-7xl">
              Claim your future
              <span className="block bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
                today.
              </span>
            </h1>
            <p className="mx-auto mt-6 max-w-xl text-balance text-base text-muted-foreground md:text-lg">
              Schedule your free financial planning session. Click below to
              claim your offer — we'll reach out to answer any questions you
              may have.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-3 text-sm font-medium text-background transition hover:opacity-90"
              >
                Financial Planning Session <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="#services"
                className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-3 text-sm font-medium text-foreground transition hover:bg-secondary"
              >
                See our services
              </a>
            </div>
            <p className="mt-6 text-xs text-muted-foreground">
              Free consultation • No obligation • Personalized plan
            </p>
          </div>
        </div>
      </section>

      <section id="about" className="border-t border-border/60 bg-secondary/30">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="grid gap-12 md:grid-cols-2 md:items-center">
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Family 1st Financial
              </span>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
                Take full control of your financial future.
              </h2>
              <p className="mt-4 text-muted-foreground">
                Customize your credit card options to fit your unique needs. Our
                credit repair services empower you to manage and improve your
                credit profile for a stronger financial standing.
              </p>
              <a
                href="#contact"
                className="mt-6 inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-3 text-sm font-medium text-background transition hover:opacity-90"
              >
                Apply Now <ArrowRight className="h-4 w-4" />
              </a>
            </div>
            <div className="rounded-2xl border border-border bg-card p-6 md:p-8">
              <h3 className="text-lg font-semibold">Our process</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Before creating a personalized credit repair plan, we review
                your financial history, current credit status, and spending
                habits. We may also perform assessments, such as analyzing your
                credit report and identifying areas for improvement.
              </p>
              <ol className="mt-6 space-y-3 text-sm">
                {[
                  "Review financial history and goals",
                  "Analyze current credit report",
                  "Identify opportunities and disputes",
                  "Build a personalized repair plan",
                ].map((step, i) => (
                  <li key={step} className="flex items-start gap-3">
                    <span className="mt-0.5 grid h-6 w-6 flex-none place-items-center rounded-full bg-foreground text-xs font-semibold text-background">
                      {i + 1}
                    </span>
                    <span className="text-muted-foreground">{step}</span>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="border-t border-border/60">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
              How we help you build stronger credit
            </h2>
            <p className="mt-4 text-muted-foreground">
              Comprehensive credit repair services designed around your goals.
            </p>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {services.map((s) => (
              <div
                key={s.title}
                className="rounded-2xl border border-border bg-card p-6 transition hover:-translate-y-0.5 hover:shadow-lg hover:shadow-foreground/5"
              >
                <div className="grid h-10 w-10 place-items-center rounded-lg bg-secondary">
                  <s.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 font-semibold">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="faq" className="border-t border-border/60 bg-secondary/30">
        <div className="mx-auto max-w-3xl px-6 py-20">
          <h2 className="text-center text-3xl font-semibold tracking-tight md:text-4xl">
            Frequently asked questions
          </h2>
          <div className="mt-10 divide-y divide-border rounded-2xl border border-border bg-background">
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

      <section id="testimonials" className="border-t border-border/60">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
              Testimonials
            </h2>
            <p className="mt-4 text-muted-foreground">
              Real stories from families who took control of their credit.
            </p>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {testimonials.map((t) => (
              <figure
                key={t.name}
                className="flex h-full flex-col rounded-2xl border border-border bg-card p-6"
              >
                <div className="flex gap-0.5 text-foreground">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-muted-foreground">
                  "{t.body}"
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-3">
                  <span className="grid h-9 w-9 place-items-center rounded-full bg-secondary text-sm font-semibold">
                    {t.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </span>
                  <span className="font-medium">{t.name}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="border-t border-border/60 bg-secondary/30">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              Come visit us
            </span>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
              Get in touch
            </h2>
            <p className="mt-4 text-muted-foreground">
              Stop by the office or reach out — we're ready to help you get
              started.
            </p>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl border border-border bg-background p-6">
              <div className="grid h-10 w-10 place-items-center rounded-lg bg-secondary">
                <MapPin className="h-5 w-5" />
              </div>
              <h3 className="mt-4 font-semibold">Location</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                5923 Old Winter Garden Rd, Ste 119
                <br />
                Orlando, FL 32835
              </p>
              <a
                href="https://maps.google.com/?q=5923+Old+Winter+Garden+Rd+Ste+119,+Orlando,+FL+32835"
                target="_blank"
                rel="noreferrer noopener"
                className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-foreground hover:underline"
              >
                Get directions <ArrowRight className="h-4 w-4" />
              </a>
            </div>
            <div className="rounded-2xl border border-border bg-background p-6">
              <div className="grid h-10 w-10 place-items-center rounded-lg bg-secondary">
                <Phone className="h-5 w-5" />
              </div>
              <h3 className="mt-4 font-semibold">Contact</h3>
              <ul className="mt-2 space-y-2 text-sm text-muted-foreground">
                <li>
                  <a
                    href="tel:+13213823869"
                    className="inline-flex items-center gap-2 hover:text-foreground"
                  >
                    <Phone className="h-4 w-4" /> +1 321-382-3869
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:info@family1stinvest.com"
                    className="inline-flex items-center gap-2 hover:text-foreground"
                  >
                    <Mail className="h-4 w-4" /> info@family1stinvest.com
                  </a>
                </li>
              </ul>
            </div>
            <div className="rounded-2xl border border-border bg-background p-6">
              <div className="grid h-10 w-10 place-items-center rounded-lg bg-secondary">
                <Clock className="h-5 w-5" />
              </div>
              <h3 className="mt-4 font-semibold">Hours</h3>
              <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
                <li className="flex justify-between">
                  <span>Mon – Sat</span>
                  <span>12:00pm – 8:00pm</span>
                </li>
                <li className="flex justify-between">
                  <span>Sunday</span>
                  <span>Closed</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-border/60 bg-foreground text-background">
        <div className="mx-auto max-w-6xl px-6 py-16 text-center">
          <h2 className="text-balance text-3xl font-semibold tracking-tight md:text-4xl">
            Schedule your free financial planning session
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-sm opacity-80">
            Click below to claim your offer. We'll then reach out to answer any
            questions you may have.
          </p>
          <a
            href="tel:+13213823869"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-background px-5 py-3 text-sm font-medium text-foreground transition hover:opacity-90"
          >
            Call +1 321-382-3869 <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </section>

      <footer className="border-t border-border/60">
        <div className="mx-auto max-w-6xl px-6 py-10">
          <div className="grid gap-8 md:grid-cols-3">
            <div>
              <a href="#" className="flex items-center gap-2 font-semibold">
                <span className="grid h-9 w-9 place-items-center rounded-lg bg-foreground font-bold text-background">
                  F1
                </span>
                Family 1st Financial
              </a>
              <p className="mt-3 text-sm text-muted-foreground">
                Helping families take full control of their financial future.
              </p>
            </div>
            <div>
              <h4 className="text-sm font-semibold">Visit</h4>
              <p className="mt-2 text-sm text-muted-foreground">
                5923 Old Winter Garden Rd, Ste 119
                <br />
                Orlando, FL 32835
              </p>
            </div>
            <div>
              <h4 className="text-sm font-semibold">Reach us</h4>
              <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
                <li>
                  <a
                    href="tel:+13213823869"
                    className="hover:text-foreground"
                  >
                    +1 321-382-3869
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:info@family1stinvest.com"
                    className="hover:text-foreground"
                  >
                    info@family1stinvest.com
                  </a>
                </li>
                <li>
                  <a
                    href="https://fam1stfinancial.com"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="hover:text-foreground"
                  >
                    fam1stfinancial.com
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-10 flex flex-col items-start justify-between gap-2 border-t border-border/60 pt-6 text-xs text-muted-foreground md:flex-row md:items-center">
            <span>
              Copyright Johnny Jean Baptiste 4/28/2025. All rights reserved.
            </span>
            <a href="#" className="hover:text-foreground">
              Privacy policy
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
