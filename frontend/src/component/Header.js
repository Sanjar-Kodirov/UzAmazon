import React from 'react'
import {Container, Navbar,Nav} from 'react-bootstrap'

const Header = () => {
    return (
      <Navbar bg="primary"  variant="dark" expand="lg">
          <Container>
            <Navbar.Brand href="#home mr-4"><i class="fas fa-align-left"></i>  все товары</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-4">
                <Nav.Link className="text-light" href="#home">Home</Nav.Link>
                <Nav.Link className="text-light" href="#link">Link</Nav.Link>
                <Nav.Link className="text-light" href="#link">About</Nav.Link>
                <Nav.Link className="text-light" href="#link">Link</Nav.Link>
                <Nav.Link className="text-light" href="#link">Link</Nav.Link>
                </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
    )
}

export default Header
