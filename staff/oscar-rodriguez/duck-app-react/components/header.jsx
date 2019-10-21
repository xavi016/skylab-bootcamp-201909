function Header({onStart}) {
    return <section className="header">
        <a onClick={ event => {
            event.preventDefault()
            onStart()
        }}><img className="header__image" src='./img/duck.png' /></a>
    </section>
}