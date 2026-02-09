const steps = [
  "Fabric Selection",
  "Body Measurement",
  "Trial Fitting",
  "Final Stitching",
  "Delivery",
];

export default function Process() {
  return (
    <section id="process" className="py-24">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-14">How We Work</h2>

        <div className="grid md:grid-cols-5 gap-6">
          {steps.map((step, index) => (
            <div
              key={step}
              className="border border-neutral-700 p-6 rounded-xl"
            >
              <span className="text-yellow-500 text-2xl font-bold">
                {index + 1}
              </span>
              <h3 className="mt-4 text-lg font-semibold">{step}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
