"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const inversify_1 = require("inversify");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const Config_1 = require("../Config");
const Token_1 = require("../Errors/Token");
let TokenController = class TokenController {
    get(request) {
        throw new Error('Method not implemented.');
    }
    post(request) {
        const { masterKey } = request.body;
        if (masterKey === Config_1.config.env.MASTER_KEY) {
            const token = jsonwebtoken_1.default.sign({ masterKey }, Config_1.config.env.JWT_SECRET, {
                expiresIn: 600,
            });
            return new Promise((resolve, reject) => {
                resolve({
                    ok: true,
                    data: {
                        token,
                    },
                });
            });
        }
        throw new Token_1.MasterKeyError();
    }
    put(request) {
        throw new Error('Method not implemented.');
    }
    patch(request) {
        throw new Error('Method not implemented.');
    }
    delete(request) {
        throw new Error('Method not implemented.');
    }
};
TokenController = __decorate([
    inversify_1.injectable()
], TokenController);
exports.default = TokenController;
