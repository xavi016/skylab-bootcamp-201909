function ResultItem({ item: { id, title, poster_path, year, isFav }, onClick, onFav }) {
    return <li className="results__item item">
                <a href="#" className="item" onClick={event => {
                            event.preventDefault()

                            onClick(id)
                        }}>
                    <img src={poster_path} className="item__poster" alt="Film"/>
                    <p className="item__title">{title}</p>
                    <p className="item__year">{year}</p>
                </a>
            </li>
}