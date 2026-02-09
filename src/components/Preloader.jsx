import { motion } from "framer-motion";

export default function Preloader() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white">
      <div className="flex flex-col items-center text-center scale-110">

        {/* Logo Animation (BIGGER) */}
        <motion.img
          src="/icon.jpg"
          alt="Vicky Tailor Logo"
          className="w-44 h-44 object-contain mb-10"
          initial={{ opacity: 0, scale: 0.5, rotate: -12 }}
          animate={{
            opacity: 1,
            scale: 1,
            rotate: 0,
          }}
          transition={{
            duration: 1.4,
            ease: "easeOut",
          }}
        />

        {/* Brand Name (BIGGER) */}
        <motion.h1
          className="text-6xl md:text-7xl font-bold tracking-wider text-[#5A0E24]"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
        >
          Vicky Tailor
        </motion.h1>

        {/* Since */}
        <motion.p
          className="mt-3 text-base tracking-[0.3em] text-[#D4AF37]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          SINCE 1983
        </motion.p>

        {/* Divider Line */}
        <motion.div
          className="w-24 h-[2px] bg-[#D4AF37] mt-6"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
        />

        {/* Tagline */}
        <motion.p
          className="mt-6 italic text-lg md:text-xl text-gray-500"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
        >
          Crafting Perfection…
        </motion.p>
      </div>
    </div>
  );
}
