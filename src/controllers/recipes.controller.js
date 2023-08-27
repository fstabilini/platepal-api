require("dotenv").config();
const fs = require("fs");
const path = require("path");

const axios = require("axios");
const { v4: uuidv4 } = require("uuid");

const baseUrl = process.env.BASE_URL;

const getCategories = async (req, res) => {
  const response = await axios.get(`${baseUrl}/categories.php`);

  const categories = response.data.categories.map(
    (category) => category.strCategory
  );

  res.status(200).json(categories);
};

const getRecipesByCategory = async (req, res) => {
  const category = req.params.category;

  const response = await axios.get(`${baseUrl}/filter.php?c=${category}`);

  const recipesByCategory = response.data.meals;

  res.status(200).json(recipesByCategory);
};

const getRecipeById = async (req, res) => {
  const id = req.params.id;

  const response = await axios.get(`${baseUrl}/lookup.php?i=${id}`);

  const recipe = response.data;

  res.status(200).json(recipe);
};

const getMyRecipes = (req, res) => {
  const filePath = path.join(__dirname, "../data/recipes.json");
  const data = fs.readFileSync(filePath, "utf8");

  const jsonData = JSON.parse(data);
  res.status(200).json(jsonData);
};

const createRecipe = async (req, res) => {
  const {
    strMeal,
    strCategory,
    strInstructions,
    strMealThumb,
    strYoutube,
    strIngredients,
    strMeasures,
  } = req.body;

  const newId = uuidv4();

  const newRecipe = {
    idMeal: newId,
    strMeal,
    strCategory,
    strInstructions,
    strMealThumb, // Hay que agregar una imagen por defecto
    strYoutube, // hay que agregar un video por defecto
  };

  strIngredients.forEach((ingredient, index) => {
    newRecipe[`strIngredient${index + 1}`] = ingredient;
  });
  strMeasures.forEach((measure, index) => {
    newRecipe[`strMeasure${index + 1}`] = measure;
  });

  const filePath = path.join(__dirname, "../data/recipes.json");
  const data = fs.readFileSync(filePath, "utf8");
  const jsonData = JSON.parse(data);

  jsonData.myRecipes.push(newRecipe);

  fs.writeFileSync(filePath, JSON.stringify(jsonData), "utf8");

  res.status(201).json(newRecipe);
};

const editRecipe = async (req, res) => {
  const { id } = req.params;
  const {
    strMeal,
    strCategory,
    strInstructions,
    strMealThumb,
    strYoutube,
    strIngredients,
    strMeasures,
  } = req.body;

  const filePath = path.join(__dirname, "../data/recipes.json");
  const data = fs.readFileSync(filePath, "utf8");
  const jsonData = JSON.parse(data);

  const recipeIndex = jsonData.myRecipes.findIndex(
    (recipe) => recipe.idMeal === id
  );

  const updatedRecipe = {
    ...jsonData.myRecipes[recipeIndex],
    strMeal,
    strCategory,
    strInstructions,
    strMealThumb,
    strYoutube,
  };

  strIngredients.forEach((ingredient, index) => {
    updatedRecipe[`strIngredient${index + 1}`] = ingredient;
  });

  strMeasures.forEach((measure, index) => {
    updatedRecipe[`strMeasure${index + 1}`] = measure;
  });

  jsonData.myRecipes[recipeIndex] = updatedRecipe;

  fs.writeFileSync(filePath, JSON.stringify(jsonData), "utf8");

  res.status(200).json(updatedRecipe);
};

const deleteRecipe = (req, res) => {
  const { id } = req.params;

  const filePath = path.join(__dirname, "../data/recipes.json");
  const data = fs.readFileSync(filePath, "utf8");
  const jsonData = JSON.parse(data);

  const recipeIndex = jsonData.myRecipes.findIndex(
    (recipe) => recipe.idMeal === id
  );

  jsonData.myRecipes.splice(recipeIndex, 1);

  fs.writeFileSync(filePath, JSON.stringify(jsonData), "utf8");

  res.status(200).json({ message: "Recipe deleted successfully" });
};

module.exports = {
  getCategories,
  getRecipesByCategory,
  getRecipeById,
  getMyRecipes,
  createRecipe,
  editRecipe,
  deleteRecipe,
};
