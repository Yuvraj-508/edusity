import React, { useRef } from 'react'
import './videoplayer.css'
import video from '../../assets/edusity_assets/college-video-6XtGR-D3.mp4'
function videoplayer({playState,setPlayState,}) {
const players= useRef();
  
 const onClick =(e)=>{
    if(e.target===players.current){
        setPlayState(false)
    }
 } 

  return (
    <div className={`player ${playState?" ":'hide'}`} ref={players} onClick={onClick}>
      <video src={video} autoPlay muted controls ></video>
    </div>
  )
}

export default videoplayer
