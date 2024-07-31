import Heading from "@/components/_custom-components/heading";
import ProductsCarousel, { BedsCarousel, SofaCarousel } from "@/components/_custom-components/products-carousel";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { MoveRight } from "lucide-react";
import Link from "next/link";

export default function Products() {
  return (
    <section className="flex h-screen w-full flex-col items-center justify-center gap-y-5 py-4 bg-[#F7F7F7]">
      <Heading description="Best Selling Product" />
      <Tabs
        defaultValue="chair"
        className="flex w-[400px] flex-col items-center justify-center"
      >
        <TabsList className="grid w-full grid-cols-3 place-content-center gap-x-6 rounded-full bg-[#EEEEEE] px-3 py-4">
          <TabsTrigger value="chair" className="rounded-full">
            Chair
          </TabsTrigger>
          <TabsTrigger value="beds" className="rounded-full">
            Beds
          </TabsTrigger>
          <TabsTrigger value="sofa" className="rounded-full">
            Sofa
          </TabsTrigger>
        </TabsList>
        <TabsContent value="chair" className="">
          <ProductsCarousel />
        </TabsContent>
        <TabsContent value="beds">
          <BedsCarousel />
        </TabsContent>
        <TabsContent value="sofa">
          <SofaCarousel />
        </TabsContent>
      </Tabs>

      <span>
        <Link
          href={"/"}
          className="flex flex-row items-center gap-4 text-xs capitalize text-[#E58411]"
        >
          View All <MoveRight size={18} />
        </Link>
      </span>
    </section>
  );
}
