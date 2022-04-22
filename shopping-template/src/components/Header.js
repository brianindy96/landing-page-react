import React from 'react'
import "./Header.css"

const Header = () => {
  return (
    <header className="header-container">
        <div className="logo-cont">
            <h1>E-Commerce</h1>
        </div>
        <div className="links">
            <ul>
                <li><a href="/">Sign In</a></li>
                <li><a href="/">Cart</a></li>
            </ul>
        </div>
    </header>
  )
}

export default Header