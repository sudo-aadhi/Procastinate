import Hero, {
  CompatiableWith,
  LetterComponent,
  Seperator,
} from "./essentials/hero";

const Body = () => {
  return (
    <div className="flex flex-col items-center w-full h-full">
      <Hero />

      <Seperator width={500} position={100} />
      <CompatiableWith />
      <LetterComponent />
    </div>
  );
};
export default Body;
