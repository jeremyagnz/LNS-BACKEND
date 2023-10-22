"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const create_1 = __importDefault(require("../../controllers/playerController/create"));
const get_1 = __importDefault(require("../../controllers/playerController/get"));
const delete_1 = __importDefault(require("../../controllers/playerController/delete"));
const update_1 = __importDefault(require("../../controllers/playerController/update"));
const playerRoutes = express_1.default.Router();
playerRoutes.post('/create', create_1.default);
playerRoutes.get('/get', get_1.default);
playerRoutes.delete('/remove', delete_1.default);
playerRoutes.patch('/update', update_1.default);
exports.default = playerRoutes;
