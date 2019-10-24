function Detail (onGoDetail, onBack, error) {
    
    return <section className = "view duck _hide">

        <h2 className="detail__title"> Duck </h2>
        <img className="detail__image" src="https://fakeimg.pl/500x300/?text=Hello" />
        <p className="detail__description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate neque omnis
            sunt dolor repellat incidunt voluptates odio eos consequatur corrupti. Accusantium porro minima molestias
            voluptatem dolor nobis! Perspiciatis, vero maiores!</p>
        <a className="detail__store" href="#">Go to store</a>
        <span className="detail__price">10€</span>
        <a className="detail__back" href="#" onClick = {vent => {

            event.preventDefault()
            onBack()

        }}>Go back</a>


        {error && <Feedback message={error} />}
    
    </section>    hhhhh
}
