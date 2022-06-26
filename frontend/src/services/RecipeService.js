import axios from 'axios'

const RECIPES_URL = "http://localhost:8080/api/recipes";

class RecipeService {

  getRecipes() {
    return axios.get(RECIPES_URL);
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
}

export default new RecipeService();
