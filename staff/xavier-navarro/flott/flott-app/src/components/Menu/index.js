import React from 'react'
import { Link } from 'react-router-dom'

export default function() {
    return <header className="header">
    <input id="show-menu" name="modal" type="checkbox"/>
    <label className="header__hamburger hamburger" for="show-menu">
           <span> <i className="fas fa-bars hamburger__icon"></i></span>
    </label>
    <Link to="/fds" className="logo"><img src="/images/flott.png" alt="Flott" className="logo__img"/></Link>
    <nav className="header__nav nav">
        <ul className="nav__menu menu">
            <li className="menu__item">Spots</li>
            <li className="menu__item">News</li>
            <li className="menu__item">Maps</li>
            <li className="menu__item">Following</li>
            <li className="menu__item"><Link to="/fds" className="logo">Profile</Link></li>
        </ul>
    </nav>
</header>
}