import React from 'react'
import RecipeService from '../services/RecipeService'
import CreateRecipeButton from './CreateRecipeButton'
import EditRecipeButton from './EditRecipeButton'

import { Link } from 'react-router-dom'
import {Card, Container, Table, Button, Modal, Form, InputGroup} from 'react-bootstrap'
import DeleteAlert from './DeleteAlert'
import { FiDelete, FiSearch,  } from 'react-icons/fi'

class RecipeList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      recipes:[],
      recipeTitle: '',
      alertRecipeId: -1,
      showAlert: false,
      filter: ""
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
    let filteredData = this.state.recipes
    
    if (this.state.filter) {
      filteredData = this.state.recipes.filter(
        r => r.title.toLowerCase().includes(this.state.filter.toLowerCase())
      );
    }

      return (
        <Container className='mt-5'>
          <h1>
            Recipes
          </h1>
          <br />
          <Card>
            <Card.Body>
              <Form className="filter-right">  
                <InputGroup>
                    <InputGroup.Text>
                      <FiSearch />
                    </InputGroup.Text>
                    <Form.Control 
                      type="text" 
                      placeholder="Filter"
                      value={this.state.filter} 
                      onChange={(e) => this.setState({ filter: e.target.value })
                      } 
                    />
                </InputGroup>
              </Form>
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
                    filteredData.map(
                      recipe =>
                      <tr key = {recipe.id}>
                        <td><Link to={`/recipes/view-recipe/${recipe.id}`}>{recipe.title}</Link></td>
                        <td>
                          <EditRecipeButton id={recipe.id}/>
                        </td>
                        <td>
                          <Button data-toggle="tooltip" data-placement="top" title="Delete" variant="danger" onClick={() => this.toggleAlert(recipe.id, recipe.title)}>Delete <FiDelete /></Button>
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
