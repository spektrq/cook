import React from 'react';
import { Link } from 'react-router-dom'
import { Navbar, Nav, Container } from 'react-bootstrap'

function Navigation() {
  return (
    <>
    <Navbar bg='dark' variant='dark'>
      <Container>
      <Navbar.Brand as={Link} to='/'>Papa Rad's Cookbook</Navbar.Brand>
      <Nav className='me-auto'>
        <Nav.Link as={Link} to='/recipes'>Recipes</Nav.Link>
        <Nav.Link as={Link} to='/search'>Ideas</Nav.Link>
      </Nav>
      </Container>
    </Navbar>
    </>
  )
}

export default Navigation
