import Heading from "@/components/_custom-components/heading";
import ProductCard from "@/components/_custom-components/product-card";
import ProductsCarousel from "@/components/_custom-components/products-carousel";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function Products() {
  return (
    <section className="flex w-full flex-col items-center justify-center gap-y-5 bg-[#F7F7F7] h-screen">
      <Heading description="Best Selling Product" />
      <Tabs
        defaultValue="account"
        className="flex w-[400px] flex-col items-center justify-center"
      >
        <TabsList className="flex w-64 flex-row items-center justify-around gap-x-6 rounded-full bg-[#EEEEEE] py-4">
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
        <TabsContent value="chair">
          <ProductsCarousel />
        </TabsContent>
        <TabsContent value="beds">Change your password here.</TabsContent>
        <TabsContent value="sofa">Change your</TabsContent>
      </Tabs>
   
    </section>
  );
}
