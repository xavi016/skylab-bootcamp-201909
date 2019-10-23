const { Component } = React

class Header extends Component {
    constructor () {
        super()

        this.state = {show: 'land' , error: undefined , ducksList : undefined , itemClick : false}

        this.handleOnLogin      =   this.handleOnLogin.bind(this)
        this.handleOnRegister   =   this.handleOnRegister.bind(this)
        this.handleSearch       =   this.handleSearch.bind(this)
        this.handleClickItem    =   this.handleClickItem.bind(this)
        this.handleBack         =   this.handleBack.bind(this)
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
                else { 
                    this.setState ( {show : 'search'} )
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
        searchDucks(query, (error, ducks) => {
            if( error ) {
                alert ("error");
            } else {
                this.setState( {ducksList : ducks})

            }
        })
    }

    handleClickItem () {
        debugger
    }

    handleBack () {
        debugger
    }

    render() {
        const {state : { show, error, ducksList , itemClick}, handleOnLogin, handleOnRegister, handleSearch, handleClickItem, handleBack} = this

        return <>
            <section className="header">
                <img className="header__image" src='./img/duck.png' onClick={ event => {
                    event.preventDefault()
                }}/>
                {((show === 'land') || (show === 'login')) && <Login onLogin={handleOnLogin}/>}
                {show === 'land' && <Register onRegister={handleOnRegister} error={error}/>}
                {show === 'search' && <Search onSearch={handleSearch} error={error}/>}
            </section>
            <main className="main">
                <section className="main__search" id="search-list">
                    {ducksList && <Results ducks={ducksList} onClickItem={handleClickItem}/>}
                </section>
                <section className="main__duck-detail duck-detail" id="duck-detail">
                    {itemClick && <Detail duck={itemClick} onBack={handleBack}/>}
                </section>
            </main>
        </>
    }
}
