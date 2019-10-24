function UserData ({user}) {
    
    const {name} = user.data
    return <div>Bienvenido
                <a className="link">{name}</a>
           </div>
}