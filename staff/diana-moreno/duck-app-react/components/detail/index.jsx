function Detail({ item }) {
  return (
    <div className='duck duck--litle'>
      <h1 className='duck__title'>{item.title}</h1>
      <img className='duck__image' src={item.imageUrl} />
      <p className='duck__description duck__description--litle'>{item.description}</p>
      <div className='duck__container-buttons'>
        <p className='duck__button'>{item.price}</p>
        <button

        className='duck__button duck__button--back'>◀</button>
      </div>
    </div>
  )
}