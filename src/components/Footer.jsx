import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div>
        <footer className='flex justify-between bg-[#0a0b20]'>
        <p className=' flex items-center text-[#FDFDFD] ml-5 '>&#169;{new Date().getFullYear()} by 24-droid teams</p>
        <button className='text-[#FDFDFD] w-30 h-12 rounded-lg bg-gradient-to-r from-[#1c4cd0] to-[#761cd0] hover:cursor-pointer text-sm font-semibold mr-5'>
            <Link to="https://github.com/24-droid">Follow Me</Link>
        </button>
        </footer>
        
    </div>
  )
}

export default Footer