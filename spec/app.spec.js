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
               expect(topics[0]).to.include.keys('description', 'slug')
            })
        });
    })
})
describe.only('./users/:username', () => {
    describe('GET', () => {
        it('GETS an object by username', () => {
            return request
            .get('/api/users/lurker')
            .expect(200)  
            .then(({body: {users}}) => {
                expect(users).to.eql(
                    {
                        username: 'lurker',
                        name: 'do_nothing',
                        avatar_url:
                          'https://www.golenbock.com/wp-content/uploads/2015/01/placeholder-user.png',
                      }
                    )
            })          
        })
    })
});
})