"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = exports.Home = void 0;
var connection_js_1 = __importDefault(require("../config/connection.js"));
var home_1 = require("./home");
var user_1 = require("./user");
var Home = (0, home_1.HomeFactory)(connection_js_1.default);
exports.Home = Home;
var User = (0, user_1.UserFactory)(connection_js_1.default);
exports.User = User;
