import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center pt-24">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10">
        <motion.div initial={{x:-50,opacity:0}} animate={{x:0,opacity:1}}>
          <h1 className="text-5xl font-bold leading-tight">
            Perfect Fit.<br/>
            <span className="text-yellow-500">Timeless Style.</span>
          </h1>
          <p className="mt-4 text-gray-400">
            Men’s Fashion Tailoring Since 1983
          </p>
          <div className="mt-6 flex gap-4">
            <button className="bg-yellow-500 text-black px-6 py-3 rounded">
              View Collection
            </button>
            <button className="border px-6 py-3 rounded">
              Book Appointment
            </button>
          </div>
        </motion.div>

        <motion.img
          src="https://images.unsplash.com/photo-1520975922323-c6c3a4c3b90c"
          className="rounded-lg"
          initial={{opacity:0}}
          animate={{opacity:1}}
        />
      </div>
    </section>
  );
}
