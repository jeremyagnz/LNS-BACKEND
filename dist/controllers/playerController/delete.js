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
const remove = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.query;
        if (!id) {
            console.log("Missing 'id' in the request query");
            return res.status(400).send("Missing 'id' in the request query");
        }
        yield (0, playesRepository_1.removePlayer)(id);
        return res.status(200).send({ message: 'The player was deleted' });
    }
    catch (error) {
        console.error("Error in remove operation:", error);
        return res.status(500).send("Internal Server Error");
    }
});
exports.default = remove;
