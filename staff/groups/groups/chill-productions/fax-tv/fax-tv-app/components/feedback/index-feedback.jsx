function Feedback({ message }) {
    return <section className="error">
        <div className="error__gif-container">
            <iframe src="https://giphy.com/embed/3o6ZsXFlVD1yHgxusE" width="100%" height="100%" style="position:absolute" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>
        </div>
        <p className="error__message">{message}</p>
    </section>
}

