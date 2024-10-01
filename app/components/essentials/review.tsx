import Image from "next/image";

const ReviewComponent = () => {
  return (
    <div className="w-full max-w-[1024px] flex items-center justify-center gap-[15px] mt-[50px]">
      {testimonials.map((item, index) => {
        return (
          <TestimonialComponent
            key={index}
            image={item.image}
            name={item.name}
            role={item.role}
            text={item.text}
            rotateAxis={item.rotateAxis}
          />
        );
      })}
    </div>
  );
};

const testimonials: TestimonialComponentProp[] = [
  {
    image: "",
    name: "Lena Müller",
    role: "Project Manager",
    text: "These templates have streamlined my tasks and helped me overcome procrastination.",
    rotateAxis: -1,
  },
  {
    image:
      "https://i.ibb.co/QMqnCGR/Leonardo-Vision-XL-An-indian-young-man-with-short-curly-black-2.jpg",
    name: "Aarav Patel",
    role: "Entrepreneur",
    text: "I've tried many productivity tools, but these templates stand out, and incredibly effective. Absolutely worth it.",
    rotateAxis: 0,
  },
  {
    image: "",
    name: "Sofia Rossi",
    role: "Marketing Executive",
    text: "Thanks to these templates, I’ve finally found a system that keeps me organized and on track. It’s been a game-changer",
    rotateAxis: 1,
  },
];

interface TestimonialComponentProp {
  image: string;
  name: string;
  role: string;
  text: string;
  rotateAxis: number;
}

const TestimonialComponent: React.FC<TestimonialComponentProp> = ({
  image,
  name,
  role,
  text,
  rotateAxis,
}) => {
  return (
    <div
      className="relative top-[350px] flex flex-col items-start justify-between w-[330px] h-auto p-[15px] border border-[#EBEAE9] rounded-lg shadow-md"
      style={{
        transform: `rotate(${rotateAxis}deg)`,
      }}
    >
      <p className="text-[16px] font-light text-[#555]  mb-[10px]">"{text}"</p>
      <div className="flex items-center">
        <div className="w-[50px] h-[50px] rounded-full overflow-hidden border border-[#bdbdbd]">
          <Image
            src={image}
            alt={name}
            width={1080}
            height={1080}
            draggable="false"
          />
        </div>
        <div className="ml-[15px]">
          <h1 className="font-semibold text-[14px]">{name}</h1>
          <p className="text-[12px] text-gray-500">{role}</p>
        </div>
      </div>
    </div>
  );
};

export default ReviewComponent;
