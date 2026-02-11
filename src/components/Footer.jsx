"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function IvoryPremiumFooter() {
  const containerRef = useRef(null);
  const currentYear = new Date().getFullYear();
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"]
  });

  // Sophisticated scale & fade for the background logo
  const logoScale = useTransform(scrollYProgress, [0, 1], [0.9, 1.1]);
  const logoOpacity = useTransform(scrollYProgress, [0, 0.8, 1], [0, 0.03, 0.05]);

  return (
    <footer 
      ref={containerRef}
      className="relative bg-[#F9F8F6] text-[#1A1A1A] pt-40 pb-12 overflow-hidden selection:bg-[#C5A03A] selection:text-white"
    >
      {/* 1. KINETIC BACKGROUND MONOGRAM */}
      <motion.div 
        style={{ scale: logoScale, opacity: logoOpacity }}
        className="absolute inset-0 flex items-center justify-center pointer-events-none z-0"
      >
        <h2 className="text-[50vw] font-serif font-bold tracking-tighter text-[#1A1A1A]">VT</h2>
      </motion.div>

      {/* 2. SUBTLE ARCHITECTURAL OVERLAY */}
      <div className="absolute inset-0 opacity-[0.4] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/pinstriped-suit.png')] z-1" />

      <div className="max-w-[1440px] mx-auto px-8 relative z-10">
        
        {/* TOP SECTION: THE CALL TO CRAFT */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-32 gap-10">
          <div className="space-y-6">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="flex items-center gap-3"
            >
              <div className="w-8 h-[1px] bg-[#C5A03A]" />
              <p className="text-[#A89276] text-[10px] tracking-[0.5em] uppercase font-bold">
                The Sartorial Choice
              </p>
            </motion.div>
            <h2 className="text-6xl md:text-9xl font-serif italic tracking-tighter leading-[0.85] text-[#1A1A1A]">
              Elegance <br /> <span className="not-italic text-[#C5A03A]">Defined.</span>
            </h2>
          </div>

          <motion.button
            whileHover={{ y: -5 }}
            whileTap={{ scale: 0.98 }}
            className="group relative px-14 py-8 bg-[#1A1A1A] text-white text-[10px] tracking-[0.6em] uppercase font-bold overflow-hidden shadow-2xl shadow-black/10"
          >
            <span className="relative z-10">Request a Fitting</span>
            <div className="absolute inset-0 bg-[#C5A03A] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-expo" />
          </motion.button>
        </div>

        {/* INFO GRID */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 border-t border-black/5 pt-20 mb-20">
          
          {/* LOCATION COORDINATES */}
          <div className="md:col-span-4 space-y-10">
            <div className="space-y-3">
              <p className="text-[9px] uppercase tracking-[0.3em] text-[#A89276] font-bold">Main Atelier</p>
              <p className="text-xl font-serif italic text-[#2D2D2D]">24 Savile Row Street,<br />Fashion Enclave, New Delhi</p>
            </div>
            <div className="flex gap-10 pt-4">
              <div className="space-y-1">
                <p className="text-[9px] uppercase tracking-widest text-neutral-400">Open</p>
                <p className="text-xs font-medium text-neutral-600">Mon — Sat</p>
              </div>
              <div className="space-y-1">
                <p className="text-[9px] uppercase tracking-widest text-neutral-400">Hours</p>
                <p className="text-xs font-medium text-neutral-600">11:00 — 20:00</p>
              </div>
            </div>
          </div>

          {/* NAVIGATION & SOCIALS */}
          <div className="md:col-span-4 grid grid-cols-2 gap-8">
            <div className="space-y-8">
              <p className="text-[9px] uppercase tracking-[0.3em] text-[#A89276] font-bold">Menu</p>
              <ul className="space-y-4">
                {['Collections', 'Heritage', 'Process'].map(item => (
                  <li key={item}>
                    <a href="#" className="text-lg font-serif italic text-neutral-500 hover:text-black transition-all group flex items-center gap-2">
                      <span className="w-0 h-[1px] bg-black group-hover:w-4 transition-all" />
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-8">
              <p className="text-[9px] uppercase tracking-[0.3em] text-[#A89276] font-bold">Social</p>
              <ul className="space-y-4">
                {['Instagram', 'WhatsApp', 'LinkedIn'].map(item => (
                  <li key={item}>
                    <a href="#" className="text-lg font-serif italic text-neutral-500 hover:text-[#C5A03A] transition-colors">{item}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* BRAND STATEMENT */}
          <div className="md:col-span-4 flex flex-col justify-between items-end text-right">
            <p className="text-2xl font-serif italic text-[#1A1A1A] leading-snug max-w-xs">
              "A suit is not just clothes. It is your <span className="text-[#C5A03A]">armour</span> for the world."
            </p>
            <div 
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="pt-10 group cursor-pointer flex flex-col items-end gap-3"
            >
              <div className="w-10 h-10 rounded-full border border-black/5 flex items-center justify-center group-hover:border-[#C5A03A] transition-all">
                <motion.span animate={{ y: [2, -2, 2] }} transition={{ repeat: Infinity, duration: 2 }} className="text-xs">↑</motion.span>
              </div>
              <span className="text-[8px] tracking-[0.4em] uppercase text-neutral-400 group-hover:text-black transition-colors">Return to Top</span>
            </div>
          </div>
        </div>

        {/* FINAL SIGNATURE BAR */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 py-10 border-t border-black/5">
          <div className="flex items-center gap-6">
            <p className="text-[9px] tracking-[0.3em] text-neutral-400 uppercase">
              © {currentYear} Vicky Tailor Boutique
            </p>
            <div className="h-3 w-[1px] bg-black/10 hidden md:block" />
            <p className="text-[9px] tracking-[0.3em] text-neutral-400 uppercase">
              Designed for Greatness
            </p>
          </div>
          
          <div className="flex items-center gap-8">
            <span className="text-[9px] tracking-[0.3em] text-neutral-400 uppercase hover:text-black cursor-pointer transition-colors">Terms</span>
            <span className="text-[9px] tracking-[0.3em] text-neutral-400 uppercase hover:text-black cursor-pointer transition-colors">Privacy</span>
            <div className="flex gap-1 items-center ml-4">
               <div className="w-6 h-[1px] bg-[#C5A03A]" />
               <div className="w-1 h-1 rounded-full bg-[#1A1A1A]" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}