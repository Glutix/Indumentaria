"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
router.get("/", (req, res) => {
    return res.send("Hola mundo");
});
router.get("/:id", (req, res) => {
    return res.send("Hola mundo");
});
