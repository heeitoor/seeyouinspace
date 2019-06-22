"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Controllers_1 = require("./Types/Controllers");
const Integrations_1 = require("./Types/Integrations");
const Routers_1 = require("./Types/Routers");
const Datas_1 = require("./Types/Datas");
const types = Object.assign({}, Routers_1.routers, Controllers_1.controllers, Integrations_1.integrations, Datas_1.datas);
exports.types = types;
