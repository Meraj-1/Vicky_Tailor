"use client";

import { useRef, useState, useEffect } from "react";
// Next.js ke useRouter aur Link ko React Router se replace kiya
import { Link, useNavigate } from "react-router-dom";
import {
  motion,
  AnimatePresence,
  useScroll,
  useSpring,
  useMotionValueEvent,
  useTransform,
  useInView,
} from "framer-motion";
import { ArrowRight } from "lucide-react";

// --- INTERNAL JSON DATA (Backend call ki zaroorat nahi) ---
const SERVICES_DATA = [
  {
    slug: "bespoke-three-piece",
    title: "Signature 3-Piece",
    fullDescription: "A masterpiece of structural tailoring. Hand-canvassed and meticulously fitted to create the ultimate silhouette of power and grace.",
    videoUrl: "/reels/reel1.mp4",
    imageUrl: "/photo/service1.jpg",
  },
  {
    slug: "classic-tuxedo",
    title: "Midnight Tuxedo",
    fullDescription: "Exquisite evening wear featuring silk-satin lapels and a razor-sharp cut, designed for the most prestigious black-tie occasions.",
    videoUrl: "/reels/reel2.mp4", 
    imageUrl: "/photo/service2.jpg",
  },
  {
    slug: "regal-wedding-wear",
    title: "Heritage Wedding",
    fullDescription: "Celebrate your legacy with ornate craftsmanship. A perfect blend of traditional hand-embroidery and modern regal aesthetics.",
    videoUrl: "/reels/reel3.mp4",
    imageUrl: "/photo/service3.jpg",
  },
  {
    slug: "italian-blazer",
    title: "Italian Silk Blazer",
    fullDescription: "Lightweight, breathable, and undeniably sophisticated. Our unstructured blazers offer a relaxed yet refined Mediterranean flair.",
    videoUrl: "/reels/reel4.mp4",
    imageUrl: "/photo/service4.jpg",
  }
];

export default function ServicesMajesticJourney({ services = SERVICES_DATA }) {
  const containerRef = useRef(null);
  const navigate = useNavigate(); // React Router's hook
  const videoRef = useRef(null);

  // States jo pehle context se aa rahi thi, ab local hain taaki code self-contained rahe
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMuted, setIsMuted] = useState(true);
  const [isUIVisible, setIsUIVisible] = useState(true);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const smoothedScroll = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const videoY = useTransform(smoothedScroll, [0, 1], ["0%", "-10%"]);
  const indicatorY = useTransform(smoothedScroll, [0, 1], ["0%", "100%"]);

  // Video mute logic
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = isMuted;
    }
  }, [isMuted, activeIndex]);

  useMotionValueEvent(scrollYProgress, "change", (v) => {
    const index = Math.floor(v * (services.length - 0.001));
    if (index !== activeIndex) {
      const newIndex = Math.max(0, Math.min(index, services.length - 1));
      setActiveIndex(newIndex);
      setIsMuted(true); // Reset mute on change
    }
  });

  const currentService = services[activeIndex] || services[0];

  return (
    <section ref={containerRef} className="relative bg-black">
      <div className="sticky top-0 h-screen w-full overflow-hidden z-10">
        <div
          className="absolute inset-0 z-0 bg-black cursor-pointer"
          onClick={() => navigate(`/services/${currentService.slug}`)}
        >
          <AnimatePresence initial={false} mode="popLayout">
            <motion.div
              key={activeIndex}
              initial={{
                opacity: 0,
                scale: 1.2,
                filter: "blur(10px) brightness(1.5)",
              }}
              animate={{
                opacity: 0.5,
                scale: 1,
                filter: "blur(0px) brightness(1)",
              }}
              exit={{
                opacity: 0,
                scale: 0.8,
                filter: "blur(20px) brightness(0)",
              }}
              transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
              style={{ y: videoY }}
              className={`absolute inset-x-0 -inset-y-32 h-[120vh] transition-all duration-1000 transform-gpu will-change-transform ${
                !isUIVisible ? "opacity-100 scale-100" : "opacity-50 scale-100"
              }`}
            >
              {currentService.videoUrl ? (
                <video
                  ref={videoRef}
                  src={currentService.videoUrl}
                  autoPlay
                  loop
                  muted={isMuted}
                  playsInline
                  className="w-full h-full object-cover pointer-events-none transform-gpu"
                />
              ) : (
                <img
                  src={currentService.imageUrl}
                  alt={currentService.title}
                  className="w-full h-full object-cover pointer-events-none transform-gpu"
                />
              )}
            </motion.div>
          </AnimatePresence>

          <div className="absolute inset-0 bg-gradient-to-tr from-black via-transparent to-transparent z-[1] pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/40 z-[1] pointer-events-none" />
        </div>

        <div className="absolute bottom-0 left-0 w-full p-8 md:p-16 lg:p-24 z-20 pointer-events-none">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col items-start text-left max-w-4xl pointer-events-auto transform-gpu will-change-transform"
            >
              <motion.div
                animate={{
                  opacity: isUIVisible ? 1 : 0,
                }}
                transition={{ duration: 0.5 }}
                className="transform-gpu"
              >
                <div className="flex items-center gap-3 mb-4 sm:mb-6">
                  <div className="w-8 sm:w-12 h-[2px] bg-white/40" />
                  <span className="text-white/40 font-bold tracking-[0.4em] text-[8px] sm:text-[10px] uppercase">
                    Service Portfolio
                  </span>
                </div>

                <h2 className="text-5xl sm:text-8xl md:text-9xl lg:text-[10rem] font-bold tracking-tighter text-white mb-4 sm:mb-6 leading-none drop-shadow-2xl">
                  {currentService.title}
                </h2>

                <p className="text-white/60 text-sm sm:text-base md:text-xl max-w-xl mb-6 sm:mb-10 leading-relaxed font-light tracking-wide line-clamp-3 sm:line-clamp-none">
                  {currentService.fullDescription}
                </p>
              </motion.div>

              <Link
                to={`/services/${currentService.slug}`}
                className="group flex items-center gap-4 px-10 py-4 bg-white/5 hover:bg-white text-white hover:text-black backdrop-blur-xl rounded-full border border-white/10 transition-all duration-300 text-sm font-bold uppercase tracking-widest shrink-0"
              >
                Explore service
                <ArrowRight
                  size={18}
                  className="group-hover:translate-x-2 transition-transform duration-500"
                />
              </Link>
            </motion.div>
          </AnimatePresence>
        </div>

        <motion.div
          animate={{ opacity: isMuted ? 1 : 0.2 }}
          className="absolute top-0 bottom-0 right-2 sm:right-4 flex items-center z-40 pointer-events-none"
        >
          <div className="flex flex-col items-center">
            <div className="h-64 w-[2px] bg-white/10 relative rounded-full overflow-visible">
              <motion.div
                style={{ scaleY: smoothedScroll }}
                className="absolute top-0 left-0 w-full bg-white/20 origin-top rounded-full"
              />
              <motion.div
                style={{ top: indicatorY }}
                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-white rounded-full shadow-[0_0_15px_rgba(255,255,255,0.8)] z-50"
              />
            </div>

            <div className="mt-12 overflow-visible">
              <span className="text-[10px] font-black text-white/40 uppercase tracking-[1em] [writing-mode:vertical-lr] text-center">
                Scroll to explore
              </span>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="relative z-0">
        {services.map((_, i) => (
          <div key={i} className="h-[150vh] w-full pointer-events-none" />
        ))}
      </div>
    </section>
  );
}