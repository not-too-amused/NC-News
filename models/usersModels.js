const { connection } = require('../connection')

exports.fetchUsers = ({username}) => {
    return connection
.select('*')
.from('users')
.where('username', username)
.then(username => {
    return username[0]
})
}