import React from "react";
import Footer from "../Components/Global/Layout/Footer/Footer";
import HomeAbout from "../Components/Home/HomeAbout/HomeAbout";
import HomeAddCompany from "../Components/Home/HomeAddCompany/HomeAddCompany";
import HomeCategories from "../Components/Home/HomeCategories/HomeCategories";
import Homeheader from "../Components/Home/HomeHeader/Homeheader";
import HomeSwiper from "../Components/Home/HomeSwiper/HomeSwiper";
export default function Home(){
    return(
        <>
        <Homeheader />
        <HomeSwiper />
        <HomeCategories />
        <HomeAbout />
        <HomeAddCompany />
        <Footer />
        </>
    )
}