import React from 'react'
import { Link } from 'react-router-dom'
// import './index.sass'
// import Feedback from '../Feedback'

export default function({ onRegister, error }) {
  
    return <section className="register">
        <form className="register__form form" onSubmit={function (event) {
            event.preventDefault()
            debugger
            const { name: { value: name }, surname: { value: surname }, email: { value: email }, username: { value: username }, password: { value: password } } = event.target

            onRegister(name, surname, email, username, password)
        }}>
            <h1 className="form__title">Sign up</h1>
            <input className="form__input" type="text" name="name" placeholder="Name" />
            <input className="form__input" type="text" name="surname" placeholder="Surname" />
            <input className="form__input" type="email" name="email" placeholder="E-mail" />
            <input className="form__input" type="username" name="username" placeholder="Username" />
            <input className="form__input" type="password" name="password" placeholder="Password" />
            <p>Select your dicipline</p>
            <div className="form__diciplines">
                <label for=""><input type="checkbox" name="diciplines[]" value="bmx"/> BMX</label>
                <label for=""><input type="checkbox" name="diciplines[]" value="roller"/>Roller</label>
                <label for=""><input type="checkbox" name="diciplines[]" value="skate"/>Skate</label>
                <label for=""><input type="checkbox" name="diciplines[]" value="longboard"/>Longboard</label>
            </div>
            <button className="btn-submit">Sign up</button>
            <Link className="login__back" to="/">Log in</Link>
        </form>

        {/* {error && <Feedback message={error} />} */}
    </section>
}