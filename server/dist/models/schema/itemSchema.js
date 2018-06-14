"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
exports.ItemSchema = new mongoose_1.Schema({
    name: String,
    description: String,
    price: Number,
    type: { type: mongoose_1.Schema.Types.ObjectId, ref: 'types' }
});
