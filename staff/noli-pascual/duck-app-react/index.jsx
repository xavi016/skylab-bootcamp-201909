
const { Component } = React

class App extends Component {
    constructor() {
        super()

        this.state = { view: 'landing', error: undefined, ducks: [], duck}

        this.handleGoToRegister = this.handleGoToRegister.bind(this)
        this.handleGoToLogin = this.handleGoToLogin.bind(this)
        this.handleRegister = this.handleRegister.bind(this)
        this.handleBackFromRegister = this.handleBackFromRegister.bind(this)
        this.handleLogin = this.handleLogin.bind(this)
        this.handleSearch = this.handleSearch.bind(this)
        this.handleBackFromLogin = this.handleBackFromLogin.bind(this)
    }

    // Register

    handleGoToRegister() {
        this.setState({ view: 'register' })
    }

    handleRegister(name, surname, email, password) {
        try {
            registerUser(name, surname, email, password, error => {
                if (error) this.setState({ error: error.message })
                else this.setState({ view: 'login' })
            })
        } catch (error) {
            this.setState({ error: error.message })
        }
    }

    handleBackFromRegister() {
        this.setState({ view: 'landing', error: undefined })
    }

   // Login 

    handleGoToLogin() {
        this.setState({ view: 'login'})
    }

    handleLogin(email, password) {
        try {
            authenticateUser(email, password, (error, data) => {
                if (error) {
                    this.setState({ error: error.message })
                   
                } else {
                    this.setState({ view: 'search'})
                    this.handleSearch('')
                }
            })

        } catch (error) {
            this.setState({ error: error.message })
        }
    }

    handleBackFromLogin() {
        this.setState({ view: 'landing', error: undefined })
    }

    // Search

    handleSearch(query) {
       
            try {

                searchDucks(query, (error, ducks) => {
                    if (error) {
                        this.setState({ error: error.message})
            
                    } else {

                        if(query.length === 0) {
                            ducks = ducks.shuffle().splice(0, 3)
                            this.setState({ ducks })
                        }
                        else {
                            this.setState({ ducks })
                        }
                    }
                })
                
            } catch (error) {
                this.setState({ error: error.message})
            }
    }

    handleDetail(id) {

        try {

            retrieveDuck(id, function() {

            })

        } catch (error) {
            
        }
    }



    render() {
        const { state: { view, error, ducks, duck}, handleGoToRegister, handleGoToLogin, handleRegister, handleBackFromRegister, handleSearch, handleLogin, handleBackFromLogin } = this

        return <>
            {view === 'landing' && <Landing onLogin={handleGoToLogin} onRegister={handleGoToRegister} />}
            {view === 'register' && <Register onRegister={handleRegister} onBack={handleBackFromRegister} error={error} />}
            {view === 'login' && <Login onLogin={handleLogin} onBack={handleBackFromLogin} error={error} />}
            {view === 'search' && <Search onSearch={handleSearch} error={error} /> <Results onResult = {ducks}}
            
            {view === 'results' && <Results onResult = 
            {view === 'duck' && <Detail onGoDetail = {handleDetail} />}
        </>
    }


}

// TODO login and search

ReactDOM.render(<App />, document.getElementById('root'))