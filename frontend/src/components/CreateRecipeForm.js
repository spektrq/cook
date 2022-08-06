import React from 'react';
import RecipeService from '../services/RecipeService'
import { withNavigate } from './NavigateHoc'

import {Button, Container, Form, Card, Row} from 'react-bootstrap'

class CreateRecipeForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      id: props.id,
      recipeTitle: '',
      edit: props.id > 0
    }
  }

  componentDidMount() {
    //return early, as we're not updating an existing recipe
    document.addEventListener("keydown", this.escFunction, false)

    if (!this.state.edit) {
      return
    }

    RecipeService.getRecipe(this.state.id).then((response) => {
                    this.setState({ recipeTitle: response.data.title });
                  });


  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.escFunction, false);
  }

escFunction = (e) => {
    if (e.key === "Escape") {
      this.cancel();
    }
}

  handleAddRecipe = async (e) => {
    e.preventDefault()
    const title = this.state.recipeTitle
    if (title === '') return

    if (this.state.edit) {
      let recipe = { title: title, id: this.state.id }

      console.log('Recipe => ' + JSON.stringify(recipe))
      await RecipeService.updateRecipe(recipe)
      console.log('Updated recipe ' + title)
    } else {
      await RecipeService.createRecipe(title)
      console.log('Created recipe ' + title)
    }

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
      <Container>
        <Row>
          <Card className='col-md-6 offset-md-3 offset-md-3 mt-5'>
            <Card.Body>
              <Form onSubmit={this.handleAddRecipe}>
                <Form.Group className='mb-3'>
                  <Form.Label>Title:</Form.Label>
                  <Form.Control type='text' placeholder='Title' onChange={this.setRecipeTitle} value={this.state.recipeTitle}/>
                </Form.Group>
                <Button variant='success' type='submit'>Submit</Button>{' '}
                <Button variant='danger' type='cancel' onClick={ this.cancel}>Cancel</Button>
              </Form>
            </Card.Body>
          </Card>
        </Row>
      </Container>
    );
  }
}

export default withNavigate(CreateRecipeForm)
