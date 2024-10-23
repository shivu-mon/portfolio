import React from 'react'
import './Footer.css'
import linkedin from '../../assets/linkedin.svg'
import github from '../../assets/github.svg'
import instagram from '../../assets/instagram.svg'

const Footer = () => {
    return (
        <div className="footer-main">
            <div className='footer'>
                <div className="footer-top">
                    <div className="footer-top-left">
                        <h1>Shiva Sankar</h1>
                        <p>Proficient in HTML, CSS, Bootstrap, js for crafting visually appealing
                            and responsive user interfaces. Skilled in Python and Django for
                            backend development.</p>
                    </div>
                    <div className="footer-top-right">
                        <div className="footer-social-media">
                            <img src={linkedin} alt="" />
                        </div>
                        <div className="footer-social-media">
                            <img src={github} alt="" />
                        </div>
                        <div className="footer-social-media">
                            <img src={instagram} alt="" />
                        </div>
                        {/* <div className="footer-social-media">

                    </div> */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
