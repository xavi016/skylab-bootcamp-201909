const { expect } = require('chai')
const users = require('../../data/users')('test')
const tasks = require('../../data/tasks')('test')
const removeTasks = require('.')
const { random } = Math
const uuid = require('uuid')
describe('logic - remove tasks', () => {
    before(() => Promise.all([users.load(), tasks.load()]))
    let id, name, surname, email, username, password, taskIds, titles, descriptions
    beforeEach(() => {
        id = uuid()
        name = `name-${random()}`
        surname = `surname-${random()}`
        email = `email-${random()}@mail.com`
        username = `username-${random()}`
        password = `password-${random()}`
        users.data.push({ id, name, surname, email, username, password })
        taskIds = []
        titles = []
        descriptions = []
        for (let i = 0; i < 10; i++) {
            const task = {
                id: uuid(),
                user: id,
                title: `title-${random()}`,
                description: `description-${random()}`,
                status: 'REVIEW',
                date: new Date
            }
            tasks.data.push(task)
            taskIds.push(task.id)
            titles.push(task.title)
            descriptions.push(task.description)
        }
        for (let i = 0; i < 10; i++)
            tasks.data.push({
                id: uuid(),
                user: uuid(),
                title: `title-${random()}`,
                description: `description-${random()}`,
                status: 'REVIEW',
                date: new Date
            })
    })
    it('should succeed on correct remove task', () =>
        removeTasks(id)
            .then(response => {
                expect(response).to.exist
    console.log(reponse)                
            })
    )
    // TODO other test cases
})