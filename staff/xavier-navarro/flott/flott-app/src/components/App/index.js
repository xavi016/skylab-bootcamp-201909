import React from 'react';
import './index.sass'
import Menu from '../Menu'
import Register from '../Register'
import Login from '../Login'
import Footer from '../Footer'
import { Route, withRouter, Redirect } from 'react-router-dom'
import logic, { user } from '../../logic'

export default withRouter(function ({ history }) {
    // const [name, setName] = useState()

    async function handleRegister(name, surname, email, username, password) {
        try {
            await logic.user.registerUser(name, surname, email, username, password)

            history.push('/login')
        } catch (error) {
            console.error(error)
        }
    }

    function handleGoBack() { history.push('/') }

    async function handleLogin(username, password) {
        try {
            
            const token = await logic.user.authenticateUser(username, password)

            sessionStorage.token = token
            history.push('/home')

        } catch (error) {
            console.error(error)
        }
    }


    const { token } = sessionStorage

    return <>
        <Menu/>
        {/* <Route exact path="/" render={() => token ? <Redirect to="/board" /> : <Landing onRegister={handleGoToRegister} onLogin={handleGoToLogin} />} /> */}
        <Route path="/register" render={() => token ? <Redirect to="/board" /> : <Register onRegister={handleRegister} />} />
        <Route exact path="/" render={() => token ? <Redirect to="/login" /> : <Login onLogin={handleLogin} />} />
        {/* <Route path="/board" render={() => token ? <Board user={name} tasks={tasks} onLogout={handleLogout} onChangeTaskStatus={handleChangeTaskStatus} onNewTask={handleNewTask} /> : <Redirect to="/" />} /> */}
        <Footer/>
        </>
})