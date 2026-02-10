import { motion } from "framer-motion";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-[#0F0F0F] text-white pt-24 pb-12 overflow-hidden">
      
      {/* Background "CRAZY" Text - Large Scrolling Watermark */}
      <div className="absolute top-0 left-0 w-full overflow-hidden pointer-events-none select-none opacity-[0.03]">
        <motion.h2 
          initial={{ x: 0 }}
          animate={{ x: "-50%" }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="text-[25vw] font-serif font-black whitespace-nowrap uppercase leading-none"
        >
          Vicky Tailor — Vicky Tailor — Vicky Tailor — Vicky Tailor —
        </motion.h2>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-8 mb-20">
          
          {/* Brand Philosophy */}
          <div className="flex flex-col space-y-6">
            <h3 className="text-[#C5A03A] text-xs tracking-[0.4em] uppercase font-bold">The Legacy</h3>
            <p className="text-neutral-400 font-light leading-relaxed max-w-xs">
              Redefining the art of bespoke tailoring since 1983. Each stitch is a testament to our commitment to perfection and the modern gentleman.
            </p>
          </div>

          {/* Quick Navigation */}
          <div className="flex flex-col space-y-6">
            <h3 className="text-[#C5A03A] text-xs tracking-[0.4em] uppercase font-bold">Explore</h3>
            <nav className="flex flex-col space-y-3">
              {['Collections', 'Our Studios', 'Bespoke Process', 'Heritage'].map((item) => (
                <a 
                  key={item} 
                  href={`#${item.toLowerCase()}`} 
                  className="text-neutral-100 hover:text-[#C5A03A] transition-colors duration-300 font-serif italic text-lg w-max"
                >
                  {item}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact & Socials */}
          <div className="flex flex-col space-y-6">
            <h3 className="text-[#C5A03A] text-xs tracking-[0.4em] uppercase font-bold">Connect</h3>
            <div className="space-y-4">
              <p className="text-sm text-neutral-400">Follow our journey for sartorial inspiration.</p>
              <div className="flex gap-6">
                {['Instagram', 'WhatsApp', 'LinkedIn'].map((social) => (
                  <motion.a
                    key={social}
                    whileHover={{ y: -2 }}
                    className="text-[10px] tracking-widest uppercase font-bold border-b border-white/10 pb-1 hover:border-[#C5A03A] transition-all"
                    href="#"
                  >
                    {social}
                  </motion.a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-4">
            <span className="h-[1px] w-10 bg-[#C5A03A]" />
            <p className="text-[10px] tracking-[0.2em] text-neutral-500 uppercase">
              © 1983–{currentYear} Vicky Tailor Boutique
            </p>
          </div>
          
          <div className="flex flex-col items-center md:items-end">
            <p className="text-[9px] tracking-[0.3em] text-neutral-600 uppercase mb-2">
              Crafted for Excellence
            </p>
            <div className="flex gap-2">
              <div className="w-1 h-1 rounded-full bg-[#C5A03A]" />
              <div className="w-1 h-1 rounded-full bg-neutral-800" />
              <div className="w-1 h-1 rounded-full bg-neutral-800" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}