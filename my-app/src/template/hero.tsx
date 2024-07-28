import { Libre_Baskerville } from "next/font/google";
import style from "../app/background.module.css";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

const libreBaskerville = Libre_Baskerville({
  weight: ["400", "700"],
  subsets: ["latin"],
});

export default function Hero() {
  return (
    <section className={style.backgroundImage}>
      <div className="flex h-screen w-full flex-col items-center justify-start gap-8 pt-28 text-white">
        <h1
          className={`${libreBaskerville.className} text-center text-2xl font-bold capitalize leading-loose md:text-5xl`}
        >
          Make your interior more
          <br /> minimalistic & modern
        </h1>
        <p className="text-center">
          Turn your room with panto into a lot more minimalist
          <br />
          and modern with ease and speed
        </p>
        <div className="flex w-64 max-w-sm items-center -space-x-9">
          <Input placeholder="Search furniture" className="bg-neutral-50/25"/>
          <span className="rounded-full bg-[#E58411] w-7 h-7 flex items-center justify-center">
            <Search size={16} className="cursor-pointer"/>
          </span>
        </div>
      </div>
    </section>
  );
}
