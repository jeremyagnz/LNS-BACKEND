"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Team = exports.Player = void 0;
const playerSchema_1 = __importDefault(require("./playerSchema"));
exports.Player = playerSchema_1.default;
const teamSchema_1 = __importDefault(require("./teamSchema"));
exports.Team = teamSchema_1.default;
