import React, { useState } from "react";
import { Col, Form, Row } from "react-bootstrap";
import "./../../AddCompany/AddCompanyHeader/AddCompanyHeader/AddCompanyHeader.css"
export default function AddAddressInformation({handleChange,handleNextForm,formValues,errors,setErrors,setSectionForm}){
  function handleErrors(event,sectionNum){
    event.preventDefault()
  if(!formValues.Countries || !formValues.Government ||
        !formValues.Citites || !formValues.AddressEn ||
        !formValues.AddressAr  ){
          if(!formValues.Countries){
            setErrors(prevValue=>{ 
              return{
                ...prevValue,
                Countries: "this field is required"
              } 
            })
          }else{
            setErrors(prevValue=>{ 
              return{
                ...prevValue,
                Countries: ""
              } 
            })
          }
          if(!formValues.Government){
            setErrors(prevValue=>{ 
              return{
                ...prevValue,
                Government: "this field is required"
              } 
            })
          }else{
            setErrors(prevValue=>{ 
              return{
                ...prevValue,
                Government: ""
              } 
            })
          }
          if(!formValues.Citites){
            setErrors(prevValue=>{ 
              return{
                ...prevValue,
                Citites: "this field is required"
              } 
            })
          }else{
            setErrors(prevValue=>{ 
              return{
                ...prevValue,
                Citites: ""
              } 
            })
          }
          if(!formValues.AddressEn){
            setErrors(prevValue=>{ 
              return{
                ...prevValue,
                AddressEn: "this field is required"
              } 
            })
          }else{
            setErrors(prevValue=>{ 
              return{
                ...prevValue,
                AddressEn: ""
              } 
            })
          }
          if(!formValues.AddressAr){
            setErrors(prevValue=>{ 
              return{
                ...prevValue,
                AddressAr: "this field is required"
              } 
            })
          }else{
            setErrors(prevValue=>{ 
              return{
                ...prevValue,
                AddressAr: ""
              } 
            })
          }
        }else{
          handleNextForm(event,sectionNum)
          setErrors({})
          let processLinks = document.querySelectorAll(".form-process__link")
          processLinks.forEach(link=>{
          
            if(link.dataset.section === sectionNum)
            {
              link.classList.add("process-active")
            }else {
              link.classList.remove("process-active")
            }
          })
        }    
        
    }    
      
    return( 
        <div className="form-content">
                    <h4>Address Information</h4>
                      <div className="container-fluid">
                      <Form>                   
                      <Form.Group as={Row} className="mb-3" controlId="">
                            <Form.Label column sm="3">
                               Countries <em>*</em>
                            </Form.Label>
                            <Col sm="9">
                            <select aria-label="Default select example" onChange={(event)=>{handleChange(event)}}  name="Countries" value={formValues.Countries} className="form__input form-select" >
                              <option>Please Choose Country</option>
                              <option value="1">One</option>
                              <option value="2">Two</option>
                              <option value="3">Three</option>
                            </select>
                            {errors.Countries && <span className="error-message ">{errors.Countries}</span>}
                            </Col>
                          </Form.Group>
                          <Form.Group as={Row} className="mb-3" controlId="">
                            <Form.Label column sm="3">
                            Government<em>*</em>
                            </Form.Label>
                            <Col sm="9">
                            <select aria-label="Default select example" onChange={(event)=>{handleChange(event)}} name="Government"  value={formValues.Government}   className="form__input form-select"  >
                              <option>Please Choose Goverment</option>
                              <option value="1">One</option>
                              <option value="2">Two</option>
                              <option value="3">Three</option>
                            </select>
                            {errors.Government && <span className="error-message ">{errors.Government}</span>}
                            </Col>
                          </Form.Group>
                          <Form.Group as={Row} className="mb-3" controlId="">
                            <Form.Label column sm="3">
                            Citites <em>*</em>
                            </Form.Label>
                            <Col sm="9">
                            <select aria-label="Default select example" onChange={(event)=>{handleChange(event)}} name="Citites"  value={formValues.Citites} className="form__input form-select"  >
                              <option>Please Choose City</option>
                              <option value="1">One</option>
                              <option value="2">Two</option>
                              <option value="3">Three</option>
                            </select>
                            {errors.Citites  && <span className="error-message ">{errors.Citites}</span>}
                            </Col>
                          </Form.Group>
                          <Form.Group as={Row} className="mb-3" controlId="">
                            <Form.Label column sm="3">
                            Address En<em>*</em>
                            </Form.Label>
                            <Col sm="9">
                            <textarea  as="textarea" onChange={(event)=>{handleChange(event)}} name="AddressEn"  value={formValues.AddressEn}  className="form__input__textarea" type="text"/>
                            
                            {errors.AddressEn  && <span className="error-message ">{errors.AddressEn}</span>}
                            </Col>
                          </Form.Group>
                          <Form.Group as={Row} className="mb-3 form-group" controlId="">
                            <Form.Label column sm="3">
                            Address Ar <em>*</em>
                            </Form.Label>
                            <Col sm="9">
                            <textarea  as="textarea" onChange={(event)=>{handleChange(event)}} name="AddressAr" value={formValues.AddressAr}   className="form__input__textarea" type="text"/>
                            {errors.AddressAr  && <span className="error-message ">{errors.AddressAr}</span>}
                            </Col>
                          </Form.Group>
                      
                       
                          
                        
                          <div onClick={(event)=>{handleNextForm(event,"two")}} className="float-start ">
                          <button className=" form__button-next">Prev</button>
                          </div>
                          
                          <div className="float-end ">
                          <button onClick={(event)=>{handleErrors(event,"four")}}  className=" form__button-next">Next</button>
                          </div>
      
                      </Form>
                      </div>
                    </div> 
    )
}