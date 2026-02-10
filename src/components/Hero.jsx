"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRef, useState } from "react";

// --- HOVER 3D EFFECT COMPONENT ---
const PerspectiveImage = ({ src, className, delay = 0 }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseX = useSpring(x, { stiffness: 150, damping: 20 });
  const mouseY = useSpring(y, { stiffness: 150, damping: 20 });

  const rotateX = useTransform(mouseY, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseX, [-0.5, 0.5], ["-10deg", "10deg"]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseXRelative = (e.clientX - rect.left) / width - 0.5;
    const mouseYRelative = (e.clientY - rect.top) / height - 0.5;
    x.set(mouseXRelative);
    y.set(mouseYRelative);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9, y: 50 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 1.5, delay, ease: [0.16, 1, 0.3, 1] }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, perspective: 1000 }}
      className={className}
    >
      <div className="relative w-full h-full overflow-hidden rounded-sm ring-1 ring-white/10 group">
        <motion.img
          src={src}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
      </div>
    </motion.div>
  );
};

export default function Hero() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section className="relative min-h-screen bg-[#F0EEEA] text-[#1a1a1a] overflow-hidden selection:bg-[#C5A03A]/30">
      
      {/* 1. ARCHITECTURAL BACKGROUND */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[60vw] h-screen bg-[#E8E5E0] skew-x-[-12deg] translate-x-[20%]" />
        <div className="absolute inset-0 opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/pinstriped-suit.png')]" />
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-8 grid lg:grid-cols-12 gap-4 min-h-screen items-center py-20">
        
        {/* LEFT – VISUAL COMPOSITION (5 Columns) */}
        <div className="lg:col-span-6 relative h-[70vh] flex items-center justify-center">
          
          {/* Main Portrait */}
          <PerspectiveImage 
            src="/photo/hero1.jpg" 
            className="z-20 w-[65%] h-[75%] shadow-[40px_60px_100px_rgba(0,0,0,0.2)]"
            delay={0.2}
          />

          {/* Secondary Detail - Offset */}
          <PerspectiveImage 
            src="/photo/hero2.jpg" 
            className="absolute top-[10%] right-[5%] z-10 w-[40%] h-[40%] shadow-xl"
            delay={0.5}
          />

          {/* Fabric Texture - Foreground */}
          <PerspectiveImage 
            src="/photo/hero4.jpg" 
            className="absolute bottom-[5%] left-0 z-30 w-[35%] h-[30%] shadow-2xl border-[12px] border-[#F0EEEA]"
            delay={0.8}
          />

          {/* Floating Text Decorative */}
          <motion.div 
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -left-10 top-1/4 -rotate-90 origin-center hidden xl:block"
          >
            <span className="text-[10px] tracking-[1em] uppercase text-black/20 font-bold italic">
              Legacy of the needle
            </span>
          </motion.div>
        </div>

        {/* RIGHT – CONTENT (7 Columns) */}
        <div className="lg:col-span-6 lg:pl-16">
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Elegant Subtitle */}
            <div className="inline-flex items-center gap-6 mb-10">
              <span className="text-[11px] tracking-[0.6em] uppercase text-[#9C7A1C] font-bold">
                The Master's Atelier
              </span>
              <div className="h-px w-20 bg-[#9C7A1C]/20" />
            </div>

            {/* Main Headline with Split Text Effect */}
            <h1 className="text-7xl md:text-[9rem] font-serif leading-[0.85] tracking-tighter text-[#1a1a1a]">
              Quiet <br />
              <span className="relative inline-block italic font-light text-[#9C7A1C]">
                Luxury
                <motion.div 
                   initial={{ width: 0 }}
                   animate={{ width: "110%" }}
                   transition={{ delay: 1, duration: 1.5 }}
                   className="absolute -bottom-2 left-[-5%] h-1 bg-[#D4AF37]/30"
                />
              </span>
            </h1>

            <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-12">
              <p className="text-neutral-500 font-light leading-relaxed text-lg border-l-2 border-neutral-100 pl-8">
                Every stitch is a signature. Every cut, a story. We don't just make suits; we engineer 
                <span className="text-black font-medium italic"> presence.</span>
              </p>
              
              <div className="flex flex-col justify-end gap-6">
                 {/* Visit Workshop Button - High Interaction */}
                 <motion.button
                   onMouseEnter={() => setIsHovered(true)}
                   onMouseLeave={() => setIsHovered(false)}
                   className="group relative h-16 w-full bg-[#1a1a1a] text-white overflow-hidden rounded-full transition-all"
                 >
                   <motion.div 
                     animate={{ y: isHovered ? "-100%" : "0%" }}
                     className="absolute inset-0 flex items-center justify-center text-[10px] tracking-[0.5em] uppercase"
                   >
                     The Experience
                   </motion.div>
                   <motion.div 
                     animate={{ y: isHovered ? "0%" : "100%" }}
                     className="absolute inset-0 flex items-center justify-center bg-[#C5A03A] text-black text-[10px] tracking-[0.5em] uppercase font-bold"
                   >
                     Book Appointment
                   </motion.div>
                 </motion.button>
              </div>
            </div>

            {/* Minimal Footer Credits */}
            <div className="mt-20 flex items-center gap-10 opacity-30 text-[9px] tracking-[0.4em] uppercase font-black">
              <span>Bespoke 1/1</span>
              <span className="w-1 h-1 bg-black rounded-full" />
              <span>Full Canvas</span>
              <span className="w-1 h-1 bg-black rounded-full" />
              <span>Worldwide</span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* BACKGROUND GRAPHIC */}
      <div className="absolute bottom-10 right-10 flex flex-col items-end opacity-10 pointer-events-none">
         <span className="text-9xl font-serif leading-none italic">1983</span>
         <span className="text-xs tracking-[1em] uppercase -mt-4">Established</span>
      </div>
    </section>
  );
}