const ENV = process.env.NODE_ENV || 'test';
const knex = require('knex');
const dbConfig = 
    ENV === 'production'
        ? { client: 'pg', connection: process.env.DATABASE_URL }
        : require('./knexfile.js');

module.exports = {connection: knex(dbConfig)};