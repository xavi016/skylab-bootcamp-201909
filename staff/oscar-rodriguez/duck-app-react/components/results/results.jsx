function Results ({ducks, onClickItem}) {

    return <ul className='search-list'>
        { ducks.map ((duck) => <ListItem key={duck.id} onClickItem={onClickItem} value={duck}/> )}
    </ul>
}