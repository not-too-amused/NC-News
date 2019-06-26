const { expect } = require('chai');
const { formatDate, makeRefObj, formatComments } = require('../db/utils/utils');

describe('formatDate', () => {
const input = [{created_at: 1477282382648}]
    it('returns a new array', () => {    //   CHANGE TEST
        expect(formatDate([])).to.be.an.instanceof(Array)
    })
    it('formats the given timestamp into a JS date object', () => {
        expect(formatDate(input)).to.eql([ {"created_at": new Date(1477282382648)}])
    })
    it('works for an array of multiple objects', () => {
        expect(formatDate([{
            body:
              "Oh, I've got compassion running out of my nose, pal! I'm the Sultan of Sentiment!",
            belongs_to: "They're not exactly dogs, are they?",
            created_by: 'butter_bridge',
            votes: 16,
            created_at: 1511354163389,
          },
          {
            body:
              'The beautiful thing about treasure is that it exists. Got to find out what kind of sheets these are; not cotton, not rayon, silky.',
            belongs_to: 'Living in the shadow of a great man',
            created_by: 'butter_bridge',
            votes: 14,
            created_at: 1479818163389,
          }]))
          .to.eql([{
            body:
            "Oh, I've got compassion running out of my nose, pal! I'm the Sultan of Sentiment!",
          belongs_to: "They're not exactly dogs, are they?",
          created_by: 'butter_bridge',
          votes: 16,
          created_at: new Date(1511354163389),
        },
        {
          body:
            'The beautiful thing about treasure is that it exists. Got to find out what kind of sheets these are; not cotton, not rayon, silky.',
          belongs_to: 'Living in the shadow of a great man',
          created_by: 'butter_bridge',
          votes: 14,
          created_at: new Date(1479818163389),
        }]

          )

    
});

describe('makeRefObj', () => {
    it('returns a reference object ', () => {
        expect(makeRefObj([{ article_id: 1, title: 'A' }])).to.eql({A: 1 })        
    });
    it('works with arrays of multiple objects', () => {
        expect(makeRefObj([{ article_id: 1, title: 'A' }, {
                title: 'Running a Node App',
                article_id: 2,
                topic: 'coding',
                author: 'jessjelly',
                body:
                  'This is part two of a series on how to get up and running with Systemd and Node.js. This part dives deeper into how to successfully run your app with systemd long-term, and how to set it up in a production environment.',
                created_at: 1471522072389 
            }]
        )).to.eql({A: 1, 'Running a Node App': 2 }) 
    })
});

describe('formatComments', () => {
    const testTable = [{
        body:
          'sample text',
        belongs_to: 'Living in the shadow of a great man',
        created_by: 'butter_bridge',
        votes: 14,
        created_at: 1479818163389,
      }]
      const refObj = {'Living in the shadow of a great man': 1}

    const testFormatted = [{ 
      body:
        'sample text',
      article_id: 1,
      author: 'butter_bridge',
      votes: 14,
      created_at: new Date(1479818163389)
    }]

    it('returns a new array', () => {
        expect(formatComments([])).to.eql([])
    });
    // xit('it changes the created_by key to author', () => {
    //     formatComments([{created_by: 'anon'}])
        // below tests both
    // });
    it('renames the belongs_to key to article_id ( & works for multiple objects', () => {
        expect(formatComments(testTable, refObj)).to.eql(testFormatted)
    });
    it('does not mutate the original array or objects', () => {  
        formatComments(testTable, refObj)
        expect(testTable[0]).to.include.keys('body', 'belongs_to', 'created_by', 'votes', 'created_at')
    })
})
})
