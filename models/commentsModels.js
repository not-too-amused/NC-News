const { connection } = require('../connection')

exports.removeComment = ({comments_id}) => {
    return connection
        .delete()
        .from('comments')
        .where({'comments.comment_id': comments_id})    
}

exports.updateComment = ({inc_votes=0}, {comments_id}) => {
    return connection
        .from('comments')
        .where({'comments.comment_id': comments_id})
        .increment('votes', inc_votes)
        .returning('*')
}