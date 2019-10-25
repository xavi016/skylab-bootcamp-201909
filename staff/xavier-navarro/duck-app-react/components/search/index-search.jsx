function Search({ onSearch, error, user }) {
    return <header className="header__container header">
                <div className="header__logo">
                    <img className="image" src="https://www.shareicon.net/download/2016/08/01/640067_internet_512x512.png" alt="DUCKGO"/>
                </div>
                <div className="header__company-name">
                    <h1 className="title">*DUCKSTAR*</h1>
                </div>
                <div className="header__home">
                    {user && <p>{user}</p>}
                </div>
                <div className="header__search search">
                    <form action="" id="duck-search" className="search__form" onSubmit={(event) => {
                        event.preventDefault()
                        const { search: { value: query } } = event.target
                        onSearch(query)
                    }}>
                        <input type="search" className="search__input" name="search" placeholder="Search"/>
                    </form>
                    {error && <Feedback message={error} />}
                </div>
            </header>
}