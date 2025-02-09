import React from 'react';
import HeroLogo from "../assets/hero.png";
import "../index.css";

const Hero = () => {
  return (
    <div className='mt-2 h-full relative'>
      {/* Hero Image */}
      <img src={HeroLogo} alt="Hero" className='w-full md:w-[80%] mx-auto bg-cover rounded-3xl shadow-[0px_5px_30px_rgba(28,76,208,0.5)]'/>

      {/* New Update Button */}
      <button className='absolute top-5 md:top-10 left-[35%] md:left-[45%] text-xs md:text-sm text-white font-semibold rounded-lg px-4 py-2 bg-gradient-to-br from-[#fa7f3f] via-[#e92f4f] to-[#cb1a77]'>
        NEW UPDATE
      </button>

      {/* Text Section */}
      <div className='text-center absolute top-[30%] md:top-[40%] left-[10%] md:left-[35%] text-[#FDFDFD] w-[80%] md:w-auto'>
        <h1 className='text-2xl md:text-5xl font-extrabold typing-text'>Presenting AI WRAPPER-</h1>
        <h2 className='mt-5 md:mt-10 text-lg md:text-3xl font-bold'>24-DROID</h2>
      </div>
    </div>
  );
};

export default Hero;
