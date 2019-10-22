function DucksList({ ducks, item }) {
  console.log(ducks)
  return(
    <section className='view view__list'>
      <ul className='duck__list'>
        {ducks.map(duck => (
          <ResultsItem duck={duck} item={item}/>
          ))
        }
      </ul>
    </section>
  )
}
