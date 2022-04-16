import React from 'react'
import "./Header.css"
import { FiX, FiDribbble, FiMenu } from "react-icons/fi";


const Header = () => {
  return (
    <div className="header">
        <div className="container">
            <div className="logo-container">
                <a href="#">.my-world <FiDribbble /></a>
            </div>
            <ul className="menu">
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
            <div className="mobile-menu">
                <a href="#">Mobile Menu</a>
            </div>
        </div>
    </div>
  )
}

export default Header