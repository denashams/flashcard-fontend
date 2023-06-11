import React from 'react'
import './contact.css'
import {MdOutlineMail} from 'react-icons/md'
import {BsWhatsapp} from 'react-icons/bs'

const Contact = () => {
  return (
    <section id='contact'>
        <div className="contact__heading">
      <h5>Get In Touch</h5>
      <h2>Contact Us</h2>
      </div>
      <div className="container contact__container">
        <div className="contact__options">
<article className='contact__option'>
  <MdOutlineMail className='contact__icon'/>
  <h4>Email</h4>
  <h5>matn-avis@gmail.com</h5>
  <a href="mailto:matn-avis@gmail.com" target="_blank" rel='noreferrer'>Send us an email</a>

</article>
<article className='contact__option'>
  <BsWhatsapp className='contact__icon'/>
  <h4>Whatsapp</h4>
  <h5>+9601234567899</h5>
  <a href="https://api.whatsapp.com/send?phone=+9601234567899" target="_blank" rel='noreferrer'>Send us a Message</a>

</article>

        </div>
        <form action="">

          <input type="text" name="name" placeholder='Enter Your Name' required />
          <input type="email" name="email" placeholder='Enter Your Email' required/>
          <textarea name="message" rows="7" placeholder='Enter Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact
