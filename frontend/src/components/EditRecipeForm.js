import { withNavigate } from './NavigateHoc'
import RecipeService from '../services/RecipeService'

import React, { Component }  from 'react'

class EditRecipeForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = { recipeTitle: '',
                   id: props.recipeId
                 }

}

  componentDidMount() {
    RecipeService.getRecipe(this.props.recipeId).then((response) => {
                    this.setState({ recipeTitle: response.data.title });
                  });
  }


  handleUpdateRecipe = async () => {
    const newTitle = this.state.recipeTitle
    if (newTitle === '') return

    let recipe = {title: newTitle, id: this.state.id}

    console.log('Recipe => ' + JSON.stringify(recipe))
    await RecipeService.updateRecipe(recipe)
    const { navigate } = this.props
    navigate('/recipes')
  }

  setRecipeTitle = (e) =>  {
    this.setState({recipeTitle: e.target.value})
  }

  cancel = () => {
    const { navigate } = this.props
    navigate('/recipes')
  }

  render() {
      return (
        <div>
          <div className='container'>
            <div className='row'>
              <div className='card col-md-6 offset-md-3 offset-md-3'>
                <div className='card-body'>
                    <form>
                      <div className='form-group'>
                        <label>Title: </label>
                          <input onChange={ this.setRecipeTitle } type='text' name='recipeTitle' className='form-control' value={this.state.recipeTitle}/>
                      </div>
                      <button type='button' className='btn btn-success' onClick={ this.handleUpdateRecipe}>
                        Submit
                      </button>
                      <button className='btn btn-danger' onClick={ this.cancel}>
                        Cancel
                      </button>
                    </form>
                  </div>
              </div>
            </div>
          </div>
        </div>
      )
  }
}

export default withNavigate(EditRecipeForm)
