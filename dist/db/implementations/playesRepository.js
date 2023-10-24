"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updatePlayer = exports.removePlayer = exports.getPlayer = exports.getAllPlayers = exports.createPlayer = void 0;
const models_1 = require("../models");
// Crea un nuevo jugador
const createPlayer = (playerData) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        return yield models_1.Player.create(playerData);
    }
    catch (error) {
        console.error("Error creating player:", error);
        throw error;
    }
});
exports.createPlayer = createPlayer;
// Obtiene todos los jugadores
const getAllPlayers = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        return yield models_1.Player.find();
    }
    catch (error) {
        console.error("Error fetching players:", error);
        throw error;
    }
});
exports.getAllPlayers = getAllPlayers;
// Obtiene un jugador por su ID
const getPlayer = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        return yield models_1.Player.findOne({ id: id });
    }
    catch (error) {
        console.error("Error fetching player by ID:", error);
        throw error;
    }
});
exports.getPlayer = getPlayer;
// Elimina un jugador por su ID
const removePlayer = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        return yield models_1.Player.deleteOne({ id: id });
    }
    catch (error) {
        console.error("Error deleting player by ID:", error);
        throw error;
    }
});
exports.removePlayer = removePlayer;
// Actualiza un jugador por su ID
const updatePlayer = (id, updatedPlayerData) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        return yield models_1.Player.findOneAndUpdate({ id: id }, updatedPlayerData);
    }
    catch (error) {
        console.error("Error updating player by ID:", error);
        throw error;
    }
});
exports.updatePlayer = updatePlayer;
