const express = require("express");
const ctrl = require("../controllers/recipe");

const router = express.Router();

router.get("/", ctrl.getRecipe);

router.post("/", ctrl.postRecipe);

module.exports = router;
