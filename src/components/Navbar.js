import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Button from './Button'
import './Navbar.css'
const Navbar = () => {
    const [click, setClick] = useState(false)
    const [button, setButton] = useState(true)
    const handleClick = () => setClick(!click)
    const closeMobileMenu = () => setClick(false)
    useEffect(() => {
        showButton()
    }, [])
    const showButton = () => {
        if(window.innerWidth <= 960) {
            setButton(false)
        }
        else {
            setButton(true)
        }
    }
    window.addEventListener('resize',showButton)
    return (
        <>
            <nav className="navbar">
                <div className="navbar-container">
                    <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
                        HUNGNH
                        <i className="fab fa-typo3"></i>
                    </Link>
                    <div className="menu-icon" onClick={handleClick}>
                        <i className={click ? 'fas fa-times' : ' fas fa-bars'}></i>
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className="nav-item">
                            <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                                Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/about" className="nav-links" onClick={closeMobileMenu}>
                                About
                            </Link>
                        </li>                        
                        <li className="nav-item">
                            <Link to="/contact" className="nav-links" onClick={closeMobileMenu}>
                                Contact
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/sign-in" className="nav-links-mobile" onClick={closeMobileMenu}>
                                Sign In
                            </Link>
                        </li>
                    </ul>
                    {
                        button && <Button buttonStyle='btn--outline'
                        >SIGN IN</Button>
                    }
                </div>
            </nav>
        </>
    )
}

export default Navbar
