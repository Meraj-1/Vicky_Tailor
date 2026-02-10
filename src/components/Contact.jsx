import { motion } from "framer-motion";
import { useState } from "react";

const studios = [
  { name: "Opera House", phone: "+91 6262117373", id: "opera" },
  { name: "Prarthna Samaj", phone: "+91 6262118787", id: "prarthna" },
  { name: "Matunga", phone: "+91 6262993131", id: "matunga" },
  { name: "Ghatkopar", phone: "+91 6262993434", id: "ghatkopar" },
];

export default function Contact() {
  const [selectedStudio, setSelectedStudio] = useState("Matunga");

  return (
    <section id="contact" className="py-24 bg-[#FAF9F6] text-neutral-900">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header Section */}
        <div className="text-center mb-20">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-[#C5A03A] tracking-[0.5em] uppercase text-[10px] font-bold block mb-4"
          >
            Connect With Us
          </motion.span>
          <h2 className="text-5xl md:text-6xl font-serif text-neutral-800 tracking-tighter">
            Men’s Designer <span className="italic font-light text-neutral-400">Studio</span>
          </h2>
          <p className="mt-4 text-neutral-500 font-light italic">@vickytailors — Crafting Excellence</p>
        </div>

        <div className="grid lg:grid-cols-12 gap-16 items-start">
          
          {/* Left Side: Contact Info & Quick Links */}
          <div className="lg:col-span-5 space-y-12">
            <div>
              <h3 className="text-sm tracking-[0.3em] uppercase font-bold mb-8 border-b border-neutral-100 pb-4">
                Our Ateliers
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {studios.map((studio) => (
                  <div key={studio.id} className="group">
                    <p className="text-[10px] text-[#C5A03A] uppercase tracking-widest mb-1 font-bold">
                      {studio.name}
                    </p>
                    <a 
                      href={`tel:${studio.phone}`} 
                      className="text-lg font-serif text-neutral-800 group-hover:text-[#C5A03A] transition-colors duration-300"
                    >
                      {studio.phone}
                    </a>
                  </div>
                ))}
              </div>
            </div>

            {/* Social & Support */}
            <div className="p-8 bg-white border border-neutral-100 shadow-sm">
              <h4 className="text-[11px] uppercase tracking-widest font-bold mb-4">Priority Support</h4>
              <p className="text-sm text-neutral-500 mb-6 leading-relaxed">
                For urgent bespoke requirements or wedding consultations, reach out directly via WhatsApp.
              </p>
              <button className="w-full py-4 border border-neutral-900 text-[10px] tracking-[0.3em] uppercase font-bold hover:bg-neutral-900 hover:text-white transition-all duration-500">
                Start WhatsApp Chat
              </button>
            </div>
          </div>

          {/* Right Side: Inquiry Form */}
          <div className="lg:col-span-7 bg-white p-8 md:p-12 shadow-[0_20px_50px_rgba(0,0,0,0.03)] border border-neutral-50">
            <h3 className="text-2xl font-serif mb-8 text-neutral-800">Send an Inquiry</h3>
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest text-neutral-400 font-bold">Full Name</label>
                  <input
                    className="w-full bg-[#FAF9F6] border-none p-4 focus:ring-1 focus:ring-[#C5A03A] outline-none transition-all text-sm"
                    placeholder="Enter your name"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest text-neutral-400 font-bold">Phone Number</label>
                  <input
                    className="w-full bg-[#FAF9F6] border-none p-4 focus:ring-1 focus:ring-[#C5A03A] outline-none transition-all text-sm"
                    placeholder="+91 00000 00000"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest text-neutral-400 font-bold">Preferred Studio</label>
                <select 
                  value={selectedStudio}
                  onChange={(e) => setSelectedStudio(e.target.value)}
                  className="w-full bg-[#FAF9F6] border-none p-4 focus:ring-1 focus:ring-[#C5A03A] outline-none text-sm appearance-none cursor-pointer"
                >
                  {studios.map(s => <option key={s.id} value={s.name}>{s.name} Studio</option>)}
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest text-neutral-400 font-bold">Your Message</label>
                <textarea
                  className="w-full bg-[#FAF9F6] border-none p-4 focus:ring-1 focus:ring-[#C5A03A] outline-none transition-all text-sm"
                  placeholder="Tell us about your requirements (e.g. Wedding Suit, Formal Wear)"
                  rows="4"
                />
              </div>

              <button className="w-full bg-neutral-900 text-white py-5 text-[11px] tracking-[0.4em] uppercase font-bold hover:bg-[#C5A03A] transition-colors duration-500 shadow-lg shadow-black/10">
                Send Message
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}