"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const typeVO_1 = require("../models/vo/typeVO");
const daoFactory_1 = require("../config/factory/daoFactory");
const typeConverter_1 = require("../converters/typeConverter");
class TypeService {
    constructor() {
        this.typeDAO = daoFactory_1.DaoFactory.Instance.getTypeDAO();
    }
    getTypeList() {
        return this.typeDAO.find().exec().then((data) => typeConverter_1.TypeConverter.convertTypeModelListToTypeVOList(data));
    }
    getTypeById(id) {
        return this.typeDAO.findById(id).exec().then((data) => typeConverter_1.TypeConverter.convertTypeModelToTypeVO(data));
    }
    getTypeByAppId(appId) {
        return this.typeDAO.findOne({ appId: appId }).exec().then((data) => typeConverter_1.TypeConverter.convertTypeModelToTypeVO(data));
    }
    addType(typeVO) {
        return this.typeDAO.create(typeConverter_1.TypeConverter.convertTypeVOToTypeModel(typeVO)).then((data) => typeConverter_1.TypeConverter.convertTypeModelToTypeVO(data));
    }
    deleteTypeById(id) {
        return this.typeDAO.deleteOne({ _id: id }).exec();
    }
    resetTypeList() {
        return this.typeDAO.deleteMany({}).exec()
            .then((data) => this.typeDAO.insertMany(typeConverter_1.TypeConverter.convertTypeVOListToTypeModelList(this.getDefaultTypeList()))
            .then((data) => typeConverter_1.TypeConverter.convertTypeModelListToTypeVOList(data)));
    }
    getDefaultTypeList() {
        var typeList = new Array();
        var type1 = new typeVO_1.TypeVO();
        type1.setName("book");
        type1.setDescription("Book object");
        type1.setAppId(1);
        typeList.push(type1);
        return typeList;
    }
}
exports.TypeService = TypeService;
