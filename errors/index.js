const express = require('express')

// exports.catch404s = (req, res, next) => {
//     next({code: 404, msg:'Not Found'})
// }

exports.catch400 = (err, req, res, next) => {
    const errCodes = ['22P02', '42703', '23502'];
    if (errCodes.includes(err.code)) {
    res.status(400).send({code: 400, msg: 'Bad Request'})
    }
}