const { Component } = React

class Register extends Component { 
    constructor( { onRegister, error }) {
        super()
        
        this.state = { showMe : false }
        this.onRegister = onRegister
        this.error = error

        this.onShowMe = this.onShowMe.bind(this)
    }
    
    onShowMe() {

        const { state: { showMe } } = this
        this.setState ({showMe: !(showMe)})
    }

    render () { 
        const { state: { showMe, error }, onShowMe, onRegister } = this
        return <>
            <section className="sign-up">
                <h1 className="sign-up__title _hide"><a className="link" onClick={event=>{
                    event.preventDefault()
                    debugger
                    onShowMe()
                }}>Sign up</a></h1>
            {showMe && <>
                <form onSubmit={function (e){
                    debugger
                    e.preventDefault();
                    
                    const { username : { value : username },
                            password : { value : password },
                            name     : { value : name },
                            surname  : { value : surname }
                        } = e.target
                    
                    onRegister(username, password, name, surname);
                }}>
                    <label className="label">Enter your email: <br/><input type="email" name="username" placeholder="uremail@mail.com"/></label>
                    <label className="label">Enter your password: <br/><input type="password" name="password"/></label>
                    <label className="label">Name: <br/><input type="text" name="name" placeholder="name"/></label>
                    <label className="label">Surname: <br/><input type="text" name="surname" placeholder="surname"/></label>
                    <button className="sign-up__button" name="sign-up">LOGIN</button>
                </form>
                {error && <Feedback message={error} />}
                </>}
            </section>
        </>
    }
}