import CaseCard from "./components/CaseCard";
import Hero from "./components/Hero";
import Pricing from "./components/Pricing";
import WindowContainer from "./components/WindowContainer";

export default function Home() {
  return (
    <div className="flex flex-col items-center w-full h-[6000px] bg-[#030303]">
      <Hero />
      <WindowContainer />
      <CaseCard />
      <Pricing />
    </div>
  );
}
