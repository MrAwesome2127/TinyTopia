"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("../../../../client/src/api/index");
var express_1 = require("express");
var router = express_1.default.Router();
router.use('/api', index_1.default);
exports.default = router;
