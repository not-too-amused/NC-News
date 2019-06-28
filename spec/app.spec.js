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
describe('./articles', () => {
    describe('GET', () => {
        it('GETS all articles, accepting sort and filter queries', () => {
            return request
            .get('/api/articles?author=rogersop&topic=cats')
            .expect(200)
            .then(({body: {articles}}) => {
                // console.log(articles)
                expect(articles).to.eql(
                    [
                        {   article_id: 5,
                            author: 'rogersop',
                            body: 'Bastet walks amongst us, and the cats are taking arms!',
                            comment_count: "2",
                            created_at: "2002-11-19T12:21:54.171Z",
                            title: 'UNCOVERED: catspiracy to bring down democracy',
                            topic: 'cats',
                            votes: 0           
                        }
                    ] 

                )
            }) 
        });
    })
})

describe('./articles/:article_id', () => {
    describe('GET', () => {
        it('GETS an article object by article_id', () => {
            return request
            .get('/api/articles/1')
            .expect(200)
            .then(({body: {articles}}) => {
                expect(articles).to.eql(
                    { article_id: 1,
                        title: 'Living in the shadow of a great man',
                        body: 'I find this existence challenging',
                        votes: 100,
                        topic: 'mitch',
                        author: 'butter_bridge',
                        created_at: '2018-11-15T12:21:54.171Z',
                        comment_count: '13'
                    }
                )
            })

        })
    })

    describe('PATCH', () => {               /////// RETURNING ARTICLE ID !!! ????? //////
        it('updates the value of votes by the specified amount', () => {
            return request
            .patch('/api/articles/1')
            .send({ inc_votes: 20})
            .expect(202)
            .then(({body: {articles}}) => {
                expect(articles).to.eql(
                    { article_id: 1,
                        title: 'Living in the shadow of a great man',
                        body: 'I find this existence challenging',
                        votes: 120,
                        topic: 'mitch',
                        author: 'butter_bridge',
                        created_at: '2018-11-15T12:21:54.171Z'
                    }   
                )
            })
        });
        
    });
    describe('POST', () => {
        it('takes an object of username and comment and responds with the posted comment', () => {
            return request
            .post('/api/articles/1/comments/')
            .send({
                username: 'test_user',
                body: 'test post'})
            .expect(201)
            // .then() => {
            //     expect().to.eql(
            //         {   body: 'test post',
            //             belongs_to: 'Living in the shadow of a great man',
            //             created_by: 'test_user',
            //             votes: 100,
            //             created_at: 1479818163389,
            //           }
            //     )
            // }
            })
        });
        
    });
describe('./comments/:comment_id', () => {
    describe('DELETE', () => {
        it('DELETES a comment by id', () => {
            return request
            .delete('/api/comments/1')
            .expect(204)
            })
        });
        
    
    
});    
})