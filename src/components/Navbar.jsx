import { useEffect, useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("Home");

  const menu = ["Home", "About", "Services", "Collections", "Contact"];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className="fixed  top-6 left-0 w-full z-50 flex justify-center pointer-events-none">
      {/* Floating Container */}
      <div
        className={`pointer-events-auto w-[92%]  max-w-7xl transition-all duration-500
        rounded-full border border-[#5A0E24]
        ${
          scrolled
            ? "b backdrop-blur-xl shadow-[0_10px_40px_rgba(0,0,0,0.08)]"
            : "bg-white/60 backdrop-blur-lg"
        }`}
      >
        <div className="px-8 py-4 flex items-center justify-between">

          {/* LOGO */}
          <div className="leading-tight cursor-pointer">
            <h1 className="text-2xl pre_text font-bold tracking-wide text-[#5A0E24]">
              Vicky Tailor
            </h1>
            <span className="text-[11px] pre_text1 font-bold tracking-[0.35em] text-[#5A0E24] uppercase">
              Since 1983
            </span>
          </div>

          {/* DESKTOP MENU */}
          <ul className="hidden md:flex gap-14 text-[#5A0E24] text-xs tracking-[0.25em] uppercase font-medium">
            {menu.map((item) => (
              <li
                key={item}
                onClick={() => setActive(item)}
                className="relative cursor-pointer group"
              >
                {item}

                {/* Gold underline */}
                <span
                  className={`absolute left-1/2 -bottom-2 h-[2px] bg-[#D4AF37] transition-all duration-300
                  ${active === item ? "w-8 opacity-100" : "w-0 opacity-0"}
                  group-hover:w-8 group-hover:opacity-100 -translate-x-1/2`}
                />
              </li>
            ))}
          </ul>

          {/* CTA */}
          <button className="hidden md:block relative overflow-hidden rounded-full border border-[#5A0E24]/80
            px-7 py-2 text-xs tracking-widest uppercase text-[#5A0E24]
            transition-all duration-300 hover:text-white group">
            <span className="absolute inset-0 bg-[#5A0E24] translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
            <span className="relative">Book Appointment</span>
          </button>

          {/* MOBILE TOGGLE */}
          <button
            className="md:hidden text-[#5A0E24] text-3xl"
            onClick={() => setOpen(!open)}
          >
            {open ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      <div
        className={`md:hidden fixed inset-0 bg-white z-40 transition-all duration-500 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full px-8 py-10">
          <ul className="flex flex-col gap-8 text-[#5A0E24] text-sm tracking-[0.3em] uppercase font-medium mt-20">
            {menu.map((item) => (
              <li
                key={item}
                onClick={() => {
                  setActive(item);
                  setOpen(false);
                }}
                className="hover:text-[#D4AF37] transition"
              >
                {item}
              </li>
            ))}
          </ul>

          <button className="mt-auto bg-[#5A0E24] text-white py-4 rounded-full text-sm tracking-widest uppercase">
            Book Appointment
          </button>
        </div>
      </div>
    </nav>
  );
}
