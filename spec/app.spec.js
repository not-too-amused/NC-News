process.env.NODE_ENV = 'test'
const { expect } = require('chai');
const app = require('../app');
const request = require('supertest')(app)
const { connection } = require('../connection')

describe('./api/',  () => {
beforeEach(() => {
    return connection.seed.run()
});
    after( ()=> {
        connection.destroy()
    })
describe('./topics', () => {
    describe('GET', () => {
        it('GETS an array of topics', () => {
            return request
            .get('/api/topics')
            .expect(200)
            .then(({body:{topics}}) => {
                console.log(topics,'<<<<<<<<')
               expect(topics[0]).to.include.keys('description', 'slug')
            })
        });
    })
})
describe.only('./users', () => {
    describe('GET', () => {
        it('GETS an object by username', () => {
            return request
            .get('/api/users/:username')
            .expect(200)            
        })
    })
});
})