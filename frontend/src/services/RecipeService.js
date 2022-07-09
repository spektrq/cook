import axios from 'axios'

const RECIPES_URL = "http://localhost:8080/api/recipes";

class RecipeService {

  getRecipes() {
    return axios.get(RECIPES_URL);
  }

  getRecipe(id) {
  return axios.get(RECIPES_URL + '/' + id)
  }

  createRecipe(recipeTitle) {
    return (
      axios.post(RECIPES_URL, {
         title: recipeTitle
       })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      })
    );
  }

  updateRecipe(recipe) {
    return (
      axios.put(RECIPES_URL + '/' + recipe.id, recipe)
    )
  }
}

export default new RecipeService();
