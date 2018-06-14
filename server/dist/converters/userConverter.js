"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const userVO_1 = require("../models/vo/userVO");
const itemConverter_1 = require("./itemConverter");
const daoFactory_1 = require("../config/factory/daoFactory");
class UserConverter {
    static convertUserVOListToUserModelList(userVOList) {
        var userModelList = [];
        userVOList.forEach(userVO => {
            userModelList.push(UserConverter.convertUserVOToUserModel(userVO));
        });
        return userModelList;
    }
    static convertUserVOToUserModel(userVO) {
        let user = {
            firstName: userVO.getFirstName(),
            lastName: userVO.getLastName(),
            items: itemConverter_1.ItemConverter.convertItemVOListToItemModelList(userVO.getItemVOList()),
            age: userVO.getAge()
        };
        return daoFactory_1.DaoFactory.Instance.createUserModel(user);
    }
    static convertUserModelListToUserVOList(userModelList) {
        var userVOList = [];
        userModelList.forEach(userModel => {
            userVOList.push(UserConverter.convertUserModelToUserVO(userModel));
        });
        return userVOList;
    }
    static convertUserModelToUserVO(userModel) {
        var userVO = new userVO_1.UserVO(userModel.id);
        userVO.setFirstName(userModel.firstName);
        userVO.setLastName(userModel.lastName);
        userVO.setAge(userModel.age);
        userVO.setItemVOList(itemConverter_1.ItemConverter.convertItemModelListToItemVOList(userModel.items));
        return userVO;
    }
}
exports.UserConverter = UserConverter;
