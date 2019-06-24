const ENV = process.env.NODE_ENV || 'development';

const devData = require('./development-data')
const testData = require('./test-data')
const refObj = { development: devData, test: testData}

module.exports = refObj[ENV]