import { SectionLabel } from "@/components/section-label";

export function PageHero(props: {
  eyebrow: string;
  title: string;
  body: string;
  side?: React.ReactNode;
}) {
  return (
    <section className="relative overflow-hidden rounded-[36px] border border-white/8 bg-[linear-gradient(180deg,rgba(255,255,255,0.055),rgba(255,255,255,0.018))] px-6 py-7 sm:px-8 sm:py-8">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,132,108,0.18),transparent_28%),radial-gradient(circle_at_88%_18%,rgba(126,219,228,0.18),transparent_24%),linear-gradient(180deg,rgba(255,255,255,0.04),transparent_55%)]" />
      <div className="pointer-events-none absolute left-[10%] top-[14%] h-52 w-52 rounded-full bg-[radial-gradient(circle,rgba(255,132,108,0.16),transparent_64%)] blur-3xl" />
      <div className="pointer-events-none absolute right-[10%] top-[12%] h-44 w-44 rounded-full bg-[radial-gradient(circle,rgba(126,219,228,0.18),transparent_62%)] blur-3xl" />
      <div className="relative grid gap-6 lg:grid-cols-[1fr_0.7fr] lg:items-end">
        <div className="space-y-4">
          <SectionLabel>{props.eyebrow}</SectionLabel>
          <h1 className="max-w-4xl font-serif text-5xl leading-[0.92] text-stone-50 sm:text-6xl">
            {props.title}
          </h1>
          <p className="max-w-2xl text-lg leading-8 text-stone-300/92">{props.body}</p>
        </div>
        {props.side ? (
          <div className="rounded-[30px] border border-white/10 bg-[linear-gradient(180deg,rgba(7,12,20,0.64),rgba(10,14,24,0.3))] p-6 backdrop-blur-md">
            {props.side}
          </div>
        ) : null}
        <div className="pointer-events-none absolute right-10 top-10 hidden h-24 w-24 rounded-full border border-white/8 lg:block" />
        <div className="pointer-events-none absolute bottom-8 right-16 hidden h-10 w-10 rounded-full border border-[#ff9d87]/25 lg:block" />
      </div>
    </section>
  );
}
