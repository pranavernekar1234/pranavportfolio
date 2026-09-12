"use client";

import { Briefcase } from "lucide-react";
import SectionHeading from "./SectionHeading";
import ScrollReveal from "./ScrollReveal";
import { experience } from "@/data/experience";

export default function Experience() {
  const hasReal = experience.some((e) => !e.placeholder);

  return (
    <section id="experience" className="py-24 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <SectionHeading eyebrow="Work Experience" title="Where I've worked" />

        {!hasReal ? (
          <ScrollReveal>
            <div
              className="rounded-2xl p-8 text-center"
              style={{
                border: "1.5px dashed rgba(124, 58, 237, 0.25)",
                background: "#FAFAFA",
              }}
            >
              <div
                className="w-12 h-12 rounded-2xl flex items-center justify-center mx-auto mb-4"
                style={{ background: "#F3EFFE" }}
              >
                <Briefcase size={22} style={{ color: "#7C3AED" }} />
              </div>
              <p className="text-sm font-semibold mb-2" style={{ color: "#0F0F0F" }}>
                Work experience coming soon
              </p>
              <p className="text-xs leading-relaxed max-w-xs mx-auto" style={{ color: "#6B7280" }}>
                Professional experience details will be added here. In the meantime, explore the
                projects and practice arena sections to see hands-on work.
              </p>
            </div>
          </ScrollReveal>
        ) : (
          <div className="space-y-5">
            {experience.map((exp, i) => (
              <ScrollReveal key={exp.id} delay={i * 0.1}>
                <div
                  className="bg-white rounded-2xl p-6"
                  style={{
                    border: "1px solid rgba(0,0,0,0.06)",
                    boxShadow: "0 1px 3px rgba(0,0,0,0.05)",
                  }}
                >
                  <div className="flex items-start gap-3 mb-3">
                    <div
                      className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{ background: "#F3EFFE" }}
                    >
                      <Briefcase size={16} style={{ color: "#7C3AED" }} />
                    </div>
                    <div>
                      <h3 className="text-sm font-bold" style={{ color: "#0F0F0F" }}>
                        {exp.role}
                      </h3>
                      <p className="text-xs" style={{ color: "#6B7280" }}>
                        {exp.company} · {exp.location} · {exp.period}
                      </p>
                    </div>
                  </div>
                  <ul className="space-y-1.5 ml-12">
                    {exp.responsibilities.map((r, ri) => (
                      <li key={ri} className="flex gap-2">
                        <span style={{ color: "#7C3AED" }} className="mt-1.5 flex-shrink-0">
                          <svg width="4" height="4" viewBox="0 0 4 4" fill="currentColor">
                            <circle cx="2" cy="2" r="2" />
                          </svg>
                        </span>
                        <span className="text-xs leading-relaxed" style={{ color: "#374151" }}>
                          {r}
                        </span>
                      </li>
                    ))}
                  </ul>
                  {exp.technologies && (
                    <div className="flex flex-wrap gap-1.5 mt-4 ml-12">
                      {exp.technologies.map((t) => (
                        <span key={t} className="tag">
                          {t}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </ScrollReveal>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
