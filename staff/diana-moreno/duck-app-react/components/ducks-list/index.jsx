function DucksList({ ducks, item, error, handleFavorite, addDeleteFav }) {
  return(
    <section className='view'>
      <div className='view__list'>
        <ul className='duck__list'>
          { ducks && ducks.map((duck, index) => (
            <ResultsItem key={duck.id} duck={duck} item={item} handleFavorite={handleFavorite} addDeleteFav={addDeleteFav} />
          ))}
        </ul>
        <div className='feedback--search'>
        { error && <Feedback message={error} /> }
        </div>
      </div>
    </section>
  )
}
