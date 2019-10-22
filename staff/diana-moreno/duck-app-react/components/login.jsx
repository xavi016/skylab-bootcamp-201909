/*import React, { Component, Fragment } from 'react';*/

function Login() {
/*  state = {}

  onSubmit(expression) {
    event.preventDefault()
    const username = this.username.value
    const password = this.password.value
    expression(username, password)
  }
*/
/*  render() {*/
    return(
      <div className='view view__login'>
        <h1 className='view__login--title'>Duck Store</h1>
        <form className="form form--login" method="POST">
          <input className='form__input' type="text" name="username"
            placeholder="email"/>
          <input className='form__input' type="password" name="password"
            placeholder="password"/>
          <button className='form__button form__button--login'>Login</button>
        </form>
        <button className='form__button form__button--register'>Create account</button>
        <div className='form__confirmation'></div>
        <img  className='view__login--image' src="./images/pato-madre-plano-patitos_23-2148282441.jpg" alt="family-ducks"/>
      </div>
    )
/*  }*/
}
/*
export default Login*/