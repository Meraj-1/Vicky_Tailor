import { useEffect, useState } from "react";
import Preloader from "./components/Preloader";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Collections from "./components/Collections";
import Process from "./components/Process";
import WhyChooseUs from "./components/WhyChooseUs";
import Testimonials from "./components/Testimonials";
import CTA from "./components/CTA";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 3500);
  }, []);

  return (
    <>
      {loading ? (
        <Preloader />
      ) : (
        <>
          <Navbar />

          <section id="home">
            <Hero />
          </section>

          <section id="about">
            <About />
          </section>

          <section id="services">
            <Services />
          </section>

          <section id="collections">
            <Collections />
          </section>

          <section id="process">
            <Process />
          </section>

          <section id="whychooseus">
            <WhyChooseUs />
          </section>

          <section id="testimonials">
            <Testimonials />
          </section>

          <section id="contact">
            <CTA />
            <Contact />
          </section>

          <Footer />
        </>
      )}
    </>
  );
}

