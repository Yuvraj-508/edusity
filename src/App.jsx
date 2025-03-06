import React, { useState } from 'react'
import Navbar from './Component/Navbar/Navbar'
import Hero from './Component/Hero/Hero'
import Program from './Component/Program/Program'
import Title from './Component/Title/Title'
import About from './Component/About/About'
import Campus from './Component/Campus/Campus'
import Testimonail from './Component/Testimonails/Testimonail'
import Contact from './Component/Contact/Contact'
import Fotter from './Component/Fotter/Fotter'
import Videoplayer from './Component/videoPlayer/videoplayer'
function App() {
  const[playState,setPlayState]=useState(false)
  return (
    <div className=''>
      <Navbar/>
      <Hero/>
      <div className="container">
        
      <Title subTitle="Our Program" title="What We Offer"/>
      <Program />
      <About setPlayState={setPlayState}/>
      <Title subTitle="Gallery" title="Campus Photos"/>
      <Campus/>
      <Title subTitle="TESTIMONIALS" title="What Student Says"/>
       <Testimonail/>
       <Title subTitle="Contact Us" title="Get in Touch"/>
       <Contact/>
       <Fotter/>

       </div>
       <Videoplayer playState={playState} setPlayState={setPlayState}/>
    </div>
  )
}

export default App

