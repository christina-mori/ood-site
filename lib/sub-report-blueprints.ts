export type SubReportSlug =
  | "relationship-deep-dive"
  | "career-deep-dive"
  | "money-deep-dive"
  | "healing-deep-dive";

export type SubReportBlueprint = {
  shortTitle: string;
  premise: string;
  basedOn: string[];
  output: string[];
  guidance: string;
};

export const subReportBlueprints: Record<SubReportSlug, SubReportBlueprint> = {
  "relationship-deep-dive": {
    shortTitle: "Romantic Advice",
    premise:
      "This paid layer takes the relationship signal already hinted at in the Cross Over report and expands it into a warmer, more specific emotional reading.",
    basedOn: [
      "Name, birth date, birth time, and birth place from the first intake",
      "The combined East-West base profile and the Cross Over relationship signal",
      "Any additional context about the person or relationship stage",
    ],
    output: [
      "A 5-part romantic advice report plus one natural follow-up question",
      "Why the relationship feels intense, weighted, and hard to ignore",
      "How emotional needs, defenses, and timing pressures are shaping the tension",
      "What kind of communication or closeness fits the current stage better",
    ],
    guidance:
      "The report should feel warm, intimate, and non-judgmental, like someone truly understands how relationship pain lingers and unfolds.",
  },
  "career-deep-dive": {
    shortTitle: "Career",
    premise:
      "This layer extends the work and direction signal from the Cross Over report into a practical reading about momentum, decisions, and what kind of path the user can actually sustain.",
    basedOn: [
      "Core intake information from the first step",
      "Cross Over signals about timing, structure, and visible direction",
      "Any work-related concern the user most wants clarity on",
    ],
    output: [
      "A career direction report that explains the user's current work rhythm",
      "What type of path or role structure fits their ability pattern best",
      "Why recent blockage or acceleration is happening now",
      "A clearer strategy for whether to push, pivot, or consolidate",
    ],
    guidance:
      "The report should feel clear, strategic, and grounded, more like a perceptive advisor than generic career motivation.",
  },
  "money-deep-dive": {
    shortTitle: "Personal Growth",
    premise:
      "This report expands the self-development thread from the Cross Over layer into a focused reading about inner loops, growth friction, and the behavior patterns most ready to evolve.",
    basedOn: [
      "The user's base intake profile",
      "Cross Over personality synthesis and current timing signal",
      "Growth-oriented tension already surfaced in the combined report",
    ],
    output: [
      "A 5-part personal growth report plus one follow-up question",
      "What inner pattern or emotional loop is currently consuming the most energy",
      "Why this growth theme is becoming louder right now in both systems",
      "A slower, more compassionate direction for untangling what feels heavy",
    ],
    guidance:
      "The report should feel soothing, steady, and emotionally intelligent, like someone is helping the user sort what has quietly been weighing on them.",
  },
  "healing-deep-dive": {
    shortTitle: "Health",
    premise:
      "This report takes the care and balance signals from the Cross Over layer and expands them into a softer reading about recovery rhythm, steadiness, and what helps the user return to equilibrium.",
    basedOn: [
      "The user's initial intake data",
      "Cross Over signals about balance, tension, and current seasonality",
      "The user's broad concern about wellbeing or depletion",
    ],
    output: [
      "A health-oriented report focused on recovery rhythm and gentle body awareness",
      "How element balance and chart emphasis point to likely areas of depletion",
      "Why fatigue, sleep, or physical imbalance may feel more noticeable right now",
      "Soft direction on rest, movement, and self-regulation without medical diagnosis",
    ],
    guidance:
      "The report should feel calm, professional, and reassuring, like a caring guide helping the user notice what deserves support without creating fear.",
  },
};
