import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-[#0b0b0b] text-white overflow-hidden">

      {/* CINEMATIC BACKGROUND */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#1c1c1c,black)]" />
      <div className="absolute inset-0 shadow-[inset_0_0_200px_rgba(0,0,0,0.95)]" />

      {/* GOLD AMBIENT */}
      <div className="absolute top-1/4 left-1/3 w-80 h-80 bg-[#D4AF37]/10 blur-[150px]" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-[#D4AF37]/5 blur-[180px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-28 grid lg:grid-cols-2 gap-24 items-center">

        {/* LEFT – CRAFT STORY (3 IMAGES) */}
      <div className="relative h-[80vh] w-full">

  {/* IMAGE 1 – LEFT */}
  <motion.img
    src="/photo/hero1.jpg"
    className="
      absolute top-0 left-0
      w-[58%] h-[45%]
      object-cover
      rounded-xl
      border border-white/10
      shadow-[0_40px_80px_rgba(0,0,0,0.7)]
    "
    initial={{ opacity: 0, x: -80 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 1.2 }}
  />

  {/* IMAGE 2 – RIGHT */}
  <motion.img
    src="/photo/hero2.jpg"
    className="
      absolute top-[30%] right-0
      w-[45%] h-[38%]
      object-cover
      rounded-xl
      border border-white/10
      shadow-[0_30px_60px_rgba(0,0,0,0.8)]
    "
    initial={{ opacity: 0, x: 80 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ delay: 0.2, duration: 1.2 }}
  />

  {/* IMAGE 3 – LEFT BOTTOM */}
  <motion.img
    src="/photo/hero4.jpg"
    className="
      absolute bottom-0 left-[8%]
      w-[50%] h-[42%]
      object-cover
      rounded-xl
      border border-white/10
      shadow-[0_40px_80px_rgba(0,0,0,0.85)]
    "
    initial={{ opacity: 0, x: -80 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ delay: 0.4, duration: 1.2 }}
  />

  {/* SOFT CINEMATIC OVERLAY */}
  <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/30 to-black/60 pointer-events-none" />
</div>

        {/* RIGHT – BRAND ESSENCE */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <span className="text-[10px] tracking-[0.6em] uppercase text-white/40">
            Handcrafted Since 1983
          </span>

          <h1 className="mt-8 text-5xl md:text-7xl xl:text-8xl font-serif font-light leading-[1.05]">
            Tailoring
            <br />
            <span className="italic text-white/55">That Outlives Trends</span>
          </h1>

          <p className="mt-8 max-w-md text-white/45 leading-relaxed">
            From carefully selected fabrics to precise hand finishing,  
            every garment is shaped slowly — with intention, patience, and pride.
          </p>

          {/* MICRO DETAILS */}
          <div className="mt-10 flex gap-8 text-[11px] tracking-widest uppercase text-white/35">
            <span>• Bespoke Only</span>
            <span>• Hand Cut</span>
            <span>• Timeless Fit</span>
          </div>

          <div className="mt-14 flex items-center gap-6">
            <button
              className="px-10 py-3 border border-white/20
              text-[11px] tracking-[0.35em] uppercase
              hover:bg-white hover:text-black
              transition-all duration-300"
            >
              Visit Workshop
            </button>

            <span className="text-[10px] tracking-widest uppercase text-white/30">
              Limited Appointments
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
