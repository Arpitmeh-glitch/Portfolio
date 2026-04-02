"use client";

import { motion } from "framer-motion";
import { PANEL_DATA } from "@/app/blueprint/data";

interface BlueprintPanelProps {
  panelId: string;
  onClose: () => void;
}

export default function BlueprintPanel({ panelId, onClose }: BlueprintPanelProps) {
  const data = PANEL_DATA[panelId];
  if (!data) return null;

  return (
    <>
      {/* Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
        className="fixed inset-0 z-40 bg-[rgba(2,4,8,0.5)] backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Panel */}
      <motion.div
        initial={{ opacity: 0, scale: 0.94, y: 16 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.94, y: 16 }}
        transition={{ duration: 0.28, ease: [0.25, 0.1, 0.25, 1] }}
        className="fixed z-50 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90vw] max-w-md"
        style={{
          background: "rgba(4, 10, 16, 0.96)",
          border: "1px solid rgba(0,240,255,0.35)",
          boxShadow: "0 0 40px rgba(0,240,255,0.12), 0 0 80px rgba(0,240,255,0.05), inset 0 0 30px rgba(0,240,255,0.02)",
        }}
      >
        {/* Top bar */}
        <div className="flex items-center justify-between px-5 py-3 border-b border-[rgba(0,240,255,0.12)]">
          <div className="flex items-center gap-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00f0ff] animate-pulse" />
            <span className="font-mono text-[0.6rem] text-[#00f0ff] tracking-[0.25em]">{data.title}</span>
          </div>
          <button
            onClick={onClose}
            className="font-mono text-[0.6rem] text-[rgba(232,244,248,0.3)] hover:text-[#00f0ff] tracking-widest transition-colors"
          >
            [ CLOSE ]
          </button>
        </div>

        {/* Subtitle */}
        <div className="px-5 pt-3 pb-1">
          <span className="font-mono text-[0.55rem] text-[rgba(232,244,248,0.25)] tracking-[0.3em]">
            {data.subtitle}
          </span>
        </div>

        {/* Divider line with glow */}
        <div className="mx-5 h-px my-2" style={{ background: "linear-gradient(90deg, transparent, rgba(0,240,255,0.3), transparent)" }} />

        {/* Content */}
        <div className="px-5 pb-5 pt-2">{data.body}</div>

        {/* HUD corners */}
        <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-[#00f0ff] opacity-60" />
        <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-[#00f0ff] opacity-60" />
        <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-[#00f0ff] opacity-60" />
        <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-[#00f0ff] opacity-60" />
      </motion.div>
    </>
  );
}
