import React, { useState, useEffect } from 'react'
import './Navbar.css'
import logo from '../../assets/Black_And_White1.png'
import AnchorLink from 'react-anchor-link-smooth-scroll';

const Navbar = () => {
  const [menu, setMenu] = useState("home");



  return (
    <div className='navbar'>
      <p className='logo'>S  H  I  V  A</p>
      <ul className="nav-menu">
        <li>
          <AnchorLink className='navbar-anchor-link' href='#home'>
            <p onClick={() => setMenu("home")}>Home</p>
          </AnchorLink>
          {menu === "home" ? <div className="underline"></div> : null}
        </li>
        <li>
          <AnchorLink className='navbar-anchor-link' href='#about'>
            <p onClick={() => setMenu("about")}>About</p>
          </AnchorLink>
          {menu === "about" ? <div className="underline"></div> : null}
        </li>
        <li>
          <AnchorLink className='navbar-anchor-link' href='#resume'>
            <p onClick={() => setMenu("resume")}>Resume</p>
          </AnchorLink>
          {menu === "resume" ? <div className="underline"></div> : null}
        </li>
        <li>
          <AnchorLink className='navbar-anchor-link' href='#work'>
            <p onClick={() => setMenu("work")}>Work</p>
          </AnchorLink>
          {menu === "work" ? <div className="underline"></div> : null}
        </li>
        <li>
          <AnchorLink className='navbar-anchor-link' href='#contact'>
            <p onClick={() => setMenu("contact")}>Contact</p>
          </AnchorLink>
          {menu === "contact" ? <div className="underline"></div> : null}
        </li>
      </ul>
    </div>
  )
}

export default Navbar;
