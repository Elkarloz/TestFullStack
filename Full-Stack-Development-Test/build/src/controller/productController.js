"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReadId = exports.Read = exports.Delete = exports.Update = exports.Create = void 0;
const product_1 = __importDefault(require("../models/product"));
const Create = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { productName, productPrice, productImage, productCategory } = req.body;
    console.log(req.body);
    if (!productName || !productPrice || !productImage || !productCategory) {
        res.status(400).json("Missing parameters");
    }
    else {
        const product = new product_1.default({
            productName,
            productPrice,
            productImage,
            productCategory,
        });
        yield product.save();
        res.json(product);
    }
});
exports.Create = Create;
const Update = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { productName, productPrice, productImage, productCategory } = req.body;
    const prod = yield product_1.default.findById(req.params.id);
    if (!productName || !productPrice || !productImage || !productCategory) {
        res.status(400).json("Missing parameters");
    }
    else if (!prod) {
        res.status(404).json("Product not found");
    }
    else {
        prod.productName = productName;
        prod.productPrice = productPrice;
        prod.productImage = productImage;
        prod.productCategory = productCategory;
        yield prod.save();
        res.json(prod);
    }
});
exports.Update = Update;
const Delete = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const prod = yield product_1.default.findById(req.params.id);
    if (!prod) {
        res.status(404).json("Product not found");
    }
    else {
        yield prod.remove();
        res.json("Product deleted");
    }
});
exports.Delete = Delete;
const Read = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const prod = yield product_1.default.find();
    if (!prod) {
        res.status(404).json("Product not found");
    }
    else {
        res.json(prod);
    }
});
exports.Read = Read;
const ReadId = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const prod = yield product_1.default.findById(req.params.id);
    if (!prod) {
        res.status(404).json("Product not found");
    }
    else {
        res.json(prod);
    }
});
exports.ReadId = ReadId;
