function Login ({onLogin}) {
    return <section className="login">
        <h1 className="login__title"><a className="link">Sign in</a></h1>
        <form className="login__form" onSubmit = {function (event) {
            event.preventDefault();
            const { username : {value : username},
                    password : {vale : password}
                } = event.target;
            onLogin(username, password); }
        }>
            <input type="email" name="username" placeholder="uremail@mail.com"/>
            <input type="password" name="password"/>
            <button className="login__button" name="login">LOGIN</button>
        </form>
        <section className="feedback hide">
            <span className="feedback__icon">🤡</span>
            <p className="feedback__message">Come with me...</p>
            <span className="feedback__icon">🎈</span>
        </section>
    </section>
}