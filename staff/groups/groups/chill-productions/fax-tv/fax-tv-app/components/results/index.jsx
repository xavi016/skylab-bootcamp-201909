function Results({ items, onItemRender }) {
    return <div className="main__results _hidden">
                <ul className="results">
                    {items.map(item => onItemRender(item))}
                </ul>
            </div>
}