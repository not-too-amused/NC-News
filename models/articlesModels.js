const { connection } = require('../connection')
const { makeComment} = require('../db/utils/utils')

exports.fetchArticles = ({article_id}, {author, topic, sort_by, order}) => {
    return connection
        .select('articles.*')
        .count({comment_count: 'comments.article_id'})
        .from('articles')
        .leftJoin('comments', 'comments.article_id', 'articles.article_id')
        .groupBy('articles.article_id')
        .orderBy( sort_by || 'articles.created_at', order || 'desc')
        .modify(query => {
            if (article_id) query.where({ 'articles.article_id': article_id})
            if (author) query.where({'articles.author': author})
            if (topic) query.where({'articles.topic': topic})
        })
    .then(filteredArticles => {
            if (article_id) {
            return filteredArticles[0]
        }
        return filteredArticles
        }    
    )
    
}
exports.updateArticles = ({body: {inc_votes=0}, params: {article_id}}) => {
    return connection
        .from('articles')
        .where({'articles.article_id': article_id})
        .increment('votes', inc_votes)
        .returning('*')
        .then(updatedArticle => {
            return updatedArticle[0]
    })
}
exports.fetchComments = ({article_id}, {sort_by, order}) => {
    return connection
    .select('*')
    .from('articles')
    .where({article_id})
    .then( () => {
        return connection
        .select('*')
        .from('comments')
        .orderBy( sort_by || 'comments.created_at', order || 'desc')
        .where({article_id})
        // .then(sortedComments => {
        //     return sortedComments
        // })
    })
}



exports.createComment = (comment, {article_id}) => {
    const createdComment = makeComment(comment, article_id)
    return connection
        .from('comments')
        .insert(createdComment)
        .returning('*')
        .catch(console.log)
} 