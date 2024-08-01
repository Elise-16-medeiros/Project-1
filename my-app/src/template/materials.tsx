import Heading from "@/components/_custom-components/heading";
import { MoveRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Materials() {
    return (
      <section className="flex w-full flex-col-reverse items-center justify-center gap-y-10 py-5 md:flex-row md:justify-between">
        <div className="flex w-72 flex-col items-center gap-y-4 md:ml-8 md:w-96 md:items-end">
          <Heading
            title="Materials"
            description="Very serious materials for making furniture"
          />
          <p className="text-wrap text-start leading-loose">
            You don’t have to worry about the result because all of these
            interiors are made by people who are professionals in their fields
            with an elegant and lucurious style and with premium quality
            materials
            <Link
              href={"/"}
              className="mt-4 flex flex-row items-center gap-4 text-xs capitalize text-[#E58411]"
            >
              more info <MoveRight size={18} />
            </Link>
          </p>
        </div>

        <div className="grid w-[650px] grid-flow-col grid-cols-2 grid-rows-2 place-content-center gap-4">
          <div>
            <Image
              alt="Mountains"
              src={"/_content/1.png"}
              quality={100}
              width={180}
              height={0}
              style={{
                objectFit: "cover",
              }}
              className="z-10 shadow-xl"
            />
          </div>
          <div>
            <Image
              alt="Mountains"
              src={"/_content/2.png"}
              quality={100}
              width={180}
              height={0}
              style={{
                objectFit: "cover",
              }}
              className="z-10 shadow-xl"
            />
          </div>
          <div className="flex flex-col items-end justify-end">
            <span className="-mb-3 h-12 w-[15.7rem] rounded-xl bg-[#F7F7F7]"></span>
            <Image
              alt="Mountains"
              src={"/_content/3.png"}
              quality={100}
              width={350}
              height={0}
              style={{
                objectFit: "cover",
              }}
              className="z-10 shadow-xl"
            />
          </div>
        </div>
      </section>
    );
}
