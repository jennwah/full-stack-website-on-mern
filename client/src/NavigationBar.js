import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const NavigationBar = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand href="/">Home</Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link href="/about">About</Nav.Link>
        <Nav.Link href="/stuff">Stuff</Nav.Link>
        <Nav.Link href="/locations">Locations</Nav.Link>
        <Nav.Link href="/comments">Comments</Nav.Link>
      </Nav>
    </Navbar>
  );
};

export default NavigationBar;