import { ChevronRight, TrendingUp } from "lucide-react";

const branches = [
  {
    step: "Branch 01",
    title: "Double down on mass-market occult entertainment?",
    stats: ["1,240 clicks", "1.2% CVR", "High comments / low checkout intent"],
    dataPoints: [
      "Viral clips over-performed on click-through but stalled at payment.",
      "Comments contained irony, tagging, and meme behavior instead of need-state language.",
      "Average session duration was healthy, but repeat visit intent stayed weak.",
    ],
    reasoning:
      "Matrix classified this lane as top-of-funnel amplification only. Good for reach, weak for first-touch revenue.",
    action: "Reduce budget by 70% and keep only retargeting hooks.",
  },
  {
    step: "Branch 02",
    title: "Keep relationship / reconciliation creators as the core bet?",
    stats: ["890 clicks", "3.4% CVR", "Mid-level purchase intent"],
    dataPoints: [
      "Users arriving from breakup, compatibility, and 'does he miss me' content clicked deep into the funnel.",
      "Cart intent was real, but buyers wanted more urgency before paying.",
      "Creators in this segment performed better on emotional engagement than on direct revenue.",
    ],
    reasoning:
      "Matrix kept this branch alive, but moved it into a supporting lane instead of the main revenue thesis.",
    action: "Preserve as secondary offer and narrow copy around urgency windows.",
  },
  {
    step: "Branch 03",
    title: "Reposition around career, money, and upward-mobility anxiety?",
    stats: ["620 clicks", "8.4% CVR", "Strong purchase language"],
    dataPoints: [
      "Click volume was lower, but checkout completion was dramatically higher.",
      "Users typed questions about promotion timing, salary luck, and 'is now the moment' into the funnel.",
      "Creators framing occult content as career guidance brought the strongest first-session buyers.",
    ],
    reasoning:
      "Matrix identified this lane as the clearest need-state: acute pain, solvable ritual framing, and immediate revenue potential.",
    action: "Increase outreach, rewrite landing copy, and move paid spend toward career + wealth creators.",
  },
];

export function MatrixDecisionTree() {
  return (
    <div className="rounded-[32px] border border-white/10 bg-[linear-gradient(180deg,rgba(11,14,24,0.96),rgba(8,10,18,0.9))] p-6 shadow-[0_30px_100px_rgba(0,0,0,0.24)]">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-[11px] uppercase tracking-[0.3em] text-cyan-100/70">Agent decision tree</p>
          <h3 className="mt-3 font-serif text-3xl text-stone-50">Click any branch to inspect the data Matrix saw.</h3>
        </div>
        <div className="rounded-full border border-emerald-300/20 bg-emerald-300/10 p-3 text-emerald-100">
          <TrendingUp className="h-5 w-5" />
        </div>
      </div>

      <p className="mt-4 max-w-2xl text-sm leading-7 text-stone-300">
        Every branch below represents a fork Matrix considered after the first wave of creator posts went live.
        The winning strategy appears as the terminal node at the bottom.
      </p>

      <div className="relative mt-8 border-l border-white/10 pl-6">
        {branches.map((branch) => (
          <details
            key={branch.step}
            className="group relative mb-4 overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.03]"
          >
            <span className="absolute -left-[31px] top-8 h-3 w-3 rounded-full border border-cyan-200/40 bg-cyan-200/40 shadow-[0_0_0_8px_rgba(103,232,249,0.06)]" />
            <summary className="cursor-pointer list-none px-5 py-5 [&::-webkit-details-marker]:hidden">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <p className="text-[11px] uppercase tracking-[0.28em] text-stone-400">{branch.step}</p>
                  <h4 className="mt-2 text-lg font-medium text-stone-100">{branch.title}</h4>
                </div>
                <div className="flex items-center gap-2 self-start rounded-full border border-white/10 bg-white/[0.04] px-3 py-2 text-xs text-stone-300">
                  Expand node
                  <ChevronRight className="h-3.5 w-3.5 transition group-open:rotate-90" />
                </div>
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                {branch.stats.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/10 bg-white/[0.04] px-2.5 py-1.5 text-xs text-stone-300"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </summary>

            <div className="grid gap-4 border-t border-white/10 px-5 py-5 sm:grid-cols-2">
              <div>
                <p className="text-[11px] uppercase tracking-[0.28em] text-stone-500">Data observed</p>
                <ul className="mt-3 space-y-3 text-sm leading-7 text-stone-300">
                  {branch.dataPoints.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="text-[11px] uppercase tracking-[0.28em] text-stone-500">Agent reasoning</p>
                <p className="mt-3 text-sm leading-7 text-stone-300">{branch.reasoning}</p>
                <div className="mt-4 rounded-[22px] border border-amber-200/20 bg-amber-200/10 px-4 py-3 text-sm text-amber-50">
                  {branch.action}
                </div>
              </div>
            </div>
          </details>
        ))}

        <div className="relative overflow-hidden rounded-[28px] border border-emerald-300/20 bg-[linear-gradient(135deg,rgba(50,179,126,0.16),rgba(50,179,126,0.06),rgba(255,255,255,0.03))] p-5">
          <span className="absolute -left-[31px] top-8 h-3 w-3 rounded-full border border-emerald-300/40 bg-emerald-300/60 shadow-[0_0_0_8px_rgba(52,211,153,0.06)]" />
          <p className="text-[11px] uppercase tracking-[0.3em] text-emerald-100/80">Final strategy node</p>
          <h4 className="mt-3 font-serif text-2xl text-stone-50">
            Own the career + wealth anxiety lane. Treat entertainment creators as distribution, not revenue.
          </h4>
          <p className="mt-3 max-w-3xl text-sm leading-7 text-stone-200">
            Matrix shifted creator outreach, landing page copy, and paid spend to the one audience segment that
            arrived with urgency instead of curiosity. That is the moment this campaign stopped looking like a
            fortune-telling experiment and started behaving like a business.
          </p>
        </div>
      </div>
    </div>
  );
}
