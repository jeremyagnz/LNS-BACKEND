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
const createPlayer = (player) => __awaiter(void 0, void 0, void 0, function* () {
    return yield models_1.Player.create(player);
});
exports.createPlayer = createPlayer;
const getAllPlayers = () => __awaiter(void 0, void 0, void 0, function* () {
    return yield models_1.Player.find();
});
exports.getAllPlayers = getAllPlayers;
const getPlayer = (id) => __awaiter(void 0, void 0, void 0, function* () {
    return yield models_1.Player.findOne({ id: id });
});
exports.getPlayer = getPlayer;
const removePlayer = (id) => __awaiter(void 0, void 0, void 0, function* () {
    return yield models_1.Player.deleteOne({ id: id });
});
exports.removePlayer = removePlayer;
const updatePlayer = (id, player) => __awaiter(void 0, void 0, void 0, function* () {
    return yield models_1.Player.findOneAndUpdate({ id: id }, {
        name: player.name, naapellidos: player.apellidos, numero: player.numero, posicion: player.posicion,
        cedula: player.cedula, foto: player.foto, equipo: player.equipo, fecha_nacimiento: player.fecha_nacimiento, bt: player.bt
    });
});
exports.updatePlayer = updatePlayer;
