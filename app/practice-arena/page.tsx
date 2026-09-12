"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Terminal, CheckCircle2, Clock, BookOpen } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import { labs, labCategories, Lab } from "@/data/labs";

const statusConfig = {
  completed: { label: "Completed", icon: CheckCircle2, color: "#10B981", bg: "#ECFDF5" },
  "in-progress": { label: "In Progress", icon: Clock, color: "#F59E0B", bg: "#FFFBEB" },
  planned: { label: "Planned", icon: BookOpen, color: "#6B7280", bg: "#F9FAFB" },
};

const platformColors: Record<string, { color: string; bg: string }> = {
  Pluralsight: { color: "#F15B2A", bg: "#FFF4EF" },
  KodeKloud: { color: "#7C3AED", bg: "#F3EFFE" },
  "AWS Skill Builder": { color: "#FF9900", bg: "#FFF8EE" },
};

function LabCard({ lab }: { lab: Lab }) {
  const cfg = statusConfig[lab.status];
  const StatusIcon = cfg.icon;
  const platform = platformColors[lab.platform] || { color: "#374151", bg: "#F9FAFB" };

  return (
    <motion.div
      whileHover={{ y: -4 }}
      className="bg-white rounded-2xl p-5 flex flex-col h-full"
      style={{
        border: "1px solid rgba(0,0,0,0.06)",
        boxShadow: "0 1px 3px rgba(0,0,0,0.05), 0 4px 16px rgba(0,0,0,0.03)",
        transition: "box-shadow 0.2s ease, border-color 0.2s ease",
      }}
    >
      {/* Status + platform */}
      <div className="flex items-center justify-between mb-4">
        <span
          className="px-2 py-0.5 rounded-full text-[10px] font-semibold"
          style={{ background: platform.bg, color: platform.color }}
        >
          {lab.platform}
        </span>
        <span
          className="flex items-center gap-1 text-[10px] font-medium px-2 py-0.5 rounded-full"
          style={{ background: cfg.bg, color: cfg.color }}
        >
          <StatusIcon size={10} />
          {cfg.label}
        </span>
      </div>

      {/* Icon + name */}
      <div className="flex items-start gap-3 mb-3">
        <div
          className="w-8 h-8 rounded-xl flex items-center justify-center flex-shrink-0"
          style={{ background: "#F3EFFE" }}
        >
          <Terminal size={15} style={{ color: "#7C3AED" }} />
        </div>
        <div>
          <h3 className="text-sm font-semibold leading-snug" style={{ color: "#0F0F0F" }}>
            {lab.name}
          </h3>
          <p className="text-[11px] mt-0.5" style={{ color: "#6B7280" }}>
            {lab.category}
          </p>
        </div>
      </div>

      <p className="text-xs leading-relaxed flex-1 mb-4" style={{ color: "#4B5563" }}>
        {lab.description}
      </p>

      {/* Tech tags */}
      <div className="flex flex-wrap gap-1.5">
        {lab.technology.map((t) => (
          <span key={t} className="tag text-[10px]">
            {t}
          </span>
        ))}
      </div>

      {/* Screenshot placeholder */}
      <div
        className="mt-4 rounded-xl flex items-center justify-center py-4"
        style={{
          border: "1.5px dashed rgba(124, 58, 237, 0.2)",
          background: "#FAFAFA",
        }}
      >
        <p className="text-[10px]" style={{ color: "#9CA3AF" }}>
          Screenshot / certificate placeholder
        </p>
      </div>
    </motion.div>
  );
}

export default function PracticeArenaPage() {
  const [active, setActive] = useState("All");

  const filtered =
    active === "All" ? labs : labs.filter((l) => l.category === active);

  const completedCount = labs.filter((l) => l.status === "completed").length;
  const inProgressCount = labs.filter((l) => l.status === "in-progress").length;

  return (
    <>
      <Navbar />
      <main className="pt-24 pb-20 min-h-screen">
        {/* Hero */}
        <div className="relative overflow-hidden">
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse 50% 60% at 70% 0%, rgba(124, 58, 237, 0.07) 0%, transparent 60%)",
            }}
            aria-hidden="true"
          />
          <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16">
            <ScrollReveal>
              <p
                className="text-xs font-semibold tracking-widest uppercase mb-4"
                style={{ color: "#7C3AED" }}
              >
                Hands-on Learning
              </p>
              <h1
                className="text-5xl sm:text-6xl font-extrabold tracking-tight leading-tight mb-4"
                style={{ color: "#0F0F0F" }}
              >
                Practice Arena
              </h1>
              <p className="text-base max-w-lg leading-relaxed" style={{ color: "#4B5563" }}>
                Hands-on cloud, DevOps, and infrastructure labs across Pluralsight, KodeKloud, and AWS
                Skill Builder — practising real tools on real scenarios.
              </p>
            </ScrollReveal>

            {/* Stats row */}
            <ScrollReveal delay={0.1} className="mt-8">
              <div className="flex flex-wrap gap-4">
                {[
                  { label: "Labs completed", value: completedCount },
                  { label: "In progress", value: inProgressCount },
                  { label: "Platforms", value: 3 },
                ].map((s) => (
                  <div
                    key={s.label}
                    className="px-5 py-3 rounded-2xl"
                    style={{
                      background: "#F3EFFE",
                      border: "1px solid rgba(124,58,237,0.1)",
                    }}
                  >
                    <p className="text-2xl font-black" style={{ color: "#7C3AED" }}>
                      {s.value}
                    </p>
                    <p className="text-xs" style={{ color: "#6B7280" }}>
                      {s.label}
                    </p>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          {/* Filter bar */}
          <ScrollReveal className="mb-8">
            <div className="flex flex-wrap gap-2" role="group" aria-label="Filter by category">
              {labCategories.map((cat) => {
                const isActive = active === cat;
                return (
                  <button
                    key={cat}
                    onClick={() => setActive(cat)}
                    className="px-4 py-2 rounded-xl text-xs font-semibold transition-all"
                    style={{
                      background: isActive ? "#7C3AED" : "#F3F4F6",
                      color: isActive ? "#ffffff" : "#374151",
                      border: isActive ? "1.5px solid #7C3AED" : "1.5px solid transparent",
                    }}
                    aria-pressed={isActive}
                  >
                    {cat}
                  </button>
                );
              })}
            </div>
          </ScrollReveal>

          {/* Grid */}
          <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            <AnimatePresence mode="popLayout">
              {filtered.map((lab) => (
                <motion.div
                  key={lab.id}
                  layout
                  initial={{ opacity: 0, scale: 0.97 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.97 }}
                  transition={{ duration: 0.22 }}
                >
                  <LabCard lab={lab} />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {filtered.length === 0 && (
            <div className="py-20 text-center">
              <p className="text-sm" style={{ color: "#9CA3AF" }}>
                No labs in this category yet.
              </p>
            </div>
          )}

          {/* Add more notice */}
          <ScrollReveal className="mt-12">
            <div
              className="rounded-2xl p-8 text-center"
              style={{
                border: "1.5px dashed rgba(124,58,237,0.2)",
                background: "#FAFAFA",
              }}
            >
              <Terminal size={28} className="mx-auto mb-3" style={{ color: "#A855F7" }} />
              <p className="text-sm font-semibold mb-1" style={{ color: "#0F0F0F" }}>
                More labs being added
              </p>
              <p className="text-xs max-w-sm mx-auto" style={{ color: "#6B7280" }}>
                This section grows continuously as new labs are completed. Screenshots and
                completion certificates will be linked here as they become available.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </main>
      <Footer />
    </>
  );
}
