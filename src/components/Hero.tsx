import { useEffect } from "react";

export default function Hero() {
  const adjustFontSize = () => {
    const vhSize = window.innerHeight * 0.2;
    const vwSize = window.innerWidth * 0.1;
    const fontSize = Math.min(vhSize, vwSize);

    const heading = document.querySelector(".hero-heading") as HTMLElement;
    if (heading) {
      heading.style.fontSize = `${fontSize}px`;
    }
  };

  useEffect(() => {
    window.addEventListener("resize", adjustFontSize);
    adjustFontSize(); // Adjust on initial render

    return () => {
      window.removeEventListener("resize", adjustFontSize);
    };
  }, []);

  return (
    <div className="flex">
      <div
        className="flex flex-col justify-end h-hero-minus-header p-6"
        // style={{
        //   backgroundImage: "url(/img/debugging.png)",
        //   backgroundSize: "cover",
        //   backgroundPosition: "center",
        //   backgroundRepeat: "no-repeat",
        // }}
      >
        <h1 className="font-mono uppercase leading-[80%] hero-heading tracking-tight">
          Front-End
          <br />
          Developer
        </h1>
      </div>
      <div className="text-5xl mx-auto pt-10 pr-10 font-mono text-end">
        <p className="pb-2">
          My name is <span className="whitespace-nowrap">Oscar El.</span>
        </p>
        <p>
          I build business websites and{" "}
          <span className="whitespace-nowrap">web applications.</span>
          {/* <span className="blinking-cursor">_</span> */}
        </p>
        <div className="text-2xl pt-5">
          <button
            onClick={() => {
              const contactElement = document.getElementById("contact");
              if (contactElement) {
                contactElement.scrollIntoView({ behavior: "smooth" });
              }
            }}
            className="bg-green-400 text-neutral-900 hover:bg-green-300 px-5 pt-2 pb-1.5 rounded-md  uppercase tracking-wider border border-neutral-900 hover:shadow-2xl hover:border-stone-200"
          >
            Message Me
          </button>
        </div>
      </div>
    </div>
  );
}
