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
require("reflect-metadata");
const sinon_1 = __importDefault(require("sinon"));
const mocha_1 = require("mocha");
const Redis_1 = __importDefault(require("../Controllers/Redis"));
const Redis_2 = __importDefault(require("../Integrations/Redis"));
class A {
    yo() {
        return 'yo;';
    }
}
mocha_1.describe('teste', () => __awaiter(this, void 0, void 0, function* () {
    it('should fake', () => __awaiter(this, void 0, void 0, function* () {
        const integration = new Redis_2.default(null);
        const getIntegration = sinon_1.default.stub(integration, 'get').returns(new Promise((r, rr) => {
            r({
                ok: true,
                data: '',
            });
        }));
        const b = yield getIntegration(null);
        console.log('b', b);
        const put = sinon_1.default.stub(new Redis_1.default(integration), 'get').returns(new Promise((r, rr) => {
            r({
                ok: false,
                data: '',
            });
        }));
        const a = yield put(null);
        console.log('a', a);
    }));
}));
