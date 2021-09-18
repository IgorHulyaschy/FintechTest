import { ConnectionOptions } from "typeorm"
import { join } from 'path';
import config from 'config';
const connection: ConnectionOptions = {
  type: "postgres",
  host: config.get('database.host'),
  port: config.get('database.port'),
  username: config.get('database.user'),
  password: config.get('database.password'),
  database: config.get('database.dbName'),
  entities: [join(__dirname, './**/*.entity{.ts,.js}')],
  logging: false,
  synchronize: true,
  migrations: ["migrations/*.ts"],
  cli: {
    migrationsDir: "migrations",
    entitiesDir: "src/entities"
  }
}
export default connection;