import React,{useRef} from 'react'
import './contact.css'
import {MdOutlineMail} from 'react-icons/md'
import {RiMessengerFill,RiWhatsappFill} from 'react-icons/ri'
import emailjs from 'emailjs-com';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_ezuhfym', 'template_oheyu0p', form.current, 'cfDplNm5sQ_UfsxmU')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

      e.target.reset();
  };

  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">

          <article className="contact__option">
            <MdOutlineMail className="contact__option-icon"/>
            <h4>Email</h4>
            <h5>DanielRangel2417@gmail.com</h5>
            <a href="mailto:danielrangel2417@gmail.com" target="_blank">Send a message</a>
          </article>
         
          <article className="contact__option">
            <RiMessengerFill className="contact__option-icon"/>
            <h4>Messenger</h4>
            <h5>Daniel Rangel Ll</h5>
            <a href="https://m.me/danielrangel001" target="_blank">Send a message</a>
          </article>

          <article className="contact__option">
            <RiWhatsappFill className="contact__option-icon"/>
            <h4>Whatsapp</h4>
            <h5>+57 3014869343</h5>
            <a href="https://api.whatsapp.com/send?phone+573014869343" target="_blank">Send a Whatsapp</a>
          </article>
        </div>

        <form ref={form} onSubmit={sendEmail}>
            <input type="text" name="name" placeholder="Your Full Name" required/>
            <input type="email" name="email" placeholder="Your Email" required />
            <textarea name="message" rows="7" placeholder="Your Message" required></textarea> 
            <button type="submit" className="btn btn-primary">Send Message</button>           
      
          </form>

      </div>
    </section>
  )
}

export default Contact