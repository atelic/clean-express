// Update with your config settings.
// tslint:disable
require("dotenv").config()

// Ignore the tslint error about alphabetized keys.
module.exports = {
  test: {
    client: "postgresql",
    connection: {
      host: "localhost",
      database: "test_hello_app",
      user: "dbadmin",
      password: "password",
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      directory: "../data/migrations",
      tableName: "knex_migrations",
    },
    // sqlite3 doesn't support default values
    // so this is to turn off a warning
    useNullAsDefault: true,
  },

  development: {
    client: "postgresql",
    connection: {
      host: process.env.DB_HOST,
      database: process.env.DB_NAME,
      user: process.env.DB_USER,
      password: process.env.DB_PASS,
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      directory: "../data/migrations",
      tableName: "knex_migrations",
    },
    // sqlite3 doesn't support default values
    // so this is to turn off a warning
    useNullAsDefault: true,
  },

  staging: {
    client: "postgresql",
    connection: {
      host: process.env.DB_HOST,
      database: process.env.DB_NAME,
      user: process.env.DB_USER,
      password: process.env.DB_PASS,
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      directory: "./src/data/migrations",
      tableName: "knex_migrations",
    },
  },

  production: {
    client: "postgresql",
    connection: {
      host: process.env.DB_HOST,
      database: process.env.DB_NAME,
      user: process.env.DB_USER,
      password: process.env.DB_PASS,
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      directory: "./src/data/migrations",
      tableName: "knex_migrations",
    },
  },
}
