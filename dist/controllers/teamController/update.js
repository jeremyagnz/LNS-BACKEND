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
const update = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id, nombre, logo, manager } = req.body;
    const team = { nombre, logo, manager };
    const response = yield (0, teamRepository_1.updateTeam)(id, team);
    console.log(response);
    res.status(200).send({ message: `The team was updated` });
});
exports.default = update;
