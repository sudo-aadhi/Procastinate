import Hero from "./components/Hero";
import WindowContainer from "./components/WindowContainer";

export default function Home() {
  return (
    <div className="flex flex-col items-center w-full h-[3500px] bg-[#030303]">
      <Hero />
      <WindowContainer />
    </div>
  );
}
