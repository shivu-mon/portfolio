import React from 'react'
import './Hero.css'
import profile_img from '../../assets/profile_img.jpeg'
const Hero = () => {
    return (
        <div id='home' className='hero'>
            <div className="profile-border">
            <img className='profile-image' src={profile_img} alt="" />

            </div>
            <div className="hero-content">
                <h4 className='hi-there'>Hi There!</h4>
                <h1 className='my-name'>I'M SHIVA SANKAR</h1>
                <p className='hero-about-me'>I'M UI/UX Designer and Developer with over 5+ years of experience and beautiful web applications through carefully crafted design.</p>
                <div className="social-media-logos">
                    <p>int</p>
                    <p>fac</p>
                    <p>git</p>
                </div>
                <div className="hero-action">
                    <div className="more-about-me">
                        MORE ABOUT ME
                    </div>
                    <div className="my-portfolio">
                        MY PORTFOLIO
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero
