import {DataSource} from "typeorm";
import {env, isDev} from "../util";
import * as entities from "./entities";
import * as migrations from "./migrations";


export const db = new DataSource({
  type: "postgres",
  host: env("postgres_host", "localhost"),
  port: env("postgres_port", 5432),
  database: env("postgres_db"),
  username: env("postgres_user"),
  password: env("postgres_password"),
  synchronize: true,
  logging: isDev() && env("debug", "").includes("database"),
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  entities: Object.values(entities) as any,
  migrations: Object.values(migrations),
  subscribers: [],
});