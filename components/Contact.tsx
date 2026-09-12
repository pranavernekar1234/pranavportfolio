"use client";

import { useState } from "react";
import { Mail, Send, CheckCircle2 } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./SocialIcons";
import SectionHeading from "./SectionHeading";
import ScrollReveal from "./ScrollReveal";

const contacts = [
  {
    icon: Mail,
    label: "Email",
    value: "YOUR_EMAIL",
    href: "mailto:YOUR_EMAIL",
    color: "#7C3AED",
    bg: "#F3EFFE",
  },
  {
    icon: LinkedinIcon,
    label: "LinkedIn",
    value: "linkedin.com/in/YOUR_USERNAME",
    href: "https://linkedin.com/in/YOUR_USERNAME",
    color: "#0A66C2",
    bg: "#EFF6FF",
  },
  {
    icon: GithubIcon,
    label: "GitHub",
    value: "github.com/YOUR_USERNAME",
    href: "https://github.com/YOUR_USERNAME",
    color: "#0F0F0F",
    bg: "#F9FAFB",
  },
];

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("submitting");
    try {
      const { name, email, message } = formData;
      const res = await fetch("https://formspree.io/f/YOUR_FORMSPREE_ID", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({ name, email, message }),
      });
      if (res.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <SectionHeading
          eyebrow="Contact"
          title="Let's connect"
          subtitle="Interested in cloud, DevOps, automation, or Generative AI? Let's connect and build something meaningful."
          centered
        />

        <div className="grid lg:grid-cols-2 gap-10 max-w-4xl mx-auto">
          <ScrollReveal direction="left">
            <div className="space-y-4">
              {contacts.map((c) => {
                const Icon = c.icon;
                return (
                 <a
  key={c.label}
  href={c.href}
                    target={c.label !== "Email" ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 rounded-2xl group transition-all"
                    style={{ border: "1px solid rgba(0,0,0,0.06)", background: "#FAFAFA" }}
                    onMouseEnter={(e) => {
                      const el = e.currentTarget;
                      el.style.background = c.bg;
                      el.style.borderColor = `${c.color}25`;
                      el.style.transform = "translateY(-2px)";
                      el.style.boxShadow = `0 4px 16px ${c.color}15`;
                    }}
                    onMouseLeave={(e) => {
                      const el = e.currentTarget;
                      el.style.background = "#FAFAFA";
                      el.style.borderColor = "rgba(0,0,0,0.06)";
                      el.style.transform = "";
                      el.style.boxShadow = "";
                    }}
                  >
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{ background: c.bg }}
                    >
                      <Icon size={18} style={{ color: c.color }} />
                    </div>
                    <div>
                      <p className="text-xs font-semibold mb-0.5" style={{ color: "#0F0F0F" }}>
                        {c.label}
                      </p>
                      <p className="text-xs" style={{ color: "#6B7280" }}>
                        {c.value}
                      </p>
                    </div>
                  </a>
                );
              })}
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right">
            {status === "success" ? (
              <div
                className="flex flex-col items-center justify-center gap-4 p-10 rounded-2xl text-center h-full"
                style={{ background: "#ECFDF5", border: "1px solid rgba(16,185,129,0.15)" }}
              >
                <CheckCircle2 size={40} style={{ color: "#10B981" }} />
                <p className="text-base font-semibold" style={{ color: "#0F0F0F" }}>
                  Message sent!
                </p>
                <p className="text-sm" style={{ color: "#4B5563" }}>
                  Thanks for reaching out. I&apos;ll get back to you shortly.
                </p>
                <button
                  onClick={() => setStatus("idle")}
                  className="text-xs font-medium mt-2"
                  style={{ color: "#10B981" }}
                >
                  Send another message →
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                <div>
                  <label className="block text-xs font-medium mb-1.5" style={{ color: "#374151" }} htmlFor="name">
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData((f) => ({ ...f, name: e.target.value }))}
                    className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all"
                    style={{ border: "1.5px solid rgba(0,0,0,0.1)", background: "#FAFAFA", color: "#0F0F0F" }}
                    onFocus={(e) => (e.target.style.borderColor = "#7C3AED")}
                    onBlur={(e) => (e.target.style.borderColor = "rgba(0,0,0,0.1)")}
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium mb-1.5" style={{ color: "#374151" }} htmlFor="email">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData((f) => ({ ...f, email: e.target.value }))}
                    className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all"
                    style={{ border: "1.5px solid rgba(0,0,0,0.1)", background: "#FAFAFA", color: "#0F0F0F" }}
                    onFocus={(e) => (e.target.style.borderColor = "#7C3AED")}
                    onBlur={(e) => (e.target.style.borderColor = "rgba(0,0,0,0.1)")}
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium mb-1.5" style={{ color: "#374151" }} htmlFor="message">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData((f) => ({ ...f, message: e.target.value }))}
                    className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all resize-none"
                    style={{ border: "1.5px solid rgba(0,0,0,0.1)", background: "#FAFAFA", color: "#0F0F0F" }}
                    onFocus={(e) => (e.target.style.borderColor = "#7C3AED")}
                    onBlur={(e) => (e.target.style.borderColor = "rgba(0,0,0,0.1)")}
                    placeholder="What would you like to discuss?"
                  />
                </div>

                {status === "error" && (
                  <p className="text-xs" style={{ color: "#EF4444" }}>
                    Something went wrong. Please try again or email directly.
                  </p>
                )}

                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="btn-primary w-full justify-center"
                >
                  {status === "submitting" ? <>Sending…</> : (
                    <>Send message <Send size={14} className="btn-arrow" /></>
                  )}
                </button>
              </form>
            )}
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
