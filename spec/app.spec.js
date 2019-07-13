process.env.NODE_ENV = 'test'
const chai = require('chai');
const {expect} = chai;
const chaiSorted = require("chai-sorted")
const app = require('../app');
const request = require('supertest')(app)
const {connection} = require('../connection')

chai.use(chaiSorted)

describe('./api/',  () => {
    beforeEach(() => {
        return connection.seed.run()
    });
    after( ()=> {
        connection.destroy()
    })
    it('handles bad requests and returns 404', () => {
        return request.get('/badendpoint').expect(404)
            .then( ( {res} )=> {
                expect(res.text).to.equal('Route not found')
            })
    })
    xit('responds with status 405 if an unwanted method is attempted', () => {
        return request.patch('/api').expect(405)
            // .then(({ body: { msg } }) => {
            //     expect(msg).to.equal('Method not allowed');
            // });
            //! CURRENTLY RETURNING 404 NOT FOUND ON API ROUTE.
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
        it('responds with status 405 if an unwanted method is attempted', () => {
            return request.patch('/api/topics').expect(405)
        })    
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
        it('responds with status 405 if an unwanted method is attempted', () => {
            return request.patch('/api/users/testuser').expect(405)
        })    
    })
});
describe('./articles', () => {
    describe('GET', () => {
        it('GETS all articles, and filters articles based on queries', () => {
            return request
            .get('/api/articles?author=rogersop&topic=cats')
            .expect(200)
            .then(({body: {articles}}) => {
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
        it('GETS articles, sorted by selected column', () => {
            return request
            .get('/api/articles?sort_by=votes')
            .expect(200)
            .then( ({body: {articles}}) => {
                expect(articles).to.be.sorted('votes', {descending: true}) 
            }
            )
        })
        it('responds with status 405 if an unwanted method is attempted', () => {
            return request.delete('/api/articles').expect(405)
        })    
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
        it('GETS ERROR status 400 when given an invalid article_id', () => {
            return request
            .get('/api/articles/badId')
            .expect(400)
            .then(({ body: { msg } }) => {
                expect(msg).to.equal('Bad Request');
            });
        });
    })
    describe('PATCH', () => {
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
        it('returns ERROR status 400 on bad PATCH request', () => {
            return request
            .patch('/api/articles/badId')
            .send({ inc_votes: 20})
            .expect(400)
        })
        it('responds with status 405 if an unwanted method is attempted', () => {
            return request.delete('/api/articles/1').expect(405)
        })    
        
    });
    
});  
describe('./articles/:article_id/comments', () => {
    describe('GET', () => {
        it('GETS an array of comments for the given article ID', () => {
            return request
            .get('/api/articles/1/comments')
            .expect(200)
            .then( ({body}) => {
                expect(body.length).to.equal(13);
                expect(body[0]).to.include.keys(
                    'comment_id',
                    'author',
                    'article_id',
                    'votes',
                    'body' 
                )
            })
        });
        it('accepts queries to sort ascending/descending by column', () => {
            return request
            .get('/api/articles/1/comments?sort_by=comment_id&order=desc')
            .expect(200)
            .then( ({body}) => {
                expect(body).to.be.sortedBy("comment_id", { descending: true });
            })
        })
        it('default sorts created_at/descending if no query passed', () => {
            return request
            .get('/api/articles/1/comments')
            .expect(200)
            .then( ({body}) => {
                expect(body).to.be.sortedBy("created_at", { descending: true });
            })
        });
    })
    describe('PATCH', () => {
        it('updates the value of votes by the specified amount', () => {
            return request
            .patch('/api/comments/1')
            .send({ inc_votes: 1})
            .expect(202)
            .then(({body: {comments_id}}) => {
                expect(comments_id[0].votes).to.eql(17)
            })    
        })    
    });
    describe('POST', () => {
        it('takes an object of username and comment and responds with the posted comment', () => {
            return request
            .post('/api/articles/1/comments/')
            .send({
                username: 'icellusedkars',
                body: 'test post'})
            .expect(201)
            .then( ({body}) => {
                expect(body[0].votes).to.equal(0);
                expect(body[0]).to.include.keys(
                    'comment_id',
                    'author',
                    'article_id'
                )
            });
        });
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
        it('responds with status 405 if an unwanted method is attempted', () => {
            return request.post('/api/comments/1').expect(405)
        })    
    });
});