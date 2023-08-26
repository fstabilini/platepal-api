const getRecipes = (req, res) => {
  res.status(200).json({ response: "This will return all recipes" });
};

module.exports = {
  getRecipes,
};
