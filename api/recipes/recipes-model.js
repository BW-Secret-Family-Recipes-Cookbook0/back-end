const db = require("../../data/dbConfig.js");

module.exports = {
  addRecipe,
  findRecipes,
  findByRecipeId,
  updateByRecipeId,
  deleteRecipe
};

function findRecipes() {
  return db("recipes")
}

async function addRecipe(recipe) {
    const [id] = await db("recipes").insert(recipe, "id");
    return findByRecipeId(id);
}

function findByRecipeId(id) {
  return db("recipes")
    .where({id})
    .first()
}

function updateByRecipeId(updatedRecipe, id) {
    return db("recipes")
        .where({ id })
        .update(updatedRecipe);
}

function deleteRecipe(id) {
    return db("recipes")
        .where({ id })
        .del();
}