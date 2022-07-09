import React from 'react'
import RecipeService from '../services/RecipeService'
import CreateRecipeButton from './CreateRecipeButton'
import EditRecipeButton from './EditRecipeButton'


class RecipeList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      recipes:[],
      recipeTitle: ''
    }
  }

  componentDidMount() {
    RecipeService.getRecipes().then((response) => {
      this.setState({ recipes: response.data })
    });
  }

  render() {
      return (
        <div className='container'>
          <h1 className='text-center'>Recipe List</h1>
          <table className='table table-striped'>
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
                    <td><EditRecipeButton id={recipe.id}/></td>
                  </tr>
                )
              }
            </tbody>
          </table>
          <CreateRecipeButton />
        </div>
      )
  }
}

export default RecipeList
