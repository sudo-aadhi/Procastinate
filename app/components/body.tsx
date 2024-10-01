import BentoGrids from "./essentials/bento";
import Hero, {
  CompatiableWith,
  LetterComponent,
  Seperator,
} from "./essentials/hero";
import ReviewComponent, { PartitionTextComponent } from "./essentials/review";

const Body = () => {
  return (
    <div className="flex flex-col items-center w-full h-full">
      <Hero />
      <CompatiableWith />s
      <LetterComponent />
      <PartitionTextComponent
        text="Why others choose 'Procastinate'"
        position={315}
        description="Curious? See What Procastinate Users Have to Say! Let's take a look at what the users of Procastinate say."
      />
      <ReviewComponent />
      <BentoGrids />
    </div>
  );
};
export default Body;
