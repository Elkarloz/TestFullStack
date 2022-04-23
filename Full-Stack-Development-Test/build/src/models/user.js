"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const UserSchema = new mongoose_1.Schema({
    userEmail: String,
    userPassword: String,
    userRol: String,
});
exports.default = (0, mongoose_1.model)("User", UserSchema);
