import React, { useState, useEffect } from 'react';
import './index.sass'
import Menu from '../Menu'
import Search from '../Search'
import Home from '../Home'
import Register from '../Register'
import Login from '../Login'
import Footer from '../Footer'
import { Route, withRouter, Redirect } from 'react-router-dom'
import MyContext from '../ProviderContext'

export default withRouter(function ({ history }) {
    const [user, setUser] = useState(undefined)
    const { token } = sessionStorage
    
    useEffect(() => {
        (async () => {
            if (token) {
                const { name } = await retrieveUser(token)

                setUser(name)

                await retrieveTasks(token)
            }
        })()
    }, [setUser])

    

    return <MyContext.Provider value={{ user , setUser }}>  
                <Menu/>
                    <section className="spots__container spots">
                        <Search/>
                        <Route path="/" render={() => <Home/>} />
                    </section>
                    <Route path="/register" render={() => token ? <Redirect to="/" /> : <Register/>} />
                    <Route exact path="/login" render={() => token ? <Redirect to="/" /> : <Login/>} />
            {/* <Route path="/board" render={() => token ? <Board user={name} tasks={tasks} onLogout={handleLogout} onChangeTaskStatus={handleChangeTaskStatus} onNewTask={handleNewTask} /> : <Redirect to="/" />} /> */}
                <Footer/>
          </MyContext.Provider>
})