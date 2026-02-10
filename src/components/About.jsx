import { motion } from "framer-motion";
import { useRef } from "react";

const timeline = [
  {
    year: "1983",
    title: "The Beginning",
    desc: "A single tailoring table and a belief in the perfect fit.",
    offset: "0px"
  },
  {
    year: "1995",
    title: "Refined Craft",
    desc: "Word-of-mouth trust turned a small shop into a legacy.",
    offset: "48px"
  },
  {
    year: "2010",
    title: "Modern Elegance",
    desc: "Classic tailoring met contemporary silhouettes.",
    offset: "0px"
  },
  {
    year: "Today",
    title: "Signature Identity",
    desc: "Every garment carries confidence and personality.",
    offset: "48px"
  }
];

export default function About() {
  const containerRef = useRef(null);

  return (
    <section
      ref={containerRef}
      className="relative py-44 bg-[#FCFAF8] overflow-hidden selection:bg-[#C5A03A]/20"
    >
      {/* ambient silk glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-20%] right-[-10%] w-[520px] h-[520px] bg-[#D4AF37]/6 blur-[160px] rounded-full" />
        <div className="absolute bottom-[-20%] left-[-10%] w-[520px] h-[520px] bg-[#D4AF37]/6 blur-[160px] rounded-full" />
      </div>

      <div className="relative max-w-7xl mx-auto px-8">

        {/* HEADER */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-12 mb-36">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-2xl"
          >
            <span className="text-[11px] tracking-[0.55em] uppercase text-[#9C7A1C] block mb-6">
              Established Heritage
            </span>

            <h2 className="text-5xl md:text-7xl font-serif text-neutral-900 leading-[1.05] tracking-tight">
              A Story <br />
              <span className="italic font-light text-[#C5A03A]">
                Stitched Through Time
              </span>
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 1 }}
            className="max-w-xs text-sm text-neutral-500 leading-relaxed font-light tracking-wide border-l border-neutral-200 pl-6"
          >
            True elegance is a quiet dialogue between heritage and modernity,
            shaped patiently by hand.
          </motion.p>
        </div>

        {/* TIMELINE */}
        <div className="relative">

          {/* silk ribbon thread */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 2, ease: "easeInOut" }}
            className="origin-left absolute top-1/2 left-0 w-full h-[2px] hidden md:block
            bg-[linear-gradient(to_right,transparent,#D4AF37,transparent)] opacity-50"
          />

          <div className="grid grid-cols-1 md:grid-cols-4 gap-10 relative z-10">
            {timeline.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.18, duration: 1 }}
                style={{
                  marginTop:
                    typeof window !== "undefined" && window.innerWidth > 768
                      ? item.offset
                      : "0px"
                }}
                className="group relative"
              >
                {/* CARD */}
                <div className="
                  relative bg-white/60 backdrop-blur-lg
                  border border-white/90
                  px-8 py-10
                  rounded-sm
                  transition-all duration-700
                  hover:-translate-y-3
                  hover:shadow-[0_40px_90px_rgba(212,175,55,0.12)]
                ">
                  {/* year watermark */}
                  <span className="absolute top-4 right-6 text-6xl font-serif 
                    text-neutral-200/40 pointer-events-none">
                    {item.year}
                  </span>

                  <span className="text-xs tracking-[0.25em] text-[#C5A03A] block mb-6">
                    {item.year}
                  </span>

                  <h3 className="text-xl font-serif text-neutral-800 mb-4">
                    {item.title}
                  </h3>

                  <p className="text-sm text-neutral-500 leading-relaxed font-light">
                    {item.desc}
                  </p>

                  {/* stitch */}
                  <div className="mt-10 flex items-center gap-3">
                    <div className="h-px w-10 bg-[#D4AF37]/40 group-hover:w-full transition-all duration-700" />
                    <div className="w-[5px] h-[5px] rounded-full bg-[#D4AF37]" />
                  </div>
                </div>

                {/* connector */}
                <div className="absolute left-1/2 -translate-x-1/2 -top-4 hidden md:block">
                  <div className="w-2 h-2 rounded-full bg-[#D4AF37] ring-4 ring-[#FCFAF8]" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* paper fade */}
      <div className="absolute bottom-0 inset-x-0 h-40 bg-gradient-to-t from-[#FCFAF8] to-transparent" />
    </section>
  );
}
