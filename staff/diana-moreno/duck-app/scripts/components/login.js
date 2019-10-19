class Login extends Component {
  constructor(container) {
    super(container)
  }

  onSubmit(expression) {
    this.container.addEventListener('submit', function(event) {
      event.preventDefault()
      const username = this.username.value
      const password = this.password.value
      expression(username, password)
    })
  }
}
