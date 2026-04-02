"use client";

import { motion } from "framer-motion";
import Reveal from "@/components/ui/Reveal";
import SectionHeader from "@/components/ui/SectionHeader";

const achievements = [
  {
    id: "ACH-01",
    icon: (
      <svg
        className="w-5 h-5"
        viewBox="0 0 64 64"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
      >
        {/* Cloud */}
        <path
          d="M20 40h22a10 10 0 000-20 12 12 0 00-23-2 9 9 0 00-5 22h6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Binary rain */}
        <text x="24" y="48" fontSize="6" fill="currentColor">10</text>
        <text x="30" y="54" fontSize="6" fill="currentColor">01</text>
        <text x="36" y="48" fontSize="6" fill="currentColor">11</text>
      </svg>
    ),
    title: "TryHackMe",
    subtitle: "Top 15% Worldwide",
    detail: "200+ rooms completed across offensive & defensive security paths",
    year: "2025",
    badge: "ELITE",
  },
  {
    id: "ACH-02",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3l7 4v5c0 5-3.5 8-7 9-3.5-1-7-4-7-9V7l7-4z" />
      </svg>
    ),
    title: "Presecurity Path",
    subtitle: "Certified Completion",
    detail: "Full completion of TryHackMe Presecurity learning pathway with distinction",
    year: "2025",
    badge: "CERTIFIED",
  },
  {
    id: "ACH-03",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 21h8M12 17v4M5 3h14v4a5 5 0 01-5 5h-4a5 5 0 01-5-5V3z" />
      </svg>
    ),
    title: "India Innovates 26",
    subtitle: "National Finalist",
    detail: "Selected as national finalist in India's premier technology innovation competition",
    year: "2026",
    badge: "FINALIST",
  },
  {
    id: "ACH-04",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <rect x="5" y="11" width="14" height="10" rx="2" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 11V7a4 4 0 118 0v4" />
      </svg>
    ),
    title: "PhishGuard AI",
    subtitle: "96.8% ML Accuracy",
    detail: "Built and deployed ML-powered phishing detection achieving industry-grade accuracy",
    year: "2026",
    badge: "DEPLOYED",
  },
];

export default function Achievements() {
  return (
    <section id="achievements" className="relative z-10 py-28 px-6">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          index="// 04"
          label="RECOGNITION"
          title="ACHIEVEMENTS"
          subtitle="> parsing achievement_log.db..."
        />

        {/* Horizontal achievement cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {achievements.map((ach, i) => (
            <Reveal key={ach.id} delay={i * 0.1}>
              <motion.div
                whileHover={{
                  y: -6,
                  boxShadow: "0 16px 48px rgba(0,240,255,0.15)",
                }}
                transition={{ duration: 0.25 }}
                className="glass-panel p-5 border border-[rgba(0,240,255,0.08)] hover:border-[rgba(0,240,255,0.35)] transition-colors duration-300 relative group flex flex-col"
              >
                {/* Badge */}
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-[0.55rem] text-[var(--cyan)] opacity-40 tracking-widest">
                    {ach.id}
                  </span>
                  <span className="font-mono text-[0.55rem] px-2 py-0.5 bg-[rgba(0,240,255,0.1)] border border-[rgba(0,240,255,0.2)] text-[var(--cyan)] tracking-widest">
                    {ach.badge}
                  </span>
                </div>

                {/* Icon */}
                <div className="text-3xl mb-3">{ach.icon}</div>

                {/* Content */}
                <div className="flex-1">
                  <h3 className="font-display text-sm font-bold text-white tracking-wide mb-1 group-hover:text-[var(--cyan)] transition-colors duration-300">
                    {ach.title}
                  </h3>
                  <div className="font-mono text-xs text-[var(--cyan)] opacity-70 mb-2 tracking-wide">
                    {ach.subtitle}
                  </div>
                  <p className="font-body text-[var(--text-muted)] text-sm leading-relaxed">
                    {ach.detail}
                  </p>
                </div>

                {/* Year */}
                <div className="mt-4 pt-3 border-t border-[rgba(0,240,255,0.08)] flex items-center justify-between">
                  <span className="font-mono text-[0.6rem] text-[var(--text-muted)] tracking-widest">
                    {ach.year}
                  </span>
                  <div className="w-2 h-2 rounded-full bg-[var(--cyan)] opacity-40 group-hover:opacity-100 transition-opacity animate-pulse" />
                </div>

                {/* Bottom hover line */}
                <div className="absolute bottom-0 left-0 right-0 h-px w-0 group-hover:w-full bg-gradient-to-r from-[var(--cyan)] to-transparent transition-all duration-500" />
              </motion.div>
            </Reveal>
          ))}
        </div>

        {/* Summary bar */}
        <Reveal delay={0.4}>
          <div className="mt-10 glass-panel p-5 border border-[rgba(0,240,255,0.1)]">
            <div className="flex flex-col md:flex-row items-center justify-around gap-6">
              {[
                { value: "200+", label: "Rooms Completed" },
                { value: "Top 15%", label: "Global Ranking" },
                { value: "2", label: "Projects Deployed" },
                { value: "1", label: "National Recognition" },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="font-display text-2xl md:text-3xl font-black text-[var(--cyan)] mb-1">
                    {stat.value}
                  </div>
                  <div className="font-mono text-[0.65rem] text-[var(--text-muted)] tracking-widest uppercase">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
