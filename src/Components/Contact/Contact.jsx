import React from 'react'
import './Contact.css'
import email from '../../assets/email.svg'
import call from '../../assets/call.svg'
import location from '../../assets/location.svg'

const Contact = () => {
    return (
        <div id='contact' className='contact'>
            <div className="contact-title">
                <p>GET IN TOUCH</p>
                <h1>Contact me</h1>
            </div>
            <div className="contact-section">
                <div className="contact-left">
                    <h1>
                        Let's talk
                    </h1>
                    <p>
                        Proficient in HTML, CSS, and Bootstrap for crafting visually appealing
                        and responsive user interfaces. Skilled in Python and Django for
                        backend development.

                    </p>
                    <div className="contact-details">
                        <div className="contact-detail">
                            <img src={email} alt="" /> <p>s3r3shiva@gmail.com</p>
                        </div>
                        <div className="contact-detail">
                            <img src={call} alt="" /> <p>+91 7356438102</p>
                        </div>
                        <div className="contact-detail">
                            <img src={location} alt="" /> <p>Kuttiady,Calicut,Kerala,India</p>
                        </div>
                    </div>
                </div>
                <div className="contact-right">
                    <label htmlFor="">Your Name</label>
                    <input type="text" placeholder='Enter your name' name='name' />
                    <label htmlFor="">Your Email</label>
                    <input type="email" placeholder='Enter your email' name='email' />
                    <label htmlFor="">Write your message here</label>
                    <textarea name="message" rows="8" placeholder='Enter your message'></textarea>
                    <button type='submit' className='contact-submit'>Submit now</button>
                </div>
            </div>

        </div>
    )
}

export default Contact
