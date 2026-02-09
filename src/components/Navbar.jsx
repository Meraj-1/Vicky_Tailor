import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const menu = ["Home", "About", "Services", "Collections", "Contact"];

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/85 backdrop-blur-md border-b border-[#5A0E24]/20">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo (UNCHANGED) */}
        <h1 className="text-2xl font-bold tracking-wide text-[#5A0E24]">
          Vicky Tailor
          <span className="block text-xs tracking-widest text-[#D4AF37]">
            Since 1983
          </span>
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-12 text-[#5A0E24] font-medium text-sm tracking-widest uppercase">
          {menu.map((item) => (
            <li
              key={item}
              className="relative cursor-pointer group"
            >
              {item}

              {/* Gold Dot Indicator */}
              <span className="absolute left-1/2 -bottom-2 w-1.5 h-1.5 bg-[#D4AF37] rounded-full opacity-0 group-hover:opacity-100 transition-all -translate-x-1/2"></span>
            </li>
          ))}
        </ul>

        {/* CTA Button */}
        <button className="hidden md:block border border-[#5A0E24] text-[#5A0E24] px-6 py-2 rounded-full text-sm tracking-wide
          hover:bg-[#5A0E24] hover:text-white transition-all duration-300">
          Book Appointment
        </button>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-[#5A0E24] text-2xl"
          onClick={() => setOpen(!open)}
        >
          {open ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-white border-t border-[#5A0E24]/20 px-6 py-6">
          <ul className="flex flex-col gap-6 text-[#5A0E24] text-sm tracking-widest uppercase">
            {menu.map((item) => (
              <li
                key={item}
                className="cursor-pointer hover:text-[#D4AF37] transition"
                onClick={() => setOpen(false)}
              >
                {item}
              </li>
            ))}

            <button className="mt-6 bg-[#5A0E24] text-white py-3 rounded-full text-sm tracking-wide">
              Book Appointment
            </button>
          </ul>
        </div>
      </div>
    </nav>
  );
}
