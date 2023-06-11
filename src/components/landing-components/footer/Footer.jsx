import React from 'react'
import './footer.css'
import {AiFillInstagram} from 'react-icons/ai'
import {AiOutlineTwitter} from 'react-icons/ai'
import {AiFillLinkedin} from 'react-icons/ai'

const Footer = () => {
  return (
    <footer>
      <a href="/" className='footer__logo'>MATNAVIS</a>
      <ul className='permalinks'>
        <li>
<a href="/">Home</a>
<a href="#about">About</a>
<a href="#projects">Projects</a>
<a href="#services">Services</a>
<a href="#contact">Contact</a>
        </li>
      </ul>
      <div className='footer__socials'>
        <a href="https://instagram.com"><AiFillInstagram/></a>
        <a href="https://twitter.com"><AiOutlineTwitter/></a>
        <a href="https://linkedin.com"><AiFillLinkedin/></a>

      </div>
      <div className="footer__copyright">
        <small>&copy;MATNAVIS. All rights reserved</small>
      </div>
    </footer>
  )
}

export default Footer
