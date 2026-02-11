import React, { useState, useRef, useEffect } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { ArrowRight, ArrowLeft, Instagram, ArrowUpRight } from "lucide-react";

const posts = [
  { src: "/reels/reel4.mp4", instaLink: "https://www.instagram.com/reel/DOtRKebDN0f/", duration: 5 },
  { src: "/reels/reel8.mp4", instaLink: "https://www.instagram.com/reel/DMhP7TnI2UK/", duration: 5 },
  { src: "/reels/reel3.mp4", instaLink: "https://www.instagram.com/reel/DUGUmckDBzq/", duration: 28 },
  { src: "/reels/reel7.mp4", instaLink: "https://www.instagram.com/reel/DPMJP0OjATo/", duration: 10 },
  { src: "/reels/reel5.mp4", instaLink: "https://www.instagram.com/reel/DRhdk-LjMQs/", duration: 24 },
  { src: "/reels/reel6.mp4", instaLink: "https://www.instagram.com/reel/DNNA6KdPWwl/", duration: 24 },
];

const Social = () => {
  const [active, setActive] = useState(2);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  const videoRefs = useRef([]);
  const timerRef = useRef(null);

  const next = () => setActive((p) => (p + 1) % posts.length);
  const prev = () => setActive((p) => (p - 1 + posts.length) % posts.length);

  /* ---------- AUTO SLIDE LOGIC ---------- */
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => setIsVisible(entry.isIntersecting), { threshold: 0.5 });
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (timerRef.current) clearTimeout(timerRef.current);
    if (isVisible) {
      timerRef.current = setTimeout(() => next(), posts[active].duration * 1000);
    }
    return () => clearTimeout(timerRef.current);
  }, [active, isVisible]);

  /* ---------- VIDEO CONTROL ---------- */
  useEffect(() => {
    videoRefs.current.forEach((video, index) => {
      if (!video) return;
      if (index === active && isVisible) {
        video.muted = false;
        video.play().catch(() => {});
      } else {
        video.pause();
        video.currentTime = 0;
        video.muted = true;
      }
    });
  }, [active, isVisible]);

  /* ---------- DRAG HANDLER ---------- */
  const onDragEnd = (e, info) => {
    const threshold = 50; // Kitna swipe karne par change hoga
    if (info.offset.x < -threshold) {
      next();
    } else if (info.offset.x > threshold) {
      prev();
    }
  };

  return (
    <section
      ref={sectionRef}
      className="relative w-full h-screen overflow-hidden flex flex-col items-center justify-center bg-[#ffffff] text-[#1d1d1f] touch-none"
    >
      {/* BACKGROUND */}
      <div className="absolute inset-0 bg-[radial-gradient(50%_50%_at_50%_50%,#f5f5f7_0%,#ffffff_100%)]" />

      {/* HEADER */}
      <div className="z-10 mb-10 flex flex-col items-center text-center px-4 select-none">
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="flex items-center gap-2 mb-3">
          <div className="w-8 h-[1px] bg-black/20" />
          <span className="text-[11px] font-medium tracking-[0.3em] uppercase text-black/40">Visual Journey</span>
          <div className="w-8 h-[1px] bg-black/20" />
        </motion.div>
        <h2 className="text-4xl md:text-6xl font-extralight tracking-tight mb-2">
          Curated <span className="font-medium">Stories</span>
        </h2>
      </div>

      {/* REELS CAROUSEL */}
      <div className="relative w-full flex-1 flex items-center justify-center overflow-visible">
        {posts.map((post, i) => {
          const offset = ((i - active) % posts.length + posts.length) % posts.length;
          // Show only neighbor cards for performance
          if (offset > 2 && offset < posts.length - 2) return null;
          const pos = offset > 2 ? offset - posts.length : offset;
          const isActive = pos === 0;

          return (
            <motion.div
              key={i}
              drag="x" // Enable horizontal drag
              dragConstraints={{ left: 0, right: 0 }} // Snap back if threshold not met
              onDragEnd={onDragEnd}
              animate={{
                x: pos * 340,
                scale: isActive ? 1.05 : 0.85,
                opacity: isActive ? 1 : 0.4,
                zIndex: 10 - Math.abs(pos),
              }}
              transition={{ type: "spring", stiffness: 100, damping: 20 }}
              className="absolute group cursor-grab active:cursor-grabbing"
            >
              <div 
                className={`relative w-[280px] h-[500px] md:w-[320px] md:h-[580px] rounded-[2.5rem] overflow-hidden transition-all duration-1000
                ${isActive ? 'shadow-[0_40px_80px_-15px_rgba(0,0,0,0.12)] border border-black/[0.03]' : 'grayscale-[40%]'}`}
                onClick={() => isActive && window.open(post.instaLink, "_blank")}
              >
                <video
                  ref={(el) => (videoRefs.current[i] = el)}
                  src={post.src}
                  className="w-full h-full object-cover pointer-events-none" // Essential for drag to work
                  playsInline
                  muted
                  loop
                />
                
                {isActive && (
                  <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/40 p-8 flex flex-col justify-end pointer-events-none"
                  >
                    <div className="flex justify-between items-center text-white">
                        <div className="flex items-center gap-2">
                            <Instagram size={18} strokeWidth={1.5} />
                            <span className="text-[12px] font-light tracking-widest uppercase">View Post</span>
                        </div>
                        <ArrowUpRight size={20} strokeWidth={1} />
                    </div>
                  </motion.div>
                )}
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* CONTROLS */}
      <div className="z-20 mb-16 flex flex-col items-center gap-8">
        <div className="flex gap-2.5">
          {posts.map((_, i) => (
            <div
              key={i}
              className={`h-[2px] transition-all duration-700 ${
                i === active ? "w-12 bg-black" : "w-3 bg-black/10"
              }`}
            />
          ))}
        </div>

        <div className="hidden md:flex items-center gap-6">
          <button onClick={prev} className="p-4 rounded-full border border-black/5 hover:bg-black hover:text-white transition-all duration-500">
            <ArrowLeft size={20} strokeWidth={1.5} />
          </button>
          <button onClick={next} className="p-4 rounded-full border border-black/5 hover:bg-black hover:text-white transition-all duration-500">
            <ArrowRight size={20} strokeWidth={1.5} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Social;