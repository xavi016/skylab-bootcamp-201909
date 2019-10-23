function Results ({ducks, onClickItem}) {

    const list = ducks.map ((duck,i) =>
        <ListItem key={i.toString()} onClickItem={onClickItem} value={duck}/>
    )
    return <ul className='search-list'>{list}</ul>
}