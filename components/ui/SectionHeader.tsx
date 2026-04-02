"use client";

import Reveal from "./Reveal";

interface SectionHeaderProps {
  index: string;
  label: string;
  title: string;
  subtitle?: string;
}

export default function SectionHeader({
  index,
  label,
  title,
  subtitle,
}: SectionHeaderProps) {
  return (
    <div className="mb-16">
      <Reveal>
        <div className="flex items-center gap-4 mb-3">
          <span className="font-mono text-xs text-[var(--cyan)] opacity-60 tracking-widest">
            {index}
          </span>
          <div className="h-px flex-1 max-w-[60px] bg-[var(--cyan)] opacity-30" />
          <span className="font-mono text-xs tracking-[0.2em] text-[var(--text-muted)] uppercase">
            {label}
          </span>
        </div>
      </Reveal>
      <Reveal delay={0.1}>
        <h2 className="font-display text-2xl md:text-3xl font-bold text-white tracking-wider">
          {title}
        </h2>
      </Reveal>
      {subtitle && (
        <Reveal delay={0.2}>
          <p className="font-mono text-sm text-[var(--text-secondary)] mt-2">
            {subtitle}
          </p>
        </Reveal>
      )}
      <Reveal delay={0.15}>
        <div className="mt-4 h-px bg-gradient-to-r from-[var(--cyan)] via-[rgba(0,240,255,0.3)] to-transparent opacity-40 max-w-xs" />
      </Reveal>
    </div>
  );
}
