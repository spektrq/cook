import React from "react";

import SearchResultService from '../services/SearchResultService';
import {Container, Card, Button, Form} from 'react-bootstrap'

class Search extends React.Component {
  constructor() {
    super();
    this.state = {
      result: "",
      ingredients: ""
    };
  }

  setRecipeText = async () => {
    if (this.state.ingredients) {
      await SearchResultService.getSearchResults(this.state.ingredients).then((response) => 
        {
          console.log(response.data)
          let titleData = response.data.map(d => d.title)

          let randomTitle = titleData[Math.floor(Math.random() * titleData.length)]
          while (titleData.length > 1 && this.state.result && randomTitle == this.state.result) {
            let index = titleData.indexOf(randomTitle);
            titleData.splice(index, 1)
            randomTitle = titleData[Math.floor(Math.random() * titleData.length)]
          }
          
          this.setState({result: randomTitle});
        }
      )
    }
  }
  
  setIngredients = (e) =>  {
    this.setState({ingredients: e.target.value})
  }

  render() {
    return (
      <Container className='mt-5'>
        <h1>
          Idea Generator
        </h1>
        <br />
      <Card>
        <Card.Body>
          <div className='search'>
            <Card.Body>
            <Form.Group className='mb-3'>
              <Form.Label>Enter ingredients each separated by a comma:</Form.Label>
              <Form.Control type='text' placeholder='Ingredients' onChange={this.setIngredients} value={this.state.ingredients}/>
            </Form.Group>
              <Card.Title>{this.state.result}</Card.Title>
              <Button variant="primary" onClick={this.setRecipeText}>Click me for ideas</Button>
            </Card.Body>
          </div>
        </Card.Body>
      </Card>
    </Container>
    );
  }
}

export default Search;
