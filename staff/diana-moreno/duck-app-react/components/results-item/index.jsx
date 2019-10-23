const { Component } = React

class ResultsItem extends Component {
  state = {}

  render() {
    const { props: { duck, item } } = this
    return(
      <li className="duck duck--clicked">
        <i className="duck__favorite far fa-heart"></i>
  {/*      <i className="fas fa-heart"></i>*/}
        <h1 className='duck__title'>{duck.title}</h1>
        <img onClick={event => item(duck)}
          className='duck__image' src={duck.imageUrl}/>
        <button className='duck__button'>{duck.price}</button>
      </li>
    )
  }
}