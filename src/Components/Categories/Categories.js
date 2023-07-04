import React from "react";
import { Pagination } from "react-bootstrap";
import HomeCategories from "../Home/HomeCategories/HomeCategories";

import "./Categories.css"
export default function Categories(){
    
let items = [];
for (let number = 1; number <= 5; number++) {
  items.push(
    <Pagination.Item >
      {number}
    </Pagination.Item>,
  );
}
    return(
        <div className="categories ">

              <div className="add-company__header  d-flex">
              <h4>Categories</h4>
              </div>
              <HomeCategories inVisible={true} />
              <div className="d-flex">
              <Pagination size="lg">{items}
                   <Pagination.Item>
                        Next
                   </Pagination.Item>
              </Pagination>
              </div>
        </div>
    )
}