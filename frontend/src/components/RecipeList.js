import React from 'react'
import RecipeService from '../services/RecipeService'
import CreateRecipeButton from './CreateRecipeButton'
import EditRecipeButton from './EditRecipeButton'
import DeleteRecipeButton from './DeleteRecipeButton'

import { Link } from 'react-router-dom'
import {Container, Table} from 'react-bootstrap'

class RecipeList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      recipes:[],
      recipeTitle: ''
    }
  }

  componentDidMount() {
    this.updateRecipes()
  }

  updateRecipes = () => {
    RecipeService.getRecipes().then((response) => {
      this.setState({ recipes: response.data })
    });
  }

  render() {
      return (
        <Container>
          <h1 className='text-center'>Recipe List</h1>
          <Table striped>
            <thead>
              <tr>
                <th>Recipe ID</th>
                <th>Recipe Name</th>
                <th>Actions</th>
              </tr>
            </thead>

            <tbody>
              {
                this.state.recipes.map(
                  recipe =>
                  <tr key = {recipe.id}>
                    <td>{recipe.id}</td>
                    <td><Link to={`/recipes/view-recipe/${recipe.id}`}>{recipe.title}</Link></td>
                    <td>
                      <EditRecipeButton id={recipe.id}/>{' '}
                      <DeleteRecipeButton id={recipe.id} updateRecipes={this.updateRecipes}/>
                    </td>
                  </tr>
                )
              }
            </tbody>
          </Table>
          <CreateRecipeButton />
        </Container>
      )
  }
}

export default RecipeList
