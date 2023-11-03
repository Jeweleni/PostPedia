import React from "react";
import { FcCheckmark } from "react-icons/fc";

const Popup = ({ handlePopup }: any) => {
  return (
    <div className="absolute top-0 left-0 bg-black z-50 w-[100vw] bg-opacity-80 h-screen flex justify-center items-center overflow-x-hidden">
      <div className="relative w-[min(350px,90vw)] aspect-square bg-white rounded-lg flex flex-col justify-center items-center p-10 gap-7">
        <span className="bg-green-200 bg-opacity-30 p-5 rounded-full">
          <FcCheckmark className="border-4 border-green-600 bg-green-200 bg-opacity-30 rounded-full text-[70px] p-1" />
        </span>
        <p className="text-center text-sm">
          Your account has been created successfully
        </p>
        <button
          onClick={handlePopup}
          className="h-[50px] w-full bg-primary rounded-lg text-white border-primary border-2  hover:bg-white hover:text-primary hover:border-primary hover:border-2 duration-200 transition-all hover:font-semibold"
        >
          Done
        </button>
      </div>
    </div>
  );
};

export default Popup;
