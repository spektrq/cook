import React from 'react';
import RecipeService from '../services/RecipeService'

class RecipeComponent extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      recipes:[]
    }
  }

  componentDidMount() {
    RecipeService.getRecipes().then((response) => {
      this.setState({ recipes: response.data})
    });
  }

  render() {
      return (
        <div>
          <h1 className="text-center">Recipe List</h1>
          <table className="table table-striped">
            <thead>
              <tr>
                <td>Recipe ID</td>
                <td>Recipe Name</td>
              </tr>
            </thead>

            <tbody>
              {
                this.state.recipes.map(
                  recipe =>
                  <tr key = {recipe.id}>
                    <td>{recipe.id}</td>
                    <td>{recipe.title}</td>
                  </tr>
                )
              }
            </tbody>
          </table>
        </div>
      )
  }
}

export default RecipeComponent