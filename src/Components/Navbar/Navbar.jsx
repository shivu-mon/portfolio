import React from 'react'
import './Navbar.css'
import logo  from '../../assets/Black_And_White1.png'

const Navbar = () => {
  return (
    <div className='navbar'>
      <img className='logo-img' src={logo} alt="" />
      <ul className="nav-menu">
        <li>Home</li>
        <li>About</li>
        <li>Resume</li>
        <li>Work</li>
        <li>Contact</li>
      </ul>
    </div>
  )
}

export default Navbar
