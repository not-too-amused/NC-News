const { connection } = require('../connection')

exports.removeComment = ({comments_id}) => {
    return connection
        .delete()
        .from('comments')
        .where({'comments.comment_id': comments_id})    
}