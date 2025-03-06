import React, { useEffect, useState } from 'react'
import logo from '../../assets/edusity_assets/logo.png'
import './Navbar.css'
import { Link} from 'react-scroll'
import menu_icon from '../../assets/edusity_assets/menu-icon.png'
function Navbar() {

  const [sticky ,setSticky]=useState(false);

  useEffect(()=>{
 window.addEventListener('scroll',()=>{
  window.scrollY > 500? setSticky(true):setSticky(false);
 })
  },[])

  const [toggle,setToggle] = useState(false)
   const toggleMenu=()=>{
    //  toggle?setToggle(false):setToggle(true);
    setToggle(prev=>!prev)
   }
  

  return (
    <nav className={`${sticky?'dark-nav':''} nav w-full  text-white py-1 px-0 fixed top-0 left-0 flex items-center justify-between z-10  `}>
      <img className=" logo w-46"  src={logo} alt="" />
    <Link></Link>
      <ul className={toggle?"":'mobile-menu'}> <li className='my-1 mx-5 text-[16px]  inline-block list-none'><Link to="hero" smooth={true} offset={0} duration={500}>Home</Link></li>
        <li className='my-1 mx-5 text-[16px]  inline-block list-none'><Link to="program" smooth={true} offset={-260} duration={500}>Program</Link></li>
        <li className='my-1 mx-5 text-[16px] inline-block list-none '><Link to="about" smooth={true} offset={-260} duration={500}>About us</Link></li>
        <li className='my-1 mx-5 text-[16px]  inline-block list-none'><Link to="campus" smooth={true} offset={-260} duration={500}>Campus</Link></li>
        <li className='my-1 mx-5 text-[16px]  inline-block list-none'><Link to="testimonails" smooth={true} offset={-260} duration={500}>Testimonials</Link></li>
        <li className='my-1 mx-5 text-[16px]  inline-block list-none'><Link to="contact" smooth={true} offset={-260} duration={500}><button className='bg-white text-[#212121] text-[16px] py-3 px-5 rounded-4xl cursor-pointer border-0 outline-0'>Contact uss</button></Link></li>
      </ul>
      <img src={menu_icon} alt="" className='menu-icon' onClick={toggleMenu} />
    </nav>
  )
}

export default Navbar
