"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var home_routes_ts_1 = require("./home-routes.ts");
var express_1 = require("express");
var router = express_1.default.Router();
router.use('/homes', home_routes_ts_1.homeRouter);
exports.default = router;
