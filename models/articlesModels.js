const { connection } = require('../connection')

exports.fetchArticles = ({article_id}) => {
    return connection
        .select('articles.*')
        .count({comment_count: 'comments.article_id'})
        .from('articles')
        .leftJoin('comments', 'comments.article_id', 'articles.article_id')
        .groupBy('articles.article_id')
        .modify(query => {
            if (article_id) query.where({ 'articles.article_id': article_id})
        })
    .then(article_id => {
        return article_id[0]
})    
}
exports.updateArticles = ({body, params: {article_id}}) => {
    console.log(body, '<<<<< B.ODDIE')
    return connection
        .select('*')
        .from('articles')
        .modify(query => {
            if (article_id) query.where({ 'articles.article_id': article_id})
        })
        //.update({'artciles.votes': votes+body.inc_votes})
        .then(article_id => {
        return article_id[0]
    })
}