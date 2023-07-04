import React, { useCallback, useRef } from "react";
import "./HomeSwiper.css"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay } from "swiper";
import { Navigation } from "swiper";
import img1 from "../../../assets/imgs/company1.jpg";
import img2 from "../../../assets/imgs/company-logo.png";
import img3 from "../../../assets/imgs/company3.jpg";
import arrowRight from "./../../../assets/icons/rightArrow.svg"
import arrowLeft from "./../../../assets/icons/leftArrow.svg"
import star from "./../../../assets/icons/star.svg"
export default function HomeSwiper(){
    const sliderRef = useRef(null);

    const handlePrev = useCallback(() => {
      if (!sliderRef.current) return;
      sliderRef.current.swiper.slidePrev();
   

    }, []);
  
    const handleNext = useCallback(() => {
      if (!sliderRef.current) return;
      sliderRef.current.swiper.slideNext();
    

    }, []);
  
    return(
        <div className="home-swiper">
            <div className="container">
                 <h3>Featured Companies</h3>
                 <Swiper ref={sliderRef}
                    spaceBetween={50}
                    slidesPerView={3}
                    
                    autoplay={{
                        delay: 19000,
                    
                    }}
                    breakpoints={{
                        0:{
                            slidesPerView: 1,
                            spaceBetween: 5,
                        },
                        640: {
                        slidesPerView: 1,
                        spaceBetween: 20,
                        },
                        768: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                        },
                        1024: {
                        slidesPerView: 3,
                        spaceBetween: 20,
                        },
                        1440: {
                            slidesPerView: 3,
                            spaceBetween: 20,
                        },
                    }}

                   navigation={true} 
                    modules={[Autoplay ,Navigation]}
                   
                    >
                    
                    <SwiperSlide>
                        <div className="carsouel-content">
                            <img src={img1} alt=""></img>
                            <div className="carsouel-info">
                                <h4>King's Crown</h4>
                                <h6>Categories <span>Clothing</span></h6>
                                <div className="stars">
                                    <img src={star}  alt="" />
                                    <img src={star}  alt="" />
                                    <img src={star}  alt="" />
                                    <img src={star}  alt="" />
                                    <img src={star}  alt="" />
                                </div>
                            </div>
                        </div>
                        </SwiperSlide>
                    
                    
                    <SwiperSlide>  <div className="carsouel-content">
                            <img src={img2} alt=""></img>
                            <div className="carsouel-info">
                                <h4>Company name</h4>
                                <h6>Categories <span>Clothing</span></h6>
                                <div className="stars">
                                    <img src={star}  alt="" />
                                    <img src={star}  alt="" />
                                    <img src={star}  alt="" />
                                    <img src={star}  alt="" />
                                    <img src={star}  alt="" />
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
            
                
                    <SwiperSlide>  <div className="carsouel-content">
                            <img src={img3} alt=""></img>
                            <div className="carsouel-info">
                                <h4>Wise Home</h4>
                                <h6>Categories <span>Decore</span></h6>
                                <div className="stars">
                                    <img src={star}  alt="" />
                                    <img src={star}  alt="" />
                                    <img src={star}  alt="" />
                                    <img src={star}  alt="" />
                                    <img src={star}  alt="" />
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
            
                    
                    <SwiperSlide>  <div className="carsouel-content">
                            <img src={img1} alt=""></img>
                            <div className="carsouel-info">
                                <h4>Company name</h4>
                                <h6>Categories <span>Clothing</span></h6>
                                <div className="stars">
                                    <img src={star}  alt="" />
                                    <img src={star}  alt="" />
                                    <img src={star}  alt="" />
                                    <img src={star}  alt="" />
                                    <img src={star}  alt="" />
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                
                    <SwiperSlide>  <div className="carsouel-content">
                            <img src={img2} alt=""></img>
                            <div className="carsouel-info">
                                <h4>King's Crown</h4>
                                <h6>Categories <span>Decore</span></h6>
                                <div className="stars">
                                    <img src={star}  alt="" />
                                    <img src={star}  alt="" />
                                    <img src={star}  alt="" />
                                    <img src={star}  alt="" />
                                    <img src={star}  alt="" />
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    
                    </Swiper>
                    <div className="prev-arrow" onClick={handlePrev} >
                        <img src={arrowLeft} alt="" />
                    </div>
                    <div className="next-arrow" onClick={handleNext}>
                    <img src={arrowRight} alt="" />
                    </div>
            </div>
        </div>
    )
}