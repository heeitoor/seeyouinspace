"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const SchemaBase_1 = __importDefault(require("../../Engine/Utils/SchemaBase"));
const joi_1 = __importDefault(require("@hapi/joi"));
class TokenSchema extends SchemaBase_1.default {
    static post(req, res, next) {
        const schema = joi_1.default.object().keys({
            masterKey: joi_1.default.string().required(),
        });
        super.validate(schema, req.body, res, next);
    }
}
exports.default = TokenSchema;
