import React from "react";
import "./HomeAbout.css"
import logo from "./../../../assets/icons/aboutus.svg"
import header from "./../../../assets/imgs/aboutUsBG.png"
export default function HomeAbout(){
    return (
        <div className="home-about">
            
                <div className="row">
                    <div className="col-lg-6 col-md-12 col-sm-12">
                        <div className="home-about__header">
                            <img src={header} className="" alt=""/>
                            <div className="home-about__header-icon">
                                <img src={logo} alt=""  />
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12 col-sm-12">
                        <div className="home-about__info ">
                            <h4>About US</h4>
                            <p>About lemon hint About lemon hint About About lemon hint About lemon hint About lemon hint About lemon hint About lemon hint About lemon hint About lemon hint About lemon hint  lemon hint About lemon hint About lemon hint About lemon hint Alemon hint About lemon hint About lemon hint About lemon hint About lemt lemon hint About lemon hint About lemon hint About lemon hint About lemon hint About lemon hint About lemon hint About lemon hint </p>
                            <div className="home-about__info__button m-auto">
                                <button className="">Know More</button>
                            </div>
                        </div>
                    </div>
                </div>
            
        </div>
    )
}