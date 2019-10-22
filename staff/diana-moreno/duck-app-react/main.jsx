function handleGoToLogin() {
    debugger
}

function handleGoToRegister() {
    debugger
}

function handleRegister(name, surname, email, password) {
    debugger
}

// TODO login and search

ReactDOM.render(<>
    <Login onLogin={handleGoToLogin} onRegister={handleGoToRegister}  />
    <Register onRegister={handleRegister} />
</>, document.getElementById('root'))