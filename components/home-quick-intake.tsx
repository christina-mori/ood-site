"use client";

import dynamic from "next/dynamic";

export const HomeQuickIntake = dynamic(
  () => import("@/components/quick-intake").then((module) => module.QuickIntake),
  {
    ssr: false,
    loading: () => (
      <div className="relative overflow-hidden rounded-[34px] border border-white/10 bg-[linear-gradient(180deg,rgba(6,11,20,0.96),rgba(3,7,14,0.9))] p-6 shadow-[0_36px_140px_rgba(0,0,0,0.48)]">
        <div className="space-y-4">
          <div className="h-3 w-28 rounded-full bg-white/10" />
          <div className="h-12 w-72 rounded-full bg-white/8" />
          <div className="grid gap-4 md:grid-cols-[1.1fr_0.9fr]">
            <div className="space-y-4">
              <div className="h-14 rounded-2xl bg-white/6" />
              <div className="h-14 rounded-2xl bg-white/6" />
              <div className="h-14 rounded-2xl bg-white/6" />
            </div>
            <div className="min-h-[188px] rounded-[28px] bg-white/6" />
          </div>
          <div className="h-14 rounded-2xl bg-white/6" />
          <div className="h-14 rounded-2xl bg-white/6" />
        </div>
      </div>
    ),
  },
);
