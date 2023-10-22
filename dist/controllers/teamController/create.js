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
const uuid_1 = require("uuid");
const create = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, logo, manager } = req.body;
    const teamPayload = {
        id: (0, uuid_1.v4)(),
        name,
        logo,
        manager
    };
    console.log(teamPayload);
    yield (0, teamRepository_1.createTeam)(teamPayload);
    res.status(201).send({ message: "Team created" });
});
exports.default = create;
