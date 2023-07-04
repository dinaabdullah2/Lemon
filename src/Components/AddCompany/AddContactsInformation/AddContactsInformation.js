import React, { useState } from "react";
import { Col, Form, Row } from "react-bootstrap";
import PhoneInput from "react-phone-number-input";
import "./../../AddCompany/AddCompanyHeader/AddCompanyHeader/AddCompanyHeader.css"
export default function AddContactsInformations({handleChange,handleNextForm,handleChangePhone,formValues,handleChangeFax,errors,setErrors,setSectionForm}){
  const MAIL_PATTERN = /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]/
  function handleErrors(event,sectionNum){
    event.preventDefault()
      if(!formValues.PhoneNumber || !formValues.EmailAddress ){
        console.log("hi")
       
              if(!formValues.PhoneNumber){
                setErrors(prevValue=>{ 
                  return{
                    ...prevValue,
                    PhoneNumber: "this field is required"
        
                  } 
                })
              }else{
                setErrors(prevValue=>{ 
                  return{
                    ...prevValue,
                    PhoneNumber: ""
        
                  } 
                })
              }
              if(!formValues.EmailAddress){
              setErrors(prevValue=>{ 
                return{
                  ...prevValue,
                  EmailAddress: "this field is required"
      
                } 
               
              })
              }
              else{
              setErrors(prevValue=>{ 
                return{
                  ...prevValue,
                  EmailAddress: ""
                  
                } 
              })
            }
          }
          else if(formValues.EmailAddress &&!MAIL_PATTERN.test(formValues.EmailAddress)){
              
              setErrors(prevValue=>{ 
                return{
                  ...prevValue,
                  EmailAddress: "Email is invalid"
                  
                } 
              })
            } 
        
          else {
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
        <h4>Contacts Information</h4>
          <div className="container-fluid">
          <Form>                   
              <Form.Group as={Row} className="mb-3 form-group" controlId="">
                <Form.Label column sm="3">
                Phone Number <em>*</em>
                </Form.Label>
                <Col sm="9">
                <PhoneInput
                  className="form__input "
                  international
                  defaultCountry="EG"
                  value={formValues.PhoneNumber}
                  onChange={handleChangePhone}
                  name="PhoneNumber"  
                  />
                  {errors.PhoneNumber && <span className="error-message ">{errors.PhoneNumber}</span>}
                </Col>

              </Form.Group>

              <Form.Group as={Row} className="mb-3" controlId="">
                <Form.Label column sm="3">
                Email Address<em>*</em>
                </Form.Label>
                <Col sm="9">
                  <input 
                    onChange={(event)=>{handleChange(event)}}
                    name="EmailAddress" 
                    className="form__input" type="text"
                    value={formValues.EmailAddress}
                   />
                   {errors.EmailAddress && <span className="error-message ">{errors.EmailAddress}</span>}
                </Col>
              </Form.Group>
              <Form.Group as={Row} className="mb-3 form-group" controlId="">
                <Form.Label column sm="3">
                Fax Number 
                </Form.Label>
                <Col sm="9">
                <PhoneInput
                  className="form__input"
                  international
                  defaultCountry="EG"
                  onChange={handleChangeFax}
                  name="FaxNumber"
                  value={formValues.FaxNumber}
                  />
                  {errors.FaxNumber  && <span className="error-message ">{errors.FaxNumber}</span>}
                </Col>
              </Form.Group>
              <Form.Group as={Row} className="mb-3" controlId="">
                <Form.Label column sm="3">
                Facebook Link
                </Form.Label>
                <Col sm="9">
                  <input className="form__input" 
                    onChange={(event)=>{handleChange(event)}}
                    name="FacebookLink"
                    type="text"
                    value={formValues.FacebookLink}
                    />
                    {errors.FacebookLink && <span className="error-message ">{errors.FacebookLink}</span>}
                </Col>
              </Form.Group>
           
              
              <Form.Group as={Row} className="mb-3" controlId="">
                <Form.Label column sm="3">
                Twitter Link
                </Form.Label>
                <Col sm="9">
                  <input 
                    onChange={(event)=>{handleChange(event)}}
                    name="TwitterLink" value={formValues.TwitterLink} 
                    className="form__input"
                    type="text"  
                  />
                  {errors.FacebookLink && <span className="error-message ">{errors.FacebookLink}</span>}
                </Col>
              </Form.Group>
              
              <Form.Group as={Row} className="mb-3" controlId="">
                <Form.Label column sm="3">
                Instgram Link
                </Form.Label>
                <Col sm="9">
                  <input  
                    onChange={(event)=>{handleChange(event)}}
                    name="InstgramLink"
                    value={formValues.InstgramLink}
                    className="form__input" type="text"  
                   />
                    {errors.InstgramLink && <span className="error-message ">{errors.InstgramLink}</span>}
                </Col>
              </Form.Group>
              <Form.Group as={Row} className="mb-3" controlId="">
                <Form.Label column sm="3">
                Website Link
                </Form.Label>
                <Col sm="9">
                  <input className="form__input" 
                    onChange={(event)=>{handleChange(event)}}
                    name="WebsiteLink" type="text" 
                    value={formValues.WebsiteLink}
                  />
                  {errors.WebsiteLink && <span className="error-message ">{errors.WebsiteLink}</span>}
                </Col>
              </Form.Group>
              <div className="float-start ">
              <button onClick={(event)=>{handleNextForm(event,"one")}}   className=" form__button-next">Prev</button>
              </div>
              <div className="float-end ">
              <button  onClick={(event)=>{handleErrors(event,"three")}}  className=" form__button-next">Next</button>
              </div>

          </Form>
          </div>
        </div>
    )
}
