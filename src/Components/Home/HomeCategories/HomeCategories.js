import React from "react";
import { Pagination } from "react-bootstrap";
import "./HomeCategories.css"
import img1 from "./../.../../../../assets/imgs/company1.jpg"
import img2 from "./../.../../../../assets/imgs/company-logo.png"
import img3 from "./../.../../../../assets/imgs/company3.jpg"
import img4 from "./../.../../../../assets/imgs/company4.jpg"
import img5 from "./../.../../../../assets/imgs/company5.jpg"
import img6 from "./../.../../../../assets/imgs/company6.jpg"
import star from "./../../../assets/icons/star.svg"
export default function HomeCategories(props){
    var x = props.inVisible 
    console.log(x)
    
  
    return (
        <div className="home-categories ">
            <div className="container">
                <div className="d-flex">
                   <Pagination size="lg">   
                        <Pagination.Item  >
                        ALL
                        </Pagination.Item>
                        <Pagination.Item  >
                        Commercial
                        </Pagination.Item>
                        <Pagination.Item  >
                        Industrial 
                        </Pagination.Item>
                        <Pagination.Item  >
                        Agricultural 
                        </Pagination.Item>
                        <Pagination.Item  >
                        Services
                        </Pagination.Item>

                    </Pagination> 
                </div>
                <div className="row mt-5">
                    <div className="col-lg-6">
                        <div className="category d-flex mb-4">
                            <div className="category-img ">
                            <img src={img1} alt="" className="img-fluid" />
                            </div>
                            <div className="category-info  ">
                                <h4>King’s Crown</h4>
                                    <h6>Categories <span>Clothing</span></h6>
                                    <div className="stars mt-5">
                                        <img src={star}  alt="" />
                                        <img src={star}  alt="" />
                                        <img src={star}  alt="" />
                                        <img src={star}  alt="" />
                                        <img src={star}  alt="" />
                                    </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="category d-flex mb-4">
                            <div className="category-img ">
                            <img src={img2} alt="" className="img-fluid" />
                            </div>
                            <div className="category-info  ">
                                <h4>Company name</h4>
                                    <h6>Categories <span>Clothing</span></h6>
                                    <div className="stars mt-5">
                                        <img src={star}  alt="" />
                                        <img src={star}  alt="" />
                                        <img src={star}  alt="" />
                                        <img src={star}  alt="" />
                                        <img src={star}  alt="" />
                                    </div>
                            </div>
                        </div>  
                    </div>
                    <div className="col-lg-6">
                        <div className="category d-flex mb-4">
                            <div className="category-img ">
                            <img src={img3} alt="" className="img-fluid" />
                            </div>
                            <div className="category-info  ">
                                <h4>Wise Home </h4>
                                    <h6>Categories <span>Clothing</span></h6>
                                    <div className="stars mt-5">
                                        <img src={star}  alt="" />
                                        <img src={star}  alt="" />
                                        <img src={star}  alt="" />
                                        <img src={star}  alt="" />
                                        <img src={star}  alt="" />
                                    </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="category d-flex mb-4">
                            <div className="category-img ">
                            <img src={img4} alt="" className="img-fluid" />
                            </div>
                            <div className="category-info  ">
                                <h4>Quick Slice</h4>
                                    <h6>Categories <span>Clothing</span></h6>
                                    <div className="stars mt-5">
                                        <img src={star}  alt="" />
                                        <img src={star}  alt="" />
                                        <img src={star}  alt="" />
                                        <img src={star}  alt="" />
                                        <img src={star}  alt="" />
                                    </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="category d-flex mb-4">
                            <div className="category-img ">
                            <img src={img5} alt="" className="img-fluid" />
                            </div>
                            <div className="category-info  ">
                                <h4>King’s Crown</h4>
                                    <h6>Categories <span>Clothing</span></h6>
                                    <div className="stars mt-5">
                                        <img src={star}  alt="" />
                                        <img src={star}  alt="" />
                                        <img src={star}  alt="" />
                                        <img src={star}  alt="" />
                                        <img src={star}  alt="" />
                                    </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="category d-flex mb-4">
                            <div className="category-img ">
                            <img src={img6} alt="" className="img-fluid" />
                            </div>
                            <div className="category-info  ">
                                <h4>Bigger fish </h4>
                                    <h6>Categories <span>Clothing</span></h6>
                                    <div className="stars mt-5">
                                        <img src={star}  alt="" />
                                        <img src={star}  alt="" />
                                        <img src={star}  alt="" />
                                        <img src={star}  alt="" />
                                        <img src={star}  alt="" />
                                    </div>
                            </div>
                        </div>
                    </div>
                </div>
             
                { !x ?    <div className="home-category__button m-auto">
                     <button className="">View All</button>
                     </div>
                      : null }
                 
               
        
                </div>
            </div>
      
    )
}