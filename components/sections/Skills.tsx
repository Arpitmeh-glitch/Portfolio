"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Reveal from "@/components/ui/Reveal";
import SectionHeader from "@/components/ui/SectionHeader";

const skillCategories = [
  {
    id: "CORE",
    label: "// Core Languages",
    color: "#00f0ff",
    skills: [
      { name: "Python", level: 80 },
      { name: "C", level: 70 },
      { name: "HTML/CSS", level: 85 },
      { name: "JavaScript", level: 65 },
    ],
  },
  {
    id: "TOOLS",
    label: "// Security Tools",
    color: "#00c8d4",
    skills: [
      { name: "Nmap", level: 85 },
      { name: "Burp Suite", level: 78 },
      { name: "Hashcat", level: 72 },
      { name: "Metasploit", level: 65 },
    ],
  },
  {
    id: "SYSTEMS",
    label: "// Systems & Infra",
    color: "#00a8b4",
    skills: [
      { name: "Linux", level: 82 },
      { name: "Networking", level: 75 },
      { name: "Git / GitHub", level: 80 },
      { name: "Docker", level: 60 },
    ],
  },
  {
    id: "STACK",
    label: "// Dev Stack",
    color: "#00f0ff",
    skills: [
      { name: "FastAPI", level: 72 },
      { name: "Next.js", level: 70 },
      { name: "PostgreSQL", level: 65 },
      { name: "JWT / Auth", level: 75 },
    ],
  },
];

function SkillBar({ name, level, delay }: { name: string; level: number; delay: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <div ref={ref} className="mb-4">
      <div className="flex justify-between items-center mb-1.5">
        <span className="font-mono text-xs text-[var(--text-secondary)] tracking-wide">
          {name}
        </span>
        <span className="font-mono text-[0.65rem] text-[var(--cyan)] opacity-70">
          {level}%
        </span>
      </div>
      <div className="h-1 bg-[rgba(0,240,255,0.08)] relative overflow-hidden">
        <motion.div
          className="h-full skill-bar-fill"
          initial={{ width: 0 }}
          animate={inView ? { width: `${level}%` } : { width: 0 }}
          transition={{ duration: 1.1, delay, ease: [0.25, 0.1, 0.25, 1] }}
        />
        {/* Pulse dot at end */}
        <motion.div
          className="absolute top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-[var(--cyan)]"
          initial={{ left: 0, opacity: 0 }}
          animate={inView ? { left: `${level}%`, opacity: 1 } : { left: 0, opacity: 0 }}
          transition={{ duration: 1.1, delay, ease: [0.25, 0.1, 0.25, 1] }}
          style={{ boxShadow: "0 0 6px var(--cyan)" }}
        />
      </div>
    </div>
  );
}

function RadarPulse() {
  return (
    <div className="relative w-32 h-32 mx-auto flex items-center justify-center">
      {[1, 2, 3].map((i) => (
        <motion.div
          key={i}
          className="absolute rounded-full border border-[rgba(0,240,255,0.2)]"
          style={{ width: `${i * 35}%`, height: `${i * 35}%` }}
          animate={{ scale: [1, 1.05, 1], opacity: [0.4, 0.8, 0.4] }}
          transition={{ duration: 2.5, repeat: Infinity, delay: i * 0.4 }}
        />
      ))}
      {/* Spinning sweep */}
      <motion.div
        className="absolute inset-0 rounded-full overflow-hidden"
        style={{
          background:
            "conic-gradient(from 0deg, transparent 70%, rgba(0,240,255,0.25) 100%)",
        }}
        animate={{ rotate: 360 }}
        transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
      />
      <div className="relative z-10 font-display text-[0.55rem] text-[var(--cyan)] tracking-widest text-center">
        SCAN
        <br />
        ACTIVE
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="relative z-10 py-28 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 mb-16">
          <SectionHeader
            index="// 02"
            label="CAPABILITIES"
            title="SKILLS & TOOLS"
            subtitle="> running capability_scan.sh..."
          />
          <div className="hidden md:block">
            <RadarPulse />
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {skillCategories.map((cat, ci) => (
            <Reveal key={cat.id} delay={ci * 0.1}>
              <motion.div
                whileHover={{
                  y: -4,
                  boxShadow: "0 12px 40px rgba(0,240,255,0.12)",
                }}
                transition={{ duration: 0.25 }}
                className="glass-panel p-5 border border-[rgba(0,240,255,0.08)] hover:border-[rgba(0,240,255,0.25)] transition-colors duration-300 relative group"
              >
                {/* Header */}
                <div className="mb-5">
                  <div className="flex items-center gap-2 mb-1">
                    <div
                      className="w-1.5 h-1.5 rounded-full"
                      style={{ background: cat.color, boxShadow: `0 0 6px ${cat.color}` }}
                    />
                    <span className="font-mono text-[0.65rem] tracking-widest"
                      style={{ color: cat.color }}>
                      {cat.id}
                    </span>
                  </div>
                  <span className="font-mono text-[0.7rem] text-[var(--text-muted)] tracking-wide">
                    {cat.label}
                  </span>
                </div>

                {/* Skill bars */}
                {cat.skills.map((skill, si) => (
                  <SkillBar
                    key={skill.name}
                    name={skill.name}
                    level={skill.level}
                    delay={ci * 0.1 + si * 0.1}
                  />
                ))}

                {/* Bottom accent */}
                <div
                  className="absolute bottom-0 left-0 right-0 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    background: `linear-gradient(90deg, ${cat.color}, transparent)`,
                  }}
                />
              </motion.div>
            </Reveal>
          ))}
        </div>

        {/* Tag cloud */}
        <Reveal delay={0.3}>
          <div className="mt-10 flex flex-wrap gap-2 justify-center">
            {[
              "Penetration Testing",
              "Web Security",
              "Network Analysis",
              "OSINT",
              "CTF",
              "AES Encryption",
              "JWT Authentication",
              "ML Security",
              "FastAPI",
              "Linux Hardening",
            ].map((tag) => (
              <span key={tag} className="tag-chip">
                {tag}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
