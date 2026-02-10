import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useState, useRef } from "react";

export default function Hero() {
  const containerRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  
  // Smooth dragging setup
  const xPercent = useMotionValue(50);
  const smoothReveal = useSpring(xPercent, { stiffness: 300, damping: 30 });

  const handleDrag = (e) => {
    if (!isDragging || !containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(e.clientX - rect.left, rect.width));
    xPercent.set((x / rect.width) * 100);
  };

  return (
    <section className="relative min-h-screen bg-[#0a0a0a] text-white overflow-hidden flex items-center">
      {/* Premium Background Ambient Glow */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-[#D4AF37]/5 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-[#D4AF37]/5 blur-[120px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-6 w-full grid lg:grid-cols-2 gap-16 items-center">
        
        {/* TEXT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <span className="text-[10px] tracking-[0.6em] uppercase text-[#D4AF37] font-medium">
            Est. 1983 • Bespoke Excellence
          </span>

          <h1 className="mt-4 text-6xl xl:text-8xl font-serif font-light leading-[1.1]">
            Art of <br />
            <span className="italic">Transformation</span>
          </h1>

          <p className="mt-8 max-w-md text-white/50 leading-relaxed font-light text-lg">
            Witness the journey from raw Italian wool to a masterpiece. 
            Hold and slide to reveal the craftsmanship.
          </p>

          <div className="mt-12 flex items-center gap-6">
             <button className="px-8 py-4 bg-[#D4AF37] text-black text-xs font-bold uppercase tracking-widest hover:bg-white transition-colors">
               Book Appointment
             </button>
             <span className="text-[10px] text-white/40 tracking-widest uppercase animate-pulse">
               ← Click & Drag Slider
             </span>
          </div>
        </motion.div>

        {/* 4-IMAGE INTERACTIVE REVEAL */}
        <div className="relative group cursor-ew-resize">
          <div 
            ref={containerRef}
            className="relative h-[600px] w-full overflow-hidden rounded-sm border border-white/10"
            onMouseDown={() => setIsDragging(true)}
            onMouseUp={() => setIsDragging(false)}
            onMouseLeave={() => setIsDragging(false)}
            onMouseMove={handleDrag}
          >
            {/* Image 1: Raw Fabric (Base) */}
            <img src="/photo/hero1.jpg" alt="Fabric" className="absolute inset-0 w-full h-full object-cover grayscale" />

            {/* Image 2: Cutting (Revealed up to 33%) */}
            <motion.div 
              className="absolute inset-0 overflow-hidden border-r border-white/20"
              style={{ width: useTransform(smoothReveal, (v) => `${Math.min(v, 100)}%`) }}
            >
              <img src="/photo/hero2.jpg" alt="Cutting" className="absolute inset-0 w-[50vw] h-full object-cover" />
            </motion.div>

            {/* Image 3: Stitching (Revealed up to 66%) */}
            <motion.div 
              className="absolute inset-0 overflow-hidden border-r border-white/20"
              style={{ width: useTransform(smoothReveal, (v) => `${Math.min(v, 66)}%`) }}
            >
              <img src="/photo/hero3.jpg" alt="Stitching" className="absolute inset-0 w-[50vw] h-full object-cover" />
            </motion.div>

            {/* Image 4: Final Suit (Always on top, width controlled by slider) */}
            <motion.div 
              className="absolute inset-0 overflow-hidden"
              style={{ width: useTransform(smoothReveal, (v) => `${Math.min(v, 33)}%`) }}
            >
              <img src="/photo/hero4.jpg" alt="Final" className="absolute inset-0 w-[50vw] h-full object-cover" />
            </motion.div>

            {/* THE SLIDER HANDLE */}
            <motion.div
              className="absolute top-0 bottom-0 w-[1px] bg-[#D4AF37] z-30"
              style={{ left: useTransform(smoothReveal, (v) => `${v}%`) }}
            >
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 border border-[#D4AF37] bg-black/80 rounded-full flex items-center justify-center backdrop-blur-sm">
                <div className="flex gap-1">
                  <div className="w-1 h-1 bg-[#D4AF37] rounded-full" />
                  <div className="w-1 h-1 bg-[#D4AF37] rounded-full" />
                </div>
              </div>
            </motion.div>
          </div>
          
          {/* Subtle Labeling */}
          <div className="absolute -bottom-6 left-0 w-full flex justify-between text-[10px] uppercase tracking-tighter text-white/30 px-2">
             <span>Raw Material</span>
             <span>In Progress</span>
             <span>The Masterpiece</span>
          </div>
        </div>
      </div>
    </section>
  );
}