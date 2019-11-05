const express = require("express");
const ctrl = require("../controllers/recipe");

const router = express.Router();

router.get("/", ctrl.getRecipes);

router.get("/:id", ctrl.getRecipe);

router.post("/", ctrl.postRecipe);

router.put("/:id", ctrl.updateRecipe);

router.delete("/:id", ctrl.deleteRecipe);

module.exports = router;
