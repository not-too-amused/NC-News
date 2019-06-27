// article_id (primary key)
// title
// body
// votes (defaults to 0)
// topic field (references the slug in the topics table)
// author field (references a user's primary key (username))
// created_at (defaults to the current timestamp) 

exports.up = function(knex, Promise) {
  return knex.schema.createTable('articles', (articlesTable) => {
      articlesTable.increments('article_id').primary();
      articlesTable.string('title').notNullable();
      articlesTable.string('body', 5000).notNullable();
      articlesTable.integer('votes').defaultTo(0);
      articlesTable.string('topic').references('topics.slug');
      articlesTable.string('author').references('users.username');
      articlesTable.datetime('created_at').notNullable().defaultTo(knex.fn.now());    
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('articles');
};
