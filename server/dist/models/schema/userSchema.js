"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
exports.UserSchema = new mongoose_1.Schema({
    firstName: String,
    lastName: String,
    age: String,
    items: [{ type: mongoose_1.Schema.Types.ObjectId, ref: 'items' }]
});
