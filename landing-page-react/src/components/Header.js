import React, { useState } from 'react'
import "./Header.css"
import { FiX, FiDribbble, FiMenu } from "react-icons/fi";


const Header = () => {

    const [click, setClick] = useState(false)
   
    // Handling click and changes its status
    const handleClick = () =>{
        // if click = false, click => true; 
        // if click = true, click => false;
        setClick(!click);   
    }

    // Closing Mobile menu
    const closeMobileMenu = () =>{
        setClick(false);
    }

  return (
    <div className="header">
        <div className="container">
            <div className="header-container">
                <div className="logo-container">
                        <a href="#">.my-world <FiDribbble /></a>
                </div>
                <ul className="menu active">
                    <li className="menu-link">
                        <a href="#">PORTFOLIO</a>
                    </li>
                    <li className="menu-link">
                        <a href="#">ABOUT</a>
                    </li>
                    <li className="menu-link">
                        <a href="#">CONTACT</a>
                    </li>
                </ul>
                <div className="mobile-menu" onClick = {handleClick}>
                    {click ? (<FiX />) : (<FiMenu />)}
                </div>
            </div>
            
        </div>
    </div>
  )
}

export default Header