const { Component } = React
const { id, token } = sessionStorage
const { query } = location

class App extends Component {

  state = {
    view: 'login',
    error: undefined,
    ducks: undefined,
    item: undefined,
    name: '',
    query,
  }

  componentWillMount() {
    const { id, token } = sessionStorage

    if (id && token)
      try {
        retrieveUser(id, token, ({ name }) => {
          this.setState({ name: name, view: 'search' })
          this.initialRandom()
        })
      } catch (error) {
        this.setState({ error: error.message })
      }

    const { state: { query } } = this

    query && this.handleSearch(query)
  }

  handleGoToRegister = () => {
    this.setState({ view: 'register' })
  }

  handleGoToLogin = () => {
    this.setState({ view: 'login' })
  }

  handleGoToList = () => {
    this.setState({ view: 'search' })
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
    retrieveUser(id, token, ({ name }) => { //result.data.name
      this.setState({
        ...this.state,
        name: name,
      })
    })
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
    })
  }

  handleSearch = (query) => {
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
          view: 'search'
        })
      }
    })
  }

  handleDetail = (item) => {
    const id = item.id
    retrieveDuck(id, (error, duck) => {
      if (error) {
        this.setState({ error: error.message })
      } else {
        this.setState({
          ...this.state,
          item: duck,
          view: 'detail'
        })
      }
    })
  }
  /*
    handleFavorite = (id) => {
      // TODO toggleFavDuck(user-id, user-token, id)
      //console.log(id)
  */

  paintHeartsFav(id) {
    this.state.ducks.forEach(duck => {
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

  handleFavorite = (id) => {
    const userId = sessionStorage.id
    const userToken = sessionStorage.token

    this.paintHeartsFav(id)
    toggleFavDuck(userId, userToken, id, result => {
      console.log(result)
    })

  }

  /*  showFavorites = () => {
      this.setState({
        ...this.state,
        showFavorites: true
      })
    }*/


  render() {
    const { state: { view, error, item, ducks, name }, handleGoToRegister, handleGoToLogin, handleRegister, handleBackFromRegister, handleLogin, handleSearch, handleDetail, handleGoToList, handleFavorite } = this

    return < > { view === 'login' && <Login onLogin={handleLogin} onRegister={handleGoToRegister} error={error} /> }

    { view === 'register' && <Register onRegister={handleRegister} onBack={handleBackFromRegister} error={error} /> }

    { view === 'register-success' && <RegisterSuccess onBack={handleBackFromRegister} /> }

    {
      (view === 'search' || view === 'detail') &&
      <Search searchDucks={handleSearch} username={name} />
    }

    { view === 'search' && <DucksList ducks={ducks} item={handleDetail} error={error} handleFavorite= {handleFavorite} /> }

    { view === 'detail' && <Detail item={item} onBack={handleGoToList}/> } <
    />
  }
}

ReactDOM.render(<App />, document.getElementById('root'))