"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import SectionHeading from "./SectionHeading";
import ProjectCard from "./ProjectCard";
import ScrollReveal from "./ScrollReveal";
import { projects } from "@/data/projects";

const featured = projects.filter((p) => p.featured).slice(0, 6);

export default function FeaturedProjects() {
  return (
    <section id="projects-preview" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-end justify-between mb-12 gap-4 flex-wrap">
          <SectionHeading
            eyebrow="Projects"
            title="Selected work"
            subtitle="Cloud infrastructure, DevOps automation, and AI-powered applications."
          />
          <ScrollReveal direction="right">
            <Link href="/projects" className="btn-ghost whitespace-nowrap">
              View all projects
              <ArrowRight size={14} className="btn-arrow" />
            </Link>
          </ScrollReveal>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {featured.map((project, i) => (
            <ScrollReveal key={project.id} delay={i * 0.07}>
              <ProjectCard project={project} />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
