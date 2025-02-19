"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var dotenv_1 = require("dotenv");
(0, dotenv_1.config)();
var sequelize_1 = require("sequelize");
console.log(process.env.DB_NAME);
console.log(process.env.DB_USER);
var sequelize = process.env.DB_URL
    ? new sequelize_1.Sequelize(process.env.DB_URL)
    : new sequelize_1.Sequelize(process.env.DB_NAME || '', process.env.DB_USER || '', process.env.DB_PASSWORD, {
        host: process.env.DB_HOST || 'localhost',
        dialect: process.env.DB_DIALECT || 'postgres',
        dialectOptions: {
            decimalNumbers: true,
        },
    });
exports.default = sequelize;
