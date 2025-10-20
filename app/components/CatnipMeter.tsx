"use client";

import { useState } from "react";

const meterStates = [
  {
    label: "Sleepy whiskers",
    description:
      "Catnip reserves low. Recommend immediate lap placement and gentle chin scratches.",
    color: "bg-paw/20 border-paw/30",
    emoji: "😴",
  },
  {
    label: "Curious tail",
    description:
      "Optimal vibe for dignified exploration of cardboard architecture.",
    color: "bg-mint/30 border-mint/40",
    emoji: "👀",
  },
  {
    label: "Zoomies engaged",
    description:
      "Catnip saturation achieved. Prepare hallway for high-speed paw traffic.",
    color: "bg-sunbeam/25 border-sunbeam/40",
    emoji: "💨",
  },
];

export function CatnipMeter() {
  const [level, setLevel] = useState(1);
  const current = meterStates[level];

  return (
    <div className="space-y-4 rounded-3xl border border-paw/10 bg-cream/80 p-5 soft-card">
      <div className="flex items-center justify-between gap-4">
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-paw/70">
            Catnip status
          </p>
          <p className="text-lg font-semibold text-paw">{current.label}</p>
        </div>
        <span className="text-3xl" aria-hidden>
          {current.emoji}
        </span>
      </div>
      <p className="text-sm text-paw/80">{current.description}</p>
      <div
        className={`rounded-2xl border p-4 transition-colors ${current.color}`}
      >
        <label className="flex flex-col gap-3">
          <span className="text-xs font-medium tracking-wide text-paw/60">
            Adjust for current nap cycle
          </span>
          <input
            type="range"
            min={0}
            max={2}
            value={level}
            onChange={(event) => setLevel(Number(event.target.value))}
            className="h-2 w-full cursor-pointer appearance-none rounded-full bg-gradient-to-r from-mint via-sunbeam to-tabby"
            aria-valuemax={2}
            aria-valuemin={0}
            aria-valuenow={level}
            aria-label="Catnip intensity"
          />
        </label>
      </div>
    </div>
  );
}
