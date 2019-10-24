function Results({ onResult, duck}){
    return <section className="view ducks">
        <ul className="item-list" key={Math.random()} >
        {ducks.map(duck => <Results onResult={duck} />)}
        </ul>
    </section> 
    
}

