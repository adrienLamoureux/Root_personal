"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
exports.TypeSchema = new mongoose_1.Schema({
    name: String,
    description: String,
    appId: Number
});
