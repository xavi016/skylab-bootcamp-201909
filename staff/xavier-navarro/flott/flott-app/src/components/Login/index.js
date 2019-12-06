import React, { useState, useContext } from 'react'
import logic, { user } from '../../logic'
import { Link, withRouter } from 'react-router-dom'
import MyContext from '../ProviderContext'

export default withRouter(function ({ history }) {
    const { setUser } = useContext(MyContext)

    function handleSubmit(event){
        event.preventDefault()
        const { username: { value: username }, password: { value: password } } = event.target
        onLogin(username, password)
    }

    async function onLogin(username, password) {
        try {
            const token = await logic.user.authenticateUser(username, password)

            sessionStorage.token = token
            
            history.push('/home')

        } catch (error) {
            console.error(error)
        }
    }

    return <section className="login">
        <form className="login__form form" onSubmit={handleSubmit}>
            <h1 className="form__title">Log in</h1>
            <input className="form__input" type="username" name="username" placeholder="username" />
            <input className="form__input" type="password" name="password" placeholder="password" />
            <button className="btn-submit">Log in</button>
            <Link to="/register" className="login__back" >Register</Link>
        </form>
    </section>
})