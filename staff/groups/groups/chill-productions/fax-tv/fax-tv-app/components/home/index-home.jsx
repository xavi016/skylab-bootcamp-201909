const { Component } = React

class Home extends Component {
    constructor({user, error, onLogin}) {
        super()
        
        this.onLogin = onLogin
        this.user = user
        this.error = error

        this.state = { view: 'search', user: user, error: undefined}
    }
    componentDidMount() {
        this.handleDiscover()
    }
    handleSearch = (query) => {
        searchMovies(sessionStorage.id, sessionStorage.token, query, (error, results) => {
                if (error) return this.setState({ error: error.message })              
                this.setState({ view: 'results', results: results }) 
            })
    }
    handleDiscover = () => {
        discoverMovies(sessionStorage.id, sessionStorage.token, (error, results) => {
                if (error) return this.setState({ error: error.message })              
                this.setState({ view: 'results', results: results }) 
            })
    }
    
    handleBackToSearch = () => {
        this.setState({ view: 'search' })
    }
    handleDetail = (movie_id) => { debugger
        try { 
            retrieveMovie(sessionStorage.id, sessionStorage.token, movie_id, (error, _movie) => {debugger
                if (error) this.setState({ error: error.message })
                else this.setState({ view: 'detail', movie: _movie });
            })
        } catch (error) {
            this.setState({ error: error.message })
        }
    }
    handleFav = (id) => {
        try {
            retrieveUser(sessionStorage.id, sessionStorage.token, (error, data) =>{debugger
                if (error) this.setState({ error: error.message })
                else{
                    let favs
                    data.fav ? favs = data.fav :  favs = []

                    favs.includes(id) ? favs = data.fav.filter(a => a !== id) : favs.push(id)
                    
                    toggleFav(data.id, sessionStorage.token, { fav: favs }, (error, result) => {
                        if (error) this.setState({ error: error.message })
                    })
                }
            })
        } catch (error) {
            this.setState({ error: error.message })
        }
    }
    handleLogout = () => {
        sessionStorage.clear()   
        this.onLogin()
    }
        
    render() { 
        const { state: { view, results, movie },  handleSearch, handleLogout, user, error, handleDetail, handleFav,handleBackToSearch} = this

        return <main><> 
            {<Header user={user} onSearch={handleSearch} onLogout={handleLogout} error={error} />}  
            {view === 'results' && <Results items={results} onItemRender={item => <ResultItem item={item} key={item.id} onClick={handleDetail} onFav={handleFav} />} />}
            {view === 'detail' && <Detail item={movie} onBack={handleBackToSearch} />}

            {/* <Footer/> */}
        </></main>
    }
}