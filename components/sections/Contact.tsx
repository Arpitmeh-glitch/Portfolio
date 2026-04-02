"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Reveal from "@/components/ui/Reveal";
import SectionHeader from "@/components/ui/SectionHeader";

const contacts = [
  {
    id: "GH",
    label: "GITHUB",
    value: "github.com/Arpitmeh",
    href: "https://github.com/Arpitmeh-glitch",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
      </svg>
    ),
  },
  {
    id: "LI",
    label: "LINKEDIN",
    value: "linkedin.com/in/arpit-mehrotra",
    href: "https://www.linkedin.com/in/arpit-mehrotra-a93483378?",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    id: "EM",
    label: "EMAIL",
    value: "mehrotraa245@gmail.com",
    href: "mailto:mehrotraa245@gmail.com",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
      </svg>
    ),
  },
  {
    id: "IS",
    label: "  INSTAGRAM",
    value: "xpiria.3gp",
    href: "https://www.instagram.com/xpiria.3gp?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
    icon: (
      <svg
        className="w-5 h-5"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
        viewBox="0 0 24 24"
      >
        <rect x="3" y="3" width="18" height="18" rx="5" ry="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="1" />
      </svg>
    ),
  },
];

function TerminalContact() {
  const [hover, setHover] = useState<string | null>(null);

  return (
    <div className="glass-panel p-8 border border-[rgba(0,240,255,0.1)] relative overflow-hidden">
      {/* Scan animation */}
      <motion.div
        className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-[rgba(0,240,255,0.3)] to-transparent pointer-events-none"
        animate={{ top: ["0%", "100%", "0%"] }}
        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
      />

      {/* Terminal header */}
      <div className="flex items-center gap-2 mb-6 pb-5 border-b border-[rgba(0,240,255,0.08)]">
        <div className="w-2.5 h-2.5 rounded-full bg-red-500 opacity-60" />
        <div className="w-2.5 h-2.5 rounded-full bg-yellow-500 opacity-60" />
        <div className="w-2.5 h-2.5 rounded-full bg-green-500 opacity-60" />
        <span className="font-mono text-xs text-[var(--text-muted)] ml-3 tracking-widest">
          secure_channel.sh
        </span>
      </div>

      {/* Prompt lines */}
      <div className="font-mono text-sm space-y-2 mb-8">
        <p className="text-[var(--text-muted)]">
          <span className="text-[var(--cyan)]">$</span> ./establish_connection.sh
        </p>
        <p className="text-[var(--text-secondary)]">
          &gt; Encrypting channel... <span className="text-green-400">✓</span>
        </p>
        <p className="text-[var(--text-secondary)]">
          &gt; Verifying identity... <span className="text-green-400">✓</span>
        </p>
        <p className="text-[var(--cyan)]">
          &gt; Secure connection established.
        </p>
        <div className="flex items-center gap-1 mt-2">
          <span className="text-[var(--cyan)]">$</span>
          <span className="text-[var(--text-secondary)]"> reach out via —</span>
          <span className="terminal-cursor ml-1" />
        </div>
      </div>

      {/* Contact links */}
      <div className="space-y-3">
        {contacts.map((c, i) => (
          <motion.a
            key={c.id}
            href={c.href}
            target={c.id !== "EM" ? "_blank" : undefined}
            rel="noopener noreferrer"
            onHoverStart={() => setHover(c.id)}
            onHoverEnd={() => setHover(null)}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.1 + 0.3, duration: 0.5 }}
            viewport={{ once: true }}
            whileHover={{ x: 6 }}
            className="flex items-center gap-4 p-4 border border-[rgba(0,240,255,0.08)] hover:border-[rgba(0,240,255,0.35)] transition-all duration-200 group relative overflow-hidden"
            style={{
              background:
                hover === c.id
                  ? "rgba(0,240,255,0.05)"
                  : "rgba(0,240,255,0.02)",
            }}
          >
            <div
              className="w-9 h-9 flex items-center justify-center border border-[rgba(0,240,255,0.2)] text-[var(--cyan)] shrink-0 transition-all duration-200"
              style={{
                boxShadow: hover === c.id ? "0 0 12px rgba(0,240,255,0.3)" : "none",
              }}
            >
              {c.icon}
            </div>
            <div className="flex-1 min-w-0">
              <div className="font-mono text-[0.6rem] text-[var(--text-muted)] tracking-widest mb-0.5">
                {c.label}
              </div>
              <div className="font-mono text-xs text-[var(--text-primary)] truncate group-hover:text-[var(--cyan)] transition-colors">
                {c.value}
              </div>
            </div>
            <span className="font-mono text-xs text-[var(--cyan)] opacity-0 group-hover:opacity-60 transition-opacity">
              →
            </span>

            {/* Bottom accent */}
            <div className="absolute bottom-0 left-0 h-px w-0 group-hover:w-full bg-[var(--cyan)] transition-all duration-400 opacity-40" />
          </motion.a>
        ))}
      </div>

      {/* HUD corners */}
      <div className="absolute top-0 left-0 w-5 h-5 border-t-2 border-l-2 border-[var(--cyan)] opacity-30" />
      <div className="absolute top-0 right-0 w-5 h-5 border-t-2 border-r-2 border-[var(--cyan)] opacity-30" />
      <div className="absolute bottom-0 left-0 w-5 h-5 border-b-2 border-l-2 border-[var(--cyan)] opacity-30" />
      <div className="absolute bottom-0 right-0 w-5 h-5 border-b-2 border-r-2 border-[var(--cyan)] opacity-30" />
    </div>
  );
}

function SystemStatus() {
  const items = [
    { label: "FIREWALL", status: "ACTIVE", ok: true },
    { label: "ENCRYPTION", status: "AES-256", ok: true },
    { label: "AUTH", status: "VERIFIED", ok: true },
    { label: "UPTIME", status: "99.9%", ok: true },
  ];

  return (
    <div className="glass-panel p-6 border border-[rgba(0,240,255,0.08)]">
      <div className="font-mono text-[0.65rem] text-[var(--text-muted)] tracking-widest mb-4 pb-3 border-b border-[rgba(0,240,255,0.08)]">
        // SYSTEM STATUS
      </div>
      <div className="space-y-3">
        {items.map((item, i) => (
          <motion.div
            key={item.label}
            initial={{ opacity: 0, x: 10 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.08 }}
            viewport={{ once: true }}
            className="flex items-center justify-between"
          >
            <span className="font-mono text-xs text-[var(--text-muted)] tracking-widest">
              {item.label}
            </span>
            <div className="flex items-center gap-2">
              <span className="font-mono text-xs text-[var(--cyan)]">{item.status}</span>
              <div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
            </div>
          </motion.div>
        ))}
      </div>

      {/* Availability note */}
      <div className="mt-6 pt-4 border-t border-[rgba(0,240,255,0.08)]">
        <div className="font-mono text-[0.65rem] text-[var(--text-muted)] tracking-wide leading-relaxed">
          <span className="text-[var(--cyan)]">&gt;</span> Open to internships, collaborations, and cybersecurity projects.
          <br />
          <span className="text-[var(--cyan)]">&gt;</span> Response time: <span className="text-white">{"<"} 24 hours</span>
        </div>
      </div>
    </div>
  );
}

export default function Contact() {
  return (
    <section id="contact" className="relative z-10 py-28 px-6">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          index="// 05"
          label="REACH OUT"
          title="CONTACT"
          subtitle="> initializing secure_channel.sh..."
        />

        <div className="grid md:grid-cols-2 gap-8 items-start">
          <Reveal direction="left">
            <TerminalContact />
          </Reveal>

          <div className="flex flex-col gap-5">
            <Reveal direction="right" delay={0.1}>
              <SystemStatus />
            </Reveal>

            <Reveal direction="right" delay={0.2}>
              <div className="glass-panel p-6 border border-[rgba(0,240,255,0.08)]">
                <div className="font-mono text-[0.65rem] text-[var(--text-muted)] tracking-widest mb-4 pb-3 border-b border-[rgba(0,240,255,0.08)]">
                  // INTERESTS
                </div>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Penetration Testing",
                    "Bug Bounty",
                    "CTF Competitions",
                    "Web Security",
                    "ML Security",
                    "Open Source",
                    "Security Research",
                    "Full-Stack Dev",
                  ].map((tag) => (
                    <span key={tag} className="tag-chip">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>

            <Reveal direction="right" delay={0.3}>
              <motion.div
                whileHover={{ boxShadow: "0 0 30px rgba(0,240,255,0.2)" }}
                className="glass-panel p-6 border border-[rgba(0,240,255,0.15)] relative overflow-hidden cursor-default"
              >
                <div className="flex items-center gap-3 mb-2">
                  <span className="w-2 h-2 rounded-full bg-[var(--cyan)] animate-pulse" />
                  <span className="font-mono text-xs text-[var(--cyan)] tracking-widest">
                    AVAILABLE FOR HIRE
                  </span>
                </div>
                <p className="font-body text-[var(--text-secondary)] text-sm leading-relaxed tracking-wide">
                  Looking for internship opportunities in cybersecurity, penetration testing, or full-stack security development. Let's build something secure together.
                </p>
                <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-[var(--cyan)] via-[rgba(0,240,255,0.4)] to-transparent opacity-50" />
              </motion.div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
