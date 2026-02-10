import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const collections = [
  { id: 1, title: "The Royal Tuxedo", category: "Evening", year: "2026", img: "/photo/royal.jpg" },
  { id: 2, title: "English Heritage", category: "Formal", year: "2026", img: "/photo/english.jpg" },
  { id: 3, title: "Italian Silk Series", category: "Wedding", year: "2026", img: "https://images.unsplash.com/photo-1593032465175-481ac7f401a0?q=80&w=1200" },
  { id: 4, title: "Midnight Velvet", category: "Gala", year: "2025", img: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=1200" },
  { id: 5, title: "Oxford Business", category: "Corporate", year: "2026", img: "/photo/oxford.jpg" },
];

export default function Collections() {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  // Moves the track horizontally as you scroll vertically
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-65%"]);

  return (
    <section ref={targetRef} className="relative h-[300vh] bg-[#FAF9F6]">
      {/* Sticky Container */}
      <div className="sticky top-0 h-screen flex items-center overflow-hidden">
        
        {/* Background Watermark Text */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.03] pointer-events-none w-full text-center">
          <h2 className="text-[25vw] font-serif font-black uppercase text-neutral-900 leading-none">
            Legacy
          </h2>
        </div>

        {/* Minimalist Scroll Indicator */}
        <div className="absolute bottom-12 left-12 z-50 hidden md:flex items-center gap-4">
          <span className="text-neutral-400 tracking-[0.4em] uppercase text-[10px] font-bold">Slide</span>
          <div className="w-24 h-[1px] bg-neutral-200 relative overflow-hidden">
            <motion.div 
              style={{ scaleX: scrollYProgress }} 
              className="absolute inset-0 bg-[#C5A03A] origin-left"
            />
          </div>
        </div>

        {/* Horizontal Moving Track */}
        <motion.div style={{ x }} className="flex gap-24 px-12 md:px-32 items-center">
          
          {/* Intro Slide */}
          <div className="flex flex-col justify-center min-w-[450px] md:min-w-[600px]">
            <motion.span 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-[#C5A03A] tracking-[0.6em] uppercase text-[11px] mb-8 font-bold block"
            >
              The Art of Tailoring
            </motion.span>
            <h2 className="text-7xl md:text-[120px] font-serif text-neutral-800 leading-[0.8] tracking-tighter">
              Curated <br /> 
              <span className="italic font-light text-neutral-400">Series</span>
            </h2>
            <div className="mt-12 h-[1px] w-20 bg-[#C5A03A]" />
            <p className="mt-8 text-neutral-500 max-w-sm font-light leading-relaxed text-sm italic">
              "Style is a way to say who you are without having to speak."
            </p>
          </div>

          {/* Collection Cards */}
          {collections.map((item) => (
            <div 
              key={item.id} 
              className="group relative h-[65vh] w-[400px] md:w-[550px] flex-shrink-0"
            >
              {/* Image Frame with Soft Shadow */}
              <div className="relative h-full w-full overflow-hidden bg-white shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-neutral-100 transition-all duration-700 group-hover:shadow-[0_40px_80px_rgba(0,0,0,0.1)]">
                <img
                  src={item.img}
                  alt={item.title}
                  className="h-full w-full object-cover transition-all duration-[1.5s] ease-out group-hover:scale-110"
                />
                
                {/* Clean Light Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                
                {/* Hover Content */}
                <div className="absolute inset-0 p-10 flex flex-col justify-end opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                   <span className="text-[#C5A03A] text-[10px] tracking-[0.4em] uppercase mb-2 font-bold block">
                     {item.category}
                   </span>
                   <h3 className="text-3xl font-serif text-white mb-6">
                     {item.title}
                   </h3>
                   <button className="py-3 px-8 bg-white text-neutral-900 text-[10px] tracking-widest uppercase font-bold w-max shadow-xl hover:bg-[#C5A03A] hover:text-white transition-colors">
                     Explore Look
                   </button>
                </div>
              </div>

              {/* Outside Labels (Always Visible) */}
              <div className="mt-8 flex justify-between items-center px-2">
                <div>
                   <span className="text-neutral-300 text-[9px] uppercase tracking-widest block mb-1">Look No.</span>
                   <span className="text-neutral-800 font-serif text-xl italic">{item.id < 10 ? `0${item.id}` : item.id}</span>
                </div>
                <div className="text-right">
                   <span className="text-neutral-300 text-[9px] uppercase tracking-widest block mb-1">Edition</span>
                   <span className="text-neutral-400 text-xs font-light">{item.year} // Limited</span>
                </div>
              </div>
            </div>
          ))}

          {/* End Slide (Call to Action) */}
          <div className="min-w-[500px] pr-40 flex flex-col items-start">
             <span className="text-neutral-300 text-[10vw] font-serif leading-none mb-4 tracking-tighter">Fin.</span>
             <h2 className="text-4xl font-serif text-neutral-800 italic mb-8">Ready to define <br/> your signature style?</h2>
             <button className="group relative overflow-hidden border border-neutral-800 px-12 py-5 transition-all duration-500">
               <span className="relative z-10 text-neutral-800 group-hover:text-white text-[11px] tracking-[0.5em] uppercase font-bold">
                 Book an Appointment
               </span>
               <div className="absolute inset-0 bg-neutral-900 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
             </button>
          </div>

        </motion.div>
      </div>
    </section>
  );
}