"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var RedisData_1;
const redis_1 = __importDefault(require("redis"));
const inversify_1 = require("inversify");
let RedisData = RedisData_1 = class RedisData {
    constructor() {
        console.log('cria instancia');
        this.client = redis_1.default.createClient(process.env.REDIS_URL);
        this.client.select(1);
    }
    static get instance() {
        console.log('get instancia');
        return new RedisData_1();
    }
    get(key) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                this.client.get(key, (error, result) => {
                    if (error) {
                        reject({
                            ok: false,
                            data: error,
                        });
                    }
                    else {
                        resolve({
                            ok: true,
                            data: result,
                        });
                    }
                });
            });
        });
    }
    set(key, value) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                this.client.set(key, value, (error, result) => {
                    console.log(error);
                    console.log(result);
                    if (error) {
                        reject({
                            ok: false,
                            data: error,
                        });
                    }
                    else {
                        resolve({
                            ok: true,
                            data: result,
                        });
                    }
                });
            });
        });
    }
};
RedisData = RedisData_1 = __decorate([
    inversify_1.injectable(),
    __metadata("design:paramtypes", [])
], RedisData);
exports.default = RedisData;
