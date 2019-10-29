function Search({ onSubmit, query }){

    return <div className="nav__search">
                <form className="nav__form" onSubmit={event => {
                    event.preventDefault()

                    const query = event.target.query.value

                    onSubmit(query)
                 }}> 
                    <input type="search" name="query" placeholder="Search..." className="input__search" defaultValue={query} />
                
                   
                </form>
                
              

             

            </div>

}


// function Search({ onSubmit, results, error, onResultsRender, user, query, onLogout }) {} 

// <input className="search__criteria" type="text" name="query" placeholder="criteria" defaultValue={query} />

