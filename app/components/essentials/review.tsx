import { motion } from "framer-motion";
import Image from "next/image";
import { relative } from "path";

const ReviewComponent = () => {
  return (
    <div className="w-full max-w-[1024px] flex items-center justify-center gap-[15px] mt-[50px] flex-wrap">
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

interface PartitionTextComponentProp {
  text: string;
  position: string | number;
  description: string;
}

export const PartitionTextComponent: React.FC<PartitionTextComponentProp> = ({
  text,
  position,
  description,
}) => {
  return (
    <div
      className="flex flex-col items-center justify-center text-center"
      style={{
        position: "relative",
        top: `${position}px`,
      }}
    >
      <h1 className="text-black text-[60px] font-imbueSans">{text}</h1>
      {description && (
        <p className="text-[15px] text-[#414141]">{description}</p>
      )}
    </div>
  );
};

const testimonials: TestimonialComponentProp[] = [
  {
    image:
      "https://i.ibb.co/1zYM7zw/Leonardo-Kino-XL-A-young-women-taking-mirror-selfie-on-iphone-1.jpg",
    name: "Lena Müller",
    role: "Project Manager",
    text: "These templates have streamlined my tasks and helped me overcome procrastination.",
    rotateAxis: -1,
  },
  {
    image:
      "https://i.ibb.co/QMqnCGR/Leonardo-Vision-XL-An-indian-young-man-with-short-curly-black-0.jpg",
    name: "Aarav Patel",
    role: "Software Engineer",
    text: "I've tried many productivity tools, but these templates stand out, and incredibly effective. Absolutely worth it.",
    rotateAxis: 0,
  },
  {
    image: "https://i.ibb.co/3ssrv54/h-ZEsuo8518-CTKh-T-1708900891.png",
    name: "Sofia Rossi",
    role: "UI/UX Designer",
    text: "Thanks to these templates, I’ve finally found a system that keeps me organized and on track. It’s been a game-changer.",
    rotateAxis: 1,
  },
  {
    image:
      "https://i.ibb.co/0JgNVYF/Leonardo-Vision-XL-A-smiling-young-man-with-a-strong-jawline-6.jpg",
    name: "Lucas Brown",
    role: "Marketing Specialist",
    text: "Procastinate has revolutionized how I manage my time. I’m no longer buried under deadlines!",
    rotateAxis: -0,
  },
  {
    image:
      "https://i.ibb.co/LRyr4rB/Leonardo-Kino-XL-A-smiling-woman-with-red-hair-9.jpg",
    name: "Emma Johnson",
    role: "Content Creator",
    text: "The templates are not only beautifully designed but also extremely functional. I’m more productive than ever!",
    rotateAxis: 0,
  },
  {
    image:
      "https://i.ibb.co/vVGSP2N/Leonardo-Vision-XL-A-young-woman-with-medium-length-brown-hair-4.jpg",
    name: "Chloe Nguyen",
    role: "Freelance Writer",
    text: "As a freelancer, staying organized is a challenge. These templates make it so much easier to stay focused.",
    rotateAxis: 0,
  },
  {
    image:
      "https://i.ibb.co/tLmPzg2/Leonardo-Kino-XL-A-middle-aged-man-with-gray-hair-and-glasses-3.jpg",
    name: "Daniel Garza",
    role: "Product Manager",
    text: "The simplicity and elegance of these templates have made managing my projects a breeze. Highly recommend!",
    rotateAxis: 0,
  },
  {
    image:
      "https://i.ibb.co/JpHgBYC/Leonardo-Vision-XL-A-man-with-long-dark-hair-smiling-in-a-form-5.jpg",
    name: "Antonio Garcia",
    role: "Data Analyst",
    text: "These templates are intuitive and customizable. They’ve improved my workflow and boosted my productivity.",
    rotateAxis: 0,
  },
  {
    image:
      "https://i.ibb.co/2qcLtxL/Leonardo-Vision-XL-A-woman-with-curly-blonde-hair-and-glasses-8.jpg",
    name: "Maya Thompson",
    role: "Operations Manager",
    text: "Using these templates has completely transformed the way I organize my day. It’s a life-saver!",
    rotateAxis: 0,
  },
  {
    image:
      "https://i.ibb.co/wKqFRjH/Leonardo-Vision-XL-A-man-with-short-dark-hair-and-light-brown-ski.jpg",
    name: "Oliver Schmidt",
    role: "Entrepreneur",
    text: "Procastinate's templates have helped me juggle multiple projects with ease. My productivity has skyrocketed.",
    rotateAxis: 0,
  },
  {
    image:
      "https://i.ibb.co/5YKw69V/Leonardo-Kino-XL-A-smiling-woman-with-long-black-hair-in-her-earl.jpg",
    name: "Harper Lee",
    role: "Social Media Manager",
    text: "I can't believe how much more organized I feel after using these templates. A must-have for any professional.",
    rotateAxis: 0,
  },
  {
    image:
      "https://i.ibb.co/sQQtKwN/Leonardo-Vision-XL-A-man-in-his-early-40s-with-short-gray-hair-11.jpg",
    name: "Ethan Sullivan",
    role: "Sales Manager",
    text: "I’ve finally found a productivity tool that works for me. These templates are easy to use and effective.",
    rotateAxis: 0,
  },
  {
    image:
      "https://i.ibb.co/2yJgML5/Leonardo-Vision-XL-A-young-woman-with-a-light-smile-holding-a-cof.jpg",
    name: "Amelia Davies",
    role: "Graphic Designer",
    text: "The clean design and functionality of these templates are unmatched. They've truly boosted my efficiency.",
    rotateAxis: 0,
  },
  {
    image:
      "https://i.ibb.co/v4MJ8Rd/Leonardo-Vision-XL-A-man-with-short-black-hair-and-glasses-smilin.jpg",
    name: "Noah Campbell",
    role: "Tech Support Specialist",
    text: "Procastinate has made it so much easier to stay on top of my tasks. Highly recommend these templates.",
    rotateAxis: 0,
  },
  {
    image:
      "https://i.ibb.co/p4D0Lbk/Leonardo-Vision-XL-A-young-woman-with-dark-blonde-hair-smiling-ou.jpg",
    name: "Sophia Kim",
    role: "Event Planner",
    text: "These templates are a lifesaver! I’m able to plan my events with so much more organization and ease.",
    rotateAxis: 0,
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
    <motion.div
      className="relative top-[350px] flex flex-col items-start justify-between w-[330px] h-auto p-[15px] border border-[#EBEAE9] rounded-lg shadow-md flex-wrap"
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
    </motion.div>
  );
};

export default ReviewComponent;
