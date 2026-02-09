export default function WhyChooseUs() {
  return (
    <section className="py-24 bg-neutral-900 text-center">
      <h2 className="text-4xl font-bold mb-10">Why Choose Vicky Tailor</h2>

      <div className="flex flex-wrap justify-center gap-6 px-6">
        {[
          "Since 1983",
          "Expert Master Tailors",
          "Premium Fabric",
          "Perfect Fit Guarantee",
          "Wedding Specialists",
        ].map((item) => (
          <div
            key={item}
            className="border border-neutral-700 px-8 py-4 rounded-full"
          >
            {item}
          </div>
        ))}
      </div>
    </section>
  );
}
