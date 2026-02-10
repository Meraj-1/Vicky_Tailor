import { motion } from "framer-motion";

const BRAND_NAME = `Vicky Tailor`;

export default function Preloader() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#ffffff] overflow-hidden">
      
      {/* DOT BACKGROUND */}
      <motion.div
        className="absolute inset-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.35 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        style={{
          backgroundImage:
            "radial-gradient(#5A0E24 2px, transparent 0.1px )",
          backgroundSize: "18px 18px",
        }}
      />

      {/* CENTER CONTENT */}
      <div className="relative z-10 flex flex-col items-center text-center px-6">

        {/* LOGO */}
        {/* <motion.img
          src="/icon.png"
          alt="Vicky Tailor Logo"
          className="
            mb-6
            w-3 h-3
            sm:w-10 sm:h-10
            md:w-36 md:h-36
            lg:w-44 lg:h-44
            xl:w-52 xl:h-52
          "
          initial={{ scale: 0.85, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.1, ease: "easeOut" }}
        /> */}
{/* HANGING LOGO WRAPPER */}
<motion.div
  className="relative mb-8"
  style={{ transformOrigin: "50% 0%" }}
  initial={{ rotate: -40 }}
  animate={{ rotate: [-40, 40, -30, 30, -20, 20, -10, 10, 0] }}
  transition={{
    duration: 3,
    ease: "easeOut",
  }}
>

  {/* THREAD / STRING */}
  {/* <div
    className="
      absolute
      left-1/2 -translate-x-1/2
      -top-10
      h-10
      w-[2px]
      bg-[#5A0E24]/60
    "
  /> */}

  {/* LOGO IMAGE */}
  <motion.img
    src="/icon.png"
    alt="Vicky Tailor Logo"
    className="
      w-24 h-24
      sm:w-32 sm:h-32
      md:w-36 md:h-36
      lg:w-44 lg:h-44
      xl:w-52 xl:h-52
      drop-shadow-[0_20px_25px_rgba(0,0,0,0.15)]
    "
    initial={{ opacity: 0, scale: 0.9 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 1, ease: "easeOut" }}
  />
</motion.div>


        {/* BRAND NAME + STITCH LINE */}
        <div className="relative inline-block overflow-hidden">

          {/* BRAND TEXT */}
          <motion.h1
            initial={{ clipPath: "inset(0 100% 0 0)" }}
            animate={{ clipPath: "inset(0 0% 0 0)" }}
            transition={{ duration: 1.8, ease: "easeInOut" }}
            className="
              relative z-10
              font-bold pre_text tracking-tight
              text-[#5A0E24]
              text-4xl
              sm:text-5xl
              md:text-6xl
              lg:text-7xl
              xl:text-8xl
            "
          >
            {BRAND_NAME}
          </motion.h1>

          {/* MOVING STITCH LINE */}
          <motion.span
            initial={{ left: "-30%" }}
            animate={{ left: "100%" }}
            transition={{ duration: 1.8, ease: "easeInOut" }}
            className="
              absolute top-1/2 -translate-y-1/2
              h-[2px]
              w-24 sm:w-32 md:w-40 lg:w-48
              bg-[#5A0E24]
              z-20
            "
          />
        </div>

        {/* SINCE */}
<motion.p
  className="
    mt-3
    tracking-[0.4em]
    text-[#5A0E24]
    text-xs
    font-semibold
    sm:text-sm pre_text1
    md:text-base
  "
  initial={{ opacity: 0, y: 10 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 2, duration: 1, ease: "easeOut" }}
>
  SINCE 1983
</motion.p>
      </div>
    </div>
  );
}
