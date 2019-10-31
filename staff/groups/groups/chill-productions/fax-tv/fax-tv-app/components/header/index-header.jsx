function Header({ onLogout, onSearch, weather }) {

    return <header className="header">

        <nav className="main__nav nav" role="navigations">
            <div className="nav__logo"><p className="company-name">faxTV</p></div>
            <Weather weather={weather}/>
            <Search onSubmit={onSearch}/>
            <ul className="nav__menu menu">
                <li className="menu__item">
                    <i className="fas fa-user-circle"></i>
                    <i className="fas fa-ellipsis-v"></i>
                    <ul className="menu_sub">
                        <li className="menu_sub__item">Favorites</li>
                        <li className="menu_sub__item">My rating</li>
                        <li className="menu_sub__item">
                            <a href="" onClick={event => {
                                event.preventDefault()
                                onLogout()
                            }}>
                                <i className="fas fa-power-off"></i> Log Out
                            </a>
                        </li>
                    </ul>
                </li>
            </ul>
        </nav>
    </header>

}
