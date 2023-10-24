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
const teamRepository_1 = require("../../db/implementations/teamRepository");
const get = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.query;
        if (id) {
            const team = yield (0, teamRepository_1.getTeamById)(id);
            if (team) {
                console.log(team);
                return res.status(200).send(team);
            }
            else {
                console.log("Team not found");
                return res.status(404).send("Team not found");
            }
        }
        const allTeams = yield (0, teamRepository_1.getAllTeams)();
        if (allTeams && allTeams.length > 0) {
            console.log(allTeams);
            return res.status(200).send(allTeams);
        }
        else {
            console.log("No teams found");
            return res.status(404).send("No teams found");
        }
    }
    catch (error) {
        console.error("Error in get operation:", error);
        return res.status(500).send("Internal Server Error");
    }
});
exports.default = get;
