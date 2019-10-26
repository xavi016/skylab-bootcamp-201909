const { Component } = React

const App = (() => {

const { id, token } = sessionStorage
const { pathname, query, hash } = location

return class extends Component {
  state = {
    view: id && token ? (hash? 'detail' : 'search') : 'login',
    error: undefined,
    ducks: undefined,
    item: undefined,
    name: '',
    query: '',
    favorites: []
  }

  UNSAFE_componentWillMount() {
    if (id && token)
      try {
        retrieveUser(id, token, (error, results) => { // falta errores
          this.setState({ name: results.name, view: 'search' })
        })
      } catch (error) {
        this.setState({ error: error.message })
      }

    if (hash) {
      if(this.state.view !== 'login' && this.state.view !== 'register') {
        const [, duckId] = hash.split('/duck/')
        this.handleDetail(duckId)
      }
    } else {
      const { state: { query } } = this

      query ? this.handleSearch(query) : this.initialRandom()
    }
  }

  handleGoToRegister = () => {
    this.setState({ view: 'register' })
  }

  handleGoToLogin = () => {
    this.setState({ view: 'login' })
  }

  handleGoToList = () => {
    location.hash = ''
    this.setState({ view: 'search' })
    if (this.state.query) this.handleSearch(this.state.query)
  }

  handleGoToFavs = () => {
    this.retrieveAndPrintFavs(this.state.ducks)
    this.setState({ ...this.state, view: 'favorites' })
  }

  handleBackFromRegister = () => {
    this.setState({ view: 'login', error: undefined })
  }

  handleRegister = (name, surname, email, password) => {
    try {
      registerUser(name, surname, email, password, error => {
        if (error) this.setState({ error: error.message })
        else this.setState({ view: 'register-success' })
      })
    } catch (error) {
      this.setState({ error: error.message })
    }
  }

  handleLogin = (email, password) => {
    try {
      authenticateUser(email, password, (error, result) => {
        if (error) {
          this.setState({ error: error.message })
        } else {
          sessionStorage.id = result.id
          sessionStorage.token = result.token
          this.setState({
            ...this.state,
            view: 'search'
          })
          this.initialRandom()

          this.handleRetrieveUser(result.id, result.token);
        }
      })
    } catch (error) {
      this.setState({ error: error.message })
    }
  }

  handleRetrieveUser = (id, token) => {
    retrieveUser(id, token, (error, results) => { //result.data.name
      this.setState({
        ...this.state,
        name: results.name,
      })
    })
  }

  retrieveAndPrintFavs = (ducks) => {
    const { id, token } = sessionStorage
    if (id && token) {
      retrieveFavDucks(id, token, (error, favs) => {
        if (error) return this.setState({ error: error.message })
        try{
          favs.forEach(fav => {
            fav.icon = true
            ducks.forEach(duck => {
              if (duck.id === fav.id) {
                duck.icon = true
              }
            })
          });
          this.setState({
            ...this.state,
            favorites: favs
          })
        } catch {
          this.setState({ error: error.message })
        }
      })
    }
  }

  initialRandom = () => {
    searchDucks('', (error, ducks) => {
      if (error) {
        this.setState({ error: error.message })
      } else {
        ducks = ducks.shuffle().splice(0, 8)
        this.setState({
          ...this.state,
          ducks: ducks,
          error: undefined
        })
      }
      this.retrieveAndPrintFavs(ducks)
    })
  }

  handleSearch = (query) => {
    try {
      searchDucks(query, (error, ducks) => {
        if (error) {
          this.setState({
            error: error.message,
            ducks: ''
          })
        } else {
          location.query = query;
          this.setState({
            ...this.state,
            ducks: ducks,
            view: 'search',
            query: query
          })
        }
        this.retrieveAndPrintFavs(ducks)
      })
    } catch(error) {
      this.setState({ error: error.message })
    }
  }

  handleDetail = (item) => {
    try {
      const idItem = typeof item === 'string' ? item : item.id
      location.slash = pathname
      location.hash = `/duck/${idItem}`

      retrieveDuck(idItem, (error, duck) => {
        if (error) {
          this.setState({ error: error.message })
        } else {
          const ducks = [duck];
          this.retrieveAndPrintFavs(ducks);
          this.setState({
            ...this.state,
            item: duck,
            view: 'detail'
          })
        }
      })
    } catch (error) {
      this.setState({ error: error.message })
    }
  }


  paintHeartsFav(id) {
    const allDucks = [...this.state.ducks, ...this.state.favorites]

    allDucks.forEach(duck => {
      if (duck.id === id && !duck.icon) {
        duck.icon = true; //true es favorito
      } else if (duck.id === id && duck.icon) {
        duck.icon = false;
      }
      this.setState({
        ...this.state,
      })
    })
  }

  handleFavorite = (idItem) => {
    const { id, token } = sessionStorage
    this.paintHeartsFav(idItem)
    toggleFavDuck(id, token, idItem, (error, result) => {
      console.log(error, result)
    })
  }


  render() {
    const { state: { view, error, item, ducks, name, favorites }, handleGoToRegister, handleGoToLogin, handleRegister, handleBackFromRegister, handleLogin, handleSearch, handleDetail, handleGoToList, handleFavorite, handleGoToFavs } = this

    return < > { view === 'login' && <Login onLogin={handleLogin} onRegister={handleGoToRegister} error={error} /> }

    { view === 'register' && <Register onRegister={handleRegister} onBack={handleBackFromRegister} error={error} /> }

    { view === 'register-success' && <RegisterSuccess onBack={handleBackFromRegister} /> }

    {
      (view === 'search' || view === 'detail' || view === 'favorites') &&
      <Search searchDucks={handleSearch} username={name} onFavs={handleGoToFavs} />
    }

    { view === 'search' && <DucksList ducks={ducks} item={handleDetail} error={error} handleFavorite= {handleFavorite} /> }

    { view === 'favorites' && <DucksList ducks={favorites} item={handleDetail} error={error} handleFavorite= {handleFavorite} /> }

    { view === 'detail' && <Detail item={item} onBack={handleGoToList}/> } <
    />
  }
}
})()