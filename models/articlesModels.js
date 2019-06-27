const { connection } = require('../connection')

exports.fetchArticles = ({article_id}) => {
    
    return connection
.select('*')
.from('articles')
.where('article_id', article_id)
.then(article => {
    return article[0]
})    
}