"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class AbstractVO {
    constructor(id) {
        id ? this.id = id : this.id = null;
    }
    getId() {
        return this.id;
    }
    setId(id) {
        this.id = id;
    }
}
exports.AbstractVO = AbstractVO;
