import React from 'react'
import './About.css'
import about_img from '../../assets/edusity_assets/about.png'
import play_icon from '../../assets/edusity_assets/play-icon.png'

function About({setPlayState}) {
  return (
    <div className='about '>
      <div className="about-left relative">
        <img src={about_img} alt="" className='about-img w-full rounded-xl' />
        <img src={play_icon} alt="" className='play-icon absolute w-15 top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 cursor-pointer' onClick={() => setPlayState(true)}  />
      </div>
      <div className="about-right">
        <h3 className='font-semibold text-[16px] text-[#212EA0]'>ABOUT UNIVERSITY</h3>
        <h2 className='font-semibold text-[30px] text-[#000f38] max-w-[400px] my-2.5 mx-0'>Nurturing Tomorrow's Leaders Today</h2>
        <p className='text-[#676767]  mb-4'>Embark on a transformative educational journey with our university's comprehensive education programs. Our cutting-edge curriculum is designed to empower students with the knowledge, skills, and experiences needed to excel in the dynamic field of education.</p>
        <p className='text-[#676767]  mb-4'>With a focus on innovation, hands-on learning, and personalized mentorship, our programs prepare aspiring educators to make a meaningful impact in classrooms, schools, and communities.</p>
        <p className='text-[#676767]  mb-4'>Whether you aspire to become a teacher, administrator, counselor, or educational leader, our diverse range of programs offers the perfect pathway to achieve your goals and unlock your full potential in shaping the future of education.</p>
      </div>

    </div>
  )
}

export default About
