function DucksList({ ducks, item }) {
  return(
    <section className='view view__list'>
      <ul className='duck__list'>
        {ducks.map((duck, index) => (
          <ResultsItem key={index} duck={duck} item={item}/>
        ))}
      </ul>
    </section>
  )
}
