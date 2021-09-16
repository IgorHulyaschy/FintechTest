import { ConnectionOptions } from "typeorm"
import { join } from 'path';
const connection: ConnectionOptions = {
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "postgres",
  password: "emazeb32",
  database: "tasktodo",
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