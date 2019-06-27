const { connection } = require('../connection')

exports.fetchUsers = ({username}) => {
    return connection
.select('*')
.from('users')
.where('username', username)
.then(username => {
    console.log(username[0])

    return username[0]
})
}