exports.catch404s = (err, req, res, next) => {
    console.log(res, '<<< RES <<<')
    next({code: 404, msg:'Not Found'})
}


// res:
//       IncomingMessage {
//         statusMessage: 'Not Found',