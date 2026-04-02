"use client";

import Navbar from "@/components/ui/Navbar";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Projects from "@/components/sections/Projects";
import Achievements from "@/components/sections/Achievements";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/ui/Footer";
import GridBackground from "@/components/ui/GridBackground";
import { useSecretTrigger } from "@/hooks/useSecretTrigger";

export default function Home() {
  useSecretTrigger();
  return (
    <main className="relative min-h-screen">
      <GridBackground />
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Achievements />
      <Contact />
      <Footer />
    </main>
  );
}
