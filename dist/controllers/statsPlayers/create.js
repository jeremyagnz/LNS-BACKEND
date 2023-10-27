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
const uuid_1 = require("uuid");
const statsPlayerRepository_1 = require("../../db/implementations/statsPlayerRepository");
const createPlayerStats = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { bateadores, ap, ab, r, h, rbi, b2, b3, hr, bb, so, sb, sc, sf, lob } = req.body;
        if (!bateadores || !ap || !ab || !r || !h || !rbi || !b2 || !b3 || !hr || !bb || !so || !so || !sb || !sc || !sf || !lob) {
            console.log("Invalid statsplayer data: Missing required fields");
            return res.status(400).send("Invalid playeasa data: Missing required fields");
        }
        const playerStatsPayload = {
            id: (0, uuid_1.v4)(),
            bateadores,
            ap,
            ab,
            r,
            h,
            rbi,
            b2,
            b3,
            hr,
            bb,
            so,
            sb,
            sc,
            sf,
            lob
        };
        console.log(playerStatsPayload);
        yield (0, statsPlayerRepository_1.createStats)(playerStatsPayload);
        return res.status(201).send({ message: "Player created" });
    }
    catch (error) {
        console.error("Error in create operation:", error);
        return res.status(500).send("Internal Server Error");
    }
});
exports.default = createPlayerStats;
