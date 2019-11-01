function ResultItem({ item: { id, title, poster_path, year, isFav }, onClick, onFav }) {
    return <li className="results__item item">
                <a href="#" className="item__link" onClick={event => {
                            event.preventDefault()
                            
                            if(event.target.classList.contains("mov__fav")){
                                onFav(id,"discover")
                            } else{
                                onClick(id)
                            }

                        }}>
                    <img src={poster_path} className="item__poster" alt="Film"/>
                    {/* <p className="item__title">{title}</p> */}
                    {/* <p className="item__year">{year}</p> */}
                    <span className="mov__fav">{isFav ? "❤" : "💩"}</span>
                    <p className="item__details">View more details</p>
                </a>
            </li>
}