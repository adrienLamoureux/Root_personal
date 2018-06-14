"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const serviceFactory_1 = require("../config/factory/serviceFactory");
class UserRouter {
    constructor() {
        this.router = express_1.Router();
        this.init();
    }
    getList(req, res, next) {
        res.setHeader('Content-Type', 'application/json');
        serviceFactory_1.ServiceFactory.Instance.getUserService().getUserList().then((data) => res.status(200).send(data));
    }
    getOne(req, res, next) {
        res.setHeader('Content-Type', 'application/json');
        serviceFactory_1.ServiceFactory.Instance.getUserService().getUserById(req.params.id).then((data) => res.status(200).send(data));
    }
    updateOne(req, res, next) {
        res.setHeader('Content-Type', 'application/json');
        serviceFactory_1.ServiceFactory.Instance.getUserService().updateUser(req.params.id, req.body).then((data) => res.status(200).send(data));
    }
    newOne(req, res, next) {
        res.setHeader('Content-Type', 'application/json');
        serviceFactory_1.ServiceFactory.Instance.getUserService().addUser(req.body).then((data) => res.status(200).send(data));
    }
    deleteOne(req, res, next) {
        res.setHeader('Content-Type', 'application/json');
        serviceFactory_1.ServiceFactory.Instance.getUserService().deleteUserById(req.params.id).then((data) => res.status(200).send(data));
    }
    reset(req, res, next) {
        res.setHeader('Content-Type', 'application/json');
        serviceFactory_1.ServiceFactory.Instance.getUserService().resetUserList().then((data) => res.status(200).send(data));
    }
    init() {
        this.router.get('/list', this.getList);
        this.router.get('/:id', this.getOne);
        this.router.put('/:id', this.updateOne);
        this.router.post('/new', this.newOne);
        this.router.delete('/:id', this.deleteOne);
        this.router.post('/init', this.reset);
    }
}
exports.UserRouter = UserRouter;
