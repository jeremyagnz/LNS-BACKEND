"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const teams_1 = __importDefault(require("./teams"));
const players_1 = __importDefault(require("./players"));
const routes = express_1.default.Router();
routes.use('/teams', teams_1.default);
routes.use('/players', players_1.default);
exports.default = routes;
