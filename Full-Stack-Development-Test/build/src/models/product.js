"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const ProductShema = new mongoose_1.Schema({
    productName: String,
    productPrice: Number,
    productImage: String,
    productCategory: String,
});
exports.default = (0, mongoose_1.model)("Product", ProductShema);
