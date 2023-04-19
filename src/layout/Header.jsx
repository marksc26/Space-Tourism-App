import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import './styles/Header.css'
import logo from '../assets/shared/logo.svg'
import burgerMenu from '../assets/shared/icon-hamburger.svg'
import close from '../assets/shared/icon-close.svg'

const Header = () => {

    const [menu, setMenu] = useState(false)

    const location = useLocation()

   
    const handleMenu = () => {
        setMenu(!menu)
    }

    const handleOption = () => {
        setMenu(!menu)
    }

  return (
    <header className='header'>

        <div className='logo'>
            <Link to='/'><img src={logo} alt="" /></Link>  
        </div>
        
        <div className={!menu ? "navbar" : "show-menu"}>

            
            <ul className="navbar-menu">
                <img className='closeIcon' onClick={() => setMenu(!menu)} src={close} alt="" />
                <Link onClick={handleOption} to='/'><li className={location.pathname === "/" ? "active" : ""}><span>00</span> HOME</li></Link>
                <Link onClick={handleOption} to='/destination'><li className={location.pathname === '/destination' ? "active" : ""}><span>01</span> DESTINATION</li></Link>
                <Link onClick={handleOption} to='/crew'><li className={location.pathname === "/crew" ? "active" : ""}><span>02</span> CREW</li></Link>
                <Link onClick={handleOption} to='/technology'><li className={location.pathname === "/technology" ? "active" : ""}><span>03</span> TECHNOLOGY</li></Link>
                
                
            </ul>


        </div>
            <div className='menuContainer'>
                <img onClick={handleMenu} className='menuIcon' src={burgerMenu} alt="" />                
            </div>
           



    </header>
  )
}

export default Header