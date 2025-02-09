import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import New from '../components/New'
import Categories from '../components/Categories'
import Content from '../components/Content'
import Support from '../components/Support'
import Customer from '../components/Customer'
import Usage from '../components/Usage'
import Below from '../components/Below'
import Footer from '../components/Footer'
const Home = () => {
  return (
    <div className='bg-[#0a0b20] min-h-screen'>
        <Navbar />
        <Hero />
        <New />
        <Categories />
        <Content />
        <Support />
        <Customer />
        <Usage />
        <Below />
        <Footer />
    </div>
  )
}

export default Home