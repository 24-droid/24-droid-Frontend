import React from 'react'
import logo from "../assets/AI.png"
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <div className='flex items-center justify-between z-100'>
        <div>
         <img src={logo} alt="Logo" className='w-20 ml-5' />
        </div>
        <div className=' hidden md:flex gap-10'>
            <Link to="/" className='text-[#FDFDFD] font-semibold hover:border-b-2 border-amber-50'>Home</Link>
            <Link to="/about" className='text-[#FDFDFD] font-semibold hover:border-b-2 border-amber-50'>About</Link>
            <Link to="/contact" className='text-[#FDFDFD] font-semibold hover:border-b-2 border-amber-50'>Contact</Link>
        </div>
        <div>
            <button className='text-[#FDFDFD] w-30 h-12 rounded-lg bg-gradient-to-r from-[#1c4cd0] to-[#761cd0] hover:cursor-pointer text-sm font-semibold mr-5'>Create Account</button>
        </div>
    </div>
  )
}

export default Navbar