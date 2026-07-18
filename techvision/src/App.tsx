import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Marquee from "./components/Marquee";
import Features from "./components/Features";
import Process from "./components/Process";
import Pricing from "./components/Pricing";
import CaseStudies from "./components/CaseStudies";
import Testimonials from "./components/Testimonials";
import Faq from "./components/Faq";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <Navbar />
      <main id="main">
        <Hero />
        <Marquee />
        <Features />
        <Process />
        <Pricing />
        <CaseStudies />
        <Testimonials />
        <Faq />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
