"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const Container_1 = require("./IoC/Container");
const Types_1 = require("./IoC/Types");
const Server_1 = __importDefault(require("./Server"));
const Auth_1 = __importDefault(require("./Middlewares/Auth"));
const Enums_1 = require("./Engine/Utils/Enums");
require('dotenv').config();
new Server_1.default([Container_1.container.get(Types_1.types.RedisRouter)], [new Auth_1.default(Enums_1.MiddlewareOrder.Begin)]).start();
