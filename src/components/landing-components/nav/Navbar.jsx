import React from 'react'
import './navbar.css'
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {BiBookAlt} from 'react-icons/bi'
import {MdOutlineDesignServices} from 'react-icons/md'
import {TbMessages} from 'react-icons/tb'
import { useState } from 'react'




const Navbar = () => {
  const [activeNav, setActiveNav] = useState('/')
  return (
    <nav>
      <a href="/" title="Home" onClick={() => setActiveNav('/')}className={activeNav === '/' ? 'active': ''}><AiOutlineHome/></a>
      <a href="#about" title="About us" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active': ''} ><AiOutlineUser/></a>
      <a href="#projects" title="Projects" onClick={() => setActiveNav('#projects')}className={activeNav === '#projects' ? 'active': ''}><BiBookAlt/></a>
      <a href="#services" title="Services" onClick={() => setActiveNav('#services')}className={activeNav === '#services' ? 'active': ''}><MdOutlineDesignServices/></a>
      <a href="#contact" title="Contact us" onClick={() => setActiveNav('#contact')}className={activeNav === '#contact' ? 'active': ''}><TbMessages/></a>
      
    </nav>
  )
}

export default Navbar
