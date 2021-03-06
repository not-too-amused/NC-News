// comment_id (primary key)
// author field (references a user's primary key (username))
// article_id field (references an article's primary key)
// votes (defaults to 0)
// created_at (defaults to the current timestamp)
// body



exports.up = function(knex, Promise) {
    return knex.schema.createTable('comments', (commentsTable) => {
    commentsTable.increments('comment_id').primary();
    commentsTable.string('author').references('users.username');
    commentsTable.integer('article_id').references('articles.article_id');
    commentsTable.integer('votes').notNullable().defaultsTo(0);
    commentsTable.datetime('created_at').notNullable().defaultsTo(knex.fn.now());
    commentsTable.string('body', 5000).notNullable()
    })
  
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('comments');  
};
