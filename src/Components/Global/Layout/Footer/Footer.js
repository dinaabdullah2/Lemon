import React from "react";
import logo from "./../../../../assets/icons/logo-en.svg"
import "./Footer.css"
export default function Footer(){
    return(
        <div className="footer">
            <div className="container">
                <div className="footer-logo float-lg-end float-md-end pt-5">
                        <img src={logo} alt="" />
                        <p className="mt-3"> Find and Contact Company!</p>
                </div>
                <div className="d-flex ">
                 <ul className="">
                    <li><a href="" alt="">Home</a></li>
                    <li><a href="" alt="">Add company</a></li>
                    <li><a href="" alt="">Categories</a></li>
                    
                 </ul>
                 <ul className="margin-left">
                 <li><a href="" alt="">About us</a></li>
                    <li><a href="" alt="">Contect us</a></li>
                    <li><a href="" alt="">Terms </a></li>
                 </ul>
                 
                 </div>
                <hr  />
                <div className="d-flex justify-content-between">
                    <h6>All Rights Reserved for “LEMON HINT” Website . </h6>
                    <h6> Developed By APP ZONE</h6>

                </div>
            </div>
        </div>
    )
}