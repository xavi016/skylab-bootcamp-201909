import React, { useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import MyContext from '../ProviderContext'

export default function() {
    const [toggleMenu, setToggleMenu] = useState(false)
    const { user } = useContext(MyContext)
    function onToggleMenu() {
        
        setToggleMenu(!toggleMenu)
    }

    return <header className="header">
    <input id="show-menu" name="modal" type="checkbox"/>
     <i  onClick={onToggleMenu} className="fas fa-bars hamburger__icon"></i>
    <Link to="/fds" className="logo"><img src="/images/flott.png" alt="Flott" className="logo__img"/></Link>
    <nav className={toggleMenu ? 'header__nav nav-show' : 'header__nav nav'}>
        <ul className="nav__menu menu">
            <li className="menu__item">Spots</li>
            <li className="menu__item">News</li>
            <li className="menu__item"><Link to="/fds" className="logo">Maps</Link></li>
            { user && <li className="menu__item">Following</li> }
            { user && <li className="menu__item"><Link to="/fds" className="logo">{user}</Link></li> }
        </ul>
    </nav>
</header>
}