"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const userVO_1 = require("../models/vo/userVO");
const daoFactory_1 = require("../config/factory/daoFactory");
const userConverter_1 = require("../converters/userConverter");
class UserService {
    constructor() {
        this.userDAO = daoFactory_1.DaoFactory.Instance.getUserDAO();
    }
    getUserList() {
        return this.userDAO.find().populate('items').exec().then((data) => userConverter_1.UserConverter.convertUserModelListToUserVOList(data));
    }
    getUserById(id) {
        return this.userDAO.findById(id).populate('items').exec().then((data) => userConverter_1.UserConverter.convertUserModelToUserVO(data));
    }
    addUser(userVO) {
        return this.userDAO.create(userConverter_1.UserConverter.convertUserVOToUserModel(userVO)).then((data) => userConverter_1.UserConverter.convertUserModelToUserVO(data));
    }
    updateUser(id, userVO) {
        return this.userDAO.findOneAndUpdate({ _id: id }, userConverter_1.UserConverter.convertUserVOToUserModel(userVO)).populate('items').exec().then((data) => userConverter_1.UserConverter.convertUserModelToUserVO(data));
    }
    deleteUserById(id) {
        return this.userDAO.deleteOne({ _id: id }).exec();
    }
    resetUserList() {
        return this.userDAO.deleteMany({}).exec()
            .then((data) => this.userDAO.insertMany(userConverter_1.UserConverter.convertUserVOListToUserModelList(this.getDefaultUserList()))
            .then((data) => userConverter_1.UserConverter.convertUserModelListToUserVOList(data)));
    }
    getDefaultUserList() {
        var userList = new Array();
        var user1 = new userVO_1.UserVO();
        user1.setFirstName("toto");
        user1.setLastName("dupond");
        user1.setAge(30);
        userList.push(user1);
        var user2 = new userVO_1.UserVO();
        user2.setFirstName("titi");
        user2.setLastName("dupond");
        user2.setAge(30);
        userList.push(user2);
        var user3 = new userVO_1.UserVO();
        user3.setFirstName("toti");
        user3.setLastName("dupond");
        user3.setAge(15);
        userList.push(user3);
        return userList;
    }
}
exports.UserService = UserService;
