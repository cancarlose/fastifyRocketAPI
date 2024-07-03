import { knex as setupKnex, Knex } from 'knex'

export const config: Knex.Config = {
  client: 'sqlite3',
  connection: {
    filename: './db/app.db',
  },
  useNullAsDefault: true,
  migrations: {
    extension: '.ts',
    directory: './db/migrations',
    stub: './db/migration_stub.ts',
  },
}

export const knex = setupKnex(config)
