"use client";

export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-[rgba(0,240,255,0.08)] py-8 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <span className="font-mono text-xs text-[var(--text-muted)] tracking-widest">
          © 2026 ARPIT MEHROTRA
        </span>
        <span className="font-mono text-xs text-[var(--cyan)] opacity-40 tracking-widest">
          // SECURE · ETHICAL · PROFESSIONAL
        </span>
        <span className="font-mono text-xs text-[var(--text-muted)] tracking-widest">
          SYSTEM ONLINE ■
        </span>
      </div>
    </footer>
  );
}
