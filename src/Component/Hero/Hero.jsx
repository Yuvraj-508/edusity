import React from 'react'
import './Hero.css'
import dark_arrow from '../../assets/edusity_assets/dark-arrow.png'
function Hero() {
  return (
    <div className=' hero w-full min-h-screen flex items-center justify-center
    
    '>
      <div className="hero-text text-center max-w-[800px] ">
        <h1 className='text-6xl font-semibold '>We Ensure better education for a Better world</h1>
        <p className='max-w-[700px] mt-[10px] mx-[auto] mb-[20px] leading-[1.4] '>Our cutting-edge curriculum is designed to empower students with the knowledge, skills, and experiences needed to excel in the dynamic field of education</p>
        <button className='bg-white text-[#212121] text-[16px] py-3 px-5 rounded-4xl cursor-pointer border-0 outline-0 inline-flex items-center justify-center gap-2'>Explore more <img src={dark_arrow} alt="" className='w-5 ' /></button>
      </div>
    </div>
  )
}

export default Hero
