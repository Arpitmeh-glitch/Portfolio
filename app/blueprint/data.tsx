import { motion } from "framer-motion";
import React from "react";

export const PANEL_DATA: Record<string, { title: string; subtitle: string; body: React.ReactNode }> = {
  about: {
    title: "NOSE CONE // OPERATOR PROFILE",
    subtitle: "CLASSIFICATION: OPEN",
    body: (
      <div className="space-y-3 font-mono text-xs leading-relaxed text-[rgba(232,244,248,0.7)]">
        <p className="text-[#00f0ff]">&gt; Arpit Mehrotra — Cybersecurity Professional</p>
        <p>Specialising in offensive security, penetration testing, and full-stack development.</p>
        <p className="opacity-60">AFFILIATION: Independent researcher &amp; developer</p>
        <p className="opacity-60">OBJECTIVE: Build tools that defend, break, and understand systems.</p>
      </div>
    ),
  },
  cockpit: {
    title: "COCKPIT // SKILL MATRIX",
    subtitle: "CLASSIFICATION: TECHNICAL",
    body: (
      <div className="space-y-2 font-mono text-xs text-[rgba(232,244,248,0.7)]">
        {[{label:"Penetration Testing",val:88},{label:"Python / FastAPI",val:90},
          {label:"Next.js / React",val:85},{label:"Network Security",val:82},{label:"Machine Learning",val:75}].map((s) => (
          <div key={s.label}>
            <div className="flex justify-between mb-1"><span>{s.label}</span><span className="text-[#00f0ff]">{s.val}%</span></div>
            <div className="h-px bg-[rgba(0,240,255,0.12)]">
              <motion.div className="h-full" initial={{width:0}} animate={{width:`${s.val}%`}} transition={{duration:0.9,delay:0.15,ease:"easeOut"}}
                style={{background:"linear-gradient(90deg,#00b8c4,#00f0ff)",boxShadow:"0 0 6px rgba(0,240,255,0.5)"}} />
            </div>
          </div>
        ))}
      </div>
    ),
  },
  projects: {
    title: "PAYLOAD BAY // PROJECTS",
    subtitle: "CLASSIFICATION: PORTFOLIO",
    body: (
      <div className="space-y-3 font-mono text-xs text-[rgba(232,244,248,0.7)]">
        {[{id:"PRJ-001",name:"Web Recon CLI",desc:"HTTP analysis, security header inspection, OSINT toolkit."},
          {id:"PRJ-002",name:"PhishGuard AI",desc:"96.8% accuracy ML phishing detector with AES-256 encryption."}].map((p) => (
          <div key={p.id} className="border-l-2 border-[#00f0ff] pl-3">
            <div className="text-[#00f0ff] text-[0.6rem] tracking-widest">{p.id}</div>
            <div className="text-white font-bold">{p.name}</div>
            <div className="opacity-60 text-[0.7rem]">{p.desc}</div>
          </div>
        ))}
      </div>
    ),
  },
  achievements: {
    title: "WING SYSTEMS // ACHIEVEMENTS",
    subtitle: "CLASSIFICATION: COMMENDATIONS",
    body: (
      <div className="space-y-2 font-mono text-xs text-[rgba(232,244,248,0.7)]">
        {["CEH — Certified Ethical Hacker","Top 10% — TryHackMe (2025)",
          "Bug Bounty — HackerOne acknowledged","Contributor — OWASP community"].map((a) => (
          <div key={a} className="flex gap-2 items-start">
            <span className="text-[#00f0ff] mt-0.5">▸</span><span>{a}</span>
          </div>
        ))}
      </div>
    ),
  },
  contact: {
    title: "ENGINE CORE // CONTACT",
    subtitle: "CLASSIFICATION: OPEN CHANNEL",
    body: (
      <div className="space-y-3 font-mono text-xs text-[rgba(232,244,248,0.7)]">
        {[{label:"EMAIL",val:"mehrotraa245@gmail.com"},{label:"GITHUB",val:"https://github.com/Arpitmeh-glitch"},
          {label:"LINKEDIN",val:"linkedin.com/in/arpit"}].map((c) => (
          <div key={c.label} className="flex gap-4 items-center">
            <span className="text-[#00f0ff] w-16 shrink-0">{c.label}</span><span>{c.val}</span>
          </div>
        ))}
        <p className="opacity-40 text-[0.6rem] pt-1">// Secure channel via PGP key on keyserver.</p>
      </div>
    ),
  },
  tools: {
    title: "SYSTEMS // TOOLKIT",
    subtitle: "CLASSIFICATION: ARSENAL",
    body: (
      <div className="flex flex-wrap gap-1.5">
        {["nmap","Burp Suite","Metasploit","hashcat","Wireshark","SQLmap","Gobuster","Hydra","Nikto","John the Ripper"].map((t) => (
          <span key={t} className="bg-[rgba(0,240,255,0.07)] border border-[rgba(0,240,255,0.2)] text-[#00f0ff] font-mono text-[0.6rem] px-2 py-1 tracking-wide">{t}</span>
        ))}
      </div>
    ),
  },
};