import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const locations = [
  {
    id: 1,
    name: "Ghatkopar Studio",
    address: "Shop no.10, PARAS DARSHAN CHS, Mahatma Gandhi Rd, Rajawadi Colony, Ghatkopar East, Mumbai - 400077",
    landmark: "Opp. Haribhai Damodar Mithaiwala",
    mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4639.576879094138!2d72.9019236759364!3d19.082337251772117!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c7417d36d3d9%3A0x756ab34bc6eeedba!2sVicky%20Tailor!5e1!3m2!1sen!2sin!4v1770765488349!5m2!1sen!2sin"
  },
  {
    id: 2,
    name: "Matunga Studio",
    address: "Shop 7/8, Mohan Niwas, Kings Cir, Matunga East, Mumbai - 400019",
    landmark: "Opp. Maheshwari Udhyan",
    mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4641.1450199586325!2d72.8531616759355!3d19.026277853530143!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7cff5655d16a9%3A0x15cca7ceb579a373!2sVicky%20tailors!5e1!3m2!1sen!2sin!4v1770765419425!5m2!1sen!2sin"
  },
];

export default function CTA() {
  const [activeStudio, setActiveStudio] = useState(locations[0]);

  // Yeh function user ko seedha directions dikhayega
  const handleDirections = () => {
    // google.com/maps/dir/?api=1 use karne se current location se direction milti hai
    const encodedAddress = encodeURIComponent(activeStudio.address);
    const googleMapsUrl = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.378!2d72.853!3d19.027!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7cf27!2sMatunga!5e0!3m2!1sen!2sin!4v17100000000005{encodedAddress}`;
    window.open(googleMapsUrl, '_blank');
  };

  return (
    <section className="bg-[#FAF9F6] border-t border-neutral-100 font-sans">
      <div className="flex flex-col md:flex-row min-h-[600px] lg:min-h-[750px]">
        
        {/* LEFT SIDE: STUDIO SELECTOR */}
        <div className="w-full md:w-1/2 p-6 sm:p-12 lg:p-20 flex flex-col justify-center bg-white z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-xl mx-auto md:mx-0"
          >
            <span className="text-[#C5A03A] tracking-[0.4em] uppercase text-[10px] font-bold mb-3 block">
              Bespoke Destinations
            </span>
            <h2 className="text-4xl lg:text-6xl font-serif text-neutral-800 mb-10 lg:mb-16 leading-[1.1]">
              Our <span className="italic font-light">Ateliers</span>
            </h2>

            {/* Address Cards Container */}
            <div className="space-y-4 lg:space-y-6">
              {locations.map((loc) => (
                <motion.div 
                  key={loc.id} 
                  onClick={() => setActiveStudio(loc)}
                  whileHover={{ x: 5 }}
                  className={`relative p-5 lg:p-8 border cursor-pointer transition-all duration-500 rounded-sm ${
                    activeStudio.id === loc.id 
                    ? "border-[#C5A03A] bg-[#FAF9F6] shadow-sm" 
                    : "border-neutral-100 hover:border-neutral-300 bg-white"
                  }`}
                >
                  <div className="flex justify-between items-start gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                         <span className={`text-[9px] px-2 py-0.5 border rounded-full uppercase tracking-widest ${
                           activeStudio.id === loc.id ? "border-[#C5A03A] text-[#C5A03A]" : "border-neutral-200 text-neutral-400"
                         }`}>
                           Studio {loc.id === 1 ? "01" : "02"}
                         </span>
                         <h3 className={`text-[11px] tracking-widest uppercase font-bold transition-colors ${
                           activeStudio.id === loc.id ? "text-neutral-900" : "text-neutral-400"
                         }`}>
                           {loc.name}
                         </h3>
                      </div>
                      <p className="text-neutral-700 font-serif text-base lg:text-lg leading-snug mb-2">
                        {loc.address}
                      </p>
                      <p className="text-[#C5A03A] text-[9px] uppercase tracking-[0.2em] font-semibold">
                        {loc.landmark}
                      </p>
                    </div>
                    <div className={`mt-1 transition-all duration-500 ${activeStudio.id === loc.id ? "translate-x-1 -translate-y-1 text-[#C5A03A]" : "text-neutral-200"}`}>
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <path d="M7 17L17 7M17 7H7M17 7V17" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="mt-12 lg:mt-16 flex flex-col sm:flex-row gap-4">
                <button className="flex-1 bg-neutral-900 text-white px-8 py-5 text-[10px] tracking-[0.3em] uppercase font-bold hover:bg-[#C5A03A] transition-all duration-500">
                  Book Appointment
                </button>
                <button 
                  onClick={handleDirections}
                  className="flex-1 px-8 py-5 text-[10px] tracking-[0.3em] uppercase font-bold border border-neutral-200 text-neutral-800 hover:border-neutral-800 transition-all text-center"
                >
                  Get Directions
                </button>
            </div>
          </motion.div>
        </div>

        {/* RIGHT SIDE: MAP VIEW */}
        <div className="w-full md:w-1/2 relative h-[400px] md:h-auto overflow-hidden bg-neutral-100">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeStudio.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6 }}
              className="absolute inset-0 w-full h-full"
            >
              <iframe
                src={activeStudio.mapSrc}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                className="grayscale-[0.4] contrast-[1.1] brightness-[0.95] hover:grayscale-0 transition-all duration-1000"
              />
            </motion.div>
          </AnimatePresence>
          
          <div className="absolute inset-0 pointer-events-none shadow-[inset_0_0_80px_rgba(0,0,0,0.05)]" />
        </div>
      </div>

      {/* FOOTER */}
      <div className="bg-white py-12 px-6 sm:px-12 border-t border-neutral-100">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-center gap-10 text-center lg:text-left">
          <div className="space-y-2">
            <p className="text-[10px] text-neutral-400 tracking-[0.4em] uppercase font-bold">The Heritage</p>
            <p className="text-sm font-serif italic text-neutral-600">Master Tailors in Mumbai Since 1983</p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-10 sm:gap-20">
            <div>
              <p className="text-[9px] text-neutral-400 uppercase tracking-widest mb-2 font-bold">Inquiries</p>
              <p className="text-sm font-medium text-neutral-800">+91 98XXX XXXXX</p>
            </div>
            <div>
              <p className="text-[9px] text-neutral-400 uppercase tracking-widest mb-2 font-bold">Digital Studio</p>
              <p className="text-sm font-medium text-neutral-800 underline underline-offset-4 decoration-neutral-200">@vickytailorofficial</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}