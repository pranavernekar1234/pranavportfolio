"use client";

import Link from "next/link";
import { Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./SocialIcons";

const links = [
  { label: "Home", href: "/" },
  { label: "About", href: "/#about" },
  { label: "Skills", href: "/#skills" },
  { label: "Certifications", href: "/#certifications" },
  { label: "Projects", href: "/projects" },
  { label: "Practice Arena", href: "/practice-arena" },
  { label: "Contact", href: "/#contact" },
];

const socials = [
  { icon: GithubIcon, href: "https://github.com/YOUR_USERNAME", label: "GitHub" },
  { icon: LinkedinIcon, href: "https://linkedin.com/in/YOUR_USERNAME", label: "LinkedIn" },
  { icon: Mail, href: "mailto:YOUR_EMAIL", label: "Email" },
];

export default function Footer() {
  return (
    <footer
      className="py-12 mt-0"
      style={{
        borderTop: "1px solid rgba(0,0,0,0.06)",
        background: "#FAFAFA",
      }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-8 mb-8">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5" aria-label="Home">
            <div
              className="w-8 h-8 rounded-full flex items-center justify-center text-white font-bold text-sm"
              style={{ background: "linear-gradient(135deg, #7C3AED, #A855F7)" }}
            >
              P
            </div>
            <span className="font-semibold text-sm" style={{ color: "#0F0F0F" }}>
              Pranav Vernekar
            </span>
          </Link>

          {/* Social */}
          <div className="flex items-center gap-3">
            {socials.map((s) => {
              const Icon = s.icon;
              return (
                <a
                  key={s.label}
                  href={s.href}
                  target={s.label !== "Email" ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="w-9 h-9 rounded-xl flex items-center justify-center transition-all"
                  style={{ background: "#F3F4F6", color: "#6B7280" }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget;
                    el.style.background = "#F3EFFE";
                    el.style.color = "#7C3AED";
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget;
                    el.style.background = "#F3F4F6";
                    el.style.color = "#6B7280";
                  }}
                >
                  <Icon size={16} />
                </a>
              );
            })}
          </div>
        </div>

        {/* Nav links */}
        <nav aria-label="Footer navigation">
          <ul className="flex flex-wrap justify-center sm:justify-start gap-x-5 gap-y-2 mb-8">
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-xs transition-colors"
                  style={{ color: "#6B7280" }}
                  onMouseEnter={(e) => ((e.target as HTMLAnchorElement).style.color = "#7C3AED")}
                  onMouseLeave={(e) => ((e.target as HTMLAnchorElement).style.color = "#6B7280")}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Bottom */}
        <div
          className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-6"
          style={{ borderTop: "1px solid rgba(0,0,0,0.06)" }}
        >
          <p className="text-xs" style={{ color: "#9CA3AF" }}>
            © 2026 Pranav Vernekar. All rights reserved.
          </p>
          <p className="text-xs" style={{ color: "#9CA3AF" }}>
            Cloud & DevOps Engineer · Generative AI Enthusiast
          </p>
        </div>
      </div>
    </footer>
  );
}
