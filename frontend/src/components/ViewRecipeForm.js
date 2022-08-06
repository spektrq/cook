import React from 'react';
import RecipeService from '../services/RecipeService'
import { withNavigate } from './NavigateHoc'

import {Container, Row, Table, Button} from 'react-bootstrap'

class ViewRecipeForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      id: props.id
    }
  }

  componentDidMount() {
    RecipeService.getRecipe(this.state.id).then((response) => {
                    this.setState({ recipeTitle: response.data.title });
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
      <Container>
        <Table striped>
          <thead>
              <tr>
                <th>Recipe ID</th>
                <th>Recipe Title</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{this.state.id}</td>
                <td>{this.state.recipeTitle}</td>
              </tr>
            </tbody>
          </Table>
          <Button variant='danger' type='cancel' onClick={ this.cancel}>Close</Button>
      </Container>
    );
  }
}

export default withNavigate(ViewRecipeForm)
