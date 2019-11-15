const validate = require('../../utils/validate')
const users = require('../../data/users')()
const tasks = require('../../data/tasks')()
const { NotFoundError } = require('../../utils/errors')
module.exports = function (id) {
    debugger
    validate.string(id)
    validate.string.notVoid('id', id)
    return new Promise((resolve, reject) => {
        const taskPos = tasks.data.findIndex(task => task.id === id)
        if (taskPos === -1) return reject(new NotFoundError(`task with id ${id} not found`))
        tasks.data.splice(taskPos,1)
        tasks.persist().then(() => resolve(tasks)).catch(reject)
    })
}
