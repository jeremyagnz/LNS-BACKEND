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
exports.updateTeam = exports.removeTeam = exports.getTeamById = exports.getAllTeams = exports.createTeam = void 0;
const models_1 = require("../models");
// Crea un nuevo equipo
const createTeam = (teamData) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        return yield models_1.Team.create(teamData);
    }
    catch (error) {
        console.error("Error creating team:", error);
        throw error;
    }
});
exports.createTeam = createTeam;
// Obtiene todos los equipos
const getAllTeams = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        return yield models_1.Team.find();
    }
    catch (error) {
        console.error("Error fetching teams:", error);
        throw error;
    }
});
exports.getAllTeams = getAllTeams;
// Obtiene un equipo por su ID
const getTeamById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        return yield models_1.Team.findOne({ id: id });
    }
    catch (error) {
        console.error("Error fetching team by ID:", error);
        throw error;
    }
});
exports.getTeamById = getTeamById;
// Elimina un equipo por su ID
const removeTeam = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        return yield models_1.Team.deleteOne({ id: id });
    }
    catch (error) {
        console.error("Error deleting team by ID:", error);
        throw error;
    }
});
exports.removeTeam = removeTeam;
// Actualiza un equipo por su ID
const updateTeam = (id, updatedTeamData) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        return yield models_1.Team.findOneAndUpdate({ id: id }, updatedTeamData);
    }
    catch (error) {
        console.error("Error updating team by ID:", error);
        throw error;
    }
});
exports.updateTeam = updateTeam;
