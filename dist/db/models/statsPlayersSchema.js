"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const statsPlayer = new mongoose_1.default.Schema({
    id: {
        type: String,
        required: true,
        unique: true,
    },
    bateadores: {
        type: String,
        required: true,
    },
    ap: {
        type: String,
        required: true,
    },
    ab: {
        type: String,
        required: true,
    },
    r: {
        type: String,
        required: true,
    },
    h: {
        type: String,
        required: true,
    },
    rbi: {
        type: String,
        required: true,
    },
    b2: {
        type: String,
        required: true,
    },
    b3: {
        type: String,
        required: true,
    },
    hr: {
        type: String,
        required: true,
    },
    bb: {
        type: String,
        required: true,
    },
    so: {
        type: String,
        required: true,
    },
    sb: {
        type: String,
        required: true,
    },
    sc: {
        type: String,
        required: true,
    },
    sf: {
        type: String,
        required: true,
    },
    lob: {
        type: String,
        required: true,
    },
}, {
    collection: 'statsPlayers',
    timestamps: false,
    versionKey: false,
});
const statsPlayers = mongoose_1.default.model('statsPlayers', statsPlayer);
exports.default = statsPlayers;
