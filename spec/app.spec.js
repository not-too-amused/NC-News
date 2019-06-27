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
describe('./users/:username', () => {
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
describe.only('./articles/:article_id', () => {
    describe('GET', () => {
        it('GETS an article object by article_id', () => {
            return request
            .get('/api/articles/1')
            .expect(200)
            .then(({body: {articles}}) => {
                console.log(articles)
                expect(articles).to.eql(
                    { article_id: 1,
                        title: 'Living in the shadow of a great man',
                        body: 'I find this existence challenging',
                        votes: 100,
                        topic: 'mitch',
                        author: 'butter_bridge',
                        created_at: '2018-11-15T12:21:54.171Z',
                        comment_count: '13'  // <<< Is this OK as a string??
                    }
                )
            })

        })
    })
    
});
})