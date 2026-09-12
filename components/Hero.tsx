"use client";

import { motion, Variants } from "framer-motion";
import { ArrowRight, Mail } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const container: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12 },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] } },
};

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden"
    >
      {/* Background glow */}
      <div className="absolute inset-0 glow-hero pointer-events-none" aria-hidden="true" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* LEFT — text */}
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="order-2 lg:order-1"
          >
            <motion.div variants={item}>
              <p
                className="text-xs font-semibold tracking-widest uppercase mb-6"
                style={{ color: "#7C3AED" }}
              >
                Cloud · DevOps · Generative AI
              </p>
            </motion.div>

            <motion.h1
              variants={item}
              className="text-5xl sm:text-6xl xl:text-7xl font-extrabold tracking-tight leading-[1.05] mb-6"
              style={{ color: "#0F0F0F" }}
            >
              Hi, I&apos;m{" "}
              <span className="gradient-text">Pranav</span>
              <br />
              Vernekar
            </motion.h1>

            <motion.p
              variants={item}
              className="text-base sm:text-lg leading-relaxed max-w-md mb-10"
              style={{ color: "#4B5563" }}
            >
              Cloud & DevOps enthusiast with hands-on experience building, automating, and
              deploying cloud infrastructure. Passionate about AWS, Terraform, Kubernetes,
              and Generative AI.
            </motion.p>

            <motion.div variants={item} className="flex flex-wrap gap-3">
              <Link href="/projects" className="btn-primary">
                View my projects
                <ArrowRight size={15} className="btn-arrow" />
              </Link>
              <Link href="/#contact" className="btn-ghost">
                <Mail size={15} />
                Contact me
              </Link>
            </motion.div>

            {/* Quick focus areas */}
            <motion.div
              variants={item}
              className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-3"
            >
              {[
                { label: "AWS", sub: "Cloud Platform" },
                { label: "DevOps", sub: "CI/CD & Automation" },
                { label: "Terraform", sub: "Infrastructure as Code" },
                { label: "Gen AI", sub: "AI Enthusiast" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="card p-4 rounded-xl"
                  style={{ borderRadius: "12px" }}
                >
                  <p className="text-base font-bold" style={{ color: "#0F0F0F" }}>
                    {stat.label}
                  </p>
                  <p className="text-xs mt-0.5 leading-snug" style={{ color: "#6B7280" }}>
                    {stat.sub}
                  </p>
                </div>
              ))}
            </motion.div>
          </motion.div>
{/* RIGHT — profile */}
<motion.div
  initial={{ opacity: 0, x: 40 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{
    duration: 0.6,
    delay: 0.2,
    ease: [0.25, 0.46, 0.45, 0.94],
  }}
  className="order-1 lg:order-2 flex justify-center lg:justify-end relative"
>
  {/* Background glow */}
  <div
    className="absolute inset-0 pointer-events-none"
    aria-hidden="true"
    style={{
      background:
        "radial-gradient(ellipse 70% 70% at 50% 50%, rgba(124, 58, 237, 0.12) 0%, transparent 70%)",
    }}
  />

  {/* Full image section */}
  <motion.div
    animate={{ y: [0, -6, 0] }}
    transition={{
      duration: 5,
      repeat: Infinity,
      ease: "easeInOut",
    }}
    className="relative w-72 sm:w-80 lg:w-[320px]"
  >
    <div
      className="relative overflow-hidden"
      style={{
        borderRadius: "28px",
        aspectRatio: "3/4",
        boxShadow:
          "0 8px 40px rgba(124, 58, 237, 0.12), 0 2px 8px rgba(0,0,0,0.06)",
      }}
    >
      <Image
        src="/profile.jpg"
        alt="Pranav Vernekar"
        fill
        priority
        className="object-cover"
      />
    </div>

    {/* AWS badge */}
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.8 }}
      className="absolute -right-4 top-8 card px-3 py-2"
      style={{
        borderRadius: "10px",
        boxShadow: "0 4px 16px rgba(0,0,0,0.1)",
      }}
    >
      <p
        className="text-xs font-semibold"
        style={{ color: "#FF9900" }}
      >
        AWS
      </p>
      <p className="text-[10px]" style={{ color: "#6B7280" }}>
        Cloud
      </p>
    </motion.div>

    {/* Terraform badge */}
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1.0 }}
      className="absolute -left-4 bottom-16 card px-3 py-2"
      style={{
        borderRadius: "10px",
        boxShadow: "0 4px 16px rgba(0,0,0,0.1)",
      }}
    >
      <p
        className="text-xs font-semibold"
        style={{ color: "#3a79ed" }}
      >
        Azure
      </p>
      <p className="text-[10px]" style={{ color: "#6B7280" }}>
        Cloud
      </p>
    </motion.div>
  </motion.div>
</motion.div>
        </div>
      </div>
    </section>
  );
}
