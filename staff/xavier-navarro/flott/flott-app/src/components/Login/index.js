import React from 'react'
import { Link } from 'react-router-dom'

export default function({ onLogin, error }) {
    return <section className="login">
        <form className="login__form form" onSubmit={function (event) {
            event.preventDefault()

            const { username: { value: username }, password: { value: password } } = event.target

            onLogin(username, password)
        }}>
            <h1 class="form__title">Log in</h1>
            <input className="form__input" type="username" name="username" placeholder="username" />
            <input className="form__input" type="password" name="password" placeholder="password" />
            <button className="btn-submit">Log in</button>
            <Link to="/register" className="login__back" >Register</Link>
        </form>
    </section>
}