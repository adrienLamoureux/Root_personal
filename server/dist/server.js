"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const bodyParser = require("body-parser");
const express = require("express");
const logger = require("morgan");
const path = require("path");
const errorHandler = require("errorhandler");
const methodOverride = require("method-override");
const mongoose = require("mongoose");
const default_1 = require("./routes/default");
const api_1 = require("./routes/api");
const homeRoutes_1 = require("./routes/homeRoutes");
const userRoutes_1 = require("./routes/userRoutes");
const typeRoutes_1 = require("./routes/typeRoutes");
const itemRoutes_1 = require("./routes/itemRoutes");
const config = require('./config/config.js');
class Server {
    static bootstrap() {
        return new Server();
    }
    constructor() {
        this.app = express();
        this.config();
        this.routes();
        this.api();
    }
    config() {
        const MONGODB_CONNECTION = 'mongodb://' + config.mongoUrl + ':' + config.mongoPort + '/' + config.mongoDB;
        this.app.use(express.static(path.join(__dirname, '..', '..', 'dist')));
        this.app.use(express.static(path.join(__dirname, '..', '..', 'ui')));
        this.app.use(express.static(path.join(__dirname, '..', '..', 'ui/dist')));
        this.app.use(logger("dev"));
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({
            extended: false
        }));
        this.app.disable('etag');
        this.app.use(methodOverride());
        Server.dbConnection = mongoose.createConnection(MONGODB_CONNECTION, { db: config.mongoDB, user: config.mongoUser, pass: config.mongoPwd });
        this.app.use(function (err, req, res, next) {
            err.status = 404;
            next(err);
        });
        this.app.use(errorHandler());
    }
    api() {
        this.app.use(config.api.default, (new api_1.ApiRouter()).router);
        this.app.use(config.api.home, (new homeRoutes_1.HomeRouter()).router);
        this.app.use(config.api.user, (new userRoutes_1.UserRouter()).router);
        this.app.use(config.api.type, (new typeRoutes_1.TypeRouter()).router);
        this.app.use(config.api.item, (new itemRoutes_1.ItemRouter()).router);
    }
    routes() {
        this.app.use('/', (new default_1.DefaultRouter()).router);
    }
}
exports.Server = Server;
