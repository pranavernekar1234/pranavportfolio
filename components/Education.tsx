"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { education } from "@/data/education";

export default function Education() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="education" className="py-24" style={{ background: "#FAFAFA" }}>
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <SectionHeading eyebrow="Education" title="Academic background" />

        <div ref={ref} className="relative">
          {/* Vertical line */}
          <div className="absolute left-5 top-0 bottom-0 w-px" style={{ background: "rgba(0,0,0,0.08)" }} aria-hidden="true" />
          <motion.div
            className="absolute left-5 top-0 w-px"
            style={{ background: "linear-gradient(to bottom, #7C3AED, rgba(124,58,237,0.1))", originY: 0 }}
            initial={{ scaleY: 0 }}
            animate={isInView ? { scaleY: 1 } : { scaleY: 0 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
          />

          <div className="space-y-8 pl-14">
            {education.map((edu, i) => (
              <motion.div
                key={edu.id}
                initial={{ opacity: 0, x: -16 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -16 }}
                transition={{ delay: 0.4 + i * 0.2, duration: 0.45 }}
                className="relative"
              >
                {/* Dot */}
                <div
                  className="absolute -left-[45px] top-5 w-4 h-4 rounded-full border-2 border-white flex items-center justify-center"
                  style={{ background: "#7C3AED", boxShadow: "0 0 0 3px rgba(124,58,237,0.15)" }}
                  aria-hidden="true"
                />

                <div
                  className="bg-white rounded-2xl p-6"
                  style={{
                    border: "1px solid rgba(0,0,0,0.06)",
                    boxShadow: "0 1px 3px rgba(0,0,0,0.05), 0 4px 16px rgba(0,0,0,0.03)",
                  }}
                >
                  <div className="flex items-start gap-3">
                    <div
                      className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{ background: "#F3EFFE" }}
                    >
                      <GraduationCap size={18} style={{ color: "#7C3AED" }} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-wrap items-baseline justify-between gap-2 mb-1">
                        <h3 className="text-sm font-bold" style={{ color: "#0F0F0F" }}>
                          {edu.shortDegree} — {edu.degree}
                        </h3>
                        <span
                          className="text-xs font-medium px-2 py-0.5 rounded-full"
                          style={{ background: "#F3EFFE", color: "#7C3AED" }}
                        >
                          {edu.period}
                        </span>
                      </div>
                      <p className="text-xs mb-1" style={{ color: "#374151" }}>
                        {edu.institution}, {edu.location}
                      </p>
                      <p className="text-xs font-semibold" style={{ color: "#10B981" }}>
                        {edu.score}
                      </p>
                      {edu.focus.length > 0 && (
                        <div className="flex flex-wrap gap-1.5 mt-3">
                          {edu.focus.map((f) => (
                            <span key={f} className="tag text-[11px]">
                              {f}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
