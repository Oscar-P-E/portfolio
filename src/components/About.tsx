import { FaReact, FaGitAlt, FaHtml5, FaCss3Alt } from "react-icons/fa";
import {
  SiTypescript,
  SiJavascript,
  SiNextdotjs,
  SiTailwindcss,
  SiPrisma,
  SiTrpc,
} from "react-icons/si";

export default function About() {
  return (
    <>
      <div className="pt-48 flex flex-col text-center">
        <div className="border-b-2 border-t-2 p-12 border-stone-200 bg-slate-900 bg-opacity-80">
          <div className="flex justify-center">
            <div className="max-w-5xl">
              <h2 className="text-6xl font-mono pb-8">Weapons of Choice:</h2>
              <ul className="text-2xl font-mono grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-y-4 gap-x-[8vw]">
                <li className="flex items-center justify-start gap-2">
                  <FaReact /> React
                </li>
                <li className="flex items-center justify-start gap-2">
                  <SiTypescript /> TypeScript
                </li>
                <li className="flex items-center justify-start gap-2">
                  <SiJavascript /> JavaScript
                </li>
                <li className="flex items-center justify-start gap-2">
                  <SiNextdotjs /> Next.js
                </li>
                <li className="flex items-center justify-start gap-2">
                  <SiTailwindcss /> Tailwind CSS
                </li>
                <li className="flex items-center justify-start gap-2">
                  <FaGitAlt /> Git
                </li>
                <li className="flex items-center justify-start gap-2">
                  <SiPrisma /> Prisma
                </li>
                <li className="flex items-center justify-start gap-2">
                  <SiTrpc /> tRPC
                </li>
                <li className="flex items-center justify-start gap-2">
                  <FaHtml5 /> HTML + <FaCss3Alt /> CSS
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
