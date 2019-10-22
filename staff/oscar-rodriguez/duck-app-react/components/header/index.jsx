function handleOnRegister () {
    debugger
}

function handleOnLogin () {
    debugger
}

function Header({onStart}) {
    return <section className="header">
        <img className="header__image" src='./img/duck.png' onClick={ event => {
            event.preventDefault()
            onStart()
        }}/>
        <Login onLogin={handleOnLogin}/>
        <Register onRegister={handleOnRegister}/>
    </section>
}