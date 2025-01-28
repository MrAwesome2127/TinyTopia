"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var home_routes_ts_1 = require("./home-routes.ts");
var express_1 = __importDefault(require("express"));
var router = express_1.default.Router();
router.use('/homes', home_routes_ts_1.homeRouter);
exports.default = router;
