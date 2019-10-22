const { Component } = React

class App extends Component {
  constructor() {
    super()

    this.state = {
      view: 'login',
      error: undefined,
      query: '',
      ducks: undefined
    }

    this.handleGoToRegister = this.handleGoToRegister.bind(this)
    this.handleGoToLogin = this.handleGoToLogin.bind(this)
    this.handleRegister = this.handleRegister.bind(this)
    this.handleLogin = this.handleLogin.bind(this)
    this.handleBackFromRegister = this.handleBackFromRegister.bind(this)
    this.handleSearchDucks = this.handleSearchDucks.bind(this)
    this.handleDetail = this.handleDetail.bind(this)
  }

  handleGoToRegister() {
    this.setState({ view: 'register' })
  }

  handleGoToLogin() {
    this.setState({ view: 'login' })
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
      authenticateUser(email, password, error => {
        if (error) {
          console.log(email, password)
          this.setState({ error: error.message})
          //errorMessageLogin.innerHTML = 'Username and/or password incorrect'
        } else {
          this.setState({view: 'search-ducks'})
          //initialRandomDucks()
        }
      })
    } catch(error) {
      //errorMessageLogin.innerHTML = 'Username and/or password incorrect'
      console.log('error')
    }
  }

  handleBackFromRegister() {
    this.setState({ view: 'login', error: undefined })
  }

  handleSearchDucks(query) {
    searchDucks(query, (error, ducks) => {
      if (error) {
      } else {
      this.setState({
        ...this.state,
        query: query,
        ducks: ducks,
        view: 'list-ducks'
      })
      }
    })
  }

  handleDetail(item) {
    console.log(item.id)
    const id = item.id
    retrieveDuck(id, (error, duck) => {
      if (error) {

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
    const { state: { view, error }, handleGoToRegister, handleGoToLogin, handleRegister, handleBackFromRegister, handleLogin, handleSearchDucks, handleDetail } = this

    return <>
      {view === 'login' && <Login onLogin={handleLogin} onRegister={handleGoToRegister} /> }
      {view === 'register' && <Register onRegister={handleRegister} onBack={handleBackFromRegister} /> }
      {view === 'register-success' && <RegisterSuccess onBack={handleBackFromRegister} /> }
      {view === 'search-ducks' && <Header searchDucks={handleSearchDucks}/> }
      {view === 'list-ducks' && <Header searchDucks={handleSearchDucks}/> }
      {view === 'list-ducks' && <DucksList ducks={this.state.ducks} item={handleDetail}/> }
      {view === 'detail' && <Header searchDucks={handleSearchDucks}/> }
      {view === 'detail' && <Detail item={this.state.item} /> }
    </>
  }
}

// TODO login and search

ReactDOM.render(<App />, document.getElementById('root'))