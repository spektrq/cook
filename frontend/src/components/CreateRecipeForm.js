import React from 'react';
import RecipeService from '../services/RecipeService'
import { withNavigate } from './NavigateHoc'
import { AiOutlineClose } from "react-icons/ai"

import {Button, Container, Form, Card, Row, Col} from 'react-bootstrap'

class CreateRecipeForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      id: props.id,
      recipeTitle: '',
      edit: props.id > 0,
      ingredientEntries: [{'name':'', 'amount': ''}]
    }
  }

  componentDidMount() {
    //return early, as we're not updating an existing recipe
    document.addEventListener("keydown", this.escFunction, false)

    if (!this.state.edit) {
      return
    }

    RecipeService.getRecipe(this.state.id).then((response) => {
                    this.setState({ recipeTitle: response.data.title,
                                    ingredientEntries:response.data.ingredients });
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
      let recipe = { title: title, id: this.state.id, ingredients: this.state.ingredientEntries}

      console.log('Recipe => ' + JSON.stringify(recipe))
      await RecipeService.updateRecipe(recipe)
      console.log('Updated recipe ' + title)
    } else {
      await RecipeService.createRecipe(title, this.state.ingredientEntries)
      console.log('Created recipe ' + title + ' with ingredients ' + this.state.ingredientEntries)
    }

    const { navigate } = this.props
    navigate('/recipes')
  }

  setRecipeTitle = (e) =>  {
    this.setState({recipeTitle: e.target.value})
  }

  handleChangeInput = (index, e) => {
    // const regex = /^\d+(\.\d*)?$/;

    // if (e.target.name === 'amount' && !regex.test(e.target.value) && e.target.value !== '') {
    //   return
    // }

    const values = [ ...this.state.ingredientEntries]
    values[index][e.target.name] = e.target.value
    this.setState({ingredientEntries: values})
    console.log(this.state.ingredientEntries)
  }

  handleAddIngredient = () => {
    this.setState({ingredientEntries: [...this.state.ingredientEntries, {name: '', amount: ''}]})
  }

  handleRemoveIngredient = (index, e) => {
    if (this.state.ingredientEntries.length <= 1) {
      this.setState({ingredientEntries: [{'name':'', 'amount': ''}]})
      return
    }

    let entries = this.state.ingredientEntries
    entries.splice(index, 1)

    this.setState({ingredientEntries: entries})
    console.log(this.state.ingredientEntries)

  }

  cancel = () => {
    const { navigate } = this.props
    navigate('/recipes')
  }

  render() {
    return (
      <Container className='mt-5'>
        <Row>
          <Card className='col-md-6 offset-md-3 offset-md-3 mt-5'>
            <Card.Body>
              <Form onSubmit={this.handleAddRecipe}>
                <Form.Group className='mb-3'>
                  <Form.Label>Title:</Form.Label>
                  <Form.Control type='text' placeholder='Title' onChange={this.setRecipeTitle} value={this.state.recipeTitle}/>
                </Form.Group>
                <Form.Group className='mb-3'>
                  <Form.Label>Ingredients:</Form.Label>
                  {this.state.ingredientEntries.map((ingredient, index) => (
                    <div key={index}>
                      <Row className='mb-3'>
                      <Col md>
                          <Form.Control type='text' placeholder='Ingredient' onChange={e => this.handleChangeInput(index, e)} name='name' value={ingredient.name} />
                        </Col>
                        <Col md>
                          <Form.Control type='text' placeholder='Amount' onChange={e => this.handleChangeInput(index, e)} name='amount' value={ingredient.amount} />
                        </Col>
                        <Col md>
                          <Button variant='primary-outline' className='btn-transparent shadow-none' onClick={e => this.handleRemoveIngredient(index, e)}><AiOutlineClose /></Button>{' '}
                        </Col>
                      </Row>
                    </div>
                  ))}
                  <Button variant='secondary' onClick={this.handleAddIngredient}>Add</Button>{' '}
                  
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
