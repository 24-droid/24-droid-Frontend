import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import New from '../components/New'
const Home = () => {
  return (
    <div className='bg-[#262626] min-h-screen'>
        <Navbar />
        <Hero />
        <New />
    </div>
  )
}

export default Home