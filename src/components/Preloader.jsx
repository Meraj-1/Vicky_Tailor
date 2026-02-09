import { motion } from "framer-motion";

export default function Preloader() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white overflow-hidden">

      {/* DOT BACKGROUND */}
      <motion.div
        className="absolute inset-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.25 }}
        transition={{ duration: 1 }}
        style={{
          backgroundImage:
            "radial-gradient(#5A0E24 0.8px, transparent 0.8px)",
          backgroundSize: "14px 14px",
        }}
      />

      {/* CENTER CONTENT */}
      <div className="relative z-10 text-center">

        {/* Logo */}
        <motion.img
          src="/icon.png"
          alt="Vicky Tailor Logo"
          className="w-44 h-44 mx-auto mb-8"
          initial={{ scale: 0.85, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{
            duration: 1,
            ease: "easeOut",
          }}
        />

        {/* Brand Name */}
        <motion.h1
          className="text-6xl md:text-7xl font-bold text-[#5A0E24]"
          initial={{ y: 25, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            delay: 0.4,
            duration: 0.9,
            ease: "easeOut",
          }}
        >
          Vicky Tailor
        </motion.h1>

        {/* Since */}
        <motion.p
          className="mt-3 tracking-[0.35em] text-[#D4AF37]"
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            delay: 0.7,
            duration: 0.7,
            ease: "easeOut",
          }}
        >
          SINCE 1983
        </motion.p>

        {/* Tagline */}
        <motion.p
          className="mt-6 italic text-gray-500"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            delay: 1,
            duration: 0.8,
            ease: "easeOut",
          }}
        >
          Crafting Perfection…
        </motion.p>
      </div>
    </div>
  );
}
