import React, { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import {Link} from 'react-scroll'


import logo from '../assets/images/logo.png'
import './Navbar.scss'

const Navbar = () => {

    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click)


    const [navbar, setNavbar] = useState(false)

    const changeBackground = () =>{
        if(window.scrollY >= 20){
            setNavbar(true)
        }else{
            setNavbar(false)
        }
    }

    window.addEventListener('scroll', changeBackground);

    const closeMenu = () => setClick(false)

    return (
        <div className={navbar ? "header active" : "header"}>
            <nav className='navbar'>
                <a href='/' className='logo'>
                    <img src={logo} alt='logo' height={30}/>
                </a>
                <div className='hamburger' onClick={handleClick}>
                    {click ? (<FaTimes size={30} style={{ color: '#ffffff' }} />)
                        : (<FaBars size={30} style={{ color: '#ffffff' }} />)}

                </div>
                <ul className={click ? "nav-menu active" : "nav-menu"}>
                    <Link className=' nav-item active' to="slider" spy={true} smooth={true} offset={-100} duration={50}  onClick={closeMenu}>Home</Link>
                    <Link className=' nav-item active' to="about" spy={true} smooth={true} offset={-100} duration={50} onClick={closeMenu}>About Us</Link>
                    <Link className=' nav-item active' to="service" spy={true} smooth={true} offset={-100} duration={50} onClick={closeMenu}>Our Service</Link>
                    <Link className='  nav-item active' to="gallery" spy={true} smooth={true} offset={-100} duration={50} onClick={closeMenu}>Gallery</Link>
                    <Link className='  nav-item active' to="contact" spy={true} smooth={true} offset={-100} duration={50} onClick={closeMenu}>Contact us</Link>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar
