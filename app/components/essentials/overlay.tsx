import { motion } from "framer-motion";
import Image from "next/image";

const Overlay = () => {
  return (
    <motion.div
      className="flex flex-col items-center justify-center w-[1224px] h-[774px] bg-gradient-to-b from-[#FEF6FC] to-transparent rounded-3xl relative top-[275px] z-10"
      whileHover={{
        scale: 1.02,
        transition: { duration: 0.6, ease: "easeInOut" },
      }}
    >
      <div className="flex flex-col items-center w-[1200px] h-[754px] bg-white rounded-2xl">
        <div className="flex flex-col items-center w-[1200px] h-[754px] bg-white rounded-2xl justify-center overflow-hidden">
          <Image
            draggable="false"
            src={"https://svgshare.com/i/1AwU.svg"}
            width={1224}
            height={754}
            alt="Hero"
            className="relative bottom-[220px] shadow-2xl"
          />
        </div>
        <NotionStatus />
      </div>
    </motion.div>
  );
};

interface NotionStatusProps {
  icon: string;
}

const NotionStatus: React.FC<NotionStatusProps> = ({ icon = "" }) => {
  return (
    <div className="flex items-center justify-center w-[1200px] h-[120px] absolute top-[255px] ">
      <div className="flex items-center justify-center w-[120px] h-[120px] rounded-full bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-[#ffffff50] relative right-[500px]">
        <div className="flex items-center justify-center w-[108px] h-[108px] rounded-full bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-[#ffffff50]">
          {/* <Image src={icon} alt="User Status" width={100} height={100} /> */}
        </div>
      </div>
    </div>
  );
};

export default Overlay;
