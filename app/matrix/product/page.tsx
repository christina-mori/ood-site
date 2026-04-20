import type { Metadata } from "next";

import Link from "next/link";
import { ArrowRight, Bot, Mail, Radar, Workflow } from "lucide-react";

export const metadata: Metadata = {
  title: "Matrix Product",
  description: "A lightweight product landing page for Matrix, the autonomous growth agent.",
};

const pillars = [
  {
    title: "Research the market",
    body: "Matrix crawls creator ecosystems, scores fit, and finds where emotional demand is already visible.",
    icon: Radar,
  },
  {
    title: "Write the outreach",
    body: "It generates creator-specific pitches, follow-ups, and monetization angles without waiting on manual ops.",
    icon: Mail,
  },
  {
    title: "Optimize the business",
    body: "Once traffic lands, Matrix reads the numbers, updates the funnel, and reallocates effort toward what converts.",
    icon: Workflow,
  },
] as const;

export default function MatrixProductPage() {
  return (
    <div className="relative isolate min-h-screen overflow-hidden text-stone-100">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_16%_14%,rgba(252,163,17,0.12),transparent_24%),radial-gradient(circle_at_82%_18%,rgba(94,234,212,0.15),transparent_22%),linear-gradient(180deg,rgba(5,6,10,0.22),rgba(5,6,10,0.72))]" />

      <main className="relative z-10 mx-auto w-full max-w-[1120px] px-6 py-10 sm:px-8 lg:px-10">
        <header className="flex flex-wrap items-center justify-between gap-4">
          <Link href="/matrix" className="group">
            <p className="text-[11px] uppercase tracking-[0.42em] text-stone-400">Matrix</p>
            <p className="font-serif text-xl text-stone-100 transition group-hover:text-amber-100">
              Autonomous growth agent
            </p>
          </Link>

          <Link
            href="/matrix"
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-stone-100 transition hover:border-white/20 hover:bg-white/[0.08]"
          >
            Back to mission dossier
          </Link>
        </header>

        <section className="grid gap-10 pb-18 pt-12 lg:grid-cols-[1.04fr_0.96fr] lg:items-end">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 py-2 text-[11px] uppercase tracking-[0.32em] text-stone-300">
              <Bot className="h-3.5 w-3.5 text-cyan-100" />
              Product page
            </div>

            <h1 className="mt-6 max-w-4xl font-serif text-5xl leading-[0.98] text-stone-50 sm:text-6xl lg:text-7xl">
              Put one agent in charge of research, outreach, and revenue iteration.
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-8 text-stone-300 sm:text-lg">
              Matrix is built for teams that want an operator, not another dashboard. It scans the market, writes
              the pitch, tests the angle, and changes strategy when the numbers say it should.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="mailto:hello@matrix.run?subject=Matrix%20pilot"
                className="inline-flex items-center gap-2 rounded-full bg-stone-100 px-5 py-3 text-sm font-medium text-stone-950 transition hover:bg-white"
              >
                Request a pilot
                <ArrowRight className="h-4 w-4" />
              </a>
              <Link
                href="/matrix"
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-5 py-3 text-sm text-stone-100 transition hover:border-white/20 hover:bg-white/[0.08]"
              >
                See the case study
              </Link>
            </div>
          </div>

          <div className="overflow-hidden rounded-[38px] border border-white/10 bg-[linear-gradient(180deg,rgba(13,16,26,0.94),rgba(9,11,20,0.98))] p-6 shadow-[0_40px_140px_rgba(0,0,0,0.32)]">
            <p className="text-[11px] uppercase tracking-[0.3em] text-stone-400">What Matrix does</p>
            <div className="mt-6 space-y-4">
              {[
                "Identify high-intent audiences before you burn creator budget.",
                "Generate customized outbound without turning every test into a manual task.",
                "Reposition the offer the moment attribution says your original thesis is wrong.",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-[24px] border border-white/8 bg-white/[0.03] px-4 py-4 text-sm leading-7 text-stone-300"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="grid gap-5 pb-16 lg:grid-cols-3">
          {pillars.map((pillar) => {
            const Icon = pillar.icon;

            return (
              <div
                key={pillar.title}
                className="rounded-[32px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.045),rgba(255,255,255,0.02))] p-6"
              >
                <div className="rounded-full border border-white/10 bg-white/[0.04] p-3 text-stone-200">
                  <Icon className="h-5 w-5" />
                </div>
                <h2 className="mt-5 font-serif text-3xl text-stone-50">{pillar.title}</h2>
                <p className="mt-4 text-sm leading-7 text-stone-300">{pillar.body}</p>
              </div>
            );
          })}
        </section>
      </main>
    </div>
  );
}
