"use client";

import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence, useScroll, useTransform, useSpring } from "framer-motion";

// --- MAGNETIC COMPONENT ---
function Magnetic({ children }) {
  const ref = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouse = (e) => {
    const { clientX, clientY } = e;
    const { height, width, left, top } = ref.current.getBoundingClientRect();
    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);
    setPosition({ x: middleX * 0.2, y: middleY * 0.2 });
  };

  const reset = () => setPosition({ x: 0, y: 0 });

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
    >
      {children}
    </motion.div>
  );
}

export default function SartorialNavbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  const { scrollYProgress } = useScroll();
  const smoothProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });
  const width = useTransform(smoothProgress, [0, 1], ["0%", "100%"]);

  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menu = [
    { name: "Home", id: "#hero" },
    { name: "Our Legacy", id: "#about" },
    { name: "Collections", id: "#collections" },
    { name: "The Atelier", id: "#atelier" },
    { name: "Contact", id: "#contact" },
  ];

  return (
    <>
      <nav className="fixed top-0 w-full z-[1000] flex flex-col items-center pointer-events-none">
        
        {/* 1. TOP BAR - Collapses on scroll to save height */}
        <motion.div 
          initial={false}
          animate={{ 
            height: scrolled ? 0 : 38, 
            opacity: scrolled ? 0 : 1 
          }}
          className="w-full bg-[#1A1A1A] flex items-center overflow-hidden border-b border-[#D4AF37]/20 relative pointer-events-auto"
        >
          <div className="flex whitespace-nowrap">
            <motion.div 
              animate={{ x: [0, -1000] }}
              transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
              className="flex items-center gap-10 pr-10"
            >
              {[...Array(4)].map((_, i) => (
                <div key={i} className="flex items-center gap-10">
                  <span className="text-[7px] md:text-[9px] tracking-[0.4em] uppercase text-[#D4AF37] font-black flex items-center gap-4">
                    <span className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full" /> 
                    Crafting Identity Since 1983
                  </span>
                  <span className="text-[7px] md:text-[9px] tracking-[0.4em] uppercase text-white/40 font-bold italic">Savile Row Standards</span>
                </div>
              ))}
            </motion.div>
          </div>
        </motion.div>

        {/* 2. MAIN NAV CONTAINER - Fixed height logic */}
        <div className={`w-full max-w-[94%] md:max-w-7xl transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] pointer-events-auto
  ${scrolled ? "mt-1 md:mt-2" : "mt-2 md:mt-6"}`}>
  
  <motion.div
    layout
    className="relative overflow-hidden border border-white/40 shadow-[0_8px_32px_0_rgba(0,0,0,0.15)]"
    style={{ 
      borderRadius: scrolled ? "100px" : "16px",
      // Luxury Polished Effect: Glass + Noise + Gradient
      background: "linear-gradient(135deg, rgba(255,255,255,0.85) 0%, rgba(255,255,255,0.95) 100%)",
      backdropFilter: "blur(12px) saturate(180%)",
      WebkitBackdropFilter: "blur(12px) saturate(180%)",
    }}
  >
    {/* NOISE TEXTURE OVERLAY (Luxury Feel) */}
    <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
         style={{ backgroundImage: `url("https://grainy-gradients.vercel.app/noise.svg")` }}></div>

    {/* SUBTLE GLOW EFFECT (Follows scroll) */}
    <motion.div 
      animate={{ 
        background: scrolled 
          ? "radial-gradient(circle at 50% 0%, rgba(212,175,55,0.15), transparent 70%)" 
          : "radial-gradient(circle at 50% 0%, rgba(212,175,55,0.05), transparent 50%)" 
      }}
      className="absolute inset-0 pointer-events-none"
    />

    {/* ENHANCED PROGRESS STITCH */}
    <motion.div 
      style={{ width }} 
      className="absolute top-0 left-0 h-[2px] bg-gradient-to-r from-[#cfa2a2] via-[#da6363] to-[#e02a2a] z-50 shadow-[0_0_10px_rgba(212,175,55,0.8)]"
    />

    <div className={`flex items-center justify-between px-6 md:px-12 transition-all duration-500 
      ${scrolled ? "py-2 md:py-3" : "py-4 md:py-6"}`}>
      
      {/* LOGO */}
      <Magnetic>
        <a href="#hero" className="flex flex-col group gap-2 leading-none">
          <h1 className="text-xl md:text-2xl  pre_text  font-black tracking-tighter text-[#5a0e24] group-hover:text-[#5a0e24] transition-colors duration-500">
            VICKY <span className="text-[#5a0e24]  font-light ">TAILOR</span>
          </h1>
          <div className="flex items-center gap-2">
            <span className="h-[1px] w-4 bg-[#D4AF37]/40" />
            <span className="text-[6px] md:text-[7px] pre_text1  tracking-[0.5em] uppercase text-black/50 font-black">since 1983</span>
          </div>
        </a>
      </Magnetic>

      {/* DESKTOP NAV LINKS */}
      <ul className="hidden lg:flex items-center gap-12">
        {menu.map((item) => (
          <li key={item.id}>
            <Magnetic>
              <a 
                href={item.id}
                className="text-[10px] tracking-[0.3em] uppercase font-black text-black/60 hover:text-[#5A0E24] transition-all relative py-2 block group"
              >
                {item.name}
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[1.5px] bg-[#D4AF37] transition-all duration-500 group-hover:w-full" />
              </a>
            </Magnetic>
          </li>
        ))}
      </ul>

      {/* ACTION BUTTON */}
      <div className="flex items-center gap-5">
        <Magnetic>
          <a 
            href="#contact"
            className="hidden sm:block px-8 py-3 bg-[#1A1A1A] text-white text-[9px] tracking-[0.2em] uppercase font-black rounded-full hover:bg-[#5A0E24] hover:scale-105 active:scale-95 transition-all shadow-lg"
          >
            Book Appointment
          </a>
        </Magnetic>

        {/* MOBILE TRIGGER */}
        <button 
          onClick={() => setOpen(true)}
          className="w-11 h-11 rounded-full bg-white border border-black/5 flex flex-col items-center justify-center gap-1.5 md:hidden shadow-sm"
        >
          <div className="w-5 h-[1.5px] bg-[#5A0E24]" />
          <div className="w-3 h-[1.5px] bg-[#D4AF37] ml-auto mr-3" />
        </button>
      </div>
    </div>
  </motion.div>
</div>
      </nav>

      {/* 3. MOBILE MASTER OVERLAY */}
      <AnimatePresence>
        {open && (
           <motion.div
           initial={{ y: "-100%" }}
           animate={{ y: 0 }}
           exit={{ y: "-100%" }}
           transition={{ type: "spring", damping: 25, stiffness: 200 }}
           className="fixed inset-0 z-[2000] bg-white flex flex-col"
         >
            <div className="p-6 flex justify-between items-center border-b border-black/5">
              <span className=" pre_text  text-[#5A0E24] text-xl">Vicky Tailor</span>
              <button onClick={() => setOpen(false)} className="w-10 h-10 rounded-full bg-[#5A0E24] text-white flex items-center justify-center text-xs shadow-lg">✕</button>
            </div>
            <div className="flex-1 flex flex-col justify-center px-10 gap-6">
              {menu.map((item, i) => (
                <motion.div key={item.id} initial={{ x: -20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: i * 0.1 }}>
                  <a href={item.id} onClick={() => setOpen(false)} className="flex items-baseline gap-4 group">
                    <span className="text-[10px] font-sans text-[#D4AF37] font-black">0{i+1}</span>
                    <h2 className="text-4xl font-serif text-[#1A1A1A] italic group-hover:text-[#5A0E24] transition-colors">{item.name}</h2>
                  </a>
                </motion.div>
              ))}
            </div>
            <div className="p-8 bg-[#5A0E24] text-white">
               <p className="text-[8px] tracking-[0.3em] uppercase opacity-60 mb-1">Private Atelier</p>
               <h3 className="text-lg font-serif text-[#D4AF37]">Mumbai • Dubai • London</h3>
               <button className="w-full mt-6 py-4 bg-white text-[#5A0E24] text-[10px] font-black tracking-widest uppercase rounded-lg">WhatsApp Inquiry</button>
            </div>
         </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}