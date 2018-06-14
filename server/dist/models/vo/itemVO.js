"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const abstractVO_1 = require("./abstractVO");
class ItemVO extends abstractVO_1.AbstractVO {
    constructor(id) {
        super(id);
    }
    getName() {
        return this.name;
    }
    setName(name) {
        this.name = name;
    }
    getDescription() {
        return this.description;
    }
    setDescription(description) {
        this.description = description;
    }
    getPrice() {
        return this.price;
    }
    setPrice(price) {
        this.price = price;
    }
    getTypeVO() {
        return this.typeVO;
    }
    setTypeVO(typeVO) {
        this.typeVO = typeVO;
    }
}
exports.ItemVO = ItemVO;
