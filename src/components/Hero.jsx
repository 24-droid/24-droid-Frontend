import React from 'react'
import HeroLogo from "../assets/hero.png"
import "../index.css"
const Hero = () => {
  return (
    <div className='mt-2 h-full relative'>
        <img src={HeroLogo} alt="Hero" className='w-[80%]   mx-auto bg-cover rounded-3xl shadow-[0px_5px_30px_rgba(28,76,208,0.5)]'/>
        <button className=' absolute top-10 left-[45%] text-sm  text-white font-semibold rounded-lg w-30 bg-gradient-to-br from-[#fa7f3f] via-[#e92f4f] to-[#cb1a77]'>NEW UPDATE</button>
        <div className='text-center absolute top-[40%] left-[35%] text-[#FDFDFD]'>
        <h1 className='text-5xl font-extrabold typing-text '>Presenting AI WRAPPER- </h1>
        <h2 className='mt-10 text-3xl font-bold  '> 24-DROID</h2>
        </div>
    </div>
  )
}

export default Hero