const { DB_URL} = process.env;
const { config } = require('./config')
const ENV = process.env.NODE_ENV || 'development';

const baseConfig = {
  client: 'pg',
  migrations: {
    directory: './db/migrations'
  },
  seeds: {
    directory: './db/seeds'
  }
};

const customConfig = {
  production: {
    connection: `${DB_URL}?ssl=true`,
  },

  development: {
    connection: {
      database: 'nc_news',
      username: config.user,
      password: config.password
    }
  },
  test: {
    connection: {
      database: 'nc_news_test',
      username: config.user,
      password: config.password
    }
  }
};

module.exports = { ...customConfig[ENV], ...baseConfig };
