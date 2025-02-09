import React from 'react'

const Usage = () => {
  return (
    <div className='flex flex-col'>
        <div>
  <h1 className="text-4xl mt-12 mb-6 text-center font-bold bg-gradient-to-r from-[#8569d0] via-[#5092e8] to-[#698be6] bg-clip-text text-transparent">
    What Can You Use 24-DROID FOR?
  </h1>
</div>

        <div className='flex flex-col gap-5'>
            <div>
               <marquee behaviour="scroll" direction="left">
                <div className='flex gap-5'>
                <div className="bg-[#24313E] text-[#FDFDFD] text-sm md:text-lg w-84 h-15 text-center rounded-full pt-5">
                <h1>News or blogs</h1>
                </div>
                <div className="bg-[#24313E] text-[#FDFDFD] text-sm md:text-lg w-84 h-15 text-center rounded-full pt-5">
                <h1>Photo or image Stock</h1>
                </div>
                <div className="bg-[#24313E] text-[#FDFDFD] text-sm md:text-lg w-84 h-15 text-center rounded-full pt-5">
                <h1>AI platform or Image Generator</h1>
                </div>
                <div className="bg-[#24313E] text-[#FDFDFD] text-sm md:text-lg w-84 h-15 text-center rounded-full pt-5">
                <h1>Custom Projects</h1>
                </div>
                <div className="bg-[#24313E] text-[#FDFDFD] text-sm md:text-lg w-84 h-15 text-center rounded-full pt-5">
                <h1>Writing Blogs</h1>
                </div>
                </div>
               </marquee>
        </div>
        <div className='flex'>
               <marquee behaviour="scroll" direction="right">
               <div className='flex gap-5'>
                <div className="bg-[#24313E] text-[#FDFDFD] text-sm md:text-lg w-84 h-15 text-center rounded-full pt-5">
                <h1>Personal Doubts Solving</h1>
                </div>
                <div className="bg-[#24313E] text-[#FDFDFD] text-sm md:text-lg w-84 h-15 text-center rounded-full pt-5">
                <h1>Building Projects from scratch</h1>
                </div>
                <div className="bg-[#24313E] text-[#FDFDFD] text-sm md:text-lg w-84 h-15 text-center rounded-full pt-5">
                <h1>Staying updated with latest happenings</h1>
                </div>
                <div className="bg-[#24313E] text-[#FDFDFD] text-sm md:text-lg w-84 h-15 text-center rounded-full pt-5">
                <h1>Collaborate and Learn</h1>
                </div>
                </div>
               </marquee>
        </div>
    </div>
    </div>
  )
}

export default Usage