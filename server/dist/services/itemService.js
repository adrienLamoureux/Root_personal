"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const itemVO_1 = require("../models/vo/itemVO");
const daoFactory_1 = require("../config/factory/daoFactory");
const itemConverter_1 = require("../converters/itemConverter");
class ItemService {
    constructor() {
        this.itemDAO = daoFactory_1.DaoFactory.Instance.getItemDAO();
    }
    getItemList() {
        return this.itemDAO.find().populate('type').exec().then((data) => itemConverter_1.ItemConverter.convertItemModelListToItemVOList(data));
    }
    getItemById(id) {
        return this.itemDAO.findById(id).populate('type').exec().then((data) => itemConverter_1.ItemConverter.convertItemModelToItemVO(data));
    }
    addItem(itemVO) {
        return this.itemDAO.create(itemConverter_1.ItemConverter.convertItemVOToItemModel(itemVO)).then((data) => itemConverter_1.ItemConverter.convertItemModelToItemVO(data));
    }
    updateItem(id, itemVO) {
        return this.itemDAO.findOneAndUpdate({ _id: id }, itemConverter_1.ItemConverter.convertItemVOToItemModel(itemVO)).populate('type').exec().then((data) => itemConverter_1.ItemConverter.convertItemModelToItemVO(data));
    }
    deleteItemById(id) {
        return this.itemDAO.deleteOne({ _id: id }).exec();
    }
    resetItemList() {
        return this.itemDAO.deleteMany({}).exec()
            .then((data) => this.itemDAO.insertMany(itemConverter_1.ItemConverter.convertItemVOListToItemModelList(this.getDefaultItemList()))
            .then((data) => itemConverter_1.ItemConverter.convertItemModelListToItemVOList(data)));
    }
    getDefaultItemList() {
        var itemList = new Array();
        var item1 = new itemVO_1.ItemVO();
        item1.setName("book");
        item1.setDescription("Book object");
        item1.setPrice(1);
        itemList.push(item1);
        return itemList;
    }
}
exports.ItemService = ItemService;
