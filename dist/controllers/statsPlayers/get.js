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
const statsPlayerRepository_1 = require("../../db/implementations/statsPlayerRepository");
const getStats = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.query;
        /* if (id) {
          const player = await getPlayer(id);
    
          if (player) {
            console.log(player);
            return res.status(200).send(player);
          } else {
            console.log("Player not found");
            return res.status(404).send("Player not found");
          }
        } */
        const allPlayersStats = yield (0, statsPlayerRepository_1.getAllPlayersStats)();
        if (allPlayersStats && allPlayersStats.length > 0) {
            console.log(allPlayersStats);
            return res.status(200).send(allPlayersStats);
        }
        else {
            console.log("No players found");
            return res.status(404).send("No players found");
        }
    }
    catch (error) {
        console.error("Error in get operation:", error);
        return res.status(500).send("Internal Server Error");
    }
});
exports.default = getStats;
