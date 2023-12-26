import Marquee from "react-fast-marquee";

export default function Header() {
  const marqueeText =
    "Hypnotic scrolling text.Hypnotic scrolling text.Hypnotic scrolling text.You are getting sleepy.You want to hire me.I make websites.I make web apps.I make professional business products.I make creative designs for you.I make your business look good.I make your business look better.I make your business look the best.I make your business look the bestest.I make your business look the bestestest.I make your website look good on mobile.I make your website look good on mobile and desktop.I make your website look good on mobile, desktop, and tablet.I make your website look good on mobile, desktop, tablet, and smartwatch.I make your website look good on mobile, desktop, tablet, smartwatch, and smart fridge.I make your website look good on mobile, desktop, tablet, smartwatch, smart fridge, and smart car.I make your website look good on mobile, desktop, tablet, smartwatch, smart fridge, smart car, and smart house.I make your website look good on all the things.";

  return (
    <header className="sticky top-0 z-10 h-14 bg-opacity-10 backdrop-blur-sm">
      <nav className="px-2 border-b border-stone-200 mx-auto flex justify-between items-center h-full">
        <Marquee gradient={false} speed={50}>
          <div className="text-4xl uppercase font-mono whitespace-nowrap flex items-baseline">
            {marqueeText.repeat(1)}
          </div>
        </Marquee>
        <ul className="flex gap-12 text-2xl px-12 py-1 ml-2 font-mono uppercase border border-stone-200 ">
          <li>
            <a href="#" className="lowercase hover:uppercase">
              Works
            </a>
          </li>
          <li>
            <a href="#" className="lowercase hover:uppercase">
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
