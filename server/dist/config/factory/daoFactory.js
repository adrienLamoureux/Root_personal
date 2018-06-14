"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const userSchema_1 = require("./../../models/schema/userSchema");
const typeSchema_1 = require("../../models/schema/typeSchema");
const itemSchema_1 = require("../../models/schema/itemSchema");
const server_1 = require("../../server");
class DaoFactory {
    constructor() {
        this.userDAO = server_1.Server.dbConnection.model("users", userSchema_1.UserSchema);
        this.typeDAO = server_1.Server.dbConnection.model("types", typeSchema_1.TypeSchema);
        this.itemDAO = server_1.Server.dbConnection.model("items", itemSchema_1.ItemSchema);
    }
    static get Instance() {
        return this._instance || (this._instance = new this());
    }
    getUserDAO() {
        return this.userDAO;
    }
    getTypeDAO() {
        return this.typeDAO;
    }
    getItemDAO() {
        return this.itemDAO;
    }
    createTypeModel(type) {
        return new this.typeDAO(type);
    }
    createUserModel(user) {
        return new this.userDAO(user);
    }
    createItemModel(item) {
        return new this.itemDAO(item);
    }
}
exports.DaoFactory = DaoFactory;
