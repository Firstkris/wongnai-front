import { Carousel } from "@material-tailwind/react";
import { CrossIcon } from "../../icons/icon";

export function ModalNavMerchantImg({ children, setIsToggle }) {
  return (
    <>
      <div className="fixed justify-center items-center inset-0 bg-gray-400 opacity-50 z-20"></div>
      <div className="inset-0 fixed flex justify-center items-center z-20">
        <div className="relative rounded-2xl  ">
          <Carousel className=" bg-black rounded-xl  h-[700px]">
            {children}
          </Carousel>
          <div
            className="absolute right-5 top-5 z-30 cursor-pointer"
            onClick={() => setIsToggle((c) => !c)}
          >
            <CrossIcon className={"w-10 h-10"} stroke={"white"} />
          </div>
        </div>
      </div>
    </>
  );
}
