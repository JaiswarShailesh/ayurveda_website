"use client";


import { Megaphone } from "lucide-react";

type Props = { notices: string[] };

export default function RunnerNotice({ notices }: Props) {
  return (
    <div className="flex items-center overflow-hidden" style={{ background: "var(--ayu-forest)", height: "38px" }}>
      <div className="flex-shrink-0 flex items-center gap-2 px-4 h-full text-white text-xs font-semibold uppercase tracking-wider" style={{ background: "var(--ayu-gold)" }}>
        <Megaphone size={14} />
        Notice
      </div>
      <div className="overflow-hidden flex-1">
        <div className="flex whitespace-nowrap" style={{ animation: "marquee 35s linear infinite" }}>
          {[...notices, ...notices].map((n, i) => (
            <span key={i} className="text-white/90 text-sm mx-8">
              🌿 {n}
            </span>
          ))}
        </div>
      </div>
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
}
