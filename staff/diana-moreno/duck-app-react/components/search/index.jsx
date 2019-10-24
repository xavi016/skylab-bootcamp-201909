function Search({searchDucks, username, onFavs}) {
  return (
    <header className='header view__header'>
      <h1 className='header__title'>Duck Store</h1>
      <form onSubmit={event => {
          event.preventDefault()
          const query = event.target.query.value
          searchDucks(query)
        }}
        className='header__form form'>
        <input className='form__input' type="text" name="query" placeholder="search..." />
        <button className='form__button'>
          <i className="fas fa-search"></i>
        </button>
      </form>
      <p onClick={event => onFavs()}
      className='header__greeting'>Hello, {username}</p>
    </header>
  )
}
