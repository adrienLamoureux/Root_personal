"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const typeVO_1 = require("../models/vo/typeVO");
const daoFactory_1 = require("../config/factory/daoFactory");
class TypeConverter {
    static convertTypeVOListToTypeModelList(typeVOList) {
        var typeModelList = [];
        typeVOList.forEach(typeVO => {
            typeModelList.push(TypeConverter.convertTypeVOToTypeModel(typeVO));
        });
        return typeModelList;
    }
    static convertTypeVOToTypeModel(typeVO) {
        let type = {
            name: typeVO.getName(),
            description: typeVO.getDescription(),
            appId: typeVO.getAppId()
        };
        return daoFactory_1.DaoFactory.Instance.createTypeModel(type);
    }
    static convertTypeModelListToTypeVOList(typeModelList) {
        var typeVOList = [];
        typeModelList.forEach(typeModel => {
            typeVOList.push(TypeConverter.convertTypeModelToTypeVO(typeModel));
        });
        return typeVOList;
    }
    static convertTypeModelToTypeVO(typeModel) {
        var typeVO = new typeVO_1.TypeVO(typeModel.id);
        typeVO.setName(typeModel.name);
        typeVO.setDescription(typeModel.description);
        typeVO.setAppId(typeModel.appId);
        return typeVO;
    }
}
exports.TypeConverter = TypeConverter;
