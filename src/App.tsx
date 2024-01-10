import { useState, useEffect } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Works from "./components/Works";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import BackToTop from "./components/BackToTop";

export default function App() {
  const [bgImageOpacity, setBgImageOpacity] = useState(1);
  const [showButton, setShowButton] = useState(false);

  const handleScroll = () => {
    const worksElement = document.getElementById("works");
    if (!worksElement) return;

    const scrollPosition = window.scrollY + window.innerHeight;
    const worksPosition = worksElement.offsetTop;
    const opacity = Math.max(
      1 - (scrollPosition - worksPosition) / window.innerHeight,
      0,
    );
    setBgImageOpacity(opacity);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const totalHeight = document.body.scrollHeight;
      const showButton = scrollPosition > totalHeight * 0.5;
      setShowButton(showButton);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div className="relative text-stone-200">
        {/* Background Image */}
        <div
          className="h-hero-minus-header bg-hero"
          style={{
            opacity: bgImageOpacity,
          }}
        />

        {/* Content */}
        <div className="absolute left-0 right-0 top-0">
          <Header />
          <Hero />
        </div>

        <About />

        <Works />

        <Contact />

        <Footer />

        {showButton && <BackToTop />}
      </div>
    </>
  );
}
