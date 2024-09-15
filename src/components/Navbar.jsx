// src/Navbar.js
import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import './Navbar.css'; // Custom CSS for styling

const MyNavbar = () => {
  return (
    <Navbar variant="dark" expand="lg">
      <Container>
        <Navbar.Brand href="#home">JobVista</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MyNavbar;
