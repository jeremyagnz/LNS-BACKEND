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
const get = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.query;
    if (id) {
        const response = yield (0, playesRepository_1.getPlayer)(id);
        console.log(response);
        return res.status(200).send(response);
    }
    const resAll = yield (0, playesRepository_1.getAllPlayers)();
    console.log(resAll);
    return res.status(200).send(resAll);
});
exports.default = get;
