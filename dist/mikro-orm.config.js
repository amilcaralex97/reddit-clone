"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = __importDefault(require("config"));
const Post_1 = require("./entities/Post");
const path_1 = __importDefault(require("path"));
const dbConfig = config_1.default.get("dbConfig");
exports.default = {
    migrations: {
        path: path_1.default.join(__dirname, "./migrations"),
        pattern: /^[\w-]+\d+\.[tj]s$/,
    },
    entities: [Post_1.Post],
    dbName: dbConfig.dbName,
    user: dbConfig.user,
    password: dbConfig.password,
    debug: dbConfig.debug,
    type: dbConfig.type,
};
//# sourceMappingURL=mikro-orm.config.js.map