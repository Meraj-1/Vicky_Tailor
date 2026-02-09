import { motion } from "framer-motion";

const brand = "Vicky Tailor";

export default function Preloader() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white overflow-hidden">

      {/* DOT BACKGROUND */}
      <motion.div
        className="absolute inset-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.22 }}
        transition={{ duration: 1 }}
        style={{
          backgroundImage: "radial-gradient(#5A0E24 2px, transparent 2px)",
          backgroundSize: "16px 16px",
        }}
      />

      {/* CENTER CONTENT */}
      <div className="relative z-10 text-center px-6">

        {/* LOGO */}
        <motion.img
          src="/icon.png"
          alt="Vicky Tailor Logo"
          className="
            mx-auto mb-8
            w-28 h-28
            sm:w-36 sm:h-36
            lg:w-44 lg:h-44
            xl:w-52 xl:h-52
          "
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        />

        {/* BRAND NAME WITH LINE REVEAL */}
        <div className="relative inline-block overflow-hidden">

          {/* TEXT */}
          <motion.h1
            initial={{ clipPath: "inset(0 100% 0 0)" }}
            animate={{ clipPath: "inset(0 0% 0 0)" }}
            transition={{ duration: 1.8, ease: "easeInOut" }}
            className="
              font-bold pre_text text-[#5A0E24]
              text-4xl sm:text-5xl md:text-6xl
              lg:text-7xl xl:text-8xl
              relative z-10
            "
          >
            {brand}
          </motion.h1>

          {/* MOVING HORIZONTAL LINE */}
          <motion.span
            initial={{ left: "-20%" }}
            animate={{ left: "100%" }}
            transition={{ duration: 1.8, ease: "easeInOut" }}
            className="
              absolute top-1/2 -translate-y-1/2
              h-[2px] w-[140px]
              bg-[#5A0E24]
              z-20
            "
          />
        </div>

        {/* SINCE */}
        <motion.p
          className="
            mt-4 tracking-[0.35em] text-[#D4AF37]
            text-xs sm:text-sm md:text-base
          "
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 0.7 }}
        >
          SINCE 1983
        </motion.p>

        {/* TAGLINE */}
        <motion.p
          className="
            mt-6 italic text-gray-500
            text-sm sm:text-base md:text-lg
          "
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.4, duration: 0.8 }}
        >
          Crafting Perfection…
        </motion.p>

      </div>
    </div>
  );
}
