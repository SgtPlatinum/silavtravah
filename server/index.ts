import "reflect-metadata";
import {Express} from "express";
import {env, isDev} from "./util";
import {db, Session} from "./database";
import express from "express";
import {TypeormStore} from "connect-typeorm";
import session from "express-session";
import cookieParser from "cookie-parser";
import {createExpressErrorHandler, createService} from "@propero/easy-api";
import * as services from "./service";

export default async function main(app = express()): Promise<Express> {
  if (isDev()) console.log("development mode enabled");

  await db.initialize();
  await db.synchronize();
  await db.runMigrations();

  app.use(
    cookieParser(),
    express.json(),
    express.urlencoded({ extended: true }),
    session({
      secret: env("session_secret", "df367554873f422af744a76f31a5fb33b73a9e3807e94c67a34117b20a4821d3"),
      resave: true,
      saveUninitialized: true,
      cookie: {},
      store: new TypeormStore({
        cleanupLimit: 2,
        limitSubquery: false,
        ttl: env("session_ttl", 604800) // one week
      }).connect(db.getRepository(Session)),
    }),
  );

  app.use(createExpressErrorHandler(isDev));

  for (const Service of Object.values(services))
    app.use(createService(new Service()));

  app.listen(env("node_port", 3000), () => {
    if (isDev()) console.log(`http://localhost:${env("node_port", 3000)}/`);
  });

  return app;
}

if (isDev()) main().catch(console.error);
