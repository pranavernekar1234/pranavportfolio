"use client";

import ScrollReveal from "./ScrollReveal";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
}

export default function SectionHeading({ eyebrow, title, subtitle, centered = false }: SectionHeadingProps) {
  return (
    <ScrollReveal className={centered ? "text-center" : ""}>
      <div className={`mb-12 ${centered ? "max-w-xl mx-auto" : "max-w-xl"}`}>
        {eyebrow && (
          <p
            className="text-xs font-semibold tracking-widest uppercase mb-3"
            style={{ color: "#7C3AED" }}
          >
            {eyebrow}
          </p>
        )}
        <h2
          className="text-3xl sm:text-4xl font-bold tracking-tight leading-tight"
          style={{ color: "#0F0F0F" }}
        >
          {title}
        </h2>
        {subtitle && (
          <p
            className="mt-4 text-base leading-relaxed"
            style={{ color: "#4B5563" }}
          >
            {subtitle}
          </p>
        )}
      </div>
    </ScrollReveal>
  );
}
