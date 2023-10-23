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
    const { id, name, apellidos, numero, posicion, cedula, foto, equipo, fecha_nacimiento, bt } = req.body;
    const player = { name, apellidos, numero, posicion, cedula, foto, equipo, fecha_nacimiento, bt };
    const response = yield (0, playesRepository_1.updatePlayer)(id, player);
    console.log(response);
    res.status(200).send({ message: `The player was updated` });
});
exports.default = update;
