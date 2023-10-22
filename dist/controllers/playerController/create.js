"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const create = (req, res) => {
    console.log(req.body);
    console.log(req.query);
    res.status(201).send({ message: "Player Created" });
};
exports.default = create;
