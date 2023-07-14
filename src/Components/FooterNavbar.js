import React from 'react';
import 'bootstrap/dist/css/bootstrap.css'; // Import Bootstrap CSS
import { Navbar, Nav } from 'react-bootstrap'; // Import required Bootstrap components

const FooterNavbar = () => {
  return (
    <footer>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Navbar.Brand href="#home">Footer Navbar</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#link1">Link 1</Nav.Link>
            <Nav.Link href="#link2">Link 2</Nav.Link>
            <Nav.Link href="#link3">Link 3</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </footer>
  );
};

export default FooterNavbar;
