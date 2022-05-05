import axios from 'axios'

const RECIPES_URL = "http://localhost:8080/api/recipes";

class RecipeService {

  getRecipes() {
    return axios.get(RECIPES_URL);
  }
}

export default new RecipeService();
