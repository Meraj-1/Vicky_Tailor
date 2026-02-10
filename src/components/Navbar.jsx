import { useEffect, useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
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
      {/* NAVBAR */}
      <div
        className={`
          w-full md:w-[92%] max-w-7xl transition-all duration-500
          ${scrolled ? "md:rounded-full shadow-lg" : "md:rounded-2xl"}

          bg-white/80 backdrop-blur-md
          border border-black/10
        `}
      >
        <div className="px-6 py-4 md:px-10 flex items-center justify-between">

          {/* LOGO */}
          <div
            onClick={() => handleScroll("home")}
            className="cursor-pointer leading-none"
          >
            <h1 className="text-xl md:text-2xl pre_text font-semibold tracking-tight text-[#5A0E24]">
              VICKY <span className="font-light italic text-[#5A0E24]/80">TAILOR</span>
            </h1>
            <span className="block mt-1 text-[9px] pre_text1 md:text-[10px] tracking-[0.35em] uppercase text-[#5A0E24]/70">
              Since 1983
            </span>
          </div>

          {/* DESKTOP MENU */}
          <ul className="hidden md:flex gap-12 text-[11px] tracking-[0.3em] uppercase">
            {menu.map((item) => (
              <li
                key={item.id}
                onClick={() => handleScroll(item.id)}
                className={`relative cursor-pointer transition-all duration-300
                  ${
                    active === item.id
                      ? "text-[#5A0E24]"
                      : "text-[#5A0E24]/70 hover:text-[#5A0E24]"
                  }
                `}
              >
                {item.name}

                {active === item.id && (
                  <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-6 h-[2px]
                    bg-[#D4AF37] rounded-full" />
                )}
              </li>
            ))}
          </ul>

          {/* CTA */}
          <button
            onClick={() => handleScroll("contact")}
            className="hidden md:block px-7 py-2.5 rounded-full
            bg-[#5A0E24] text-white text-[10px] tracking-widest uppercase
            hover:bg-[#D4AF37] hover:text-black transition-all duration-300"
          >
            Book Appointment
          </button>

          {/* MOBILE TOGGLE */}
          <button
            className="md:hidden text-[#5A0E24] text-2xl"
            onClick={() => setOpen(!open)}
          >
            {open ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      <div
        className={`md:hidden fixed inset-0 bg-white transition-all duration-500
          ${open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}
        `}
      >
        {/* TOP BRANDING */}
        <div className="pt-10 pb-6 border-b border-black/10 text-center">
          <h2 className="text-2xl pre_text font-semibold text-[#5A0E24]">
            Vicky Tailor
          </h2>
          <p className="mt-1 text-[10px] pre_text1 tracking-[0.4em] uppercase text-[#5A0E24]/60">
            Since 1983
          </p>
        </div>

        {/* MENU */}
        <div className="flex flex-col items-center justify-center gap-10 mt-16">
          {menu.map((item, index) => (
            <div
              key={item.id}
              onClick={() => handleScroll(item.id)}
              style={{ transitionDelay: `${index * 60}ms` }}
              className={`text-xl tracking-[0.25em] uppercase transition-all duration-500
                ${
                  open
                    ? "translate-y-0 opacity-100"
                    : "translate-y-6 opacity-0"
                }
                ${
                  active === item.id
                    ? "text-[#D4AF37] italic"
                    : "text-[#5A0E24]"
                }
              `}
            >
              {item.name}
            </div>
          ))}

          <button
            onClick={() => handleScroll("contact")}
            className="mt-10 px-10 py-4 bg-[#5A0E24] text-white tracking-widest uppercase text-xs rounded-full"
          >
            Book Appointment
          </button>
        </div>
      </div>
    </nav>
  );
}
