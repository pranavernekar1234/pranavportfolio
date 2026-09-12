"use client";

import { motion } from "framer-motion";
import { ExternalLink, CheckCircle2 } from "lucide-react";
import SectionHeading from "./SectionHeading";
import ScrollReveal from "./ScrollReveal";
import { certifications } from "@/data/certifications";

export default function Certifications() {
  return (
    <section id="certifications" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <SectionHeading
          eyebrow="Certifications"
          title="Verified credentials"
          subtitle="Industry certifications and learning credentials earned through structured study and hands-on practice."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-5">
          {certifications.map((cert, i) => (
            <ScrollReveal key={cert.id} delay={i * 0.08}>
              <motion.div
                whileHover={{ y: -4 }}
                className="card p-6 h-full flex flex-col"
                style={{ borderRadius: "16px" }}
              >
                {/* Header */}
                <div className="flex items-start justify-between gap-3 mb-4">
                  <div
                    className="px-2.5 py-1 rounded-lg text-[11px] font-bold tracking-wide"
                    style={{
                      background: `${cert.color}18`,
                      color: cert.color,
                      border: `1px solid ${cert.color}30`,
                    }}
                  >
                    {cert.providerShort}
                  </div>
                  {cert.status === "completed" && (
                    <CheckCircle2 size={18} className="flex-shrink-0 mt-0.5" style={{ color: "#10B981" }} />
                  )}
                </div>

                {/* Title */}
                <h3 className="text-sm font-semibold leading-snug mb-2" style={{ color: "#0F0F0F" }}>
                  {cert.title}
                </h3>

                {/* Provider + year */}
                <p className="text-xs mb-3" style={{ color: "#6B7280" }}>
                  {cert.provider} · {cert.year}
                </p>

                {/* Description */}
                <p className="text-xs leading-relaxed flex-1 mb-4" style={{ color: "#4B5563" }}>
                  {cert.description}
                </p>

                {/* CTA */}
                {cert.credentialUrl && cert.credentialUrl !== "YOUR_CREDENTIAL_URL" ? (
                  <a
                    href={cert.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-medium"
                    style={{ color: "#7C3AED" }}
                  >
                    View credential
                    <ExternalLink size={12} />
                  </a>
                ) : (
                  <span className="text-xs" style={{ color: "#9CA3AF" }}>
                    Credential link coming soon
                  </span>
                )}
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
