import Hero, {
  CompatiableWith,
  LetterComponent,
  Seperator,
} from "./essentials/hero";
import ReviewComponent from "./essentials/review";

const Body = () => {
  return (
    <div className="flex flex-col items-center w-full h-full">
      <Hero />
      <CompatiableWith />
      <LetterComponent />
      <ReviewComponent />
    </div>
  );
};
export default Body;
