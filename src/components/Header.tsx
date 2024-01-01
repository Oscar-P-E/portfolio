import { MouseEvent } from "react";
import Marquee from "react-fast-marquee";

export default function Header() {
  const marqueeText =
    "Hello, World! Hypnotic scrolling text. My name is Oscar El. I make websites.  I make web apps.  I make professional business products.  I make creative designs for you. I make your business look good. I make your business look better. I make your business look the best. I make your business look the bestest. I make your business look the bestestest. I make your website look good on mobile. I make your website look good on mobile and desktop. I make your website look good on mobile, desktop, and tablet. I make your website look good on mobile, desktop, tablet, and smartwatch. I make your website look good on mobile, desktop, tablet, smartwatch, and smart fridge. I make your website look good on mobile, desktop, tablet, smartwatch, smart fridge, and smart car. I make your website look good on mobile, desktop, tablet, smartwatch, smart fridge, smart car, and smart house. I make your website look good on all the things.";

  const handleLinkClick = (event: MouseEvent, targetId: string) => {
    event.preventDefault();
    const targetSection = document.getElementById(targetId);
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="sticky top-0 z-10 h-14 bg-neutral-900 bg-opacity-30 backdrop-blur-sm">
      {/* ^^^ remember to change hardcoded header height in index.css and App.tsx bg image to match this ^^^ */}
      <nav className="px-2 border-b border-stone-200 mx-auto flex justify-between items-center h-full">
        <Marquee gradient={false} speed={50}>
          <div className="text-4xl uppercase font-mono whitespace-nowrap flex items-baseline cursor-default">
            {marqueeText.repeat(1)}
          </div>
        </Marquee>
        <ul className="flex gap-12 text-2xl px-12 py-1 ml-2 font-mono uppercase border border-stone-200 ">
          <li>
            <a
              href="#"
              className="lowercase hover:uppercase"
              onClick={(e) => handleLinkClick(e, "works")}
            >
              Works
            </a>
          </li>
          <li>
            <a
              href="#"
              className="lowercase hover:uppercase"
              onClick={(e) => handleLinkClick(e, "contact")}
            >
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
