import React from 'react';
import RecipeService from '../services/RecipeService'
import { withNavigate } from './NavigateHoc'

class CreateRecipeForm extends React.Component {
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
                          <input onChange={ this.setRecipeTitle } type='text' name='recipeTitle' className='form-control'/>
                      </div>
                      <button type='button' className='btn btn-success' onClick={ this.handleAddRecipe}>
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

export default withNavigate(CreateRecipeForm)
