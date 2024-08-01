import Link from "next/link";
import { MoveRight } from "lucide-react";
import Heading from "@/components/_custom-components/heading";

export default function About() {
  return (
    <section className="flex flex-col gap-y-8 p-4 md:flex-row md:gap-x-16">
      <div>
        <Heading description="Why Choosing Us" />
      </div>

      <div className="grid grid-cols-3 place-content-start place-items-start gap-x-4 md:gap-x-6">
        <span className="grid grid-cols-1 gap-y-4">
          <h4 className="text-sm font-bold md:text-base">Luxury facilities</h4>
          <p className="text-wrap text-start text-xs md:text-sm">
            The advantage of hiring a workspace with us is that gives you
            comfortable service and all-around facilities.
          </p>
          <Link
            href={"/"}
            className="flex flex-row items-center gap-4 text-xs capitalize text-[#E58411]"
          >
            more info <MoveRight size={18} />
          </Link>
        </span>
        <span className="grid grid-cols-1 gap-y-4">
          <h4 className="text-sm font-bold md:text-base">Affordable Price</h4>
          <p className="text-wrap text-start text-xs md:text-sm">
            You can get a workspace of the highst quality at an affordable price
            and still enjoy the facilities that are oly here.
          </p>
          <Link
            href={"/"}
            className="flex flex-row items-center gap-4 text-xs capitalize text-[#E58411]"
          >
            more info <MoveRight size={18} />
          </Link>
        </span>
        <span className="grid grid-cols-1 gap-y-4">
          <h4 className="text-sm font-bold md:text-base">Many Choices</h4>
          <p className="text-wrap text-start text-xs md:text-sm">
            We provide many unique work space choices so that you can choose the
            workspace to your liking.
          </p>
          <Link
            href={"/"}
            className="flex flex-row items-center gap-4 text-xs capitalize text-[#E58411]"
          >
            more info <MoveRight size={18} />
          </Link>
        </span>
      </div>
    </section>
  );
}
