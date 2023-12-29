import { useState, useEffect } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Works from "./components/Works";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  const [bgImageOpacity, setBgImageOpacity] = useState(1);

  const handleScroll = () => {
    const worksElement = document.getElementById("works");
    if (!worksElement) return;

    const scrollPosition = window.scrollY + window.innerHeight;
    const worksPosition = worksElement.offsetTop;
    const opacity = Math.max(
      1 - (scrollPosition - worksPosition) / window.innerHeight,
      0
    );
    setBgImageOpacity(opacity);
  };

  useEffect(() => {
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
          className="h-hero-minus-header"
          style={{
            backgroundImage: "url(/img/debugging-noise.jpg)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            opacity: bgImageOpacity,
            position: "sticky",
            top: "3.5rem", // hard coded header height, make sure to update it in index.css and Header.tsx also
            left: 0,
            right: 0,
            bottom: 0,
            transition: "opacity 0.3s ease",
            zIndex: -1, // Behind content but above background colour
          }}
        />

        {/* Content */}
        <div id="home" className="absolute top-0 right-0 left-0">
          <Header />
          <Hero />
        </div>

        <div>
          <Works />
        </div>

        <div id="contact">
          <Contact />
        </div>

        <Footer />

        {/* Background colour behind everything */}
        {/* <div className="absolute bg-neutral-900 top-0 left-0 right-0 bottom-0 z-[-2]"></div> */}
      </div>
    </>
  );
}
