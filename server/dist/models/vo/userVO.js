"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const abstractVO_1 = require("./abstractVO");
class UserVO extends abstractVO_1.AbstractVO {
    constructor(id) {
        super(id);
    }
    getFirstName() {
        return this.firstName;
    }
    setFirstName(firstName) {
        this.firstName = firstName;
    }
    getLastName() {
        return this.lastName;
    }
    setLastName(lastName) {
        this.lastName = lastName;
    }
    getAge() {
        return this.age;
    }
    setAge(age) {
        this.age = age;
    }
    getItemVOList() {
        return this.itemVOList;
    }
    setItemVOList(itemVOList) {
        this.itemVOList = itemVOList;
    }
}
exports.UserVO = UserVO;
