import React from "react";
import Robot from "../assets/Robot.png";
const Support = () => {
  return (
    <div className="mt-20 blocks">
      <div className="flex mt-10 mb-5  text-[#FDFDFD] font-extrabold tracking-widest flex-col items-center text-center">
        <h2 className="text-6xl text-wrap">
          Free <span className="text-blue-800">AI Support</span> Update
        </h2>
        <h3 className="text-2xl mt-5">
          Save Your Time and Let AI Do Work for You
        </h3>
      </div>
      <div className="flex flex-col md:flex-row items-center justify-center">
      <div>
        <img src={Robot} alt="Robot" className="w-90 h-80 rounded-md" />
      </div>
      <div>
        <div className="w-30 h-10 rounded-xl text-center text-white font-semibold flex items-center justify-center bg-gradient-to-r from-[#8569d0] via-[#7a72d8] to-[#7578e6]">
        <span className="text-lg mr-1">•</span> It is FREE
        </div>
        <div className="w-60 mt-4 h-10 rounded-xl text-center text-white font-semibold flex items-center justify-center bg-gradient-to-r from-[#8569d0] via-[#7a72d8] to-[#7578e6]">
        <span className="text-lg mr-1">•</span>   Based on Open AI Assistant
        </div>
        </div>
      </div>
    </div>
  );
};

export default Support;
