import React from 'react'
import "./Header.css"
import { IconName } from "react-icons/fi";


const Header = () => {
  return (
    <div className="header">
        <div className="container">
            <div className="logo-container">
                <a href="#">.my-world </a>
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
        </div>
    </div>
  )
}

export default Header