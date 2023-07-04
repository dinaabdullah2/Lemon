import React from "react";
import { Route, Routes } from "react-router-dom";
import AddCompany from "../View/AddCompany";
import CategoriesC from "../View/Categories";
import Home from "../View/Home";
export default function Router(){
    return(
        <>
         <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/addcompany" element={<AddCompany />} />
          <Route path="/categories" element={<CategoriesC />} />
          
        </Routes>
        </>
    )
}