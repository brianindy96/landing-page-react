import React from 'react'
import "./Header.css"

const Header = ({ countCartItems }) => {
  return (
    <header className="header-container">
        <div className="logo-cont">
            <h1>E-Commerce</h1>
        </div>
        <div className="links">
            <ul>
                <li><a href="/">Sign In</a></li>
                <li><a href="/">
                Cart {' '}
                {countCartItems? (
                    <button className="count">
                        {countCartItems}
                    </button>
                ):
                ''
                }
                </a></li>
            </ul>
        </div>
    </header>
  )
}

export default Header