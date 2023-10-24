"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const playerSchema = new mongoose_1.default.Schema({
    id: {
        type: String,
        required: true,
        unique: true,
    },
    name: {
        type: String,
        required: true,
    },
    apellidos: {
        type: String,
        required: true,
    },
    cedula: {
        type: String,
        required: true,
    },
    foto: String,
    equipo: {
        type: String,
        required: true,
    },
    numero: {
        type: String,
        required: true,
    },
    posicion: {
        type: String,
        required: true,
    },
    fecha_nacimiento: {
        type: String,
        required: true,
    },
    bt: {
        type: String,
        required: true,
    },
}, {
    collection: 'player',
    timestamps: false,
    versionKey: false,
});
const Player = mongoose_1.default.model('player', playerSchema);
exports.default = Player;
