const Recipe = require("../models/recipe");

const getRecipe = (req, res, next) => {
  Recipe.find()
    .then(recipes => {
      if (!recipes) res.status(404).json({ message: "no recipes" });
      res.status(200).json(recipes);
    })
    .catch(error => res.status(500).json({ message: "Server error" }));
};

const postRecipe = (req, res, next) => {
  const recipe = new Recipe({
    title: req.body.title,
    ingredients: req.body.ingredients,
    instructions: req.body.instructions,
    difficulty: req.body.difficulty,
    time: req.body.time
  });

  recipe
    .save()
    .then(() => {
      res.status(201).json({ message: "Recipe created successfully" });
    })
    .catch(error => res.status(400).json({ error: error }));
};

module.exports = {
  getRecipe: getRecipe,
  postRecipe: postRecipe
};
