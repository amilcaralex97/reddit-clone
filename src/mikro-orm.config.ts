import config from "config";
import { Post } from "./entities/Post";
import { MikroORM } from "@mikro-orm/core";
import path from "path";
import { User } from "./entities/User";

const dbConfig: any = config.get("dbConfig");

export default {
  migrations: {
    path: path.join(__dirname, "./migrations"),
    pattern: /^[\w-]+\d+\.[tj]s$/,
  },
  entities: [Post, User],
  dbName: dbConfig.dbName,
  user: dbConfig.user,
  password: dbConfig.password,
  debug: dbConfig.debug,
  type: dbConfig.type,
} as Parameters<typeof MikroORM.init>[0];
