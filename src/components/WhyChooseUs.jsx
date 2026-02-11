import { motion } from "framer-motion";

const features = [
  {
    id: "01",
    title: "Legacy Since 1983",
    desc: "Four decades of sartorial excellence, dressing generations of gentlemen with timeless grace.",
  },
  {
    id: "02",
    title: "Master Craftsmanship",
    desc: "Our master tailors bring decades of experience to every cut, ensuring a garment that is uniquely yours.",
  },
  {
    id: "03",
    title: "Premium Global Fabrics",
    desc: "Sourced from the finest mills worldwide, our fabrics offer unparalleled comfort and luxury.",
  },
  {
    id: "04",
    title: "The Perfect Fit",
    desc: "A meticulous 30-point measurement process to guarantee a silhouette that complements you perfectly.",
  },
  {
    id: "05",
    title: "Wedding Specialists",
    desc: "Specialized in bespoke wedding ensembles that make your special day truly unforgettable.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-32  text-neutral-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="flex flex-col items-center mb-24 text-center">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-[#C5A03A] tracking-[0.5em] uppercase text-[11px] font-bold mb-4"
          >
            Distinctive Excellence
          </motion.span>
          <h2 className="text-5xl md:text-6xl font-serif text-neutral-800 tracking-tighter">
            Why Vicky <span className="italic font-light text-neutral-400">Tailor</span>
          </h2>
          <div className="mt-8 h-[1px] w-24 bg-neutral-200" />
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-16 gap-x-12">
          {features.map((feature, index) => (
            <motion.div
              key={feature.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative"
            >
              {/* Decorative Number */}
              <span className="text-6xl font-serif text-neutral-100 absolute -top-10 -left-4 z-0 group-hover:text-[#C5A03A]/10 transition-colors duration-500">
                {feature.id}
              </span>
              
              <div className="relative z-10">
                <h3 className="text-xl font-serif mb-4 flex items-center gap-3 text-neutral-800">
                  <span className="w-8 h-[1px] bg-[#C5A03A]" />
                  {feature.title}
                </h3>
                <p className="text-neutral-500 font-light leading-relaxed text-sm pl-11">
                  {feature.desc}
                </p>
              </div>

              {/* Hover Line Effect */}
              <div className="absolute -bottom-6 left-11 w-0 h-[1px] bg-[#C5A03A] group-hover:w-full transition-all duration-700 opacity-30" />
            </motion.div>
          ))}

          {/* Special "Final" Card - Call to Action */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="bg-neutral-900 p-10 flex flex-col justify-center items-center text-center text-white md:col-span-1 lg:col-span-1"
          >
            <h3 className="text-2xl font-serif italic mb-4 text-[#C5A03A]">Experience the Craft</h3>
            <p className="text-xs text-neutral-400 uppercase tracking-widest mb-8 leading-loose">
              Ready to start your <br /> bespoke journey?
            </p>
            <button className="text-[10px] tracking-[0.3em] uppercase border-b border-[#C5A03A] pb-2 hover:text-[#C5A03A] transition-colors">
              Get Measured
            </button>
          </motion.div>
        </div>

      </div>

      {/* Subtle Background Elements */}
      <div className="absolute top-0 right-0 p-20 opacity-[0.02] pointer-events-none hidden lg:block">
        <svg width="400" height="400" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="48" stroke="currentColor" fill="none" strokeWidth="0.5" />
          <path d="M50 2 L50 98 M2 50 L98 50" stroke="currentColor" strokeWidth="0.5" />
        </svg>
      </div>
    </section>
  );
}