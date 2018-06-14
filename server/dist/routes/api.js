"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const config = require('./../config/config.js');
class ApiRouter {
    constructor() {
        this.router = express_1.Router();
        this.init();
    }
    defaultRoute(req, res, next) {
        res.setHeader('Content-Type', 'application/json');
        res.sendStatus(200);
    }
    routeCORS(req, res, next) {
        if (config.allowCORS) {
            res.setHeader("Access-Control-Allow-Origin", "http://" + config.url + ":" + config.authorizedCORS);
            res.setHeader('Access-Control-Allow-Methods', 'OPTIONS,GET,POST,PUT,DELETE');
            res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization, X-Requested-With");
            if ('OPTIONS' == req.method) {
                return res.send(200);
            }
        }
        next();
    }
    init() {
        this.router.get('/', this.defaultRoute);
        this.router.all('*', this.routeCORS);
    }
}
exports.ApiRouter = ApiRouter;
