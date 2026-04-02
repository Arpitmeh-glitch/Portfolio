"use client";

import { motion } from "framer-motion";

export default function GridBackground() {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
      {/* Animated grid */}
      <motion.div
        className="absolute inset-0 grid-bg"
        animate={{ opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Radial gradient overlay */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(0,240,255,0.06) 0%, transparent 60%)",
        }}
      />

      {/* Corner glows */}
      <div
        className="absolute top-0 left-0 w-96 h-96"
        style={{
          background:
            "radial-gradient(circle at top left, rgba(0,240,255,0.06) 0%, transparent 70%)",
        }}
      />
      <div
        className="absolute bottom-0 right-0 w-96 h-96"
        style={{
          background:
            "radial-gradient(circle at bottom right, rgba(0,240,255,0.04) 0%, transparent 70%)",
        }}
      />

      {/* Floating particles */}
      {[...Array(12)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-px h-px rounded-full"
          style={{
            background: "var(--cyan)",
            left: `${8 + i * 8}%`,
            top: `${Math.random() * 100}%`,
            boxShadow: "0 0 4px 2px rgba(0,240,255,0.3)",
          }}
          animate={{
            y: [-20, -80, -20],
            opacity: [0, 0.8, 0],
          }}
          transition={{
            duration: 4 + i * 0.5,
            repeat: Infinity,
            delay: i * 0.7,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}
