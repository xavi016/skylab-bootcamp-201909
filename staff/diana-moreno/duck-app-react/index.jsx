const { Component } = React

class App extends Component {
  constructor() {
    super()

    this.state = {
      view: 'login',
      error: undefined,
      ducks: undefined,
      name: ''
    }

    this.handleGoToRegister = this.handleGoToRegister.bind(this)
    this.handleGoToLogin = this.handleGoToLogin.bind(this)
    this.handleRegister = this.handleRegister.bind(this)
    this.handleLogin = this.handleLogin.bind(this)
    this.handleBackFromRegister = this.handleBackFromRegister.bind(this)
    this.handleSearchDucks = this.handleSearchDucks.bind(this)
    this.handleDetail = this.handleDetail.bind(this)
    this.handleGoToList = this.handleGoToList.bind(this)
    this.handleRetrieveUser = this.handleRetrieveUser.bind(this)
  }

  handleGoToRegister() {
    this.setState({ view: 'register' })
  }

  handleGoToLogin() {
    this.setState({ view: 'login' })
  }

  handleGoToList() {
    this.setState({ view: 'list-ducks' })
  }

  handleBackFromRegister() {
    this.setState({ view: 'login', error: undefined })
  }

  handleRegister(name, surname, email, password) {
    try {
      registerUser(name, surname, email, password, error => {
        if (error) this.setState({ error: error.message })
        else this.setState({ view: 'register-success' })
      })
    } catch (error) {
      this.setState({ error: error.message })
    }
  }

  handleLogin(email, password) {
    try {
      authenticateUser(email, password, (error, result) => {
        if (error) {
          this.setState({ error: error.message })
        } else {
          this.setState({
            ...this.state,
            id: result.id,
            token: result.token,
            view: 'search-ducks'
          })
          this.initialRandomDucks()
          this.handleRetrieveUser(this.state.id, this.state.token)
        }
      })
    } catch (error) {
      this.setState({ error: error.message })
    }
  }

  handleRetrieveUser(id, token) {
    retrieveUser(id, token, (result) => {
      this.setState({
        ...this.state,
        name: result.data.name,
        surname: result.data.surname
      })
    })
  }

  initialRandomDucks() {
    searchDucks('', (error, ducks) => {
      if (error) {
        this.setState({ error: error.message })
      } else {
        ducks = ducks.shuffle().splice(0, 8)
        this.setState({
          ...this.state,
          ducks: ducks,
          view: 'list-ducks'
        })
      }
    })
  }

  handleSearchDucks(query) {
    searchDucks(query, (error, ducks) => {
      if (error) {
        this.setState({
          error: error.message,
          ducks: ''
        })
      } else {
        this.setState({
          ...this.state,
          ducks: ducks,
          view: 'list-ducks'
        })
      }
    })
  }

  handleDetail(item) {
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


  render() {
    const { state: { view, error, item, ducks, name }, handleGoToRegister, handleGoToLogin, handleRegister, handleBackFromRegister, handleLogin, handleSearchDucks, handleDetail, handleGoToList } = this

    return <>
      { view === 'login' && <Login onLogin={handleLogin} onRegister={handleGoToRegister} error={error} /> }

      { view === 'register' && <Register onRegister={handleRegister} onBack={handleBackFromRegister} error={error} /> }

      { view === 'register-success' && <RegisterSuccess onBack={handleBackFromRegister} /> }

      { (view === 'search-ducks' || view === 'list-ducks' || view === 'detail')
       && <Search searchDucks={handleSearchDucks} username={name} /> }

      { view === 'random-ducks' || view === 'list-ducks'  && <DucksList ducks={ducks} item={handleDetail} error={error}/> }

      { view === 'detail' && <Detail item={item} onBack={handleGoToList}/> }
      </>
  }
}

// TODO login and search

ReactDOM.render(<App />, document.getElementById('root'))