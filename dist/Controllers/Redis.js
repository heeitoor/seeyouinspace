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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
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
const inversify_1 = require("inversify");
const Types_1 = require("../IoC/Types");
const Redis_1 = __importDefault(require("../Integrations/Redis"));
let RedisController = class RedisController {
    constructor(redisIntegration) {
        this.redisIntegration = redisIntegration;
    }
    get(request) {
        return __awaiter(this, void 0, void 0, function* () {
            const { key } = request.params;
            return yield this.redisIntegration.get(key);
        });
    }
    post(request) {
        return __awaiter(this, void 0, void 0, function* () {
            const { key, value } = request.body;
            return yield this.redisIntegration.set(key, value);
        });
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
RedisController = __decorate([
    inversify_1.injectable(),
    __param(0, inversify_1.inject(Types_1.types.RedisIntegration)),
    __metadata("design:paramtypes", [Redis_1.default])
], RedisController);
exports.default = RedisController;
