import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import New from '../components/New'
import Categories from '../components/Categories'
import Content from '../components/Content'
const Home = () => {
  return (
    <div className='bg-[#262626] min-h-screen'>
        <Navbar />
        <Hero />
        <New />
        <Categories />
        <Content />
    </div>
  )
}

export default Home