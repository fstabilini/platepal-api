const recipesRouter = require("express").Router();
const { getRecipes } = require("../controllers/recipes.controller");

recipesRouter.get("/", getRecipes);

module.exports = recipesRouter;
