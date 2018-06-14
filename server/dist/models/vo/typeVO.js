"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const abstractVO_1 = require("./abstractVO");
class TypeVO extends abstractVO_1.AbstractVO {
    constructor(id, appId) {
        super(id);
        this.appId = appId;
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
    getAppId() {
        return this.appId;
    }
    setAppId(appId) {
        this.appId = appId;
    }
}
exports.TypeVO = TypeVO;
