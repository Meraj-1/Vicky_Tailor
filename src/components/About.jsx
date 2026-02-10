"use client";

import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef } from "react";

const timeline = [
  {
    year: "1983",
    title: "The Beginning",
    desc: "A single tailoring table and a belief in the perfect fit.",
    offset: "0px",
    img: "https://images.unsplash.com/photo-1598501479155-208d883201de?q=80&w=300&h=400&auto=format&fit=crop"
  },
  {
    year: "1995",
    title: "Refined Craft",
    desc: "Word-of-mouth trust turned a small shop into a legacy.",
    offset: "60px",
    img: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=300&h=400&auto=format&fit=crop"
  },
  {
    year: "2010",
    title: "Modern Elegance",
    desc: "Classic tailoring met contemporary silhouettes.",
    offset: "0px",
    img: "https://images.unsplash.com/photo-1594932224828-b4b059b02682?q=80&w=300&h=400&auto=format&fit=crop"
  },
  {
    year: "Today",
    title: "Signature Identity",
    desc: "Every garment carries confidence and personality.",
    offset: "60px",
    img: "https://images.unsplash.com/photo-1617130867762-595f44d6274a?q=80&w=300&h=400&auto=format&fit=crop"
  }
];

export default function About() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const scrollX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });
  const bgTextMove = useTransform(scrollX, [0, 1], ["0%", "-15%"]);

  return (
    <section
      ref={containerRef}
      className="relative py-44 bg-[#F9F7F4] overflow-hidden selection:bg-[#C5A03A]/20"
    >
      {/* 1. LARGE PARALLAX BACKGROUND TEXT */}
      <motion.div 
        style={{ x: bgTextMove }}
        className="absolute top-20 left-0 whitespace-nowrap pointer-events-none select-none"
      >
        <span className="text-[25vw] font-serif font-bold text-black/[0.02] leading-none uppercase">
          Heritage Excellence Tailoring Legacy
        </span>
      </motion.div>

      {/* 2. AMBIENT GLOWS (Improved) */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-[-5%] w-[600px] h-[600px] bg-[#D4AF37]/5 blur-[120px] rounded-full" />
        <div className="absolute bottom-0 left-[-5%] w-[600px] h-[600px] bg-[#D4AF37]/5 blur-[120px] rounded-full" />
      </div>

      {/* 3. FILM GRAIN TEXTURE OVERLAY */}
      <div className="absolute inset-0 opacity-[0.15] pointer-events-none mix-blend-multiply bg-[url('https://www.transparenttextures.com/patterns/natural-paper.png')]" />

      <div className="relative max-w-7xl mx-auto px-8">
        {/* HEADER */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-12 mb-44">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-2xl"
          >
            <span className="flex items-center gap-4 text-[11px] tracking-[0.5em] uppercase text-[#9C7A1C] mb-8">
              <span className="w-12 h-px bg-[#9C7A1C]/30" />
              Established Heritage
            </span>

            <h2 className="text-6xl md:text-8xl font-serif text-neutral-900 leading-[0.95] tracking-tighter">
              A Story <br />
              <span className="italic font-light text-[#C5A03A] ml-[10%]">
                Stitched Through Time
              </span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="max-w-xs"
          >
            <p className="text-base text-neutral-500 leading-relaxed font-light italic border-l-2 border-[#C5A03A]/30 pl-8">
              "True elegance is a quiet dialogue between heritage and modernity, shaped patiently by hand."
            </p>
          </motion.div>
        </div>

        {/* TIMELINE */}
        <div className="relative">
          {/* THE SILK THREAD (Moving on Scroll) */}
          <motion.div
            style={{ scaleX: scrollYProgress }}
            className="absolute top-1/2 left-0 w-full h-[1px] hidden md:block bg-[#D4AF37] origin-left z-0 opacity-40"
          />

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
            {timeline.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2, duration: 1, ease: [0.16, 1, 0.3, 1] }}
                style={{ marginTop: typeof window !== "undefined" && window.innerWidth > 768 ? item.offset : "0px" }}
                className="group relative"
              >
                {/* YEAR FLOATER */}
                <div className="mb-6 overflow-hidden">
                  <motion.span 
                    className="block text-4xl font-serif text-neutral-300 group-hover:text-[#C5A03A] group-hover:-translate-y-2 transition-all duration-700"
                  >
                    {item.year}
                  </motion.span>
                </div>

                {/* CARD CONTAINER */}
                <div className="relative overflow-hidden bg-white p-1 border border-neutral-100 shadow-sm transition-all duration-700 group-hover:shadow-2xl group-hover:shadow-[#C5A03A]/10 group-hover:-translate-y-4">
                  
                  {/* HOVER IMAGE REVEAL */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-700">
                    <img src={item.img} alt="Heritage" className="w-full h-full object-cover grayscale" />
                  </div>

                  <div className="relative z-10 p-8 bg-white/80 backdrop-blur-sm border border-neutral-50">
                    <h3 className="text-xl font-serif text-neutral-800 mb-4 tracking-tight">
                      {item.title}
                    </h3>
                    <p className="text-sm text-neutral-500 leading-relaxed font-light">
                      {item.desc}
                    </p>

                    {/* INTERACTIVE STITCH */}
                    <div className="mt-12 relative h-px w-full bg-neutral-100 overflow-hidden">
                      <motion.div 
                        initial={{ x: "-100%" }}
                        whileInView={{ x: "100%" }}
                        transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 1 }}
                        className="absolute inset-0 w-1/2 bg-gradient-to-r from-transparent via-[#C5A03A] to-transparent"
                      />
                    </div>
                  </div>
                </div>

                {/* VERTICAL CONNECTOR */}
                <div className="absolute -top-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 hidden md:flex">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" />
                  <div className="w-[1px] h-12 bg-[#D4AF37]/20" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}