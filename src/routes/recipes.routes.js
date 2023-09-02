const recipesRouter = require("express").Router();
const {
  getCategories,
  getRecipesByCategory,
  getRecipeById,
  getMyRecipes,
  createRecipe,
  editRecipe,
  deleteRecipe,
} = require("../controllers/recipes.controller");

recipesRouter.get("/categories", getCategories);
recipesRouter.get("/categories/:category", getRecipesByCategory);
recipesRouter.get("/favorites", getMyRecipes); // To see saved recipes
// axios.get("http://localhost:8080/recipes/favorites")

recipesRouter.post("/", createRecipe);

recipesRouter.get("/recipe/:id", getRecipeById);
recipesRouter.put("/recipe/:id", editRecipe);
recipesRouter.delete("/recipe/:id", deleteRecipe);

module.exports = recipesRouter;
