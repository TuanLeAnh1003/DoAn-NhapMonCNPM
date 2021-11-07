import React from 'react'
import './Header.css'
import HeaderSearch from './HeaderSearch'
import HeaderAccount from './HeaderAccount'

import Logo from '../Assets/Images/logo-white.png'

function Header() {
    return (
        <div className="header">
            <div className="header-top">
                <div className="header-top-logo">
                    <img className="header-top-logo-img" src={Logo} alt="logo" />
                </div>
                <HeaderSearch />
                <HeaderAccount />
            </div>

            <div className="header-bottom">

            </div>
        </div>
    )
}

export default Header
