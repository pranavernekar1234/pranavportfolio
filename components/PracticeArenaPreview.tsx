"use client";

import Link from "next/link";
import { ArrowRight, Terminal, CheckCircle2, Clock } from "lucide-react";
import SectionHeading from "./SectionHeading";
import ScrollReveal from "./ScrollReveal";
import { labs } from "@/data/labs";

const preview = labs.slice(0, 3);

const statusConfig = {
  completed: { label: "Completed", icon: CheckCircle2, color: "#10B981", bg: "#ECFDF5" },
  "in-progress": { label: "In Progress", icon: Clock, color: "#F59E0B", bg: "#FFFBEB" },
  planned: { label: "Planned", icon: Clock, color: "#6B7280", bg: "#F9FAFB" },
};

export default function PracticeArenaPreview() {
  return (
    <section id="practice-preview" className="py-24" style={{ background: "#FAFAFA" }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-end justify-between mb-12 gap-4 flex-wrap">
          <SectionHeading
            eyebrow="Practice Arena"
            title="Hands-on labs"
            subtitle="Cloud experiments, DevOps drills, and infrastructure practice across Pluralsight, KodeKloud, and AWS Skill Builder."
          />
          <ScrollReveal direction="right">
            <Link href="/practice-arena" className="btn-ghost whitespace-nowrap">
              Explore all labs
              <ArrowRight size={14} className="btn-arrow" />
            </Link>
          </ScrollReveal>
        </div>

        <div className="grid sm:grid-cols-3 gap-4">
          {preview.map((lab, i) => {
            const cfg = statusConfig[lab.status];
            const Icon = cfg.icon;
            return (
              <ScrollReveal key={lab.id} delay={i * 0.08}>
                <div className="card p-5 h-full flex flex-col" style={{ borderRadius: "14px" }}>
                  {/* Header row */}
                  <div className="flex items-start justify-between gap-2 mb-3">
                    <div
                      className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{ background: "#F3EFFE" }}
                    >
                      <Terminal size={16} style={{ color: "#7C3AED" }} />
                    </div>
                    <span
                      className="flex items-center gap-1 text-[10px] font-semibold px-2 py-0.5 rounded-full"
                      style={{ background: cfg.bg, color: cfg.color }}
                    >
                      <Icon size={10} />
                      {cfg.label}
                    </span>
                  </div>

                  <p className="text-xs font-semibold mb-1" style={{ color: "#0F0F0F" }}>
                    {lab.name}
                  </p>
                  <p className="text-[11px] mb-3" style={{ color: "#7C3AED" }}>
                    {lab.platform}
                  </p>
                  <p className="text-xs leading-relaxed flex-1" style={{ color: "#4B5563" }}>
                    {lab.description}
                  </p>

                  <div className="flex flex-wrap gap-1 mt-3">
                    {lab.technology.slice(0, 3).map((t) => (
                      <span key={t} className="tag text-[10px]">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
