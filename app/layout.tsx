"use client";

import type { Metadata } from "next";
import "../styles/globals.css";
import { useEffect } from "react";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <head>
        <title>Arpit Mehrotra | Cybersecurity Portfolio</title>
        <meta
          name="description"
          content="Cybersecurity professional portfolio — penetration testing, web security, and full-stack development."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
      </head>
      <body className="bg-[#020408] text-[#e8f4f8] antialiased">
        <div className="noise-overlay" aria-hidden="true" />
        <div className="scan-overlay" aria-hidden="true" />
        {children}
      </body>
    </html>
  );
}
