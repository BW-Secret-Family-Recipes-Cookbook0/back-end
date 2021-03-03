const router = require("express").Router();
const Recipes = require("./recipes-model.js");
const restricted = require("../auth/auth-middleware.js");

router.post("/", restricted, (req, res) => {
  const newRecipe = req.body;
  console.log(newRecipe);
//Create
  Recipes.addRecipe(newRecipe)
    .then((saved) => {
      res.status(201).json({ created_recipe: saved, message: "recipe added" });
    })
    .catch((error) => {
      res.status(500).json({ message: "err" });
    });
});
//Read
router.get("/recipelist", (req, res) => {
  Recipes.findRecipes()
    .then((recipes) => {
      res.status(200).json(recipes);
    })
    .catch((error) => {
      res.status(500).json({ message: "err" });
    });
});
//Read
router.get("/:id", (req, res) => {
  const { id } = req.params.id;
  Recipes.findByRecipeId(id)
    .then((recipe) => {
      res.status(200).json(recipe);
    })
    .catch((error) => {
      res.status(500).json({ message: "err" });
    });
});
//Update
router.put("/:id", restricted, (req, res) => {
  const { id } = req.params.id;
  const body = req.body;
  Recipes.updateByRecipeId(body, id)
    .then((updatedRecipe) => {
      if (updatedRecipe) {
        res.status(200).json({ message: "recipe updated" });
      } else {
        res.status(404).json({ message: "recipe id not found" });
      }
    })
    .catch((error) => {
      res.status(500).json({ message: "err" });
    });
});
//Delete
router.delete("/:id", restricted, (req, res) => {
  const { id } = req.params.id;
  Recipes.deleteRecipe(id)
    .then((deleted) => {
      if (deleted) {
        res.status(200).json({ message: "recipe deleted" });
      } else {
        res.status(404).json({ message: "recip id not found" });
      }
    })
    .catch((error) => {
      res.status(500).json({ message: "not able to delete recipe" });
    });
});

module.exports = router;
