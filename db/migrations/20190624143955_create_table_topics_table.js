// slug (unique string & primary key)
// description (field is a string giving brief description)


exports.up = function(knex, Promise) {
    console.log('creating topics table...');
    return knex.schema.createTable('topics', (topicsTable) => {
        topicsTable.string('slug').primary();
        topicsTable.string('description').notNullable()
    })
  
};

exports.down = function(knex, Promise) {
    console.log('removing topics table...');
    return knex.schema.dropTable('topics');
  
};
