import { useEffect } from "react";

export default function Hero() {
  const adjustFontSize = () => {
    const vhSize = window.innerHeight * 0.33; // 33vh
    const vwSize = window.innerWidth * 0.2; // 20vw
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
    <div
      className="flex flex-col justify-end h-hero-minus-header p-6"
      // style={{
      //   backgroundImage: "url(/img/debugging.png)",
      //   backgroundSize: "cover",
      //   backgroundPosition: "center",
      //   backgroundRepeat: "no-repeat",
      // }}
    >
      <h1 className="font-heading uppercase leading-none hero-heading ">
        Front End
        <br />
        Developer
      </h1>
    </div>
  );
}
