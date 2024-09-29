import { motion } from "framer-motion";
import Image from "next/image";

const Overlay = () => {
  return (
    <motion.div
      className="flex items-center justify-center w-[1224px] h-[774px] bg-gradient-to-b from-[#FEF6FC] to-transparent rounded-3xl relative top-[275px] z-10 shadow-sm"
      whileHover={{
        scale: 1.02,
        transition: { duration: 0.6, ease: "easeInOut" },
      }}
    >
      <div className="flex flex-col items-center w-[1200px] h-[754px] bg-white rounded-2xl shadow-sm">
        <div className="flex items-center w-[1200px] h-[754px] bg-white rounded-2xl justify-center overflow-hidden">
          <Image
            draggable="false"
            src={"https://svgshare.com/i/1AwU.svg"}
            width={1224}
            height={754}
            alt="Hero"
            className="relative bottom-[220px] shadow-2xl"
          />
        </div>
      </div>
    </motion.div>
  );
};
export default Overlay;
