import { MouseEvent } from "react";
import Marquee from "react-fast-marquee";

export default function Header() {
  const marqueeText =
    "Hello, World! Hypnotic text. My name is Oscar El. I make websites.  I make web apps.  I make professional business products.  I make creative designs for you. I make your business look good. I make your business look better. I make your business look the best. I make your business look the bestest. I make your website look good on mobile. I make your website look good on mobile and desktop. I make your website look good on mobile, desktop, and tablet. I make your website look good on mobile, desktop, tablet, and smartwatch. I make your website look good on mobile, desktop, tablet, smartwatch, and smart fridge. I make your website look good on mobile, desktop, tablet, smartwatch, smart fridge, and smart car. I make your website look good on mobile, desktop, tablet, smartwatch, smart fridge, smart car, and smart house.";

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
      <nav className="mx-auto flex h-full items-center justify-between border-stone-200 px-2 sm:border-b">
        <Marquee
          gradient={false}
          speed={50}
          className="mr-2 hidden cursor-default items-baseline whitespace-nowrap font-mono text-3xl uppercase sm:flex"
        >
          {marqueeText.repeat(1)}
        </Marquee>
        <ul className="flex grow justify-center gap-12 border border-stone-200 py-1 font-mono text-2xl uppercase sm:px-12">
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
