const { Component } = React

class Header extends Component {
    constructor () {
        super()

        this.state = {show: 'land' , error: undefined , ducksList : undefined , itemClick : false , userData : undefined}

        this.handleOnLogin      =   this.handleOnLogin.bind(this)
        this.handleOnRegister   =   this.handleOnRegister.bind(this)
        this.handleSearch       =   this.handleSearch.bind(this)
        this.handleClickItem    =   this.handleClickItem.bind(this)
        this.handleBack         =   this.handleBack.bind(this)
    }

    componentWillMount () {
        const { id }
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
            authenticateUser(username, password, (error, credentials) => {
                if (error) this.setState({ error: error.message })
                else { 
                    this.setState ( {show : 'search'} )
                    sessionStorage.setItem ('credentials', JSON.stringify(credentials))
                    retrieveUser (credentials.id, credentials.token, (error,userData) => {
                        if (error) {
                            alert ("error")
                        } else {
                            this.setState ( { userData : userData } )     
                        }
                    })
                    document.getElementsByClassName('header')[0].classList.add("header--login")
                    searchDucks('', (error, ducks) => {
                        if( error ) {
                            alert ("error");
                        } else {
                            this.setState( {ducksList : ducks})
                        }
                    })
                }
            })
        } catch (error) {
            this.setState({ error: error.message })
        }
    }

    handleSearch (query) {
        try {
            searchDucks(query, (error, ducks) => {
                if( error ) {
                    alert ("error")
                } else {
                    this.setState( {ducksList : ducks})

                }
            })
        } catch (error) {
            this.setState({ error: error.message })
        }
    }

    handleClickItem (id) {
        try {
            retrieveDuck(id, (error, duck) => {
                if ( error ) {
                    alert("error")
                } else {
                    this.setState( {itemClick : duck} )
                }
            })
        } catch (error) {
            this.setState({ error: error.message })
        }

    }

    handleBack () {
        this.setState ( { itemClick : false } )
    }

    render() {
        const {state : { show, error, ducksList , itemClick, userData}, handleOnLogin, handleOnRegister, handleSearch, handleClickItem, handleBack} = this
        return <>
            <section className="header">
                <img className="header__image" src='./img/duck.png' onClick={ event => {
                    event.preventDefault()
                }}/>
                { (userData) && <UserData user={userData}/> }
                { ((show === 'land') || (show === 'login') && !credentials) && <Login onLogin={handleOnLogin} error={error}/>}
                { (show === 'land' && !credentials) && <Register onRegister={handleOnRegister} error={error}/>}
                { show === 'search' && <Search onSearch={handleSearch} error={error}/>}
            </section>
            <main className="main">
                <section className="main__search" id="search-list">
                    {ducksList && !itemClick && <Results ducks={ducksList} onClickItem={handleClickItem}/>}
                </section>
                <section className="main__duck-detail duck-detail" id="duck-detail">
                    {itemClick && <Detail duck={itemClick} onBack={handleBack}/>}
                </section>
            </main>
            
        </>
    }
}
