export default function Contact() {
  return (
    <div className="pt-24">
      <h1 className="text-6xl font-mono pl-2">
        Why not get it touch?<span className="blinking-cursor">_</span>
      </h1>

      <form className="pt-28">
        <div className="font-mono text-6xl max-w-5xl border-2 mx-auto px-12 pt-12 pb-10">
          Hi my name is
          <input
            type="text"
            className="bg-inherit w-80 px-4"
            placeholder="............"
          />
          and I want to
          <input
            type="text"
            className="bg-inherit w-80 pl-4 pr-2"
            placeholder="............"
          />
          .<br />
          My email is
          <input
            type="text"
            className="bg-inherit w-80 pl-4 pr-2"
            placeholder="............"
          />
          .
          <div className="pt-6 w-fit ml-auto">
            <button className="text-4xl uppercase tracking-wider border border-stone-200 px-3 py-2">
              Send Message
            </button>
          </div>
        </div>
      </form>
      <div className="text-4xl font-mono ml-auto w-fit pt-28 pr-12">
        ...or just email me at{" "}
        <a
          href="mailto:oscarssecretary@gmail.com"
          className="underline decoration-dotted"
        >
          oscarssecretary@gmail.com
        </a>
      </div>
    </div>
  );
}
