"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const itemVO_1 = require("../models/vo/itemVO");
const typeConverter_1 = require("../converters/typeConverter");
const daoFactory_1 = require("../config/factory/daoFactory");
class ItemConverter {
    static convertItemVOListToItemModelList(itemVOList) {
        var itemModelList = [];
        itemVOList.forEach(itemVO => {
            itemModelList.push(ItemConverter.convertItemVOToItemModel(itemVO));
        });
        return itemModelList;
    }
    static convertItemVOToItemModel(itemVO) {
        let item = {
            name: itemVO.getName(),
            description: itemVO.getDescription(),
            price: itemVO.getPrice(),
            type: typeConverter_1.TypeConverter.convertTypeVOToTypeModel(itemVO.getTypeVO())
        };
        return daoFactory_1.DaoFactory.Instance.createItemModel(item);
    }
    static convertItemModelListToItemVOList(itemModelList) {
        var itemVOList = [];
        itemModelList.forEach(itemModel => {
            itemVOList.push(ItemConverter.convertItemModelToItemVO(itemModel));
        });
        return itemVOList;
    }
    static convertItemModelToItemVO(itemModel) {
        var itemVO = new itemVO_1.ItemVO(itemModel.id);
        itemVO.setName(itemModel.name);
        itemVO.setDescription(itemModel.description);
        itemVO.setPrice(itemModel.price);
        return itemVO;
    }
}
exports.ItemConverter = ItemConverter;
