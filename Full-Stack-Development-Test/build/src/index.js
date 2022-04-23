"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
//initialize express
const app = (0, express_1.default)();
//settings
app.set('port', process.env.PORT || 3000);
//start server
app.listen(app.get('port'), () => {
    console.log('Server on port', app.get('port'));
});
