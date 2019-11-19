const database = require('./database')

const c1 = database('mongodb://localhost/hola-mundo')
const c2 = database()

let db1, db2

let p1, p2

p1 = c1.connect()
p2 = c2.connect()

Promise.all([p1.then(db => { db1 = db}), p2.then(db => { db2 = db })])
    .then(() => console.log(p1 === p2))
    .then(() => console.log(db1 === db2))

console.log(c1 === c2)