import ProductCard from "@/components/_custom-components/product-card";
import About from "@/template/about";
import Experiences from "@/template/experiences";
import Hero from "@/template/hero";
import Products from "@/template/products";

export default function Home() {
  return (
    <>
      <header>
        <Hero />
      </header>
      <main className="flex h-screen w-full flex-col items-center justify-start gap-y-5 flex-1">
        <About />
        <Products />
        <Experiences />
       
      </main>
    </>
  );
}
