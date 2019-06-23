"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class SchemaBase {
    static validate(schema, object, response, next) {
        const { error } = schema.validate(object);
        if (error) {
            const data = {
                details: error.details.map((x) => x.message),
            };
            response.status(400).send(data);
            return;
        }
        next();
    }
}
exports.default = SchemaBase;
