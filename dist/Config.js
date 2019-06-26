"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require('dotenv').config();
const config = {
    env: {
        CLOUDAMQP_APIKEY: process.env.CLOUDAMQP_APIKEY,
        CLOUDAMQP_URL: process.env.CLOUDAMQP_URL,
        REDIS_URL: process.env.REDIS_URL,
        JWT_SECRET: process.env.JWT_SECRET,
        MASTER_KEY: process.env.MASTER_KEY,
        SEARCHBOX_URL: process.env.SEARCHBOX_URL,
    },
};
exports.config = config;
