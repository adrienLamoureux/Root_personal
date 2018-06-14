"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const serviceFactory_1 = require("../config/factory/serviceFactory");
class TypeRouter {
    constructor() {
        this.router = express_1.Router();
        this.init();
    }
    getList(req, res, next) {
        res.setHeader('Content-Type', 'application/json');
        serviceFactory_1.ServiceFactory.Instance.getTypeService().getTypeList().then((data) => res.status(200).send(data));
    }
    getOne(req, res, next) {
        res.setHeader('Content-Type', 'application/json');
        serviceFactory_1.ServiceFactory.Instance.getTypeService().getTypeById(req.params.id).then((data) => res.status(200).send(data));
    }
    getOneByAppId(req, res, next) {
        res.setHeader('Content-Type', 'application/json');
        serviceFactory_1.ServiceFactory.Instance.getTypeService().getTypeByAppId(req.params.appId).then((data) => res.status(200).send(data));
    }
    newOne(req, res, next) {
        res.setHeader('Content-Type', 'application/json');
        serviceFactory_1.ServiceFactory.Instance.getTypeService().addType(req.body).then((data) => res.status(200).send(data));
    }
    deleteOne(req, res, next) {
        res.setHeader('Content-Type', 'application/json');
        serviceFactory_1.ServiceFactory.Instance.getTypeService().deleteTypeById(req.params.id).then((data) => res.status(200).send(data));
    }
    reset(req, res, next) {
        res.setHeader('Content-Type', 'application/json');
        serviceFactory_1.ServiceFactory.Instance.getTypeService().resetTypeList().then((data) => res.status(200).send(data));
    }
    init() {
        this.router.get('/list', this.getList);
        this.router.get('/:id', this.getOne);
        this.router.put('/:appId', this.getOneByAppId);
        this.router.post('/new', this.newOne);
        this.router.delete('/:id', this.deleteOne);
        this.router.post('/init', this.reset);
    }
}
exports.TypeRouter = TypeRouter;
