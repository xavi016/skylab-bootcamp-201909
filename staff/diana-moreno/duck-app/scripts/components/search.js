class Search extends Component {
  constructor(container) {
    super(container)
  }

  onSubmit(expression) {
    this.container.addEventListener('submit', function(event) {
      event.preventDefault()
      const query = this.query.value
      expression(query)
      viewList.show()
      viewSingle.hide()
    })
  }
}
