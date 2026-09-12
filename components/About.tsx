"use client";

import ScrollReveal from "./ScrollReveal";
import SectionHeading from "./SectionHeading";
import { Cloud, Server, GitBranch, Sparkles } from "lucide-react";

const pillars = [
  {
    icon: Cloud,
    label: "Cloud Infrastructure",
    desc: "AWS, Azure, OCI — designing and deploying scalable cloud systems",
    color: "#0EA5E9",
    bg: "#F0F9FF",
  },
  {
    icon: Server,
    label: "DevOps Automation",
    desc: "CI/CD pipelines, containerisation, and infrastructure as code",
    color: "#7C3AED",
    bg: "#F3EFFE",
  },
  {
    icon: GitBranch,
    label: "IaC & Tooling",
    desc: "Terraform, Ansible, Docker, Kubernetes — reproducible environments",
    color: "#059669",
    bg: "#ECFDF5",
  },
  {
    icon: Sparkles,
    label: "Generative AI",
    desc: "LLMs, RAG, prompt engineering, and AI-powered automation",
    color: "#D97706",
    bg: "#FFFBEB",
  },
];

export default function About() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left */}
          <div>
            <SectionHeading
              eyebrow="About Me"
              title="Building infrastructure that scales"
              subtitle=""
            />
            <ScrollReveal delay={0.1}>
              <p className="text-base leading-relaxed mb-4" style={{ color: "#374151" }}>
                I&apos;m Pranav Vernekar, a Cloud and DevOps enthusiast with a strong focus on cloud
                infrastructure, automation, CI/CD, containerisation, Infrastructure as Code, and
                Generative AI.
              </p>
              <p className="text-base leading-relaxed mb-4" style={{ color: "#374151" }}>
                This portfolio reflects hands-on work across AWS, Azure, and OCI — from
                Terraform-managed multi-region architectures to Jenkins pipelines and Kubernetes
                workloads. I treat every project as an opportunity to practise production-grade
                engineering habits.
              </p>
              <p className="text-base leading-relaxed" style={{ color: "#374151" }}>
                On the AI side, I&apos;m actively exploring large language models, RAG pipelines, and
                prompt engineering to understand where AI genuinely improves developer and
                operational workflows.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.2} className="mt-8">
              <div className="flex flex-wrap gap-2">
                {["MCA – KLE Tech University", "AWS Certified", "Open to DevOps Roles", "Based in India"].map(
                  (tag) => (
                    <span key={tag} className="tag tag-purple">
                      {tag}
                    </span>
                  )
                )}
              </div>
            </ScrollReveal>
          </div>

          {/* Right — pillar cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {pillars.map((p, i) => {
              const Icon = p.icon;
              return (
                <ScrollReveal key={p.label} delay={i * 0.08}>
                  <div className="card p-5 h-full" style={{ borderRadius: "14px" }}>
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center mb-3"
                      style={{ background: p.bg }}
                    >
                      <Icon size={20} style={{ color: p.color }} />
                    </div>
                    <p className="text-sm font-semibold mb-1" style={{ color: "#0F0F0F" }}>
                      {p.label}
                    </p>
                    <p className="text-xs leading-relaxed" style={{ color: "#6B7280" }}>
                      {p.desc}
                    </p>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
