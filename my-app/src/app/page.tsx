import About from "@/template/about";
import Hero from "@/template/hero";

export default function Home() {
  return (
    <>
      <header>
        <Hero />
      </header>
      <main className="flex h-screen w-full flex-col items-center justify-start gap-y-5 p-5">
        <About />
      </main>
    </>
  );
}
