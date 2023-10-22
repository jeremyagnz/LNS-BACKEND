"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const teamSchema = new mongoose_1.default.Schema({
    id: {
        type: String,
        required: true,
        unique: true
    },
    name: {
        type: String,
        required: true,
    },
    logo: {
        type: String,
    },
    manager: {
        type: String,
        required: true,
        unique: true
    },
}, { collection: 'team', timestamps: false, versionKey: false });
const Team = mongoose_1.default.model('team', teamSchema);
exports.default = Team;
