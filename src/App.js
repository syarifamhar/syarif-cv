import React, { useState, useRef } from "react";
import HeroSection from "./components/HeroSection";
import AboutMe from "./components/AboutMe";
import Experience from "./components/Experience";
import Portfolio from "./components/Portfolio";
import Skills from "./components/Skills";
import ContactMe from "./components/ContactMe";
import Sidebar from "./components/Sidebar";
import Blog from "./components/Blog";
import Clients from "./components/Clients";
import Dashboard from "./components/Dashboard";
import { motion, AnimatePresence, useScroll, useTransform, useInView } from "framer-motion";
import "./App.css";

function ParallaxSection({ id, children, delay = 0 }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  return (
    <motion.section
      id={id}
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay }}
      className="w-full min-h-[80vh] flex items-center justify-center"
    >
      {children}
    </motion.section>
  );
}

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setIsSidebarOpen(false);
    }
  };

  return (
    <div className="flex h-screen bg-neutral-50 text-neutral-900">
      {/* Sidebar: fixed on desktop, slide-in on mobile */}
      <div className="hidden md:block">
        <Sidebar scrollTo={scrollToSection} />
      </div>
      <AnimatePresence>
        {isSidebarOpen && (
          <motion.div
            initial={{ x: -400 }}
            animate={{ x: 0 }}
            exit={{ x: -400 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed top-0 left-0 z-50 w-72 h-full bg-neutral-50 border-r border-neutral-200 md:hidden shadow-2xl"
          >
            <Sidebar scrollTo={scrollToSection} onClose={() => setIsSidebarOpen(false)} />
          </motion.div>
        )}
      </AnimatePresence>
      {/* Burger menu for mobile */}
      <button
        className="md:hidden fixed top-4 left-4 z-50 bg-neutral-200 text-neutral-900 rounded-lg p-3 shadow-lg"
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        aria-label="Open sidebar"
      >
        ☰
      </button>
      {/* Main content */}
      <main className="flex-1 overflow-y-auto h-screen bg-neutral-50 text-neutral-900 transition-all duration-300">
        <AnimatePresence mode="wait">
          <ParallaxSection id="home">
            <HeroSection />
          </ParallaxSection>
          <ParallaxSection id="about" delay={0.1}>
            <AboutMe />
          </ParallaxSection>
          <ParallaxSection id="experience" delay={0.2}>
            <Experience />
          </ParallaxSection>
          <ParallaxSection id="portfolio" delay={0.3}>
            <Portfolio />
          </ParallaxSection>
          <ParallaxSection id="clients" delay={0.34}>
            <Clients />
          </ParallaxSection>
          <ParallaxSection id="blog" delay={0.36}>
            <Blog />
          </ParallaxSection>
          <ParallaxSection id="contact" delay={0.38}>
            <ContactMe />
          </ParallaxSection>
        </AnimatePresence>
      </main>
    </div>
  );
}

export default App;
