import { useEffect, useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");

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

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { threshold: 0.55 }
    );

    menu.forEach((item) => {
      const section = document.getElementById(item.id);
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <nav className="fixed top-4 md:top-6 w-full z-50 flex justify-center">
      <div className="w-[92%] max-w-7xl rounded-full bg-white/80 backdrop-blur-xl border border-white/40 shadow-lg">
        <div className="px-5 py-3 md:px-8 md:py-4 flex items-center justify-between">

          {/* LOGO */}
          <div
            onClick={() => handleScroll("home")}
            className="cursor-pointer flex flex-col leading-none"
          >
            <h1 className="text-lg md:text-2xl font-bold pre_text text-[#5A0E24]">
              Vicky Tailor
            </h1>
            <span className="mt-1 text-[9px] md:text-[11px] tracking-[0.25em] uppercase pre_text1 text-[#5A0E24]/80">
              Since 1983
            </span>
          </div>

          {/* DESKTOP MENU */}
          <ul className="hidden md:flex gap-8 lg:gap-12 text-xs tracking-[0.25em] uppercase">
            {menu.map((item) => (
              <li
                key={item.id}
                onClick={() => handleScroll(item.id)}
                className="relative cursor-pointer text-[#5A0E24]"
              >
                {item.name}
                <span
                  className={`absolute left-1/2 -bottom-2 h-[2px] bg-[#D4AF37]
                  transition-all duration-300 -translate-x-1/2
                  ${active === item.id ? "w-7 opacity-100" : "w-0 opacity-0"}`}
                />
              </li>
            ))}
          </ul>

          {/* CTA */}
          <button
            onClick={() => handleScroll("contact")}
            className="hidden md:block px-6 py-2 rounded-full border border-[#5A0E24]
            text-[#5A0E24] text-xs tracking-widest uppercase
            hover:bg-[#5A0E24] hover:text-white transition"
          >
            Book Appointment
          </button>

          {/* MOBILE TOGGLE */}
          <button
            className="md:hidden text-2xl text-[#5A0E24]"
            onClick={() => setOpen(!open)}
          >
            ☰
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      <div
        className={`md:hidden fixed inset-0 bg-[#fffdfb] transition-transform duration-500 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full px-8 py-10">

          {/* MOBILE LOGO */}
          <div className="mb-14 text-center">
            <h1 className="text-2xl font-bold pre_text text-[#5A0E24]">
              Vicky Tailor
            </h1>
            <p className="mt-1 text-[10px] tracking-[0.3em] uppercase pre_text1 text-[#5A0E24]/70">
              Since 1983
            </p>
          </div>

          <ul className="flex flex-col gap-8 text-sm tracking-[0.3em] uppercase text-center">
            {menu.map((item) => (
              <li
                key={item.id}
                onClick={() => handleScroll(item.id)}
                className={`transition ${
                  active === item.id
                    ? "text-[#D4AF37]"
                    : "text-[#5A0E24]"
                }`}
              >
                {item.name}
              </li>
            ))}
          </ul>

          <button
            onClick={() => handleScroll("contact")}
            className="mt-auto bg-[#5A0E24] text-white py-4 rounded-full tracking-widest uppercase"
          >
            Book Appointment
          </button>
        </div>
      </div>
    </nav>
  );
}
