"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const path_1 = require("path");
class DefaultRouter {
    constructor() {
        this.router = express_1.Router();
        this.init();
    }
    defaultRoute(req, res, next) {
        res.sendFile(path_1.join(__dirname, 'dist/index.html'));
    }
    init() {
        this.router.get('/', this.defaultRoute);
    }
}
exports.DefaultRouter = DefaultRouter;
