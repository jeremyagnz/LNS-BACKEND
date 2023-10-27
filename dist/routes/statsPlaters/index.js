"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const delete_1 = __importDefault(require("../../controllers/playerController/delete"));
const update_1 = __importDefault(require("../../controllers/playerController/update"));
const create_1 = __importDefault(require("../../controllers/statsPlayers/create"));
const get_1 = __importDefault(require("../../controllers/statsPlayers/get"));
const statsPlayers = express_1.default.Router();
statsPlayers.post('/create', create_1.default);
statsPlayers.get('/get', get_1.default);
statsPlayers.delete('/remove', delete_1.default);
statsPlayers.patch('/update', update_1.default);
exports.default = statsPlayers;
