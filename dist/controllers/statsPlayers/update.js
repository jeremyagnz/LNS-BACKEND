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
const playesRepository_1 = require("../../db/implementations/playesRepository");
const update = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id, name, apellidos, numero, posicion, cedula, foto, equipo, fecha_nacimiento, bt } = req.body;
        if (!id) {
            console.log("Missing 'id' in the request body");
            return res.status(400).send("Missing 'id' in the request body");
        }
        if (!name && !apellidos && !numero && !posicion && !cedula && !foto && !equipo && !fecha_nacimiento && !bt) {
            console.log("No valid data for update: Missing all fields");
            return res.status(400).send("No valid data for update: Missing all fields");
        }
        const player = { name, apellidos, numero, posicion, cedula, foto, equipo, fecha_nacimiento, bt };
        const response = yield (0, playesRepository_1.updatePlayer)(id, player);
        if (response) {
            console.log(response);
            return res.status(200).send({ message: `The player was updated` });
        }
        else {
            console.log("Player not found");
            return res.status(404).send("Player not found");
        }
    }
    catch (error) {
        console.error("Error in update operation:", error);
        return res.status(500).send("Internal Server Error");
    }
});
exports.default = update;
