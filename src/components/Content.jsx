import React from 'react'
import Cat1 from "../assets/Cat1.png"
import Cat2 from "../assets/Cat2.png"
import Cat3 from "../assets/Cat3.png"
import Cat4 from "../assets/Cat4.png"
const Content = () => {
  return (
    <div className='blocks'>
        <div className='flex mt-10 mb-5 text-2xl text-[#FDFDFD] font-extrabold tracking-widest flex-col items-center'>
        <h1>Make AI-Powered Content</h1>
        <h1>On the Go</h1>
        </div>
        <div className='flex flex-col md:flex-row gap-5 items-center justify-center'>
            <div>
                <img src={Cat1} alt="Content-Image" className='w-60 h-55 rounded-3xl box'/>
                <h2 className='text-center text-[#FDFDFD] font-extrabold'>Midjourney</h2>
            </div>
            <div>
                <img src={Cat2} alt="Content-Image" className='w-60 h-55 rounded-3xl' />
                <h2 className='text-center text-[#FDFDFD] font-extrabold'>OpenAI</h2>
            </div>
            <div>
                <img src={Cat3} alt="Content-Image" className='w-60 h-55 rounded-3xl' />
                <h2 className='text-center text-[#FDFDFD] font-extrabold'>Stable Diffusion</h2>
            </div>
            <div>
                <img src={Cat4} alt="Content-Image" className='w-60 h-55 rounded-3xl' />
                <h2 className='text-center text-[#FDFDFD] font-extrabold'>Realistic Vision</h2>
            </div>
        </div>
    </div>
  )
}

export default Content