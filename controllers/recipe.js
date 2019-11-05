const Recipe = require("../models/recipe");

const getRecipes = (req, res, next) => {
  Recipe.find()
    .then(recipes => {
      if (!recipes) res.status(404).json({ message: "no recipes" });
      res.status(200).json(recipes);
    })
    .catch(error => res.status(500).json({ message: "Server error" }));
};

const getRecipe = (req, res, next) => {
  Recipe.findOne({ _id: req.params.id })
    .then(recipe => {
      if (!recipe) res.status(404).json({ message: "Recipe not found" });
      res.status(200).json(recipe);
    })
    .catch(error => res.status(400).json({ message: "An error occurred" }));
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

const updateRecipe = (req, res, next) => {
  const recipe = new Recipe({
    _id: req.params.id,
    title: req.body.title,
    ingredients: req.body.ingredients,
    instructions: req.body.instructions,
    difficulty: req.body.difficulty,
    time: req.body.time
  });
  Recipe.updateOne({ _id: req.params.id }, recipe)
    .then(() => {
      res.status(201).json({
        message: "Recipe updated successfully!"
      });
    })
    .catch(error => {
      res.status(400).json({
        error: error
      });
    });
};

const deleteRecipe = (req, res, next) => {
  Recipe.deleteOne({ _id: req.params.id })
    .then(() => {
      res.status(200).json({
        message: "Recipe deleted"
      });
    })
    .catch(error => {
      res.status(400).json({
        error: error
      });
    });
};

module.exports = {
  getRecipes,
  getRecipe,
  postRecipe,
  updateRecipe,
  deleteRecipe
};
