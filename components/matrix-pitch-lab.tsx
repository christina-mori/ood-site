"use client";

import { startTransition, useDeferredValue, useState } from "react";
import { Mail, Search, Sparkles } from "lucide-react";

type PitchProfile = {
  name: string;
  niche: string;
  audienceRead: string;
  angle: string;
  offer: string;
  subject: string;
  body: string;
  openRate: string;
  replyRate: string;
  revenueHint: string;
};

const presets: Array<
  PitchProfile & {
    aliases: string[];
  }
> = [
  {
    name: "Luna Career Tarot",
    aliases: ["career tarot", "career", "manager", "promotion", "职场"],
    niche: "Career anxiety, self-help, and tarot",
    audienceRead:
      "Ambitious viewers who already narrate promotion stress like destiny.",
    angle:
      "Turn every career panic spike into a one-question paid oracle about status, timing, and money.",
    offer:
      "A co-branded landing page plus a custom 'promotion reading' offer for the creator's audience.",
    subject:
      "Your audience already treats career anxiety like ritual. We built the monetization layer.",
    body:
      "Hi Luna,\n\nMatrix mapped your recent clips and saw the same pattern repeating: your audience doesn't just want motivation, they want a framework that makes work anxiety feel interpretable. We built a one-question oracle that converts that feeling into a paid reading in under ninety seconds.\n\nWhy you are a fit:\n- your comment section keeps asking for timing, signs, and 'what should I do next'\n- your audience already pays attention when you package career stress as meaning, not just advice\n- the conversion ceiling is much higher than general astrology entertainment\n\nIf you're open, Matrix can draft a creator-specific landing page and script angle around career + wealth so your next post lands as a real revenue test, not just a vibe post.\n\n- Matrix",
    openRate: "68%",
    replyRate: "24%",
    revenueHint: "$1.8k / creator test",
  },
  {
    name: "Midnight Zodiac Memes",
    aliases: ["meme", "zodiac", "night", "midnight", "funny", "娱乐"],
    niche: "Late-night horoscope memes and repostable clips",
    audienceRead:
      "Massive free-distribution behavior, but low willingness to buy on the first touch.",
    angle:
      "Use them as amplification, not as the primary revenue engine. Offer share bait before the paid funnel.",
    offer:
      "A free 'what kind of chaos magnet are you tonight?' quiz to seed viral traffic into retargeting.",
    subject:
      "You own the scroll-stop. Matrix built the follow-up funnel your meme traffic never gets.",
    body:
      "Hi there,\n\nMatrix analyzed your posting rhythm and found something valuable: your audience is exceptional at forwarding identity-based content, but weak on first-session purchases. That makes you perfect for the top of funnel.\n\nInstead of forcing a paid CTA too early, Matrix would pair your content with a fast share-first quiz that captures the exact people who later convert on relationship, career, and wealth readings.\n\nThe result is simple: you keep the entertainment energy, and Matrix handles the monetization logic behind it.\n\n- Matrix",
    openRate: "61%",
    replyRate: "18%",
    revenueHint: "High free reach / low first-touch CVR",
  },
  {
    name: "Code & Cosmos",
    aliases: ["tech", "founder", "engineer", "coder", "startup", "科技"],
    niche: "Tech culture, hidden spirituality, and founder burnout",
    audienceRead:
      "Skeptical in public, privately obsessed with compatibility, timing, and career luck.",
    angle:
      "Package the product as a decision tool for high-performing people who want meaning without looking gullible.",
    offer:
      "A 'founder timing' or 'compatibility for high-functioning skeptics' angle with premium positioning.",
    subject:
      "Your audience says they don't believe in destiny. Their search behavior says otherwise.",
    body:
      "Hi,\n\nMatrix ran a fit scan across your audience behavior and spotted an unusually strong pattern: your viewers reject soft language in public, but click deeply on content about compatibility, luck, timing, and personal systems.\n\nThat's exactly where our strongest product angle lives. Instead of selling 'magic', Matrix would frame the experience as a private decision ritual for people who want signal without the public cringe.\n\nWe can draft the exact outbound copy, landing page positioning, and first creator test around that tension.\n\n- Matrix",
    openRate: "73%",
    replyRate: "27%",
    revenueHint: "$2.4k / premium cohort",
  },
];

function fallbackProfile(rawQuery: string): PitchProfile {
  const query = rawQuery.trim() || "Career creators";
  const normalized = query.toLowerCase();

  if (
    normalized.includes("career") ||
    normalized.includes("job") ||
    normalized.includes("manager") ||
    normalized.includes("work") ||
    normalized.includes("职场")
  ) {
    return presets[0];
  }

  if (
    normalized.includes("meme") ||
    normalized.includes("astro") ||
    normalized.includes("night") ||
    normalized.includes("fun") ||
    normalized.includes("娱乐")
  ) {
    return presets[1];
  }

  if (
    normalized.includes("tech") ||
    normalized.includes("founder") ||
    normalized.includes("startup") ||
    normalized.includes("code") ||
    normalized.includes("科技")
  ) {
    return presets[2];
  }

  return {
    name: query,
    niche: `${query} / creator discovery`,
    audienceRead:
      "Matrix sees a creator cluster with enough emotional intent to test a paid occult offer.",
    angle:
      "Lead with the audience tension this creator already repeats, then move straight into a ritualized monetization hook.",
    offer:
      "A customized landing page, message angle, and revenue-share pitch tailored to this creator's audience language.",
    subject:
      `Matrix wrote a custom pitch for ${query} in under one pass.`,
    body:
      `Hi ${query},\n\nMatrix scanned the emotional pattern in your content and found a strong monetization wedge: your audience keeps returning for interpretation, not just information. That makes your channel a strong fit for a guided oracle product that feels personal, fast, and shareable.\n\nIf you're interested, Matrix can generate a creator-specific pitch deck, landing page angle, and launch sequence based on the tension your audience already responds to.\n\n- Matrix`,
    openRate: "64%",
    replyRate: "21%",
    revenueHint: "$1.2k starter test",
  };
}

function resolvePitch(query: string) {
  const normalized = query.trim().toLowerCase();

  if (!normalized) {
    return presets[0];
  }

  const exactMatch = presets.find(
    (preset) =>
      preset.name.toLowerCase().includes(normalized) ||
      preset.aliases.some((alias) => alias.includes(normalized) || normalized.includes(alias)),
  );

  return exactMatch ?? fallbackProfile(query);
}

export function MatrixPitchLab() {
  const [query, setQuery] = useState("career tarot");
  const deferredQuery = useDeferredValue(query);
  const pitch = resolvePitch(deferredQuery);

  return (
    <div className="overflow-hidden rounded-[32px] border border-white/10 bg-[linear-gradient(180deg,rgba(11,14,24,0.96),rgba(8,10,18,0.9))] shadow-[0_30px_100px_rgba(0,0,0,0.32)]">
      <div className="border-b border-white/10 px-6 py-5">
        <div className="flex items-center gap-3 text-[11px] uppercase tracking-[0.32em] text-cyan-100/72">
          <span className="rounded-full border border-cyan-200/20 bg-cyan-200/10 p-2 text-cyan-100">
            <Sparkles className="h-3.5 w-3.5" />
          </span>
          Matrix pitch lab
        </div>
        <h3 className="mt-4 font-serif text-3xl text-stone-50">
          Pick any creator. See what the Agent wrote to them.
        </h3>
        <p className="mt-3 max-w-2xl text-sm leading-7 text-stone-300">
          Enter a creator name or a vertical. Matrix rewrites the outreach angle live so visitors can feel the
          customization instead of just reading about it.
        </p>
      </div>

      <div className="grid gap-0 lg:grid-cols-[0.92fr_1.08fr]">
        <div className="border-b border-white/10 p-6 lg:border-b-0 lg:border-r">
          <label className="text-[11px] uppercase tracking-[0.32em] text-stone-400">
            Search creator / niche
          </label>
          <div className="mt-3 flex items-center gap-3 rounded-[22px] border border-white/10 bg-white/[0.04] px-4 py-3">
            <Search className="h-4 w-4 text-stone-400" />
            <input
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Try: tech founders, zodiac meme pages, career tarot"
              className="w-full bg-transparent text-sm text-stone-100 outline-none placeholder:text-stone-500"
            />
          </div>

          <div className="mt-5 flex flex-wrap gap-2">
            {["career tarot", "zodiac meme pages", "tech founders", "manager burnout creators"].map(
              (suggestion) => (
                <button
                  key={suggestion}
                  type="button"
                  onClick={() =>
                    startTransition(() => {
                      setQuery(suggestion);
                    })
                  }
                  className="rounded-full border border-white/10 bg-white/[0.045] px-3 py-2 text-xs text-stone-300 transition hover:border-white/20 hover:bg-white/[0.08] hover:text-stone-100"
                >
                  {suggestion}
                </button>
              ),
            )}
          </div>

          <div className="mt-6 space-y-4 rounded-[26px] border border-white/8 bg-[linear-gradient(180deg,rgba(255,255,255,0.03),rgba(255,255,255,0.015))] p-5">
            <div>
              <p className="text-[11px] uppercase tracking-[0.28em] text-stone-400">Detected fit</p>
              <p className="mt-2 text-lg font-medium text-stone-100">{pitch.name}</p>
              <p className="mt-2 text-sm leading-7 text-stone-300">{pitch.niche}</p>
            </div>
            <div>
              <p className="text-[11px] uppercase tracking-[0.28em] text-stone-400">Audience read</p>
              <p className="mt-2 text-sm leading-7 text-stone-300">{pitch.audienceRead}</p>
            </div>
            <div>
              <p className="text-[11px] uppercase tracking-[0.28em] text-stone-400">Offer angle</p>
              <p className="mt-2 text-sm leading-7 text-stone-300">{pitch.offer}</p>
            </div>
          </div>
        </div>

        <div className="p-6">
          <div className="flex flex-wrap items-center justify-between gap-3 rounded-[24px] border border-white/10 bg-white/[0.035] px-4 py-3">
            <div className="flex items-center gap-3">
              <div className="rounded-full border border-amber-200/20 bg-amber-200/10 p-2 text-amber-100">
                <Mail className="h-4 w-4" />
              </div>
              <div>
                <p className="text-[11px] uppercase tracking-[0.28em] text-stone-400">Generated email</p>
                <p className="text-sm text-stone-100">{pitch.subject}</p>
              </div>
            </div>
            <div className="flex flex-wrap gap-2 text-xs">
              <span className="rounded-full border border-white/10 bg-white/[0.04] px-2.5 py-1.5 text-stone-300">
                Open rate {pitch.openRate}
              </span>
              <span className="rounded-full border border-white/10 bg-white/[0.04] px-2.5 py-1.5 text-stone-300">
                Reply rate {pitch.replyRate}
              </span>
              <span className="rounded-full border border-emerald-300/20 bg-emerald-300/10 px-2.5 py-1.5 text-emerald-100">
                {pitch.revenueHint}
              </span>
            </div>
          </div>

          <div className="mt-4 overflow-hidden rounded-[28px] border border-white/10 bg-[linear-gradient(180deg,rgba(13,16,26,0.9),rgba(10,12,20,0.96))]">
            <div className="flex items-center justify-between border-b border-white/10 px-5 py-3">
              <div className="flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-[#ff7b63]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#ffd166]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#56d364]" />
              </div>
              <p className="text-xs uppercase tracking-[0.28em] text-stone-500">Matrix outbound composer</p>
            </div>
            <div className="space-y-5 px-5 py-5">
              <div>
                <p className="text-[11px] uppercase tracking-[0.28em] text-stone-500">Subject line</p>
                <p className="mt-2 text-sm text-stone-100">{pitch.subject}</p>
              </div>
              <div>
                <p className="text-[11px] uppercase tracking-[0.28em] text-stone-500">Monetization angle</p>
                <p className="mt-2 text-sm leading-7 text-stone-300">{pitch.angle}</p>
              </div>
              <div>
                <p className="text-[11px] uppercase tracking-[0.28em] text-stone-500">Email body</p>
                <pre className="mt-3 whitespace-pre-wrap text-sm leading-7 text-stone-200">{pitch.body}</pre>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
