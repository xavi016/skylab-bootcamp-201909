const express = require('express')
const { View, Register, Login, Search, Detail } = require('./components')
const { registerUser, authenticateUser, retrieveUser, searchDucks, toggleFavDuck, retrieveDucks } = require('./logic')
const { bodyParser, cookieParser } = require('./utils/middlewares')
const { argv: [, , port = 8080] } = process
const sessions = {}
const app = express()
// const router = express.Router()

app.use(express.static('public'))


app.get('/', (req, res) => {
    res.send(View({body : Login({register: '/register'})}))
})

// app.use(function (req, res, next) {
//     res.status(404).send("Sorry can't find that!")
//   })
// LOGIN
app.route('/login')
  .get((req, res) => {
    res.redirect('/')
  })
  .post(bodyParser, (req, res) => {
      
    const { body: { email, password } } = req

    try {
        authenticateUser(email, password)
            .then(credentials => {
                const { id, token } = credentials
                sessions[id] = { token }
                res.setHeader('set-cookie', `id=${id}`)
                res.redirect('/search')
            })
            .catch(({ message }) => {
                res.send(View({ body: Login({ path: '/login', error: message }) }))
            })
    } catch ({ message }) {
        res.send(View({ body: Login({ path: '/login', error: message }) }))
    }
})

// REGISTER
app.route('/register')
  .get(function(req, res) {
    res.send(View({body: Register({path: '/login'})}))
  })
  .post(bodyParser, (req, res) => {
    const { body: { name, surname, email, password } } = req

    try {
        registerUser(name, surname, email, password)
            .then(() => res.redirect('/'))
            .catch(({ message }) => res.send(View({ body: Register({ path: '/register', error: message }) })))
    } catch ({ message }) {
        res.send(View({ body: Register({ path: '/register', error: message }) }))
    }
})

// HOME

app.get('/search', cookieParser, (req, res) => {
    
    try {
        const { cookies: { id }, query: { q: query } } = req
        if (!id) return res.redirect('/')
        const session = sessions[id]
        if (!session) return res.redirect('/')
        const { token } = session
        if (!token) return res.redirect('/')
        let name

        retrieveUser(id, token)
            .then(user => {
                name = user.name

                if (!query) return res.send(View({ body: Search({ path: '/search', name, logout: '/logout' }) }))
                session.query = query
                return searchDucks(id, token, query)
                    .then(ducks => res.send(View({ body: Search({ path: '/search', query, name, logout: '/logout', results: ducks, favPath: '/fav', detailPath: 'duck' }) })))
            })
            .catch(({ message }) => res.send(View({ body: Search({ path: '/search', query, name, logout: '/logout', error: message }) })))
    } catch ({ message }) {
        res.send(View({ body: Search({ path: '/search', query, name, logout: '/logout', error: message }) }))
    }
})

// FAVORITES
app.post('/fav', cookieParser, bodyParser, (req, res) => {
    
    try {
        const { cookies: { id }, body: { id: duckId } } = req

        if (!id) return res.redirect('/')

        const session = sessions[id]

        if (!session) return res.redirect('/')

        const { token, query } = session

        if (!token) return res.redirect('/')

        toggleFavDuck(id, token, duckId)
            .then(() => res.redirect(`/search?q=${query}`))
            .catch(({ message }) => {
                res.send('TODO error handling')
            })
    } catch ({ message }) {
        res.send('TODO error handling')
    }
})

// DETAIL DUCK
app.get('/duck/:id', cookieParser, (req, res) => {
    try {
        debugger
        const { cookies: { id }, params: { id: duckId } } = req

        if (!id) return res.redirect('/')
        const session = sessions[id]
        if (!session) return res.redirect('/')
        const { token, query } = session
        if (!token) return res.redirect('/')
        // TODO control session, etc

        retrieveDucks(id, token, duckId)
            .then(duck => {
                // res.send(duck)   
                res.send(View({ body: Detail({ item: duck, path: '/search?q='+query}) }))   
            })
            .catch(({ message }) => {
                res.send("message")
            })
        
    } catch (error) {
        res.send("{message}" )
    }
})

app.use(function (req, res, next) {
    res.status(404).send("<h1>ERROR 404. View not found.</h1>")
})

app.listen(port, () => console.log(`server running on port ${port}`))