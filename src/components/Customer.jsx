import React from 'react'
import Benefit1 from "../assets/Benefit1.png"
import Benefit2 from "../assets/Benefit2.png"
import Benefit3 from "../assets/Benefit3.png"
const Customer = () => {
  return (
    <div className='blocks'>
        <div className='flex flex-col items-center justify-center mt-10 text-[#FDFDFD]'>
            <p className='text-sm'>EASY & INTUITIVE</p>
            <h1 className='mt-3 text-5xl text-center font-extrabold mb-5 '>Customer Benefits</h1>
        </div>
        <div className='flex flex-col md:flex-row gap-10 justify-center items-center'>
            <div className='bg-[#13142B] flex flex-col items-center justify-center w-80 h-70'>
                <img src={Benefit1} alt="Feature-Image" className='w-40 h-40'/>
                <h2 className='font-extrabold text-[#FDFDFD] text-3xl'>XD Files Included</h2>
                <p className='text-gray-400'>Get sources files for free</p>
            </div>
            <div className='bg-[#13142B] flex flex-col items-center justify-center w-80 h-70'>
                <img src={Benefit2} alt="Feature-Image"  className='w-40 h-40'/>
                <h2 className='font-extrabold text-[#FDFDFD] text-3xl'>Buy Once,Use Forever</h2>
                <p className='text-gray-400'>Free Lifetime Updates</p>
            </div>
            <div className='bg-[#13142B] flex flex-col items-center justify-center w-80 h-70'>
                <img src={Benefit3} alt="Feature-Image"  className='w-40 h-40'/>
                <h2 className='font-extrabold text-[#FDFDFD] text-3xl'>Premium Plugins</h2>
                <p className='text-gray-400'>Bundled with the theme</p>
            </div>
        </div>
    </div>
  )
}

export default Customer