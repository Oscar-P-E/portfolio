import Marquee from "react-fast-marquee";

export default function Header() {
  const marqueeText = "Oscar Elmahdy Portfolio ";
  return (
    <header className="sticky top-0 z-10 h-16 bg-opacity-10 backdrop-blur-sm">
      <nav className="pr-3 pl-1 border-b border-stone-200 mx-auto flex justify-between items-center h-full">
        <Marquee gradient={false} speed={50}>
          <div className="text-3xl uppercase font-sans-extralight whitespace-nowrap">
            {marqueeText.repeat(10)}
          </div>
        </Marquee>
        <ul className="flex gap-6 text-3xl pl-6 font-sans-extralight uppercase border border-stone-200 rounded-l-full pr-2">
          <li>
            <a href="#" className="hover:text-gray-200">
              Works
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-gray-200">
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
