const { fetchUsers } = require('../models/usersModels')

exports.getUsers = (req, res, next) => {
    fetchUsers(req.params)
    .then((users) => {
        res.status(200).send({users})
    })
    .catch(next)
}