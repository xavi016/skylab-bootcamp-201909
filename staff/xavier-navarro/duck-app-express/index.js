const express = require('express')
const { View, Register, Login, Search, Detail } = require('./components')
const { registerUser, authenticateUser, retrieveUser, searchDucks, toggleFavDuck, retrieveDucks } = require('./logic')
const bodyParser = require('body-parser')
const session = require('express-session')
const FileStore = require('session-file-store')(session)

const { argv: [, , port = 8080] } = process
const app = express()

app.set('view engine', 'pug')
app.set('views', 'components')
app.use(express.static('public'))

app.use(session({
    store: new FileStore({
    }),
    secret: 'zhu.love.to.be.adri',
    saveUninitialized: true,
    resave: true
}))

const formBodyParser = bodyParser.urlencoded({ extended: false })

app.get('/', (req, res) => {
    res.send(View({body : Login({register: '/register'})}))
})
// REGISTER
app.route('/register')
  .get(function(req, res) {
    res.send(View({body: Register({path: '/login'})}))
  })
  .post(formBodyParser, (req, res) => {
    const { body: { name, surname, email, password } } = req

    try {
        registerUser(name, surname, email, password)
            .then(() => res.redirect('/'))
            .catch(({ message }) => res.send(View({ body: Register({ path: '/register', error: message }) })))
    } catch ({ message }) {
        res.send(View({ body: Register({ path: '/register', error: message }) }))
    }
})
// LOGIN
app.route('/login')
  .get((req, res) => {
    res.redirect('/')
  })
  .post(formBodyParser, (req, res) => {
      
    const { session, body: { email, password } } = req

    try {
        authenticateUser(email, password)
            .then(credentials => {
                const { id, token } = credentials
                session.userId = id
                session.token = token

                session.save(() => res.redirect('/search'))
            })
            .catch(({ message }) => {
                res.send(View({ body: Login({ path: '/login', error: message }) }))
            })
    } catch ({ message }) {
        res.send(View({ body: Login({ path: '/login', error: message }) }))
    }
})

// HOME

app.get('/search', (req, res) => {
    
    try {
        const { session, query: { q: query } } = req
        if (!session) return res.redirect('/')
        const { userId: id, token } = session
        if (!token) return res.redirect('/')
        let name

        retrieveUser(id, token)
            .then(user => {
                name = user.name

                if (!query) return res.send(View({ body: Search({ path: '/search', name, logout: '/logout' }) }))
                
                return searchDucks(id, token, query)
                    .then(ducks => {
                        session.query = query
                        session.view = 'search'

                        session.save(() => res.send(View({ body: Search({ path: '/search', query, name, logout: '/logout', results: ducks, favPath: '/fav', detailPath: 'duck' }) })))
                    })
            })
            .catch(({ message }) => res.send(View({ body: Search({ path: '/search', query, name, logout: '/logout', error: message }) })))
    } catch ({ message }) {
        res.send(View({ body: Search({ path: '/search', query, name, logout: '/logout', error: message }) }))
    }
})

// FAVORITES
app.post('/fav', formBodyParser, (req, res) => {
    
    try {
        const { session, body: { id: duckId } } = req

        if (!session) return res.redirect('/')
        const { userId: id, token, query } = session
        if (!token) return res.redirect('/')

        toggleFavDuck(id, token, duckId)
            .then(() => {
                let path
                view === 'search' ? path = `/search?q=${query}` : path =`/duck/${duckId}`
                res.redirect(path)
            })
            .catch(({ message }) => {
                res.send(View({ body: Search({ path: '/search', query, name, logout: '/logout', error: message }) }))
            })
    } catch ({ message }) {
        res.send(View({ body: Search({ path: '/search', query, name, logout: '/logout', error: message }) }))
    }
})

// DETAIL DUCK
app.get('/duck/:id', (req, res) => {
    try {
        const { session, params: { id: duckId } } = req
        if (!session) return res.redirect('/')
        const { userId: id, token, view, query } = session
        if (!token) return res.redirect('/')
        let backPath
        view === 'search' ? backPath = `/search?q=${query}` : backPath ='/'
        retrieveDucks(id, token, duckId)
            .then(duck => {
                res.send(View({ body: Detail({ item: duck, backPath, favPath: '/fav'}) }))   
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