import React from "react";

import SearchResultService from '../services/SearchResultService';
import {Container, Card, Button} from 'react-bootstrap'

class Search extends React.Component {
  constructor() {
    super();
    this.state = {
      result: ""
    };
  }

  setRandomTitleText = async () => {
    await SearchResultService.getSearchResults('chicken').then((response) => 
      {
        console.log(response.data)
        let titleData = response.data.map(d => d.title);
        let randomTitle = titleData[Math.floor(Math.random() * titleData.length)];
        this.setState({result: randomTitle});
      }
    )
  }

  render() {
    return (
      <Container>
      <Card>
        <div className='search'>
          <Button variant="primary" onClick={this.setRandomTitleText}>Click me for ideas</Button>
          <p>{this.state.result}</p>
        </div>
      </Card>
    </Container>
    );
  }
}

export default Search;
