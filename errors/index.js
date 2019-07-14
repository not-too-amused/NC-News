// const express = require('express')

exports.catch404s = (req, res, next) => {
    res.status(404).send()//{ code: 404, msg: 'Not Found' })
}

exports.catch400 = (err, req, res, next) => {
    const errCodes = ['22P02', '42703', '23502'];
    if (errCodes.includes(err.code)) {
        res.status(400).send({ code: 400, msg: 'Bad Request' })
    }
}

exports.handle405 = (req, res, next) => {
    res.status(405).send({ code: 405, msg: 'This method is not allowed on this endpoint' })
}