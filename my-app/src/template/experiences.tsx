import Heading from "@/components/_custom-components/heading";
import { MoveRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Experiences() {
  return (
    <section className="flex w-full flex-col items-center justify-center py-5 md:flex-row md:justify-between gap-y-10">
    
        <div className="relative">
          <div className="flex flex-col items-start justify-start">
            <span className="-mb-3 h-12 w-[15.7rem] rounded-xl bg-[#F7F7F7]"></span>
            <Image
              alt="Mountains"
              src={"/_content/4.png"}
              quality={100}
              width={350}
              height={0}
              style={{
                objectFit: "cover",
              }}
              className="z-10 shadow-xl"
            />
            <span className="absolute bottom-10 left-64 h-44 w-32 rounded-xl bg-[#F7F7F7]"></span>
          </div>
        </div>
     
      
        <div className="flex w-72 flex-col items-center gap-y-4 md:mr-8 md:w-96 md:items-start">
          <Heading
            title="experiences"
            description="we provide you the best experience"
          />
          <p className="text-wrap text-start leading-loose">
            You don’t have to worry about the result because all of these
            interiors are made by people who are professionals in their fields
            with an elegant and lucurious style and with premium quality
            materials
          <Link
            href={"/"}
            className="flex flex-row items-center gap-4 text-xs capitalize text-[#E58411] mt-4"
          >
            more info <MoveRight size={18} />
          </Link>
          </p>
        </div>
      
    </section>
  );
}
