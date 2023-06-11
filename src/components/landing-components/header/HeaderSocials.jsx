import React from 'react'
import { AiFillInstagram } from 'react-icons/ai'
import { AiOutlineTwitter } from 'react-icons/ai'
import { AiFillLinkedin } from 'react-icons/ai'



const HeaderSocials = () => {
  return (
    <div className='socials'>
      <a href="https://www.instagram.com/" target="_blank" rel="noreferrer" ><AiFillInstagram/></a>
      <a href="https://www.twitter.com/" target="_blank" rel="noreferrer" ><AiOutlineTwitter/></a>
      <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" ><AiFillLinkedin/></a>
    </div>
  )
}
export default HeaderSocials
