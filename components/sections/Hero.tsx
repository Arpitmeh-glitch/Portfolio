"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const TERMINAL_LINES = [
  "> Initializing profile...",
  "> Loading security modules...",
  "> Running threat assessment...",
  "> Cybersecurity systems ready.",
  "> PRESS SHIFT+J FOR SOMETHING INTERSESTING"
];

function useTypewriter(lines: string[], speed = 45) {
  const [displayedLines, setDisplayedLines] = useState<string[]>([]);
  const [currentLine, setCurrentLine] = useState(0);
  const [currentChar, setCurrentChar] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (currentLine >= lines.length) {
      setDone(true);
      return;
    }
    if (currentChar <= lines[currentLine].length) {
      const timeout = setTimeout(() => {
        setDisplayedLines((prev) => {
          const next = [...prev];
          next[currentLine] = lines[currentLine].substring(0, currentChar);
          return next;
        });
        setCurrentChar((c) => c + 1);
      }, speed);
      return () => clearTimeout(timeout);
    } else {
      const pause = setTimeout(() => {
        setCurrentLine((l) => l + 1);
        setCurrentChar(0);
      }, currentLine === lines.length - 1 ? 400 : 250);
      return () => clearTimeout(pause);
    }
  }, [currentLine, currentChar, lines, speed]);

  return { displayedLines, done };
}

export default function Hero() {
  const { displayedLines, done } = useTypewriter(TERMINAL_LINES);

  return (
    <section className="relative z-10 min-h-screen flex flex-col justify-center px-6 pt-20">
      {/* Vignette */}
      <div className="absolute inset-0 vignette pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center">
        {/* Left: Main content */}
        <div>
          {/* Status badge */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="inline-flex items-center gap-2 mb-8 px-3 py-1.5 border border-[rgba(0,240,255,0.2)] bg-[rgba(0,240,255,0.04)]"
          >
            <span className="w-2 h-2 rounded-full bg-[var(--cyan)] animate-pulse" />
            <span className="font-mono text-xs tracking-widest text-[var(--cyan)] opacity-80">
              SYSTEM ONLINE · READY
            </span>
          </motion.div>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25, ease: [0.25, 0.1, 0.25, 1] }}
            className="font-display text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight mb-4 leading-tight"
          >
            <span className="text-white">ARPIT</span>
            <br />
            <span
              style={{
                background: "linear-gradient(135deg, #fff 0%, var(--cyan) 60%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              MEHROTRA
            </span>
          </motion.h1>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="font-body text-base md:text-lg text-[var(--text-secondary)] mb-10 max-w-md leading-relaxed tracking-wide"
          >
            Working towards becoming a{" "}
            <span className="text-[var(--cyan)] font-semibold">
              multi-specialty cybersecurity professional
            </span>
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.55 }}
            className="flex flex-wrap gap-4"
          >
            <a
              href="#projects"
              className="group relative font-mono text-xs tracking-widest px-7 py-3 bg-[var(--cyan)] text-[var(--bg-primary)] font-bold overflow-hidden transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,240,255,0.4)]"
            >
              <span className="relative z-10">VIEW PROJECTS</span>
              <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity" />
            </a>
            <a
              href="/resume.pdf"
              download
              className="group font-mono text-xs tracking-widest px-7 py-3 border border-[var(--cyan)] text-[var(--cyan)] transition-all duration-300 hover:bg-[rgba(0,240,255,0.08)] hover:shadow-[0_0_20px_rgba(0,240,255,0.2)]"
            >
              DOWNLOAD RESUME
              <span className="ml-2 opacity-60">↓</span>
            </a>
          </motion.div>
        </div>

        {/* Right: Terminal panel */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="hidden md:block"
        >
          <div className="glass-panel p-6 relative overflow-hidden">
            {/* Terminal titlebar */}
            <div className="flex items-center gap-2 mb-5 pb-4 border-b border-[rgba(0,240,255,0.1)]">
              <div className="w-2.5 h-2.5 rounded-full bg-red-500 opacity-70" />
              <div className="w-2.5 h-2.5 rounded-full bg-yellow-500 opacity-70" />
              <div className="w-2.5 h-2.5 rounded-full bg-green-500 opacity-70" />
              <span className="ml-3 font-mono text-xs text-[var(--text-muted)] tracking-widest">
                arpit@cyberterm — zsh
              </span>
            </div>

            {/* Terminal lines */}
            <div className="font-mono text-sm space-y-2 min-h-[140px]">
              {TERMINAL_LINES.map((line, i) => (
                <div key={i} className="flex items-start gap-2">
                  {displayedLines[i] !== undefined ? (
                    <span
                      className={
                        i === TERMINAL_LINES.length - 1
                          ? "text-[var(--cyan)]"
                          : "text-[var(--text-secondary)]"
                      }
                    >
                      {displayedLines[i]}
                      {i === Math.min(displayedLines.length - 1, TERMINAL_LINES.length - 1) &&
                        displayedLines[i] !== TERMINAL_LINES[i] && (
                          <span className="terminal-cursor ml-0.5" />
                        )}
                    </span>
                  ) : null}
                </div>
              ))}
              {done && (
                <div className="text-[var(--cyan)] flex items-center gap-1 mt-3">
                  <span>$ </span>
                  <span className="terminal-cursor" />
                </div>
              )}
            </div>

            {/* Decorative scan line */}
            <motion.div
              className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-[rgba(0,240,255,0.4)] to-transparent"
              animate={{ top: ["0%", "100%", "0%"] }}
              transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
            />

            {/* HUD corners */}
            <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-[var(--cyan)] opacity-60" />
            <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-[var(--cyan)] opacity-60" />
            <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-[var(--cyan)] opacity-60" />
            <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-[var(--cyan)] opacity-60" />
          </div>

          {/* Stats row */}
          <div className="grid grid-cols-3 gap-3 mt-3">
            {[
              { label: "THREAT LEVEL", value: "MINIMAL" },
              { label: "STATUS", value: "ACTIVE" },
              { label: "CLEARANCE", value: "GRANTED" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="glass-panel px-3 py-2 text-center"
              >
                <div className="font-mono text-[0.6rem] text-[var(--text-muted)] tracking-widest mb-0.5">
                  {stat.label}
                </div>
                <div className="font-display text-[0.65rem] text-[var(--cyan)] tracking-widest">
                  {stat.value}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="font-mono text-[0.6rem] tracking-widest text-[var(--text-muted)]">
          SCROLL
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="w-px h-8 bg-gradient-to-b from-[var(--cyan)] to-transparent"
        />
      </motion.div>
    </section>
  );
}
