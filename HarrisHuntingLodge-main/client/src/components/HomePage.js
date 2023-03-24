import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import Header from './Header';

const HomePage = () => {
  return (
    <>
    <Header></Header>
      <Navbar bg="light" expand="lg" style={{ border: "2px solid black", fontFamily: "cursive" }}>
        <Navbar.Brand href="#home" style={{ fontSize: "20px", fontWeight: "bold", color: "red" }}>Harris Hunting Lodge</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-center">
          <Nav className="mr-auto">
            <Nav.Link href="#about" style={{ fontSize: "18px", color: "blue" }}>About Us</Nav.Link>
            <Nav.Link href="#photos" style={{ fontSize: "18px", color: "blue" }}>Photo Gallery</Nav.Link>
            <Nav.Link href="#contact" style={{ fontSize: "18px", color: "blue" }}>Contact Us</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <div className="container mt-5" style={{ border: "2px solid black", backgroundColor: "rgb(238, 238, 238)" }}>
        <h1 style={{ fontSize: "24px", fontWeight: "bold" }}>Welcome to Harris Hunting Lodge</h1>
        <div style={{ border: "2px solid black" }}>
          <p style={{ fontSize: "18px" }}>We are a family-owned farm located in the heart of beautiful [insert location here]. Our property has been in our family since 1960 and we are proud to continue the tradition of providing a place for outdoor enthusiasts to enjoy a variety of activities, including whitetail deer hunting, camping, hiking, and 4 wheeling.</p>
          </div>
      </div>
    </>
  );
};

export default HomePage;
