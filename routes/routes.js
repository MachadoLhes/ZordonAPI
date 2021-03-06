const express = require("express");
const router = express.Router();
const handler = require("../handlers/utils");
const rangerService = require("../services/rangerServices")
const seasonService = require("../services/seasonServices")

/**
 * 
 * RANGER SERVICE
 * 
 */
router.get("/rangers/", (req, res) => handler.getHandler(res, rangerService.getAll(req)));

router.get("/rangers/:id", (req, res) => handler.getHandler(res, rangerService.getRangerByID(req.params.id)));

/**
 * 
 * SEASON SERVICE
 * 
 */
router.get("/seasons/", (req, res) => handler.getHandler(res, seasonService.getAll(req)));

router.get("/seasons/:id", (req, res) => handler.getHandler(res, seasonService.getSeasonByNumber(req.params.id)));

module.exports = router;
