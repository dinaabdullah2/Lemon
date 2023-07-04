import React from "react";
import { Dropdown, DropdownButton } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from "react-router-dom";

import NavbarBrand from "./../../../../assets/icons/logo-en.svg"
import icon from "./../../../../assets/icons/search.svg"
import "./Navbar.css"
export default function NavbarC(){
    

  return (
    <>
    <Navbar  expand="lg" className="Nav">
      <Container fluid >
        <Navbar.Brand href="#" className="nav-brand"><NavLink to=""><img src={NavbarBrand} alt="" /></NavLink></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            navbarScroll>
            <Form className="d-flex Form-search">
                <DropdownButton id="dropdown-basic-button" className="search-dropdown__button" title="All">
                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                </DropdownButton>
                <Form.Control
                type="search"
                placeholder="Search Words"
                className="Nav-search__input"
                aria-label="Search"
                />
                <Button className="Nav-search__icon"><img src={icon} alt="" /></Button>
            </Form>
           
              <NavLink className="nav-link" to="/addcompany">Add company</NavLink>
              <NavLink className="nav-link" to="/categories">Categories</NavLink>
            
            <Button className="nav__button-arabic">عربى</Button>
            <Button className="nav__button-account">My Account</Button>
            
          </Nav>
        
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  );
    
}