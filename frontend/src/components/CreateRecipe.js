import React from 'react';
import RecipeService from '../services/RecipeService'

class CreateRecipe extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      recipeTitle: ''
    }
  }

  handleAddRecipe = async () => {
    const title = this.state.recipeTitle
    if (title === '') return
    await RecipeService.createRecipe(title)
    console.log('Created recipe ' + title)
    this.props.loadRecipes()
  }

  setRecipeTitle = (e) =>  {
    this.setState({recipeTitle: e.target.value})
  }

  render() {
      return (
        <div>
          <input onChange={ this.setRecipeTitle } type="text" />
          <button onClick={ this.handleAddRecipe}>
          Submit
          </button>
        </div>
      )
  }
}

export default CreateRecipe
