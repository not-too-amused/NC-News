exports.formatDate = list => {
    const dateFormatted = list.map(artObj => {
const newRef = {...artObj}
newRef.created_at = new Date(newRef.created_at)
return newRef
    })
return dateFormatted
};


exports.makeRefObj = list => {
const refObj = {}
list.forEach((article) => {
    refObj[article.title] = article.article_id
})
return refObj
}


exports.formatComments = (comments, articleRef) => {
let formattedComments = []
for (let i = 0; i < comments.length; i++) {
    formattedComments.push(({...comments[i]}))
    formattedComments[i]['author'] = formattedComments[i].created_by
    formattedComments[i]['article_id'] = articleRef[formattedComments[i].belongs_to]
    formattedComments[i]['created_at'] = new Date(formattedComments[i].created_at)
    delete formattedComments[i].created_by
    delete formattedComments[i].belongs_to
}
    return formattedComments
};
