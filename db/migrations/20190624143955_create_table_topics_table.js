// slug (unique string & primary key)
// description (field is a string giving brief description)


exports.up = function(knex, Promise) {
    return knex.schema.createTable('topics', (topicsTable) => {
        topicsTable.string('slug').primary();
        topicsTable.string('description').notNullable()
    })
  
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('topics');
  
};
