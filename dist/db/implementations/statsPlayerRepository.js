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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllPlayersStats = exports.createStats = void 0;
const statsPlayersSchema_1 = __importDefault(require("../models/statsPlayersSchema"));
// Crea un nuevo jugador
const createStats = (playerData) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        return yield statsPlayersSchema_1.default.create(playerData);
    }
    catch (error) {
        console.error("Error creating player:", error);
        throw error;
    }
});
exports.createStats = createStats;
// Obtiene todos los jugadores
const getAllPlayersStats = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        return yield statsPlayersSchema_1.default.find();
    }
    catch (error) {
        console.error("Error fetching players:", error);
        throw error;
    }
});
exports.getAllPlayersStats = getAllPlayersStats;
