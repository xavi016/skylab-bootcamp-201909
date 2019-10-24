function UserData ({user, onLogOut, onShowFavorites}) {
    
    
    return <div>Bienvenido  <div>{user}</div>
                            <div>
                                <a className="link" onClick={ e => {
                                        e.preventDefault()
                                        onLogOut()
                                }
                                }> LogOut </a>
                            </div>
                            <div>
                                <a className="link" onClick={ e => {
                                        e.preventDefault()
                                        onShowFavorites()
                                }
                                }> Show Favorites </a>
                            </div>
           </div>
}