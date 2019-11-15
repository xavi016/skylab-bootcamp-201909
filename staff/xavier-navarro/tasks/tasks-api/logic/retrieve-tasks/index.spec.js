const { expect } = require('chai')
const { random } = Math
const users = require('../../data/users')('test')
const tasks = require('../../data/tasks')('test')
const retrieveTasks = require('.')
const uuid = require('uuid/v4')
const { NotFoundError } = require('../../utils/errors')

describe.skip('logic - retrieve tasks user', () => {
    before(() => Promise.all([users.load(), tasks.load()]))

    let id, name, surname, email, username, password, tasksId = [], titles = [], descriptions = []

    beforeEach(() => {
        id = uuid()
        name = `name-${random()}`
        surname = `surname-${random()}`
        email = `email-${random()}@mail.com`
        username = `username-${random()}`
        password = `password-${random()}`

        users.data.push({ id, name, surname, email, username, password })

        for (let index = 0; index < 5; index++) {
            let title = `title-${random()}`
            let description = `description-${random()}`

            const task = {
                id: uuid(),
                user: id,
                title,
                description,
                status: 'TODO',
                date: new Date
            }
            titles.push(title)
            descriptions.push(description)
            tasks.data.push(task)
            tasks.persist().then(() => resolve(task.id)).catch(reject)
        }

    })

    it('should succeed retreaving all tasks from user', () =>
    retrieveTasks(id)
            .then(tasks => {
                tasks.forEach(task => {
                    expect(task).to.exist
                    expect(task.id).to.equal(id)
                    expect(task.name).to.equal(name)
                    expect(task.surname).to.equal(surname)
                    expect(task.email).to.equal(email)
                    expect(task.username).to.equal(username)
                    expect(task.password).to.be.undefined
                });
            })
    )

})