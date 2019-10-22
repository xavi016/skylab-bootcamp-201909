function Register ({ onRegister }) {
    return <section className="sign-up">
        <h1 className="sign-up__title _hide"><a className="link">Sign up</a></h1>
            <form onSubmit={function (e){
                e.preventDefault();

                const { username : { value : username },
                        password : { value : password },
                        name     : { value : name },
                        surname  : { value : surname }
                    } = e.target
                onRegister(username, password,name, surname);
            }}>
                <label className="label">Enter your email: <br/><input type="email" name="username" placeholder="uremail@mail.com"/></label>
                <label className="label">Enter your password: <br/><input type="password" name="password"/></label>
                <label className="label">Name: <br/><input type="text" name="name" placeholder="name"/></label>
                <label className="label">Surname: <br/><input type="text" name="surname" placeholder="surname"/></label>
                <button className="sign-up__button" name="sign-up">LOGIN</button>
        </form>
        <section className="feedback hide">
            <span className="feedback__icon">🤡</span>
            <p className="feedback__message">Come with me...</p>
            <span className="feedback__icon">🎈</span>
        </section>  
    </section>
}