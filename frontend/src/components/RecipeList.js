import React from 'react'
import RecipeService from '../services/RecipeService'
import CreateRecipeButton from './CreateRecipeButton'
import EditRecipeButton from './EditRecipeButton'
import DeleteRecipeButton from './DeleteRecipeButton'

import { Link } from 'react-router-dom'
import {Card, Container, Table} from 'react-bootstrap'

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
        <Container className='mt-5'>
          <Card>
            <Card.Body>
              <Card.Title>Recipe List</Card.Title>
              <Table hover size="sm">
                <thead>
                  <tr>
                    <th></th>
                    <th style={{width:"10%"}}></th>
                    <th style={{width:"10%"}}></th>
                  </tr>
                </thead>
                <tbody>
                  {
                    this.state.recipes.map(
                      recipe =>
                      <tr key = {recipe.id}>
                        <td><Link to={`/recipes/view-recipe/${recipe.id}`}>{recipe.title}</Link></td>
                        <td>
                          <EditRecipeButton id={recipe.id}/>
                        </td>
                        <td>
                          <DeleteRecipeButton id={recipe.id} updateRecipes={this.updateRecipes}/>
                        </td>
                      </tr>
                    )
                  }
                </tbody>
              </Table>
            </Card.Body>
            <Card.Body>
              <CreateRecipeButton />
            </Card.Body>
          </Card>

          
        </Container>
      )
  }
}

export default RecipeList
