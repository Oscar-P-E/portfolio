import Header from "./components/Header";
import Hero from "./components/Hero";
import Works from "./components/Works";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <div className="bg-neutral-900 text-stone-200">
        <Header />
        <Hero />
        <Works />
        <Contact />
        <Footer />
      </div>
    </>
  );
}
