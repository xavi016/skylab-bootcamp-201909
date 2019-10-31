function Feedback({ message }) {
    return <section className="error">
        <div className="error__gif-container">
            <iframe src="https://media.giphy.com/media/3o6fJamNmAFtrlj4Zi/giphy.gif" className="giphy-embed" allowFullScreen></iframe>
        </div>
        <p className="error__message">{message}</p>
    </section>
}

