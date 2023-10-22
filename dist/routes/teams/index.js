"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const create_1 = __importDefault(require("../../controllers/teamController/create"));
const get_1 = __importDefault(require("../../controllers/teamController/get"));
const delete_1 = __importDefault(require("../../controllers/teamController/delete"));
const update_1 = __importDefault(require("../../controllers/teamController/update"));
const teamRoutes = express_1.default.Router();
teamRoutes.post('/create', create_1.default);
teamRoutes.get('/get', get_1.default);
teamRoutes.delete('/remove', delete_1.default);
teamRoutes.patch('/update', update_1.default);
exports.default = teamRoutes;
