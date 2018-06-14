"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const homeClient_1 = require("./../models/client/homeClient");
class HomeRouter {
    constructor() {
        this.router = express_1.Router();
        this.init();
    }
    defaultRoute(req, res, next) {
        res.setHeader('Content-Type', 'application/json');
        res.status(200).send(homeClient_1.default.initData);
    }
    resetDB(req, res, next) {
        res.setHeader('Content-Type', 'application/json');
        res.sendStatus(200);
    }
    init() {
        this.router.get('/init', this.defaultRoute);
        this.router.post('/init', this.resetDB);
    }
}
exports.HomeRouter = HomeRouter;
