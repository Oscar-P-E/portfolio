import { useState, useRef, useEffect, ChangeEvent } from "react";
import TextareaAutosize from "react-textarea-autosize";
import emailjs from "@emailjs/browser";
import confetti from "canvas-confetti";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [useTextArea, setUseTextArea] = useState(false);
  const [isWritingMsg, setIsWritingMsg] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const messageInputRef = useRef<HTMLInputElement>(null);
  const messageTextareaRef = useRef<HTMLTextAreaElement>(null);

  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!formRef.current) return;

    setIsSubmitting(true);

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      )
      .then(
        (result) => {
          console.log(result.text);
          setSuccess(true);
          // setName("");
          // setEmail("");
          // setMessage("");
          // setUseTextArea(false);
          // setIsWritingMsg(false);
          // new Promise((resolve) => setTimeout(resolve, 1000));
          // setIsSubmitting(false);
        },
        (error) => {
          console.log(error.text);
        },
      );
  };

  useEffect(() => {
    if (success) {
      confetti({
        particleCount: 100,
        spread: 100,
        origin: { y: 0.6 },
        decay: 0.92,
        ticks: 250,
      });
    }
  }, [success]);

  const adjustWidth = (
    inputRef: React.RefObject<HTMLInputElement>,
    value: string,
  ) => {
    if (inputRef.current) {
      const textLength = value.length;
      const newWidth = textLength > 1 ? `${textLength}ch` : "12ch";
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
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
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
    <div className="pt-20">
      <h1 id="contact" className="pl-12 pt-4 font-mono text-6xl">
        Why not get in touch?
      </h1>

      {success ? (
        <div className="pt-28">
          <div className="mx-auto max-w-5xl border-2 border-stone-200 bg-green-400 bg-opacity-50 px-12 pb-10 pt-12 font-mono text-4xl ">
            <h2 className="pb-4 text-5xl">Message Sent!</h2>
            Thanks <span className="opacity-50">{name}</span>! I'll get back to
            you at <span className="opacity-50">{email}</span> as soon as I can!
          </div>
        </div>
      ) : (
        <form ref={formRef} onSubmit={handleSubmit} className="pt-28">
          <div className="mx-auto max-w-5xl border-2 border-stone-200 bg-slate-900 px-12 pb-10 pt-12 font-mono text-5xl">
            Hi my name is{" "}
            <input
              ref={nameRef}
              type="text"
              name="name"
              className="bg-transparent opacity-50 focus:outline-none"
              placeholder="............"
              value={name}
              onChange={handleInputChange}
              minLength={2}
              maxLength={30}
              required
            />{" "}
            and my email is{" "}
            <input
              ref={emailRef}
              type="email"
              name="email"
              className="bg-transparent opacity-50 focus:outline-none"
              placeholder="............"
              value={email}
              onChange={handleInputChange}
              minLength={5}
              maxLength={30}
              required
            />
            <span className="ml-1">.</span> Message:{" "}
            {useTextArea ? (
              <TextareaAutosize
                ref={messageTextareaRef}
                name="message"
                className="w-full resize-none bg-transparent opacity-50 focus:outline-none"
                placeholder="............"
                value={message}
                onChange={handleInputChange}
                minRows={1}
                maxRows={10}
                minLength={10}
                maxLength={10000}
                required
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
                minLength={10}
                required
              />
            )}
            <div className="ml-auto w-fit pt-6">
              <button
                type="submit"
                disabled={isSubmitting}
                className="border border-stone-200 px-3 py-2 text-4xl uppercase tracking-wider hover:border-cyan-400 hover:bg-cyan-400 hover:text-neutral-900 disabled:cursor-default disabled:border-gray-500 disabled:bg-gray-500 disabled:text-gray-900 disabled:opacity-50"
              >
                Send Message
              </button>
            </div>
          </div>
        </form>
      )}
      <div className="ml-auto w-fit pr-12 pt-28 font-mono text-4xl">
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
