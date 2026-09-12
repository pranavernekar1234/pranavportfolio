"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import Link from "next/link";
import { GithubIcon } from "./SocialIcons";
import { Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
}

const gradientMap: Record<string, string> = {
  "from-orange-50 to-amber-50": "linear-gradient(135deg, #FFF7ED, #FFFBEB)",
  "from-sky-50 to-blue-50": "linear-gradient(135deg, #F0F9FF, #EFF6FF)",
  "from-emerald-50 to-teal-50": "linear-gradient(135deg, #ECFDF5, #F0FDFA)",
  "from-violet-50 to-purple-50": "linear-gradient(135deg, #F5F3FF, #FAF5FF)",
  "from-rose-50 to-pink-50": "linear-gradient(135deg, #FFF1F2, #FDF2F8)",
  "from-indigo-50 to-blue-50": "linear-gradient(135deg, #EEF2FF, #EFF6FF)",
  "from-fuchsia-50 to-purple-50": "linear-gradient(135deg, #FDF4FF, #FAF5FF)",
};

export default function ProjectCard({ project }: ProjectCardProps) {
  const bg = gradientMap[project.gradient] || "linear-gradient(135deg, #F9FAFB, #F3F4F6)";

  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="bg-white rounded-2xl overflow-hidden flex flex-col h-full"
      style={{
        border: "1px solid rgba(0,0,0,0.06)",
        boxShadow: "0 1px 3px rgba(0,0,0,0.05), 0 4px 16px rgba(0,0,0,0.04)",
        transition: "box-shadow 0.2s ease, border-color 0.2s ease",
      }}
      onHoverStart={(e) => {
        (e.target as HTMLElement).closest?.(".project-card-wrapper")?.classList.add("hovered");
      }}
    >
      {/* Preview area */}
      <div
        className="h-44 flex items-center justify-center relative overflow-hidden"
        style={{ background: bg }}
      >
        {/* Category badge */}
        <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
          {project.category.slice(0, 2).map((c) => (
            <span key={c} className="tag tag-purple text-[10px]">
              {c}
            </span>
          ))}
        </div>

        {/* Decorative grid */}
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage:
              "radial-gradient(circle, rgba(124,58,237,0.15) 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
          aria-hidden="true"
        />

        {/* Tech abbreviation as visual element */}
        <p
          className="text-5xl font-black opacity-10 select-none"
          style={{ color: "#7C3AED" }}
          aria-hidden="true"
        >
          {project.title.slice(0, 2).toUpperCase()}
        </p>
      </div>

      {/* Body */}
      <div className="p-5 flex flex-col flex-1">
        <h3 className="text-sm font-bold mb-1.5 leading-snug" style={{ color: "#0F0F0F" }}>
          {project.title}
        </h3>
        <p className="text-xs mb-3 font-medium" style={{ color: "#7C3AED" }}>
          {project.tagline}
        </p>
        <p className="text-xs leading-relaxed flex-1 mb-4" style={{ color: "#4B5563" }}>
          {project.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mb-5">
          {project.tags.slice(0, 5).map((tag) => (
            <span key={tag} className="tag">
              {tag}
            </span>
          ))}
          {project.tags.length > 5 && (
            <span className="tag" style={{ color: "#9CA3AF" }}>
              +{project.tags.length - 5}
            </span>
          )}
        </div>

        {/* Actions */}
        <div className="flex items-center gap-2 pt-4" style={{ borderTop: "1px solid rgba(0,0,0,0.06)" }}>
          {project.githubUrl && project.githubUrl !== "YOUR_GITHUB_URL" ? (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost text-[12px] py-2 px-3 flex-1 justify-center"
              aria-label={`GitHub — ${project.title}`}
            >
              <GithubIcon size={13} />
              GitHub
            </a>
          ) : (
            <span
              className="flex items-center gap-1.5 text-[12px] py-2 px-3 flex-1 justify-center rounded-lg"
              style={{ background: "#F9FAFB", color: "#9CA3AF", border: "1.5px solid rgba(0,0,0,0.07)" }}
            >
              <GithubIcon size={13} />
              Repo private
            </span>
          )}

          {project.liveUrl && project.liveUrl !== "YOUR_LIVE_URL" && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-[12px] py-2 px-3"
              aria-label={`Live demo — ${project.title}`}
            >
              <ExternalLink size={12} />
              Demo
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}
