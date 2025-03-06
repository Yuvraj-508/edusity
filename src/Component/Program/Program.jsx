import React from 'react'
import './program.css'
import program_1 from '../../assets/edusity_assets/program-1.png'
import program_2 from '../../assets/edusity_assets/program-2.png'
import program_3 from '../../assets/edusity_assets/program-3.png'
import program_icon_1 from '../../assets/edusity_assets/program-icon-1.png'
import program_icon_2 from '../../assets/edusity_assets/program-icon-2.png'
import program_icon_3 from '../../assets/edusity_assets/program-icon-3.png'

function Program() {
  return (
    <div className= ' programs w-[90%] flex items-center justify-between my-[80px] mx-auto '>
        <div className="program [flex-basis:31%]  relative  ">
            <img className='w-full block  rounded-xl ' src={program_1} alt="" />
            <div className="caption  absolute rounded-xl top-0 left-0 right-0 bottom-0 bg-[rgba(0,1,152,0.3)] flex items-center justify-center flex-col text-white cursor-pointer opacity-0 " >
              <img src={program_icon_1} alt="" className='w-15 mb-2.5'/>
              <p>Gradution Degree</p>
            </div>
        </div>
        <div className="program [flex-basis:31%] relative ">
            <img className='w-full block  rounded-xl' src={program_2} alt="" />
             <div className="caption absolute rounded-xl top-0 left-0 right-0 bottom-0 bg-[rgba(0,1,152,0.3)] flex items-center justify-center flex-col text-white cursor-pointer opacity-0">
              <img src={program_icon_2} alt="" className='w-15 mb-2.5'/>
              <p>Masters Degree</p>
            </div>
        </div>
        <div className="program [flex-basis:31%] relative">
            <img className='w-full block rounded-xl' src={program_3} alt="" />
             <div className="caption absolute rounded-xl top-0 left-0 right-0 bottom-0 bg-[rgba(0,1,152,0.3)] flex items-center justify-center flex-col text-white cursor-pointer opacity-0 ">
              <img src={program_icon_3} alt=""className='w-15 mb-2.5' />
              <p>Post Gradution</p>
            </div>
        </div>
      
    </div>
  )
}

export default Program
