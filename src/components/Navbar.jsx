import {useEffect, useRef, useState} from "react"
import {useNavigate} from "react-router-dom"

import "../styles/Navbar.css"

import gamor_logo from "../assets/images/_77b38776-37b9-4027-8ad9-1c77b2cad0ff.png"


function Navbar(props) {
    const [width, set_width] = useState(window.innerWidth)
    const [is_menu_open, set_is_menu_open] = useState(false)
    const [show_sign_in_button, set_show_sign_in_button] = useState(true)

    const navbar_menu = useRef()

    const navigate = useNavigate()

    const on_resize = () => {
        set_width(window.innerWidth)
    }

    const menu_style = {
        display: width > 992 ? 'flex' : is_menu_open ? 'block' : 'none'
    }

    useEffect(() => {
        if(
            window.location.pathname === "/sign-in/" ||
            window.location.pathname === "/sign-up/"
        ){
            set_show_sign_in_button(false)
        } else {
            set_show_sign_in_button(true)
        }
    }, [window.location.pathname])

    useEffect(() => {
        window.addEventListener('resize', on_resize)
    }, [])

    return (
        <nav className="navbar-component">
            <div
                className="navbar-container">
                <div className="navbar-logo">
                    <a href="/" onClick={() => navigate('/', set_is_menu_open(false))}>
                        <img src={gamor_logo} alt="Logo image" width={64} height={64}/>
                        <h1>Gamor</h1>
                    </a>
                </div>
                <ul className="navbar-menu-1" style={menu_style} ref={navbar_menu}>
                    <li className="navbar-link">
                        <a href="/">Home</a>
                    </li>
                    <li className="navbar-link">
                        <a href="/streams/">Streams</a>
                    </li>
                    <li className="navbar-link">
                        <a href="/party/">Party</a>
                    </li>
                    <li className="navbar-link">
                        <a href="/premium/">Premium</a>
                    </li>
                </ul>
                <div className="navbar-menu-2">
                    {
                        show_sign_in_button ?
                            <div>
                                <button
                                    type="button"
                                    className="navbar-sign-in-btn"
                                    onClick={() => navigate("/sign-in/", set_is_menu_open(false))}
                                >
                                    Sign in
                                </button>
                            </div>
                            :
                            null
                    }
                    <button
                        type="button"
                        className="navbar-hamburger-btn"
                        onClick={() => set_is_menu_open(!is_menu_open)}
                    >
                        <div className={`navbar-hamburger-line ${is_menu_open ? 'navbar-hamburger-first-line' : '' }`}></div>
                        <div className={`navbar-hamburger-line ${is_menu_open ? 'navbar-hamburger-middle-line' : '' }`}></div>
                        <div className={`navbar-hamburger-line ${is_menu_open ? 'navbar-hamburger-last-line' : '' }`}></div>
                    </button>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
