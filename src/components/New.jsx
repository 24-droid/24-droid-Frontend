import React from 'react'
import New1 from "../assets/New1.png"
import New2 from "../assets/New2.png"
import New3 from "../assets/New3.png"
const New = () => {
  return (
    <div>
        <div className='flex flex-col items-center justify-center mt-10 text-[#FDFDFD]'>
            <p className='text-sm'>HUGE UPDATE</p>
            <h2 className='mt-3 text-3xl font-extrabold mb-5 '> What's New?</h2>
            <p className='text-gray-500'>Here are some of the features of my AI WRAPPER</p>
        </div>
        <div className='flex justify-evenly mt-5 hover:cursor-pointer'>
            <div>
                <img src={New1} alt="Feature-Image" className='w-100 h-60 rounded-lg'/>
            </div>
            <div>
                <img src={New2} alt="Feature-Image" className='w-100 h-60 rounded-lg' />
            </div>
            <div>
                <img src={New3} alt="Feature-Image" className='w-100 h-60 rounded-lg'/>
            </div>
        </div>
    </div>
  )
}

export default New