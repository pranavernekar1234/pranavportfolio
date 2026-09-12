"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProjectCard from "@/components/ProjectCard";
import ScrollReveal from "@/components/ScrollReveal";
import { projects, ProjectCategory } from "@/data/projects";

const categories: { label: string; value: "ALL" | ProjectCategory }[] = [
  { label: "All", value: "ALL" },
  { label: "AWS", value: "AWS" },
  { label: "Azure", value: "Azure" },
  { label: "OCI", value: "OCI" },
  { label: "DevOps", value: "DevOps" },
  { label: "Generative AI", value: "Generative AI" },
  { label: "Web", value: "Web" },
];

export default function ProjectsPage() {
  const [active, setActive] = useState<"ALL" | ProjectCategory>("ALL");

  const filtered =
    active === "ALL" ? projects : projects.filter((p) => p.category.includes(active));

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
                "radial-gradient(ellipse 60% 60% at 60% 0%, rgba(124, 58, 237, 0.07) 0%, transparent 65%)",
            }}
            aria-hidden="true"
          />
          <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16">
            <ScrollReveal>
              <p
                className="text-xs font-semibold tracking-widest uppercase mb-4"
                style={{ color: "#7C3AED" }}
              >
                Portfolio
              </p>
              <h1
                className="text-5xl sm:text-6xl font-extrabold tracking-tight leading-tight mb-4"
                style={{ color: "#0F0F0F" }}
              >
                Projects
              </h1>
              <p className="text-base max-w-lg leading-relaxed" style={{ color: "#4B5563" }}>
                Cloud infrastructure, DevOps automation, AI-powered applications, and production-style
                systems — built to practise real engineering.
              </p>
            </ScrollReveal>
          </div>
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          {/* Filter bar */}
          <ScrollReveal className="mb-8">
            <div className="flex flex-wrap gap-2" role="group" aria-label="Filter projects by category">
              {categories.map((cat) => {
                const isActive = active === cat.value;
                return (
                  <button
                    key={cat.value}
                    onClick={() => setActive(cat.value)}
                    className="px-4 py-2 rounded-xl text-xs font-semibold transition-all"
                    style={{
                      background: isActive ? "#7C3AED" : "#F3F4F6",
                      color: isActive ? "#ffffff" : "#374151",
                      border: isActive ? "1.5px solid #7C3AED" : "1.5px solid transparent",
                    }}
                    aria-pressed={isActive}
                  >
                    {cat.label}
                  </button>
                );
              })}
            </div>
          </ScrollReveal>

          {/* Count */}
          <ScrollReveal className="mb-6">
            <p className="text-xs" style={{ color: "#9CA3AF" }}>
              {filtered.length} project{filtered.length !== 1 ? "s" : ""}
              {active !== "ALL" ? ` in ${active}` : " total"}
            </p>
          </ScrollReveal>

          {/* Grid */}
          <motion.div
            layout
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5"
          >
            <AnimatePresence mode="popLayout">
              {filtered.map((project) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.25 }}
                >
                  <ProjectCard project={project} />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {filtered.length === 0 && (
            <div className="py-20 text-center">
              <p className="text-sm" style={{ color: "#9CA3AF" }}>
                No projects in this category yet.
              </p>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}
