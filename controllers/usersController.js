const { fetchUsers } = require('../models/usersModels')

exports.getUsers = (req, res, next) => {
    fetchUsers(req)
    .then((users) => {
        res.status(200).send({users})
    })
    .catch(console.log)
}