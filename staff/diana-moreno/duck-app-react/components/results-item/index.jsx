function ResultsItem({ duck, item }) {
  return(
    <li className="duck duck--clicked">
      <h1 className='duck__title'>{duck.title}</h1>
      <img onClick={event => item(duck)}
        className='duck__image' src={duck.imageUrl}/>
      <button className='duck__button'>{duck.price}</button>
    </li>
  )
}