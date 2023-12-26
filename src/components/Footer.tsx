export default function Footer() {
  return (
    <footer className="pt-24">
      <div className="pt-10 pb-8 bg-neutral-900 text-stone-200 opacity-50 px-2 mx-auto flex justify-center gap-24 items-center h-14">
        <div className="text-2xl font-mono">
          email{" "}
          <a href="mailto:oscarssecretary@gmail.com">
            oscarssecretary@gmail.com
          </a>
        </div>
        <div className="text-2xl font-mono">
          phone <a href="tel:0421400082">0421 400 082</a>
        </div>
      </div>
    </footer>
  );
}
