import Image from "next/image";

const Overlay = () => {
  return (
    <div className="flex items-center justify-center w-[1224px] h-[774px] bg-gradient-to-b from-[#FEF6FC] to-transparent rounded-3xl relative top-[265px] z-10">
      <div className="flex flex-col items-center w-[1200px] h-[754px] bg-white rounded-2xl">
        <div className="flex items-center w-[1200px] h-[754px] bg-white rounded-2xl justify-center overflow-hidden">
          <Image
            src={"https://svgshare.com/i/1AwU.svg"}
            width={1224}
            height={754}
            alt="Hero"
            className="relative bottom-[220px] shadow-2xl"
          />
        </div>
      </div>
    </div>
  );
};
export default Overlay;
