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
const express_1 = __importDefault(require("express"));
const Token_1 = __importDefault(require("./Schemas/Token"));
const inversify_1 = require("inversify");
const Token_2 = __importDefault(require("../Controllers/Token"));
const Types_1 = require("../IoC/Types");
let TokenRouter = class TokenRouter {
    constructor(controller) {
        this.controller = controller;
        this.path = '/token';
    }
    register() {
        const router = express_1.default.Router();
        router
            .post('/', Token_1.default.post, (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            try {
                res.send(yield this.controller.post(req));
            }
            catch (error) {
                next(error);
                return;
            }
            next();
        }))
            .delete('/', (req, res, next) => __awaiter(this, void 0, void 0, function* () { }));
        return router;
    }
};
TokenRouter = __decorate([
    inversify_1.injectable(),
    __param(0, inversify_1.inject(Types_1.types.TokenController)),
    __metadata("design:paramtypes", [Token_2.default])
], TokenRouter);
exports.default = TokenRouter;
