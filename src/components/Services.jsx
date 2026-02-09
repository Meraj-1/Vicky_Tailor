const services = [
  "3 Piece Suit",
  "Coat Pant",
  "Blazer & Tuxedo",
  "Wedding Wear",
  "Party Wear",
  "Alteration & Re-Fitting",
];

export default function Services() {
  return (
    <section id="services" className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-14">
          Our Tailoring Services
        </h2>

        <div className="grid md:grid-cols-3 gap-10">
          {services.map((service) => (
            <div
              key={service}
              className="border border-neutral-700 p-8 rounded-xl hover:border-yellow-500 transition"
            >
              <h3 className="text-2xl font-semibold">{service}</h3>
              <p className="text-gray-400 mt-4">
                Premium fabrics, precise measurements, and flawless finishing
                for a truly elegant look.
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
