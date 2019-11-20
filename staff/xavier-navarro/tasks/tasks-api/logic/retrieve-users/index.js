
module.exports = function () {

    return new Promise((resolve, reject) => {
        const user = users.data

        users.persist().then(() => {
            resolve(user)
        })
    })
}