// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {
  development: {
    client: 'pg',
    connection: 'postgres://postgres:supersecret@postgres/workflow',
    migrations: {
      tableName: 'knex_migrations'
    }
  },
};
