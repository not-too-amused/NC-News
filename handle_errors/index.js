exports.catch404s = (err, req, res, next) => {
    next({code: 404, msg:'This page does not exist'})
}