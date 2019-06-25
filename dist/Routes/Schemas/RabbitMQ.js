"use strict";
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
const SchemaBase_1 = __importDefault(require("../../Engine/Utils/SchemaBase"));
const joi_1 = __importDefault(require("@hapi/joi"));
class RabbitMQSchema extends SchemaBase_1.default {
    static post(request, response, next) {
        const _super = name => super[name];
        return __awaiter(this, void 0, void 0, function* () {
            const schema = joi_1.default.object().keys({
                data: joi_1.default
                    .alternatives(joi_1.default.string().min(3), joi_1.default.object().min(1))
                    .required(),
            });
            _super("validate").call(this, schema, request.body, response, next);
        });
    }
}
exports.default = RabbitMQSchema;
