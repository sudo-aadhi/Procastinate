import Hero, {
  CompatiableWith,
  LetterComponent,
  Seperator,
} from "./essentials/hero";

const Body = () => {
  return (
    <div className="flex flex-col items-center w-full h-full">
      <Hero />
      <CompatiableWith />
      <LetterComponent />
    </div>
  );
};
export default Body;
