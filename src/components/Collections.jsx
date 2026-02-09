export default function Collections() {
  return (
    <section id="collections" className="py-24 bg-neutral-900">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-14">
          Our Collections
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="overflow-hidden rounded-xl">
              <img
                src={`https://source.unsplash.com/600x70${i}/?men,suit`}
                alt="Mens Fashion"
                className="hover:scale-110 transition duration-500"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
