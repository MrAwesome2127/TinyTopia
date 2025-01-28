"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = __importDefault(require("../../../../client/src/api/index"));
var express_1 = __importDefault(require("express"));
var router = express_1.default.Router();
router.use('/api', index_1.default);
exports.default = router;
