import React, { useState, useContext } from 'react'
import { Link, withRouter } from 'react-router-dom'
import logic, { user } from '../../logic'
import MyContext from '../ProviderContext'
// import Feedback from '../Feedback'

export default withRouter(function ({ history }) {
    const  [error, setError]  = useState()
    const { setUser } = useContext(MyContext)

    function handleSubmit (event) {
        event.preventDefault()
        let modalities = []
        
        const { 
            name: { value: name },
            surname: { value: surname },
            email: { value: email },
            username: { value: username },
            password: { value: password } 
        } = event.target
        
        if(event.target.roller.checked) modalities.push('roller')
        if(event.target.skate.checked) modalities.push('skate')
        if(event.target.longboard.checked) modalities.push('longboard')
        if(event.target.scooter.checked) modalities.push('scooter')
        if(event.target.bmx.checked) modalities.push('bmx')

        onRegister(name, surname, email, username, password, modalities)
    }

    async function onRegister(name, surname, email, username, password, modalities) {
        try {
            await logic.user.registerUser(name, surname, email, username, password, modalities)

            const token = await logic.user.authenticateUser(username, password)

            sessionStorage.token = token
            setUser(name)
            history.push('/home')
        } catch (error) {
            console.error(error)
        }
    }

    return <section className="register">
        <form className="register__form form" onSubmit={handleSubmit}>
            <h1 className="form__title">Sign up</h1>
            <input className="form__input" type="text" name="name" autoFocus placeholder="Name" />
            <input className="form__input" type="text" name="surname" placeholder="Surname" />
            <input className="form__input" type="email" name="email" placeholder="E-mail" />
            <input className="form__input" type="username" name="username" placeholder="Username" />
            <input className="form__input" type="password" name="password" placeholder="Password" />
            <p>Select your dicipline</p>
            <div className="form__diciplines">
                <label htmlFor=""><input type="checkbox" name="bmx" value="bmx"/> BMX</label>
                <label htmlFor=""><input type="checkbox" name="longboard" value="longboard"/>Longboard</label>
                <label htmlFor=""><input type="checkbox" name="scooter" value="scooter"/>Scooter</label>
                <label htmlFor=""><input type="checkbox" name="skate" value="skate"/>Skate</label>
                <label htmlFor=""><input type="checkbox" name="roller" value="roller"/>Roller</label>
            </div>
            <button className="btn-submit">Sign up</button>
            <Link className="login__back" to="/login">Log in</Link>
        </form>

        {/* {error && <Feedback message={error} />} */}
    </section>
})