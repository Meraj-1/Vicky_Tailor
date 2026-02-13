"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useState } from "react";

// --- MINIMALIST PERSPECTIVE VIDEO COMPONENT ---
const AestheticVideo = ({ src, className, delay = 0 }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseX = useSpring(x, { stiffness: 100, damping: 20 });
  const mouseY = useSpring(y, { stiffness: 100, damping: 20 });

  const rotateX = useTransform(mouseY, [-0.5, 0.5], ["8deg", "-8deg"]);
  const rotateY = useTransform(mouseX, [-0.5, 0.5], ["-12deg", "12deg"]);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1.5, delay, ease: [0.22, 1, 0.36, 1] }}
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        x.set((e.clientX - rect.left) / rect.width - 0.5);
        y.set((e.clientY - rect.top) / rect.height - 0.5);
      }}
      onMouseLeave={() => { x.set(0); y.set(0); }}
      style={{ rotateX, rotateY, perspective: 1000 }}
      className={className}
    >
      <div className="relative w-full h-full overflow-hidden shadow-[20px_40px_80px_rgba(0,0,0,0.06)] border border-white/50">
        <motion.video
          src={src}
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover grayscale-[0.5] hover:grayscale-0 transition-all duration-[2s]"
        />
        {/* Soft Sunlight Overlay */}
        <div className="absolute inset-0 bg-gradient-to-tr from-white/20 to-transparent pointer-events-none" />
      </div>
    </motion.div>
  );
};

export default function Hero() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section className="relative min-h-screen bg-[#F9F7F2] text-[#2D2D2D] overflow-hidden selection:bg-[#D4AF37]/20">
      
      {/* 1. ARCHITECTURAL LAYOUT ELEMENTS */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[45vw] h-full bg-[#F0EEE6]" />
        
        <div className="absolute inset-0 opacity-[0.4] bg-[url('https://www.transparenttextures.com/patterns/pinstriped-suit.png')] mix-blend-multiply" />
        
        <div className="absolute top-1/2 left-10 -translate-y-1/2 -rotate-90 origin-left">
           <span className="text-[12rem] font-serif italic text-black/[0.02] whitespace-nowrap">
             Handmade Legacy
           </span>
        </div>
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-8 grid lg:grid-cols-12 gap-4 min-h-screen items-center py-20">
        
        {/* LEFT – CONTENT */}
        <div className="lg:col-span-6 lg:pr-16 order-2 lg:order-1">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          >
            <div className="flex items-center gap-4 mb-8">
              <span className="text-[10px] tracking-[0.6em] uppercase text-[#D4AF37] font-bold">
                The New Standard
              </span>
              <div className="h-[1px] w-16 bg-[#D4AF37]/30" />
            </div>

            <h1 className="text-7xl md:text-[8.5rem] font-serif leading-[0.9] tracking-tight mb-12 text-[#1A1A1A]">
              Timeless <br />
              <span className="italic font-light text-[#A89276]">Elegance</span>
            </h1>

            <div className="max-w-md">
              <p className="text-neutral-500 font-light leading-relaxed text-lg mb-12">
                We believe in the beauty of the <span className="text-black italic">unspoken</span>. No loud logos, just perfect cuts and the world's finest natural fibers.
              </p>

              <div className="flex items-center gap-12">
                <motion.button
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                  className="relative px-10 py-5 bg-[#1A1A1A] text-white text-[11px] tracking-[0.4em] uppercase overflow-hidden"
                >
                  <motion.div 
                    animate={{ x: isHovered ? "100%" : "-100%" }}
                    transition={{ duration: 0.6 }}
                    className="absolute inset-0 bg-[#D4AF37] opacity-20"
                  />
                  <span className="relative z-10">Start the Fit</span>
                </motion.button>

                <div className="h-20 w-[1px] bg-black/10 hidden md:block" />
                
                <div className="hidden md:block">
                  <p className="text-[9px] tracking-widest uppercase text-black/40">Next Opening</p>
                  <p className="text-[12px] font-medium text-[#A89276]">Savile Row, March '26</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* RIGHT – VIDEO COMPOSITION */}
        <div className="lg:col-span-6 relative h-[75vh] flex items-center justify-end order-1 lg:order-2">
           {/* Primary Reel */}
           <AestheticVideo 
             src="/reels/reel3.webm" 
             className="z-20 w-[75%] h-[85%] rounded-[4px]"
             delay={0.2}
           />

           {/* Detail Reel Inset */}
           <AestheticVideo 
             src="/reels/reel8.webm" 
             className="absolute -left-10 bottom-[10%] z-30 w-[45%] h-[40%] border-[15px] border-[#F9F7F2]"
             delay={0.5}
           />
           
           <div className="absolute top-[10%] -left-5 z-40 bg-white p-4 shadow-sm border border-black/5 rotate-3">
              <p className="text-[9px] font-black tracking-widest uppercase">100% Cashmere</p>
           </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-10 flex gap-20 opacity-40 grayscale pointer-events-none text-[#2D2D2D]">
         <span className="text-[10px] tracking-widest uppercase">Milan</span>
         <span className="text-[10px] tracking-widest uppercase">Paris</span>
         <span className="text-[10px] tracking-widest uppercase">London</span>
      </div>

    </section>
  );
}