import Body from "./components/body";
import Header from "./components/header";

export default function Home() {
  return (
    <div className="bg-white flex flex-col items-center justify-items-center min-h-screen font-[family-name:var(--font-geist-sans)]">
      <Header />
      <Body />
    </div>
  );
}
