import { useState, useRef, useEffect, ChangeEvent } from "react";
import TextareaAutosize from "react-textarea-autosize";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [useTextArea, setUseTextArea] = useState(false);
  const [isWritingMsg, setIsWritingMsg] = useState(false);

  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const messageInputRef = useRef<HTMLInputElement>(null);
  const messageTextareaRef = useRef<HTMLTextAreaElement>(null);

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
    adjustWidth(messageInputRef, message);
  }, [name, email, message]);

  useEffect(() => {
    if (!isWritingMsg) return;

    if (!useTextArea && messageInputRef.current) {
      const input = messageInputRef.current;
      input.focus();
      const length = input.value.length;
      input.setSelectionRange(length, length);
    } else if (useTextArea && messageTextareaRef.current) {
      const textarea = messageTextareaRef.current;
      textarea.focus();
      const length = textarea.value.length;
      textarea.setSelectionRange(length, length);
    }
  }, [useTextArea, isWritingMsg]);

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { value, name } = e.target;
    switch (name) {
      case "name":
        setName(value);
        adjustWidth(nameRef, value);
        break;
      case "email":
        setEmail(value);
        adjustWidth(emailRef, value);
        break;
      case "message":
        setMessage(value);
        setUseTextArea(value.length > 45);
        if (!useTextArea) {
          adjustWidth(messageInputRef, value);
        }
        setIsWritingMsg(true);
        break;
      default:
        break;
    }
  };

  return (
    <div className="pt-24">
      <h1 className="text-6xl font-mono pl-2">
        Why not get in touch?<span className="blinking-cursor">_</span>
      </h1>

      <form className="pt-28">
        <div className="font-mono text-5xl max-w-5xl border-2 mx-auto px-12 pt-12 pb-10">
          Hi my name is{" "}
          <input
            ref={nameRef}
            type="text"
            name="name"
            className="bg-transparent opacity-50 focus:outline-none"
            placeholder="............"
            value={name}
            onChange={handleInputChange}
          />{" "}
          and my email is{" "}
          <input
            ref={emailRef}
            type="text"
            name="email"
            className="bg-transparent opacity-50 focus:outline-none"
            placeholder="............"
            value={email}
            onChange={handleInputChange}
          />
          <span className="ml-1">.</span> Message:{" "}
          {useTextArea ? (
            <TextareaAutosize
              ref={messageTextareaRef}
              name="message"
              className="bg-transparent opacity-50 w-full resize-none focus:outline-none"
              placeholder="............"
              value={message}
              onChange={handleInputChange}
              minRows={1}
            />
          ) : (
            <input
              ref={messageInputRef}
              type="text"
              name="message"
              className="bg-transparent opacity-50 focus:outline-none"
              placeholder="............"
              value={message}
              onChange={handleInputChange}
            />
          )}
          <div className="pt-6 w-fit ml-auto">
            <button className="text-4xl uppercase tracking-wider border border-stone-200 px-3 py-2 hover:bg-green-400 hover:text-neutral-900 hover:border-green-400">
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
