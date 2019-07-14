const { connection } = require('../connection')
const { catch404s } = require('../errors/index')

exports.fetchUsers = ({ username }) => {
    return connection
        .select('*')
        .from('users')
        .where('username', username)
        .then(
            username => {
                if (username.length === 0) {
                    'console.log(404 detected)'
                } else {
                    return username[0]
                }
            })
}