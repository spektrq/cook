import React from 'react';
import RecipeService from '../services/RecipeService'
import { withNavigate } from './NavigateHoc'

import {Table, Container, Card, Button} from 'react-bootstrap'

class ViewRecipeForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      id: props.id,
      recipeTitle: '',
      ingredients: [],
      methodSteps: []
    }
  }

  componentDidMount() {
    RecipeService.getRecipe(this.state.id).then((response) => {
                    this.setState({ recipeTitle: response.data.title,
                                    ingredients: response.data.ingredients,
                                    methodSteps: response.data.methodSteps});
                  });

    document.addEventListener("keydown", this.escFunction, false)
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.escFunction, false);
  }

  escFunction = (e) => {
      if (e.key === "Escape") {
        this.cancel();
      }
  }

  cancel = () => {
    const { navigate } = this.props
    navigate('/recipes')
  }

  render() {
    return (
      <Container className='mt-5'>
        <Card>
          <Card.Header>{this.state.recipeTitle}</Card.Header>
          <Card.Body>
            <Card.Title>Ingredients</Card.Title>
          </Card.Body>
          <Card.Body>
          <Table borderless style={{width:"30%"}}>
            <tbody>
              {this.state.ingredients.map((ingredient, index) => (
                <tr>
                  <td>{ingredient.name}</td>
                  <td>{ingredient.amount}</td>
                </tr>
              ))}
            </tbody>
          </Table>
          </Card.Body>
          <Card.Body>
            <Card.Title>Method</Card.Title>
          </Card.Body>
          <Card.Body>
          <Table borderless style={{width:"60%"}}>
            <tbody>
              {this.state.methodSteps.map((step, index) => (
                <tr>
                  <td>{index + 1}</td>
                  <td>{step}</td>
                </tr>
              ))}
            </tbody>
          </Table>
          </Card.Body>
          <Card.Body>
            <Button variant='danger' type='cancel' onClick={ this.cancel}>Close</Button>
          </Card.Body>
        </Card>
      </Container>
    );
  }
}

export default withNavigate(ViewRecipeForm)
