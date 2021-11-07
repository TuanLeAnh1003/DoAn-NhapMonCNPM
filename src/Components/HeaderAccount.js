import React from 'react'
import './HeaderAccount.css'

import Avatar from '../Assets/Images/avatar.png'

function HeaderAccount() {
    return (
        <div className="header-account">
            <img className="header-account-avatar" src={Avatar} alt="Avatar" />
            <p className="header-account-name">Nguyen Duy An</p>
            <i className="header-account-down fas fa-caret-down"></i>
        </div>
    )
}

export default HeaderAccount
