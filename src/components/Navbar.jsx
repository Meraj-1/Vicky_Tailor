import { useEffect, useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  // Detect scroll for navbar polish
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const menu = [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    { name: "Services", id: "services" },
    { name: "Collections", id: "collections" },
    { name: "Contact", id: "contact" },
  ];

  const handleScroll = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setActive(id);
    setOpen(false);
  };

  return (
    <nav className="fixed top-0 md:top-4 w-full z-[100] flex justify-center">
      {/* GLASS CONTAINER */}
      <div
        className={`
          w-full md:w-[92%] max-w-7xl transition-all duration-500
          ${scrolled ? "md:rounded-full" : "md:rounded-2xl"}

          bg-white/10 backdrop-blur-[10px]
          border border-white/15
          shadow-[0_10px_30px_rgba(0,0,0,0.25)]
        `}
      >
        <div className="px-6 py-4 md:px-10 flex items-center justify-between">

          {/* LOGO */}
          <div
            onClick={() => handleScroll("home")}
            className="cursor-pointer leading-none"
          >
            <h1 className="text-xl md:text-2xl pre_text font-semibold tracking-tight text-white">
              VICKY <span className="font-light italic text-white/90">TAILOR</span>
            </h1>
            <span className="block mt-1 text-[9px] pre_text1 md:text-[10px] tracking-[0.4em] uppercase text-white/60">
              Since 1983
            </span>
          </div>

          {/* DESKTOP MENU */}
          <ul className="hidden md:flex gap-12 text-[11px] tracking-[0.3em] uppercase">
            {menu.map((item) => (
              <li
                key={item.id}
                onClick={() => handleScroll(item.id)}
                className={`relative cursor-pointer transition-colors duration-300
                  ${
                    active === item.id
                      ? "text-[#D4AF37]"
                      : "text-white/80 hover:text-white"
                  }
                `}
              >
                {item.name}

                {/* Active dot */}
                {active === item.id && (
                  <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-1.5 h-1.5
                    bg-[#D4AF37] rounded-full shadow-[0_0_8px_#D4AF37]" />
                )}
              </li>
            ))}
          </ul>

          {/* CTA */}
          <button
            onClick={() => handleScroll("contact")}
            className="hidden md:block px-7 py-2.5 rounded-full
            bg-white/10 border border-white/20
            text-white text-[10px] tracking-widest uppercase
            hover:bg-[#D4AF37] hover:text-black hover:border-[#D4AF37]
            transition-all duration-300 active:scale-95"
          >
            Book Appointment
          </button>

          {/* MOBILE TOGGLE */}
          <button
            className="md:hidden text-white text-2xl"
            onClick={() => setOpen(!open)}
          >
            {open ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      <div
        className={`md:hidden fixed inset-0 bg-black/80 backdrop-blur-md transition-all duration-500
          ${open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}
        `}
      >
        <div className="flex flex-col items-center justify-center h-full gap-10">
          {menu.map((item, index) => (
            <div
              key={item.id}
              onClick={() => handleScroll(item.id)}
              style={{ transitionDelay: `${index * 60}ms` }}
              className={`text-2xl tracking-[0.25em] uppercase transition-all duration-500
                ${
                  open
                    ? "translate-y-0 opacity-100"
                    : "translate-y-8 opacity-0"
                }
                ${
                  active === item.id
                    ? "text-[#D4AF37] italic"
                    : "text-white"
                }
              `}
            >
              {item.name}
            </div>
          ))}
        </div>
      </div>
    </nav>
  );
}
