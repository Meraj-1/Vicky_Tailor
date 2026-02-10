"use client";

// Yahan maine useMotionValue aur useScroll ko add kar diya hai
import { motion, useMotionValue, useSpring, useTransform, useScroll } from "framer-motion";
import { useRef, useState, useEffect } from "react";

// --- BOUTIQUE IMAGE COMPONENT ---
const BoutiqueImage = ({ src, className, delay = 0 }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseX = useSpring(x, { stiffness: 100, damping: 20 });
  const mouseY = useSpring(y, { stiffness: 100, damping: 20 });

  const rotateX = useTransform(mouseY, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseX, [-0.5, 0.5], ["-10deg", "10deg"]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1.5, delay, ease: [0.16, 1, 0.3, 1] }}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => { x.set(0); y.set(0); }}
      style={{ rotateX, rotateY, perspective: 1000 }}
      className={className}
    >
      <div className="relative w-full h-full p-[10px] bg-white/5 backdrop-blur-sm border border-white/10 rounded-sm overflow-hidden group shadow-2xl">
        <motion.img
          src={src}
          className="w-full h-full object-cover grayscale-[0.3] group-hover:grayscale-0 transition-all duration-[1.5s]"
        />
        <div className="absolute inset-0 bg-[#050B14]/40 group-hover:bg-transparent transition-colors duration-700" />
      </div>
    </motion.div>
  );
};

export default function RoyalHero() {
  const [isHovered, setIsHovered] = useState(false);
  const containerRef = useRef(null);

  // Scroll animations for background depth
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "80%"]);

  return (
    <section 
      ref={containerRef}
      className="relative min-h-screen bg-[#050B14] text-[#E2D1B3] overflow-hidden selection:bg-[#B17457]/30"
    >
      {/* 1. BACKGROUND DECOR */}
      <div className="absolute top-[-20%] right-[-10%] w-[70vw] h-[70vh] bg-[#B17457]/10 blur-[150px] rounded-full pointer-events-none" />
      
      <div className="absolute left-12 top-1/2 -translate-y-1/2 overflow-hidden h-40 hidden lg:block pointer-events-none">
        <motion.span 
          style={{ y: textY }}
          className="text-[150px] font-serif font-black text-white/[0.02] leading-none block"
        >
          1983
        </motion.span>
      </div>

      <div className="relative z-10 max-w-[1500px] mx-auto px-8 grid lg:grid-cols-12 gap-12 min-h-screen items-center py-24">
        
        {/* LEFT – VISUALS */}
        <div className="lg:col-span-7 relative h-[80vh] flex items-center justify-center">
          <BoutiqueImage 
            src="/photo/hero1.jpg" 
            className="z-20 w-[60%] h-[75%] shadow-[50px_50px_100px_rgba(0,0,0,0.6)]"
            delay={0.2}
          />
          <BoutiqueImage 
            src="/photo/hero2.jpg" 
            className="absolute top-[5%] right-[2%] z-10 w-[42%] h-[45%]"
            delay={0.5}
          />
          <BoutiqueImage 
            src="/photo/hero4.jpg" 
            className="absolute bottom-[5%] left-[0%] z-30 w-[38%] h-[35%] border-[10px] border-[#050B14]"
            delay={0.8}
          />
        </div>

        {/* RIGHT – CONTENT */}
        <div className="lg:col-span-5 lg:pl-10">
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-[1px] bg-[#B17457]" />
              <span className="text-[10px] tracking-[0.6em] uppercase text-[#B17457] font-bold">
                Royal Bespoke Service
              </span>
            </div>

            <h1 className="text-7xl md:text-[8rem] font-serif leading-[0.85] tracking-tighter text-white mb-10">
              Unerring <br />
              <span className="italic font-light text-[#E2D1B3]/50">Precision</span>
            </h1>

            <div className="max-w-sm">
              <p className="text-[#94A3B8] font-light leading-relaxed text-lg mb-12 border-l-2 border-[#B17457]/20 pl-6">
                Tailoring is a silent conversation between the fabric and the form. We listen.
              </p>

              <div className="flex items-center gap-10">
                <motion.button
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                  className="relative group h-16 w-16 rounded-full border border-[#B17457] flex items-center justify-center transition-all duration-700 overflow-hidden hover:w-60"
                >
                  <div className="absolute left-5 text-[#B17457] group-hover:text-white transition-colors">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M5 12h14M12 5l7 7-7 7"/>
                    </svg>
                  </div>
                  <span className="ml-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500 text-[10px] tracking-[0.4em] uppercase whitespace-nowrap text-white font-bold">
                    Secure Appointment
                  </span>
                </motion.button>
                
                <span className="text-[9px] tracking-widest uppercase text-white/20 hidden md:block">
                  London • Dubai • Delhi
                </span>
              </div>
            </div>

            <div className="mt-20 grid grid-cols-2 gap-8 border-t border-white/5 pt-12">
               <div>
                  <p className="text-[10px] tracking-widest uppercase text-[#B17457] mb-2">Heritage</p>
                  <p className="text-sm text-white/40 font-serif italic">Est. 1983</p>
               </div>
               <div>
                  <p className="text-[10px] tracking-widest uppercase text-[#B17457] mb-2">Technique</p>
                  <p className="text-sm text-white/40 font-serif italic">Full Floating Canvas</p>
               </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}