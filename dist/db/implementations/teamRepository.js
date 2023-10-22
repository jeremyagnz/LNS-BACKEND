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
exports.updateTeam = exports.removeTeam = exports.getTeam = exports.getAllTeam = exports.createTeam = void 0;
const models_1 = require("../models");
const createTeam = (team) => __awaiter(void 0, void 0, void 0, function* () {
    return yield models_1.Team.create(team);
});
exports.createTeam = createTeam;
const getAllTeam = () => __awaiter(void 0, void 0, void 0, function* () {
    return yield models_1.Team.find();
});
exports.getAllTeam = getAllTeam;
const getTeam = (id) => __awaiter(void 0, void 0, void 0, function* () {
    return yield models_1.Team.findOne({ id: id });
});
exports.getTeam = getTeam;
const removeTeam = (id) => __awaiter(void 0, void 0, void 0, function* () {
    return yield models_1.Team.deleteOne({ id: id });
});
exports.removeTeam = removeTeam;
const updateTeam = (id, team) => __awaiter(void 0, void 0, void 0, function* () {
    return yield models_1.Team.findOneAndUpdate({ id: id }, { nombre: team.nombre, logo: team.logo, manager: team.manager });
});
exports.updateTeam = updateTeam;
