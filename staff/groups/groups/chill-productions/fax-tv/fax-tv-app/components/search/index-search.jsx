function Search({ onSubmit, query }){

    return <div className="nav__search">
                <form className="nav__form" onSubmit={event => {
                    event.preventDefault()
                    const query = event.target.query.value
                    onSubmit(query)
                 }}> 
                    <input type="text" name="query" placeholder="Search..." className="input__search" defaultValue={query} />
                </form>
            </div>
}
