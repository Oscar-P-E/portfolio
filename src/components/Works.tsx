export default function Works() {
  return (
    <div className="pt-4 pb-24">
      <div className="pl-24 pr-2 pt-40">
        <h1 id="works" className="text-6xl font-mono pt-8 sticky top-0">
          Portfolio<span className="blinking-cursor">_</span>
        </h1>

        <div className="grid grid-cols-3 gap-x-4 gap-y-12 pt-52">
          {/* Project 1 */}
          <div className="col-span-2">
            <div className="pb-16 pr-8">
              <img
                className="rounded-xl"
                src="/img/works/oe-multiple.jpg"
                alt="optimize electrical responsive design multiple devices"
              />
            </div>
            <div className="pb-16 pr-8">
              <img
                className="rounded-xl"
                src="/img/works/oe-phone.jpg"
                alt="optimize electrical mobile phone"
              />
            </div>
          </div>

          <div>
            <h2 className="text-4xl font-mono">
              <a href="http://optimizeelectrical.com.au">Optimize Electrical</a>
            </h2>
            <p className="text-2xl font-mono py-2 ">
              Not overly fancy, yet professional and modern. User-friendly
              design, intuitive interface. Easy to see who they are are, what
              they do, and how to{" "}
              <span className="whitespace-nowrap">contact them</span>.
            </p>
            <p className="text-2xl font-mono">
              {"> "}
              <a
                className="underline decoration-dotted"
                href="http://optimizeelectrical.com.au"
              >
                optimizeelectrical.com.au
              </a>
            </p>
          </div>

          {/* Project 2 */}
          <div>
            <h2 className="text-4xl font-mono">
              <a href="http://glassninja.com.au">Glass Ninja</a>
            </h2>
            <p className="text-2xl font-mono py-2 ">
              A non-standard design almost entirely in pure black and white.
              Everything fits on a single page, resembling a window with panes
              that expand into full screen pages. Compact but still intuitive.
              Calls to action are never buried. A "clean" design for a window{" "}
              <span className="whitespace-nowrap">cleaning business.</span>
            </p>
            <p className="text-2xl font-mono">
              {"> "}
              <a
                className="underline decoration-dotted "
                href="http://glassninja.com.au"
              >
                glassninja.com.au
              </a>
            </p>
          </div>

          <div className="col-span-2">
            <div className="pb-16 pr-8">
              {/* <div className="pl-12 pr-11 pt-12 pb-11 bg-gradient-to-tr opacity-90 from-[rgb(240,243,254)] to-[rgb(210,210,225)] rounded-xl"> */}
              <img
                className="rounded-xl"
                src="/img/works/gn-browser.jpg"
                alt="optimize electrical responsive design multiple devices"
              />
              {/* </div> */}
            </div>
            <div className="pb-16 pr-8">
              <img
                className="rounded-xl"
                src="/img/works/gn-phone.jpg"
                alt="optimize electrical mobile phone"
              />
            </div>
            <div className="pb-16 pr-8">
              <img
                className="rounded-xl"
                src="/img/works/gn-phone-contact.jpg"
                alt="optimize electrical mobile phone"
              />
            </div>
          </div>

          {/* Project 3 */}
          {/* <div className="col-span-2">
            <img src="/img/works/gains.png" alt="" />
          </div>

          <div>
            <h2 className="text-4xl font-mono">gAIns - AI Training App</h2>
            <p className="text-2xl font-mono py-2 ">
              Built out of frustration with existing workout apps. gAIns is all
              about smart, personalized training. It adapts your workout plan
              based on your progress and goals. No fluff – just a
              straightforward, data-driven approach to make your workouts count.
              It's like having a personal trainer in your pocket, but{" "}
              <span className="whitespace-nowrap">powered by AI.</span>
            </p>
            <p className="text-2xl font-mono">
              {"> "}
              <a
                className="underline decoration-dotted"
                href="https://ai-training-app.vercel.app/"
              >
                ai-training-app.vercel.app
              </a>
            </p>
          </div>
           */}
        </div>
      </div>
    </div>
  );
}
