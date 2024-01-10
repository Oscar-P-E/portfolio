export default function BackToTop() {
  return (
    <div className="fixed bottom-4 right-4 z-10">
      <button
        onClick={() => {
          window.scrollTo({ top: 0, behavior: "smooth" });
        }}
        className="flex h-10 w-10 items-center justify-center rounded-full bg-stone-200 text-2xl text-neutral-900 hover:scale-110 hover:transform hover:bg-white hover:text-black"
      >
        <svg
          className="h-6 w-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M5 10l7-7m0 0l7 7m-7-7v18"
          ></path>
        </svg>
      </button>
    </div>
  );
}
