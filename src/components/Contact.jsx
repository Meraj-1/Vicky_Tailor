export default function Contact() {
  return (
    <section id="contact" className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-14">
          Contact Vicky Tailor
        </h2>

        <div className="grid md:grid-cols-2 gap-10">
          <div>
            <p className="text-gray-400 mb-4">
              📍 Address: Your Shop Address Here
            </p>
            <p className="text-gray-400 mb-4">
              📞 Phone: +91 XXXXXXXXXX
            </p>
            <p className="text-gray-400 mb-4">
              💬 WhatsApp Available
            </p>
          </div>

          <form className="grid gap-4">
            <input
              className="bg-neutral-800 p-4 rounded"
              placeholder="Your Name"
            />
            <input
              className="bg-neutral-800 p-4 rounded"
              placeholder="Phone Number"
            />
            <textarea
              className="bg-neutral-800 p-4 rounded"
              placeholder="Message"
              rows="4"
            />
            <button className="bg-yellow-500 text-black py-4 rounded font-semibold">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
