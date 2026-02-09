export default function About() {
  return (
    <section id="about" className="py-24 bg-neutral-900">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-yellow-500">
          40+ Years of Tailoring Excellence
        </h2>

        <p className="mt-6 text-gray-400 leading-relaxed">
          Established in <span className="text-white">1983</span>, Vicky Tailor
          has been crafting premium men’s fashion with perfection, precision,
          and passion. From classic formal wear to wedding specials, we believe
          that a perfect fit defines confidence.
        </p>

        <div className="mt-10 grid md:grid-cols-3 gap-8">
          <div className="border border-neutral-700 p-6 rounded-lg">
            <h3 className="text-xl font-semibold">Since 1983</h3>
            <p className="text-gray-400 mt-2">40+ years of trust & legacy</p>
          </div>
          <div className="border border-neutral-700 p-6 rounded-lg">
            <h3 className="text-xl font-semibold">Master Tailors</h3>
            <p className="text-gray-400 mt-2">Skilled craftsmanship</p>
          </div>
          <div className="border border-neutral-700 p-6 rounded-lg">
            <h3 className="text-xl font-semibold">Perfect Fit</h3>
            <p className="text-gray-400 mt-2">Guaranteed satisfaction</p>
          </div>
        </div>
      </div>
    </section>
  );
}
