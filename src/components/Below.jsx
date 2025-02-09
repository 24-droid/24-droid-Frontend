import React from "react";
import Bottom from "../assets/Bottom.png";

const Below = () => {
  return (
    <div className="relative">
      {/* Background Image */}
      <img src={Bottom} alt="Bottom-Image" className="w-full h-100 object-cover" />

      {/* Text Content */}
      <div className="absolute top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/4 flex flex-col items-center text-[#FDFDFD] z-10">
        <p className="text-xs md:text-lg">REALIZE YOUR UNIQUE VISION</p>
        <h1 className="mt-3 text-sm md:text-3xl font-extrabold text-center">Get 24-Droid and Create a</h1>
        <h1 className="text-sm md:text-3xl font-extrabold text-center">Professional Website Today!</h1>
        <button className="mt-5 text-[#FDFDFD] w-40 h-12 rounded-lg bg-[#09A04F] hover:bg-[#078a3e] cursor-pointer text-sm font-semibold">
          Create Account
        </button>
      </div>
    </div>
  );
};

export default Below;
