import { useState, useRef, useEffect } from "react";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const messageRef = useRef<HTMLInputElement>(null);

  const adjustWidth = (
    inputRef: React.RefObject<HTMLInputElement>,
    value: string
  ) => {
    if (inputRef.current) {
      const textLength = value.length;
      const newWidth = textLength > 2 ? `${textLength}ch` : "12ch";
      inputRef.current.style.width = newWidth;
    }
  };

  useEffect(() => {
    adjustWidth(nameRef, name);
    adjustWidth(emailRef, email);
    adjustWidth(messageRef, message);
  }, [name, email, message]);

  return (
    <div className="pt-24">
      <h1 className="text-6xl font-mono pl-2">
        Why not get it touch?<span className="blinking-cursor">_</span>
      </h1>

      <form className="pt-28">
        <div className="font-mono text-5xl max-w-5xl border-2 mx-auto px-12 pt-12 pb-10">
          Hi my name is{" "}
          <input
            ref={nameRef}
            type="text"
            className="bg-inherit opacity-50"
            placeholder="............"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />{" "}
          and my email is{" "}
          <input
            ref={emailRef}
            type="text"
            className="bg-inherit opacity-50"
            placeholder="............"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <span className="ml-1">.</span> Message:{" "}
          <input
            ref={messageRef}
            type="text"
            className="bg-inherit opacity-50"
            placeholder="............"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
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
