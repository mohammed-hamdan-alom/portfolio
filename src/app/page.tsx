import Hero from "@/components/main/Hero";
import Navbar from "@/components/main/navbar";

export default function Home() {
  return (
    <main className="h-screen w-full">
      <div className="container flex flex-col w-[1000px] gap-20">
        <div className="mt-4 h-[64px]">
          <Navbar />
        </div>
      </div>
    </main>
  );
}
