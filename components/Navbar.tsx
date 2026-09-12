"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { X, Menu } from "lucide-react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/#about" },
  { label: "Skills", href: "/#skills" },
  { label: "Certifications", href: "/#certifications" },
  { label: "Projects", href: "/projects" },
  { label: "Practice Arena", href: "/practice-arena" },
  { label: "Contact", href: "/#contact" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      const sections = ["home", "about", "skills", "certifications", "education", "experience", "projects-preview", "practice-preview", "contact"];
      for (const section of sections.reverse()) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/" && activeSection === "home";
    if (href.startsWith("/#")) {
      const section = href.replace("/#", "");
      return activeSection === section || activeSection.startsWith(section);
    }
    return pathname === href;
  };

  return (
    <>
      <motion.header
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="fixed top-0 left-0 right-0 z-50 px-4 pt-3"
      >
        <nav
          className="max-w-6xl mx-auto flex items-center justify-between px-4 py-2.5 rounded-2xl transition-all duration-300"
          style={{
            background: scrolled ? "rgba(255,255,255,0.96)" : "rgba(255,255,255,0.9)",
            backdropFilter: "blur(12px)",
            border: "1px solid rgba(0,0,0,0.07)",
            boxShadow: scrolled ? "0 2px 20px rgba(0,0,0,0.07)" : "0 1px 8px rgba(0,0,0,0.04)",
          }}
        >
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 group" aria-label="Home">
            <div
              className="w-8 h-8 rounded-full flex items-center justify-center text-white font-bold text-sm"
              style={{ background: "linear-gradient(135deg, #7C3AED, #A855F7)" }}
            >
              P
            </div>
            <span className="font-semibold text-[15px] text-gray-900 tracking-tight">Pranav</span>
          </Link>

          {/* Desktop nav */}
          <ul className="hidden lg:flex items-center gap-1" role="list">
            {navLinks.map((link) => {
              const active = isActive(link.href);
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="relative px-3.5 py-1.5 rounded-lg text-[13px] font-medium transition-colors duration-150"
                    style={{
                      color: active ? "#7C3AED" : "#374151",
                      background: active ? "#F3EFFE" : "transparent",
                    }}
                    onMouseEnter={(e) => {
                      if (!active) {
                        e.currentTarget.style.background = "#F9F9FB";
                        e.currentTarget.style.color = "#111827";
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (!active) {
                        e.currentTarget.style.background = "transparent";
                        e.currentTarget.style.color = "#374151";
                      }
                    }}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden p-2 rounded-lg hover:bg-gray-50 transition-colors"
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
            aria-expanded={mobileOpen}
          >
            <Menu size={20} className="text-gray-700" />
          </button>
        </nav>
      </motion.header>

      {/* Mobile overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] lg:hidden"
            style={{ background: "rgba(0,0,0,0.3)", backdropFilter: "blur(4px)" }}
            onClick={() => setMobileOpen(false)}
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 28, stiffness: 280 }}
            className="fixed top-0 right-0 bottom-0 z-[70] w-72 bg-white lg:hidden flex flex-col"
            style={{ boxShadow: "-4px 0 40px rgba(0,0,0,0.12)" }}
          >
            <div className="flex items-center justify-between px-5 py-4 border-b border-gray-100">
              <div className="flex items-center gap-2.5">
                <div
                  className="w-8 h-8 rounded-full flex items-center justify-center text-white font-bold text-sm"
                  style={{ background: "linear-gradient(135deg, #7C3AED, #A855F7)" }}
                >
                  P
                </div>
                <span className="font-semibold text-[15px]">Pranav Vernekar</span>
              </div>
              <button
                onClick={() => setMobileOpen(false)}
                className="p-1.5 rounded-lg hover:bg-gray-100 transition-colors"
                aria-label="Close menu"
              >
                <X size={18} className="text-gray-600" />
              </button>
            </div>
            <nav className="flex-1 px-4 py-4">
              <ul className="space-y-1" role="list">
                {navLinks.map((link, i) => (
                  <motion.li
                    key={link.href}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setMobileOpen(false)}
                      className="flex items-center px-4 py-2.5 rounded-xl text-[14px] font-medium transition-colors"
                      style={{
                        color: isActive(link.href) ? "#7C3AED" : "#374151",
                        background: isActive(link.href) ? "#F3EFFE" : "transparent",
                      }}
                    >
                      {link.label}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </nav>
            <div className="px-5 pb-6 border-t border-gray-100 pt-4">
              <a href="mailto:YOUR_EMAIL" className="btn-primary w-full justify-center">
                Get in touch
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
