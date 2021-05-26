import React from 'react';
import { Navbar,Nav } from 'react-bootstrap';
import './Header.css';

const Header = () => {

  return (
    <div className="header">
      <Navbar bg="Red" expand="lg" sticky="top">
  <Navbar.Brand href="#home">MobileKart</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#link">Products</Nav.Link>
      
    </Nav>
    
  </Navbar.Collapse>
</Navbar>
  <div className="body">
    Hello
  </div>

    </div>
  )
}

export default Header
