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
const playesRepository_1 = require("../../db/implementations/playesRepository");
const create = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name, apellidos, numero, posicion, cedula, foto, equipo, fecha_nacimiento, bt } = req.body;
        if (!name || !apellidos || !numero || !posicion || !cedula || !foto || !equipo || !fecha_nacimiento || !bt) {
            console.log("Invalid player data: Missing required fields");
            return res.status(400).send("Invalid player data: Missing required fields");
        }
        const playerPayload = {
            id: (0, uuid_1.v4)(),
            name,
            apellidos,
            numero,
            posicion,
            cedula,
            foto,
            equipo,
            fecha_nacimiento,
            bt
        };
        console.log(playerPayload);
        yield (0, playesRepository_1.createPlayer)(playerPayload);
        return res.status(201).send({ message: "Player created" });
    }
    catch (error) {
        console.error("Error in create operation:", error);
        return res.status(500).send("Internal Server Error");
    }
});
exports.default = create;
