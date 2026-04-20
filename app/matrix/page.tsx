import type { Metadata } from "next";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BadgeDollarSign,
  Bot,
  Clock3,
  Mail,
  PlayCircle,
  Radar,
  Search,
  TrendingUp,
  Users,
} from "lucide-react";

import { MatrixDecisionTree } from "@/components/matrix-decision-tree";
import { MatrixPitchLab } from "@/components/matrix-pitch-lab";

export const metadata: Metadata = {
  title: "Matrix Mission Dossier",
  description:
    "A case-study style showcase page for Matrix: a 14-day autonomous growth campaign for an AI fortunetelling business.",
};

const overallStats = [
  {
    label: "Total visitors",
    value: "7,842",
    delta: "+34% from launch week",
    icon: Users,
  },
  {
    label: "Conversion rate",
    value: "6.2%",
    delta: "Up after Day 7 pivot",
    icon: TrendingUp,
  },
  {
    label: "Agent emails sent",
    value: "381",
    delta: "Warm + cold creator outreach",
    icon: Mail,
  },
  {
    label: "Subscribers / revenue",
    value: "486 / $6.72k",
    delta: "Daily roll-up at 09:00",
    icon: BadgeDollarSign,
  },
  {
    label: "Return on spend",
    value: "3.36x",
    delta: "$2k deployed, no human ops",
    icon: Radar,
  },
] as const;

const demoReels = [
  {
    kicker: "Demo reel 01",
    runtime: "00:37",
    title: "Matrix rewrote the homepage around one sharper career-anxiety hook.",
    result: "Bounce rate fell after the agent cut vague mystic copy and moved the paid offer above the fold.",
    accents: ["Pain-first hero", "Single CTA", "Mobile spacing cleanup"],
  },
  {
    kicker: "Demo reel 02",
    runtime: "00:29",
    title: "Matrix tuned the product framing from 'fortune telling' to 'career timing oracle'.",
    result: "The page started qualifying buyers before checkout instead of attracting only curiosity clicks.",
    accents: ["Offer rename", "Checkout friction trim", "Trust bar rewrite"],
  },
] as const;

const pipelineSteps = [
  {
    title: "Crawler filter",
    detail: "Scrape creator pools, remove anyone under 10k followers, normalize channel metadata.",
  },
  {
    title: "LLM fit scoring",
    detail: "Read recent clips and comments for occult adjacency, purchase intent, and emotional urgency.",
  },
  {
    title: "Creator shortlist",
    detail: "Promote only creators whose content framed chaos as a solvable personal signal.",
  },
  {
    title: "User profile cards",
    detail: "Turn the winning audience patterns into personas the rest of the system could target.",
  },
] as const;

const tarotProfiles = [
  {
    card: "Card I",
    icon: "🃏",
    title: "The Anxious Climber",
    detail:
      '25-32 岁，刚升 manager，搜索过 "career tarot"，关注 3 个以上 self-help 博主。',
    fit: "High purchase intent. Responds to career timing, money luck, and permission structures.",
  },
  {
    card: "Card II",
    icon: "🃏",
    title: "The Midnight Scroller",
    detail:
      "18-24 岁，凌晨 1-3 点活跃，频繁看星座 meme，从不付费但转发率极高。",
    fit: "Low direct monetization, very strong free distribution. Best used as the top-of-funnel carrier.",
  },
  {
    card: "Card III",
    icon: "🃏",
    title: "The Closet Believer",
    detail:
      '30-40 岁男性科技从业者，表面不信，但私下搜过 "八字 compatibility"。',
    fit: "Premium angle. Converts when the product sounds private, efficient, and emotionally non-embarrassing.",
  },
] as const;

const outreachRows = [
  {
    creator: "@CareerHex",
    status: "Sent",
    angle: "Manager anxiety / promotion timing",
    openRate: "71%",
  },
  {
    creator: "@SaturnAfterDark",
    status: "Negotiating",
    angle: "Night-scroll meme traffic",
    openRate: "64%",
  },
  {
    creator: "@CodeAndLuck",
    status: "Testing",
    angle: "Tech skepticism / secret belief",
    openRate: "76%",
  },
  {
    creator: "@WealthTarotDaily",
    status: "Live",
    angle: "Career + money conversion lane",
    openRate: "82%",
  },
] as const;

const dailyPulse = [
  { day: "Day 1", note: "Landing page rebuild" },
  { day: "Day 3", note: "Creator shortlist stabilized" },
  { day: "Day 5", note: "Outbound automation online" },
  { day: "Day 7", note: "Attribution pivot executed" },
  { day: "Day 14", note: "ROI locked" },
] as const;

function SectionHeading(props: {
  eyebrow: string;
  title: string;
  body: string;
}) {
  return (
    <div className="max-w-3xl">
      <p className="text-[11px] uppercase tracking-[0.34em] text-cyan-100/72">{props.eyebrow}</p>
      <h2 className="mt-4 font-serif text-4xl text-stone-50 sm:text-5xl">{props.title}</h2>
      <p className="mt-4 text-sm leading-7 text-stone-300 sm:text-base">{props.body}</p>
    </div>
  );
}

export default function MatrixMissionPage() {
  return (
    <div className="relative isolate min-h-screen overflow-hidden text-stone-100">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_12%,rgba(252,163,17,0.12),transparent_24%),radial-gradient(circle_at_82%_18%,rgba(94,234,212,0.16),transparent_22%),radial-gradient(circle_at_58%_72%,rgba(255,115,179,0.12),transparent_28%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(5,6,10,0.16),rgba(5,6,10,0.72))]" />

      <header className="relative z-10 mx-auto flex w-full max-w-[1280px] items-center justify-between gap-6 px-6 py-6 sm:px-8 lg:px-10">
        <Link href="/matrix" className="group">
          <p className="text-[11px] uppercase tracking-[0.42em] text-stone-400">Matrix</p>
          <p className="font-serif text-xl text-stone-100 transition group-hover:text-amber-100">
            Mission dossier
          </p>
        </Link>

        <div className="flex flex-wrap items-center gap-3 text-sm text-stone-300">
          <a href="#dashboard" className="rounded-full border border-white/10 px-4 py-2 transition hover:border-white/20">
            Dashboard
          </a>
          <a href="#day5" className="rounded-full border border-white/10 px-4 py-2 transition hover:border-white/20">
            Outreach
          </a>
          <Link
            href="/matrix/product"
            className="rounded-full border border-amber-200/25 bg-amber-100/10 px-4 py-2 text-amber-50 transition hover:bg-amber-100/16"
          >
            Matrix product
          </Link>
        </div>
      </header>

      <main className="relative z-10 pb-24">
        <section className="mx-auto grid w-full max-w-[1280px] gap-12 px-6 pb-18 pt-8 sm:px-8 lg:grid-cols-[1.02fr_0.98fr] lg:items-end lg:px-10 lg:pb-24">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 py-2 text-[11px] uppercase tracking-[0.32em] text-stone-300">
              <Bot className="h-3.5 w-3.5 text-cyan-100" />
              14-day autonomous marketing run
            </div>

            <div className="space-y-5">
              <h1 className="max-w-4xl font-serif text-5xl leading-[0.96] text-stone-50 sm:text-7xl lg:text-[5.5rem]">
                We gave Matrix a mission. $2000. 14 Days. One AI Fortunetelling Business. Zero Humans.
              </h1>
              <p className="max-w-2xl text-base leading-8 text-stone-300 sm:text-lg">
                This page is the campaign log. Matrix launched the offer, optimized the front-end, filtered
                creators, wrote outreach, read performance data, and changed course without waiting for human
                approval.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <a
                href="#dashboard"
                className="inline-flex items-center gap-2 rounded-full bg-stone-100 px-5 py-3 text-sm font-medium text-stone-950 transition hover:bg-white"
              >
                View the campaign
                <ArrowRight className="h-4 w-4" />
              </a>
              <Link
                href="/matrix/product"
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-5 py-3 text-sm text-stone-100 transition hover:border-white/20 hover:bg-white/[0.08]"
              >
                Want this agent for your business?
              </Link>
            </div>

            <div className="grid gap-3 sm:grid-cols-3">
              {[
                ["Budget", "$2,000"],
                ["Timeline", "14 days"],
                ["Human approvals", "0"],
              ].map(([label, value]) => (
                <div
                  key={label}
                  className="rounded-[24px] border border-white/10 bg-white/[0.035] px-4 py-4 backdrop-blur-sm"
                >
                  <p className="text-[11px] uppercase tracking-[0.28em] text-stone-400">{label}</p>
                  <p className="mt-3 text-2xl font-medium text-stone-50">{value}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 top-1/2 h-[24rem] w-[24rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(252,163,17,0.22),transparent_58%)] blur-3xl" />
            <div className="relative overflow-hidden rounded-[40px] border border-white/10 bg-[linear-gradient(180deg,rgba(14,16,28,0.94),rgba(8,10,18,0.98))] px-6 py-6 shadow-[0_40px_140px_rgba(0,0,0,0.42)]">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-[11px] uppercase tracking-[0.3em] text-stone-400">Mission console</p>
                  <h2 className="mt-3 font-serif text-3xl text-stone-50">Oracle runtime</h2>
                </div>
                <div className="rounded-full border border-emerald-300/20 bg-emerald-300/10 px-3 py-1.5 text-xs text-emerald-100">
                  Autonomous mode
                </div>
              </div>

              <div className="mt-6 grid gap-3 sm:grid-cols-3">
                <div className="rounded-[22px] border border-white/8 bg-white/[0.035] px-4 py-3">
                  <p className="text-[11px] uppercase tracking-[0.28em] text-stone-500">Crawler</p>
                  <p className="mt-2 text-sm text-stone-100">10k+ creator scan</p>
                </div>
                <div className="rounded-[22px] border border-white/8 bg-white/[0.035] px-4 py-3">
                  <p className="text-[11px] uppercase tracking-[0.28em] text-stone-500">Mailer</p>
                  <p className="mt-2 text-sm text-stone-100">Custom pitch generation</p>
                </div>
                <div className="rounded-[22px] border border-white/8 bg-white/[0.035] px-4 py-3">
                  <p className="text-[11px] uppercase tracking-[0.28em] text-stone-500">Attribution</p>
                  <p className="mt-2 text-sm text-stone-100">24h revenue decisions</p>
                </div>
              </div>

              <div className="relative mt-8 grid place-items-center py-8">
                <div className="relative h-[18rem] w-[18rem]">
                  <div className="absolute inset-0 rounded-full border border-dashed border-white/12 animate-[orbitSpin_20s_linear_infinite]" />
                  <div className="absolute inset-6 rounded-full border border-white/8" />
                  <div className="absolute left-1/2 top-1/2 h-36 w-36 -translate-x-1/2 -translate-y-1/2 rounded-full border border-amber-200/20 bg-[radial-gradient(circle_at_30%_30%,rgba(255,198,94,0.52),rgba(255,143,62,0.22),rgba(11,13,20,0.96))] shadow-[0_0_50px_rgba(255,170,70,0.2)] animate-[glowPulse_7s_ease-in-out_infinite]" />
                  <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
                    <p className="text-[11px] uppercase tracking-[0.42em] text-amber-100/80">Matrix</p>
                    <p className="mt-2 font-serif text-3xl text-stone-50">Live</p>
                  </div>

                  <div className="absolute left-1/2 top-0 -translate-x-1/2 rounded-full border border-white/10 bg-white/[0.05] px-3 py-2 text-xs text-stone-200">
                    Crawl
                  </div>
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 rounded-full border border-white/10 bg-white/[0.05] px-3 py-2 text-xs text-stone-200">
                    Score
                  </div>
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 rounded-full border border-white/10 bg-white/[0.05] px-3 py-2 text-xs text-stone-200">
                    Pitch
                  </div>
                  <div className="absolute left-0 top-1/2 -translate-y-1/2 rounded-full border border-white/10 bg-white/[0.05] px-3 py-2 text-xs text-stone-200">
                    Optimize
                  </div>
                </div>
              </div>

              <div className="grid gap-3 sm:grid-cols-3">
                {[
                  ["09:12", "Shift traffic budget away from meme-only creators."],
                  ["11:48", "Rewrote landing copy to career + money pain."],
                  ["18:06", "Sent 34 more customized creator pitches."],
                ].map(([time, detail]) => (
                  <div
                    key={time}
                    className="rounded-[24px] border border-white/8 bg-[linear-gradient(180deg,rgba(255,255,255,0.03),rgba(255,255,255,0.015))] px-4 py-4"
                  >
                    <p className="text-[11px] uppercase tracking-[0.28em] text-stone-500">{time}</p>
                    <p className="mt-3 text-sm leading-6 text-stone-200">{detail}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="dashboard" className="mx-auto w-full max-w-[1280px] px-6 py-20 sm:px-8 lg:px-10">
          <div className="grid gap-8 lg:grid-cols-[0.72fr_1.28fr] lg:items-start">
            <div className="rounded-[34px] border border-white/10 bg-[linear-gradient(180deg,rgba(11,14,24,0.92),rgba(8,10,18,0.9))] p-6">
              <SectionHeading
                eyebrow="Overall dashboard"
                title="Oracle of Desire"
                body="A single surface that turns the whole experiment into something legible: traffic, conversions, outreach volume, paid subscribers, and the only number that mattered in the end, return on spend."
              />

              <div className="mt-8 space-y-4">
                <div className="rounded-[24px] border border-white/8 bg-white/[0.035] px-5 py-4">
                  <p className="text-[11px] uppercase tracking-[0.28em] text-stone-500">Refresh cadence</p>
                  <p className="mt-2 text-sm text-stone-100">Daily summary, regenerated every morning at 09:00.</p>
                </div>

                <div className="rounded-[24px] border border-white/8 bg-white/[0.035] px-5 py-4">
                  <p className="text-[11px] uppercase tracking-[0.28em] text-stone-500">Mission pulse</p>
                  <div className="mt-4 space-y-3">
                    {dailyPulse.map((entry) => (
                      <div key={entry.day} className="flex items-start gap-3 text-sm text-stone-300">
                        <span className="mt-1 h-2.5 w-2.5 rounded-full bg-cyan-200/70" />
                        <div>
                          <p className="text-stone-100">{entry.day}</p>
                          <p className="mt-1 leading-6">{entry.note}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {overallStats.map((stat) => {
                const Icon = stat.icon;

                return (
                  <div
                    key={stat.label}
                    className="rounded-[30px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.045),rgba(255,255,255,0.02))] p-5 shadow-[0_20px_80px_rgba(0,0,0,0.18)]"
                  >
                    <div className="flex items-center justify-between gap-4">
                      <p className="text-[11px] uppercase tracking-[0.3em] text-stone-400">{stat.label}</p>
                      <div className="rounded-full border border-white/10 bg-white/[0.04] p-2 text-stone-300">
                        <Icon className="h-4 w-4" />
                      </div>
                    </div>
                    <p className="mt-5 text-4xl font-medium tracking-tight text-stone-50">{stat.value}</p>
                    <p className="mt-3 text-sm leading-6 text-stone-300">{stat.delta}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="mx-auto w-full max-w-[1280px] px-6 py-20 sm:px-8 lg:px-10">
          <div className="grid gap-10 lg:grid-cols-[0.78fr_1.22fr] lg:items-start">
            <SectionHeading
              eyebrow="Day 1 - Day 3"
              title="Matrix started by fixing the front-end before it touched the market."
              body="The first three days were about self-editing the offer: removing vague mystic language, strengthening the hook, and making the paid path legible enough to learn from."
            />

            <div className="grid gap-5 xl:grid-cols-2">
              {demoReels.map((demo, index) => (
                <div
                  key={demo.title}
                  className="overflow-hidden rounded-[32px] border border-white/10 bg-[linear-gradient(180deg,rgba(11,14,24,0.96),rgba(8,10,18,0.9))]"
                >
                  <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
                    <div>
                      <p className="text-[11px] uppercase tracking-[0.28em] text-stone-400">{demo.kicker}</p>
                      <p className="mt-1 text-sm text-stone-200">{demo.runtime}</p>
                    </div>
                    <div className="rounded-full border border-white/10 bg-white/[0.05] p-2 text-stone-100">
                      <PlayCircle className="h-5 w-5" />
                    </div>
                  </div>

                  <div className="relative h-72 overflow-hidden bg-[linear-gradient(180deg,rgba(16,20,32,0.9),rgba(7,10,18,1))] p-5">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,175,120,0.12),transparent_24%),radial-gradient(circle_at_80%_28%,rgba(94,234,212,0.14),transparent_26%)]" />
                    <div className="absolute left-5 top-5 flex items-center gap-2 rounded-full border border-[#ff7b63]/30 bg-[#ff7b63]/12 px-3 py-1 text-[11px] uppercase tracking-[0.24em] text-[#ffb2a1]">
                      <span className="h-2 w-2 rounded-full bg-[#ff7b63]" />
                      Recording live
                    </div>

                    <div className="relative mt-12 overflow-hidden rounded-[24px] border border-white/10 bg-[#10141f] p-4">
                      <div className="flex items-center gap-2">
                        <span className="h-2.5 w-2.5 rounded-full bg-[#ff7b63]" />
                        <span className="h-2.5 w-2.5 rounded-full bg-[#ffd166]" />
                        <span className="h-2.5 w-2.5 rounded-full bg-[#56d364]" />
                      </div>
                      <div className="mt-4 grid gap-4">
                        <div className="rounded-[18px] border border-white/6 bg-[linear-gradient(180deg,rgba(255,186,108,0.18),rgba(255,186,108,0.02))] p-4">
                          <div className="h-3 w-24 rounded-full bg-white/18" />
                          <div className="mt-3 h-8 w-[75%] rounded-full bg-white/12" />
                          <div className="mt-4 h-10 rounded-[14px] bg-white/6" />
                        </div>
                        <div className="grid gap-3 sm:grid-cols-[1.1fr_0.9fr]">
                          <div className="rounded-[18px] border border-white/6 bg-white/[0.03] p-4">
                            <div className="h-3 w-20 rounded-full bg-white/14" />
                            <div className="mt-3 space-y-2">
                              <div className="h-3 rounded-full bg-white/10" />
                              <div className="h-3 w-[88%] rounded-full bg-white/10" />
                              <div className="h-3 w-[72%] rounded-full bg-white/10" />
                            </div>
                          </div>
                          <div className="rounded-[18px] border border-white/6 bg-white/[0.03] p-4">
                            <div className="h-24 rounded-[14px] bg-[linear-gradient(135deg,rgba(94,234,212,0.18),rgba(255,115,179,0.14))]" />
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="relative mt-4 flex flex-wrap gap-2">
                      {demo.accents.map((accent) => (
                        <span
                          key={accent}
                          className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-2 text-xs text-stone-300"
                        >
                          {accent}
                        </span>
                      ))}
                    </div>

                    <div className="relative mt-4">
                      <div className="h-1.5 rounded-full bg-white/8">
                        <div
                          className="h-full rounded-full bg-[linear-gradient(90deg,#ffb36b,#6fe7d8)]"
                          style={{ width: index === 0 ? "68%" : "54%" }}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3 px-5 py-5">
                    <h3 className="text-lg font-medium text-stone-100">{demo.title}</h3>
                    <p className="text-sm leading-7 text-stone-300">{demo.result}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto w-full max-w-[1280px] px-6 py-20 sm:px-8 lg:px-10">
          <SectionHeading
            eyebrow="Day 4"
            title="Strategy positioning moved from intuition to machine-filtered creator fit."
            body="Matrix crawled creator pools, removed everyone under 10k followers, then used LLM scoring to compare audience pain, occult adjacency, and purchase intent. The output was not just a list of creators. It was a set of personas the rest of the campaign could attack."
          />

          <div className="mt-10 grid gap-6 lg:grid-cols-[0.76fr_1.24fr]">
            <div className="overflow-hidden rounded-[32px] border border-white/10 bg-[linear-gradient(180deg,rgba(11,14,24,0.96),rgba(8,10,18,0.9))] p-6">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-[11px] uppercase tracking-[0.3em] text-stone-400">Positioning pipeline</p>
                  <h3 className="mt-3 font-serif text-3xl text-stone-50">Crawler → scorer → shortlist</h3>
                </div>
                <div className="rounded-full border border-white/10 bg-white/[0.04] p-3 text-stone-200">
                  <Search className="h-5 w-5" />
                </div>
              </div>

              <div className="mt-6 grid gap-3 sm:grid-cols-3">
                <div className="rounded-[22px] border border-white/8 bg-white/[0.03] px-4 py-4">
                  <p className="text-[11px] uppercase tracking-[0.28em] text-stone-500">Scanned</p>
                  <p className="mt-3 text-3xl text-stone-50">3,142</p>
                </div>
                <div className="rounded-[22px] border border-white/8 bg-white/[0.03] px-4 py-4">
                  <p className="text-[11px] uppercase tracking-[0.28em] text-stone-500">10k+ creators</p>
                  <p className="mt-3 text-3xl text-stone-50">618</p>
                </div>
                <div className="rounded-[22px] border border-white/8 bg-white/[0.03] px-4 py-4">
                  <p className="text-[11px] uppercase tracking-[0.28em] text-stone-500">High-fit shortlist</p>
                  <p className="mt-3 text-3xl text-stone-50">47</p>
                </div>
              </div>

              <div className="mt-7 space-y-3">
                {pipelineSteps.map((step, index) => (
                  <div key={step.title} className="rounded-[24px] border border-white/8 bg-white/[0.03] px-4 py-4">
                    <div className="flex items-start gap-4">
                      <div className="mt-0.5 grid h-8 w-8 place-items-center rounded-full border border-cyan-200/20 bg-cyan-200/10 text-xs text-cyan-100">
                        0{index + 1}
                      </div>
                      <div>
                        <p className="text-sm font-medium text-stone-100">{step.title}</p>
                        <p className="mt-2 text-sm leading-7 text-stone-300">{step.detail}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid gap-5 xl:grid-cols-3">
              {tarotProfiles.map((profile, index) => (
                <div
                  key={profile.title}
                  className="relative overflow-hidden rounded-[32px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(255,255,255,0.015))] p-5"
                >
                  <div className="absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                  <div className="absolute right-4 top-4 text-4xl opacity-80">{profile.icon}</div>
                  <p className="text-[11px] uppercase tracking-[0.28em] text-stone-400">{profile.card}</p>
                  <h3 className="mt-4 max-w-[12rem] font-serif text-3xl leading-tight text-stone-50">
                    {profile.title}
                  </h3>
                  <div className="mt-8 rounded-[24px] border border-white/8 bg-black/10 px-4 py-4">
                    <p className="text-sm leading-7 text-stone-300">{profile.detail}</p>
                  </div>
                  <div className="mt-4 rounded-[24px] border border-amber-200/20 bg-amber-200/10 px-4 py-4 text-sm leading-7 text-amber-50">
                    {profile.fit}
                  </div>
                  <div
                    className="mt-5 h-20 rounded-[24px] border border-white/6 bg-[linear-gradient(135deg,rgba(255,183,120,0.16),rgba(255,255,255,0.02),rgba(94,234,212,0.14))] animate-[floatDrift_8s_ease-in-out_infinite]"
                    style={{ animationDelay: `${index * -1.4}s` }}
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="day5" className="mx-auto w-full max-w-[1280px] px-6 py-20 sm:px-8 lg:px-10">
          <SectionHeading
            eyebrow="Day 5"
            title="Outreach stopped being a spreadsheet and became a live agent capability."
            body="Visitors should be able to feel that Matrix does not send generic email blasts. The interface below lets anyone type a creator name or niche and see a tailored pitch appear in real time."
          />

          <div className="mt-10 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
            <MatrixPitchLab />

            <div className="overflow-hidden rounded-[32px] border border-white/10 bg-[linear-gradient(180deg,rgba(11,14,24,0.96),rgba(8,10,18,0.9))] shadow-[0_30px_100px_rgba(0,0,0,0.24)]">
              <div className="flex items-center justify-between border-b border-white/10 px-6 py-5">
                <div>
                  <p className="text-[11px] uppercase tracking-[0.3em] text-stone-400">Matrix track screenshot</p>
                  <h3 className="mt-3 font-serif text-3xl text-stone-50">Outbound command center</h3>
                </div>
                <div className="rounded-full border border-white/10 bg-white/[0.04] p-3 text-stone-200">
                  <Clock3 className="h-5 w-5" />
                </div>
              </div>

              <div className="p-6">
                <div className="overflow-hidden rounded-[26px] border border-white/10 bg-[#0f131d]">
                  <div className="flex items-center justify-between border-b border-white/8 px-4 py-3">
                    <div className="flex items-center gap-2">
                      <span className="h-2.5 w-2.5 rounded-full bg-[#ff7b63]" />
                      <span className="h-2.5 w-2.5 rounded-full bg-[#ffd166]" />
                      <span className="h-2.5 w-2.5 rounded-full bg-[#56d364]" />
                    </div>
                    <p className="text-xs uppercase tracking-[0.28em] text-stone-500">matrix.crm / live</p>
                  </div>

                  <div className="grid grid-cols-[1.1fr_0.9fr_1.3fr_0.7fr] gap-3 border-b border-white/8 px-4 py-3 text-[11px] uppercase tracking-[0.24em] text-stone-500">
                    <p>Creator</p>
                    <p>Status</p>
                    <p>Angle</p>
                    <p>Open</p>
                  </div>

                  <div className="divide-y divide-white/8">
                    {outreachRows.map((row) => (
                      <div
                        key={row.creator}
                        className="grid grid-cols-[1.1fr_0.9fr_1.3fr_0.7fr] gap-3 px-4 py-4 text-sm text-stone-200"
                      >
                        <p>{row.creator}</p>
                        <p>
                          <span className="rounded-full border border-white/10 bg-white/[0.04] px-2.5 py-1 text-xs text-stone-300">
                            {row.status}
                          </span>
                        </p>
                        <p className="text-stone-300">{row.angle}</p>
                        <p className="text-emerald-100">{row.openRate}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-5 grid gap-3 sm:grid-cols-2">
                  <div className="rounded-[24px] border border-white/8 bg-white/[0.03] px-4 py-4">
                    <p className="text-[11px] uppercase tracking-[0.28em] text-stone-500">Live follow-up logic</p>
                    <p className="mt-3 text-sm leading-7 text-stone-300">
                      If open rate clears 65% and no reply lands in 18 hours, Matrix rewrites the first line and
                      resends a narrower version of the pitch.
                    </p>
                  </div>
                  <div className="rounded-[24px] border border-white/8 bg-white/[0.03] px-4 py-4">
                    <p className="text-[11px] uppercase tracking-[0.28em] text-stone-500">Operator note</p>
                    <p className="mt-3 text-sm leading-7 text-stone-300">
                      This panel is intentionally styled like a screenshot so the page reads as an evidence wall,
                      not just a claim.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto w-full max-w-[1280px] px-6 py-20 sm:px-8 lg:px-10">
          <SectionHeading
            eyebrow="Day 7"
            title="The first 24 hours of creator traffic forced Matrix to change its mind."
            body="Once the first ten creators went live, Matrix completed attribution on the initial traffic wave. Entertainment-adjacent occult content generated volume, but not purchases. Career and wealth framing converted at 8.4%, which changed the strategy for the rest of the campaign."
          />

          <div className="mt-10 grid gap-6 xl:grid-cols-[1.02fr_0.98fr]">
            <MatrixDecisionTree />

            <div className="space-y-6">
              <div className="overflow-hidden rounded-[32px] border border-white/10 bg-[linear-gradient(180deg,rgba(11,14,24,0.96),rgba(8,10,18,0.9))] p-6 shadow-[0_30px_100px_rgba(0,0,0,0.24)]">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="text-[11px] uppercase tracking-[0.3em] text-stone-400">24h video data</p>
                    <h3 className="mt-3 font-serif text-3xl text-stone-50">Agent attribution snapshot</h3>
                  </div>
                  <div className="rounded-full border border-white/10 bg-white/[0.04] p-3 text-stone-200">
                    <TrendingUp className="h-5 w-5" />
                  </div>
                </div>

                <div className="mt-6 overflow-hidden rounded-[26px] border border-white/10 bg-white/[0.03]">
                  <Image
                    src="/matrix-day7-24h-chart.png"
                    alt="24 hour creator conversion chart"
                    width={1048}
                    height={596}
                    className="h-auto w-full"
                  />
                </div>

                <div className="mt-5 grid gap-3">
                  {[
                    "泛玄学 / 娱乐: clicks are strong, but buyers treat it as passing amusement.",
                    "情感 / 复合: emotionally engaged, but still less decisive than career-oriented pain.",
                    "职场 / 财运: lower click volume, dramatically higher willingness to pay.",
                  ].map((insight) => (
                    <div
                      key={insight}
                      className="rounded-[22px] border border-white/8 bg-white/[0.03] px-4 py-3 text-sm leading-7 text-stone-300"
                    >
                      {insight}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto w-full max-w-[1280px] px-6 pt-10 sm:px-8 lg:px-10">
          <div className="overflow-hidden rounded-[40px] border border-white/12 bg-[linear-gradient(135deg,rgba(255,183,120,0.16),rgba(255,255,255,0.03),rgba(94,234,212,0.14))] px-6 py-12 sm:px-8 lg:px-12">
            <p className="text-[11px] uppercase tracking-[0.34em] text-stone-300">Final statement</p>
            <h2 className="mt-5 max-w-5xl font-serif text-4xl leading-tight text-stone-50 sm:text-5xl lg:text-6xl">
              This entire marketing campaign was planned, executed, and optimized by Matrix. Every decision on
              this page was made without human approval.
            </h2>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/matrix/product"
                className="inline-flex items-center gap-2 rounded-full bg-stone-100 px-5 py-3 text-sm font-medium text-stone-950 transition hover:bg-white"
              >
                Want this agent for your business?
                <ArrowRight className="h-4 w-4" />
              </Link>
              <a
                href="#dashboard"
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-5 py-3 text-sm text-stone-100 transition hover:border-white/20 hover:bg-white/[0.08]"
              >
                Back to the data
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
