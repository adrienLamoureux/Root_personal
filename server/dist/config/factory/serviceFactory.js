"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const userService_1 = require("../../services/userService");
const typeService_1 = require("../../services/typeService");
const itemService_1 = require("../../services/itemService");
class ServiceFactory {
    constructor() {
        this.userService = new userService_1.UserService();
        this.typeService = new typeService_1.TypeService();
        this.itemService = new itemService_1.ItemService();
    }
    static get Instance() {
        return this._instance || (this._instance = new this());
    }
    getUserService() {
        return this.userService;
    }
    getTypeService() {
        return this.typeService;
    }
    getItemService() {
        return this.itemService;
    }
}
exports.ServiceFactory = ServiceFactory;
