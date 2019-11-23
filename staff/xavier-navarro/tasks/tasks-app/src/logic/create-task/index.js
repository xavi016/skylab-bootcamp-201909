const call = require('../../utils/call')
const { validate, errors: { ConflictError, NotFoundError } } = require('tasks-util')
const API_URL = process.env.REACT_APP_API_URL

module.exports = function (token, title, description) {
    validate.string(token)
    validate.string.notVoid('token', token)
    validate.string(title)
    validate.string.notVoid('title', title)
    validate.string(description)
    validate.string.notVoid('description', description)

    return (async () => {
        const res = await call(`${API_URL}/users`, {
            method: 'POST',
			headers: { 'Authorization': `Bearer ${token}`,
						'Content-Type': 'application/json'
					},
            body: JSON.stringify({ title, description })
        })

        if (res.status === 201) return JSON.parse(res.body).id
        
        // if (res.status === 400) throw new NotFoundError(JSON.parse(res.body).message)
        // if (res.status === 404) throw new NotFoundError(JSON.parse(res.body).message)

        throw new Error(JSON.parse(res.body).message)
    })()
}