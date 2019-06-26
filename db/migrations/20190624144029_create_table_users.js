//username (primary key & unique)
//avatar_url
//name


exports.up = function(knex, Promise) {
    console.log('creating users table...');
    return knex.schema.createTable('users', (usersTable) => {
        usersTable.string('username').primary();
        usersTable.string('avatar_url').notNullable();
        usersTable.string('name').notNullable()
    })
  
};

exports.down = function(knex, Promise) {
  console.log('removing users table...');
  return knex.schema.dropTable('users');
};
