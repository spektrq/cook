import React from 'react'
import RecipeService from '../services/RecipeService'
import CreateRecipeButton from './CreateRecipeButton'
import EditRecipeButton from './EditRecipeButton'

import { Link } from 'react-router-dom'
import {Card, Container, Table, Button, Modal} from 'react-bootstrap'
import DeleteAlert from './DeleteAlert'

class RecipeList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      recipes:[],
      recipeTitle: '',
      alertRecipeId: -1,
      showAlert: false
    }
  }

  componentDidMount() {
    this.updateRecipes()
  }

  toggleAlert = (id, title) => {
    this.setState({showAlert: !this.state.showAlert,
                   alertRecipeId: id,
                   alertRecipeTitle: title})
  }

  updateRecipes = () => {
    RecipeService.getRecipes().then((response) => {
      this.setState({ recipes: response.data })
    });
  }

  render() {
    const showAlert = this.state.showAlert
    const alertRecipeId = this.state.alertRecipeId
    const alertRecipeTitle = this.state.alertRecipeTitle

      return (
        <Container className='mt-5'>
          <Card>
            <Card.Body>
              <Card.Title>Recipes</Card.Title>
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
                          <Button variant="danger" onClick={() => this.toggleAlert(recipe.id, recipe.title)}>Delete</Button>
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
          <Modal show={showAlert && alertRecipeId > 0}>
            <DeleteAlert id={alertRecipeId} recipeTitle={alertRecipeTitle} updateRecipes={this.updateRecipes} toggleAlert={this.toggleAlert}/>  
          </Modal>
        </Container>
      )
  }
}

export default RecipeList
