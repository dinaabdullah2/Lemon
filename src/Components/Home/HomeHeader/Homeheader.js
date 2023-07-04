import React from "react";
import "./HomeHeader.css"
import img1 from "./../../../assets/imgs/building.png"
import cloud from "./../../../assets/icons/bgAnimation.svg"
import icon from "./../../../assets/icons/search.svg"
import { Button, Dropdown, DropdownButton, Form } from "react-bootstrap";
export default function Homeheader(){
      return(
        <div className="home-header">
            <div  className="clouds">
                <div class="cloud x1"><img src={cloud} alt="" /></div>  
                <div class="cloud x2"><img src={cloud} alt="" /></div>
                <div class="cloud x3"><img src={cloud} alt="" /></div>
                <div class="cloud x4"><img src={cloud} alt="" /></div>
                <div class="cloud x5"><img src={cloud} alt="" /></div>
                <div class="cloud x6"><img src={cloud} alt="" /></div>
                <div class="cloud x7"><img src={cloud} alt="" /></div>
                <div class="cloud x8"><img src={cloud} alt="" /></div>
              </div>
            <div className="home-header__imgs d-flex">
             <img src={img1} alt=""/>
             <img src={img1} alt="" />
            </div>
            
              <div className="home-header__container">
                <div className="home-header__content text-center">
                      <h2>Find and Contant Company !</h2>
                      <p>Connect with businesses in Egypt by phone, address, website, email, maps, ratings, reviews and much more</p>
                      <Form className="d-flex home-header__Form-search">
                            <DropdownButton id="dropdown-basic-button" className="home-header__search-dropdown__button" title="All">
                            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                            </DropdownButton>
                            <Form.Control
                            type="search"
                            placeholder="Search Words"
                            className="home-header__search__input"
                            aria-label="Search"
                            />
                            <Button className="home-header__search__icon"><img src={icon} alt="" /></Button>
                      </Form>
                </div>
              
            </div>
        </div>
      )
}