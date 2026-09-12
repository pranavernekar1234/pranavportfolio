"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import SectionHeading from "./SectionHeading";
import ScrollReveal from "./ScrollReveal";
import { skillCategories } from "@/data/skills";

const cloudColors: Record<string, string> = {
  AWS: "#FF9900",
  Azure: "#0078D4",
  OCI: "#F80000",
};

function CloudCard({ name, icon }: { name: string; icon: string }) {
  const color = cloudColors[name] || "#7C3AED";
  return (
    <motion.div
      whileHover={{ y: -4, boxShadow: `0 8px 24px ${color}22` }}
      className="card p-6 flex flex-col items-center gap-3 cursor-default"
      style={{ borderRadius: "16px" }}
    >
      <span className="text-3xl">{icon}</span>
      <p className="text-sm font-semibold" style={{ color: "#0F0F0F" }}>
        {name}
      </p>
      <div
        className="h-0.5 w-8 rounded-full"
        style={{ background: color }}
      />
    </motion.div>
  );
}

function SkillPill({ name, icon }: { name: string; icon: string }) {
  return (
    <motion.div
      whileHover={{ scale: 1.04 }}
      className="flex items-center gap-2 px-3 py-2 rounded-xl cursor-default select-none"
      style={{
        background: "#F8F8FB",
        border: "1px solid rgba(0,0,0,0.06)",
      }}
    >
      <span className="text-base">{icon}</span>
      <span className="text-xs font-medium" style={{ color: "#374151" }}>
        {name}
      </span>
    </motion.div>
  );
}

export default function Skills() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  const cloudCategory = skillCategories.find((c) => c.id === "cloud");
  const rest = skillCategories.filter((c) => c.id !== "cloud");

  return (
    <section id="skills" className="py-24" style={{ background: "#FAFAFA" }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6" ref={ref}>
        <SectionHeading
          eyebrow="Skills & Technologies"
          title="What I work with"
          subtitle="A practitioner's toolkit — cloud platforms, DevOps tooling, programming languages, and AI frameworks."
        />

        {/* Cloud platforms — featured */}
        {cloudCategory && (
          <ScrollReveal>
            <div className="mb-10">
              <p className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: "#9CA3AF" }}>
                {cloudCategory.label}
              </p>
              <div className="grid grid-cols-3 sm:grid-cols-3 gap-4 max-w-sm">
                {cloudCategory.skills.map((s) => (
                  <CloudCard key={s.name} name={s.name} icon={s.icon} />
                ))}
              </div>
            </div>
          </ScrollReveal>
        )}

        {/* Other categories */}
        <div className="space-y-8">
          {rest.map((cat, ci) => (
            <ScrollReveal key={cat.id} delay={ci * 0.06}>
              <div>
                <p
                  className="text-xs font-semibold uppercase tracking-widest mb-3"
                  style={{ color: "#9CA3AF" }}
                >
                  {cat.label}
                </p>
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((s) => (
                    <SkillPill key={s.name} name={s.name} icon={s.icon} />
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
