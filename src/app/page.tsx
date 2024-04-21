import Navbar from "@/components/navbar";
import Hero from "@/components/Hero";
import Experience from "@/components/Experience";

export default function Home() {
  return (
    <main className="">
      <div className="container flex flex-col gap-20 pt-4">
        <Navbar />
        <Hero />
        <Experience />
      </div>
    </main>
  );
}
