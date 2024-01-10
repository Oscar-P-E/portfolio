import { useEffect } from "react";

export default function Hero() {
  const adjustFontSize = () => {
    const vhSize = window.innerHeight * 0.2;
    const vwSize = window.innerWidth * 0.15;
    const fontSize = Math.min(vhSize, vwSize);

    const smallVhSize = window.innerHeight * 0.4;
    const smallVwSize = window.innerWidth * 0.2;
    const smallFontSize = Math.min(smallVhSize, smallVwSize);

    const heading = document.querySelector(".hero-heading") as HTMLElement;
    if (heading) {
      heading.style.fontSize = `${
        window.innerWidth >= 640 ? fontSize : smallFontSize
      }px`;
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
    <div className="h-hero-minus-header flex flex-col sm:flex-col-reverse">
      <div
        className=" flex flex-col justify-end p-6"
        // style={{
        //   backgroundImage: "url(/img/debugging.png)",
        //   backgroundSize: "cover",
        //   backgroundPosition: "center",
        //   backgroundRepeat: "no-repeat",
        // }}
      >
        <h1 className="hero-heading font-mono uppercase leading-[80%] tracking-tight">
          Front-End
          <br />
          Developer
        </h1>
      </div>
      <div className="mb-auto ml-auto max-w-4xl pr-12 pt-12 text-end font-mono text-4xl sm:text-5xl md:text-6xl">
        <p className="pb-2">
          My name is <span className="whitespace-nowrap">Oscar El.</span>
        </p>
        <p>
          I build business websites and{" "}
          <span className="whitespace-nowrap">web applications.</span>
          {/* <span className="blinking-cursor">_</span> */}
        </p>
        <div className="pt-5 text-3xl">
          <button
            onClick={() => {
              const contactElement = document.getElementById("contact");
              if (contactElement) {
                contactElement.scrollIntoView({ behavior: "smooth" });
              }
            }}
            className="rounded-md border border-neutral-900 bg-cyan-400 px-4 pb-1.5 pt-2 uppercase tracking-widest text-neutral-900 hover:scale-105 hover:transform hover:border-cyan-300 hover:bg-cyan-300"
          >
            Message Me
          </button>
        </div>
      </div>
    </div>
  );
}
