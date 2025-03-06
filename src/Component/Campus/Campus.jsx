import React from 'react'
import './Campus.css'
import gallery_1 from '../../assets/edusity_assets/gallery-1.png'
import gallery_2 from '../../assets/edusity_assets/gallery-2.png'
import gallery_3 from '../../assets/edusity_assets/gallery-3.png'
import gallery_4 from '../../assets/edusity_assets/gallery-4.png'
import white_arrow from '../../assets/edusity_assets/white-arrow.png'
function Campus() {
  return (
    <>
      <div className="campus ">
        <div className="gallery">
        <img src={gallery_1} alt="" />
        <img src={gallery_2} alt="" />
        <img src={gallery_3} alt="" />
        <img src={gallery_4} alt="" />
        </div>
        <button className='btn dark-btn bg-white text-[#212121] text-[16px] py-3 px-5 rounded-4xl cursor-pointer border-0 outline-0 inline-flex items-center justify-center gap-2'>See more here<img src={white_arrow} alt="" className='w-5' /></button>
      </div>
    </>
  )
}

export default Campus
