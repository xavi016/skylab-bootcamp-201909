const { Component } = React

class Header extends Component {
    constructor () {
        super()

        this.state = {show: 'land' , error: undefined}

        this.handleOnLogin = this.handleOnLogin.bind(this)
        this.handleOnRegister = this.handleOnRegister.bind(this)
        this.handleSearch = this.handleSearch.bind(this)
    }

    handleOnRegister (username, password, name, surname) {
        try {
            registerUser(name, surname, username, password, error => {
                if (error) this.setState({ error: error.message })
                else this.setState ( {show : 'login'} )
            })
        } catch (error) {
            this.setState({ error: error.message })
        }
    }

    handleOnLogin (username, password) {
        try {
            authenticateUser(username, password, error => {
                if (error) this.setState({ error: error.message })
                else this.setState ( {show : 'search'} )
            })
        } catch (error) {
            this.setState({ error: error.message })
        }
    }

    handleSearch (query) {
        debugger
        searchDucks(query, (error, ducks) => {
            if( error ) {
                alert ("error");
            } else {
                debugger
                {<Results onSearchEnd={ducks}/>}
            }
        })
    }

    render() {
        const {state : { show, error }, handleOnLogin, handleOnRegister, handleSearch} = this

        return <section className="header">
            <img className="header__image" src='./img/duck.png' onClick={ event => {
                event.preventDefault()
                //onStart()
            }}/>
            {((show === 'land') || (show === 'login')) && <Login onLogin={handleOnLogin}/>}
            {show === 'land' && <Register onRegister={handleOnRegister} error={error}/>}
            {show === 'search' && <Search onSearch={handleSearch} error={error}/>}
        </section>
    
    }
}
