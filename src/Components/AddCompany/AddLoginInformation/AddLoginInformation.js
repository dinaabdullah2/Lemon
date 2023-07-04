import React from "react";
import { Col, Form, Row } from "react-bootstrap";
export default function AddLoginInformation({handleNextForm,handleChange,formValues,handleMatchPassword,handleSubmit,errors,setErrors,setSectionForm}){
    console.log(errors)
    function handleErrors(){
      
      if(!formValues.FirstName || !formValues.LastName || 
        !formValues.Password || !formValues.ConfirmPassword ){
          if(!formValues.FirstName ){
            setErrors(prevValue=>{ 
              return{
                ...prevValue,
                FirstName: "this field is required"
              } 
            })
          } else{
            setErrors(prevValue=>{ 
              return{
                ...prevValue,
                FirstName: ""
                
              } 
            })
          }
          if(!formValues.LastName){
            setErrors(prevValue=>{ 
              return{
                ...prevValue,
                LastName: "this field is required"
              } 
            })
          } else{
            setErrors(prevValue=>{ 
              return{
                ...prevValue,
                LastName: ""
                
              } 
            })
          }
          if(!formValues.Password){
            setErrors(prevValue=>{ 
              return{
                ...prevValue,
                Password: "this field is required"
              } 
            })
          } else{
            setErrors(prevValue=>{ 
              return{
                ...prevValue,
                Password: ""
                
              } 
            })
          }
          if(!formValues.ConfirmPassword){
            setErrors(prevValue=>{ 
              return{
                ...prevValue,
                ConfirmPassword: "this field is required"
              } 
            })
          } else{
            setErrors(prevValue=>{ 
              return{
                ...prevValue,
                ConfirmPassword: ""
                
              } 
            })
          }
        } else if(formValues.Password !== formValues.ConfirmPassword ){
        setErrors(prevValue=>{ 
          return{
            ...prevValue,
            ConfirmPassword: "password not match"
 
          } 
        })
      } else{
        setErrors({})
      } 
   
      
    }
    return(
        <div className="form-content">
        <h4>Login Information</h4>
          <div className="container-fluid">
          <Form>                   
              

              <Form.Group as={Row} className="mb-3" controlId="">
                <Form.Label column sm="3">
                First Name<em>*</em>
                </Form.Label>
                <Col sm="9">
                  <input className="form__input" onChange={(event)=>{handleChange(event)}} name="FirstName" value={formValues.FirstName} type="text"  />
                  { errors.FirstName && <span className="error-message">{errors.FirstName}</span>}
                </Col>
              </Form.Group>
              <Form.Group as={Row} className="mb-3 form-group" controlId="">
                <Form.Label column sm="3">
                Last Name
                </Form.Label>
                <Col sm="9">
                <input className="form__input" onChange={(event)=>{handleChange(event)}} name="LastName" value={formValues.LastName}  type="text"  />
                { errors.LastName && <span className="error-message">{errors.LastName}</span>}
                </Col>
              </Form.Group>
              <Form.Group as={Row} className="mb-3" controlId="">
                <Form.Label column sm="3">
                Password
                </Form.Label>
                <Col sm="9">
                  <input className="form__input" onChange={(event)=>{handleChange(event)}}  name="Password" value={formValues.Password}  type="text"  />
                  { errors.Password && <span className="error-message">{errors.Password}</span>}
                </Col>
              </Form.Group>
           
              
              <Form.Group as={Row} className="mb-3" controlId="">
                <Form.Label column sm="3">
                Confirm Password
                </Form.Label>
                <Col sm="9">
                  <input className="form__input" onChange={(event)=>{handleChange(event)}}  name="ConfirmPassword" value={formValues.ConfirmPassword}  type="text"  />
                  
                  { errors.ConfirmPassword && <span className="error-message">{errors.ConfirmPassword}</span>}
                </Col>
              </Form.Group>
              
             
              <div className="float-start ">
              <button onClick={(event)=>{handleNextForm(event,"three");}}   className=" form__button-next">Prev</button>
              </div>
              <div className="float-end ">
              <button typeof="submit"  className=" form__button-next" onClick={event=>{handleSubmit(event);handleErrors()}}>Submit</button>
              </div>

          </Form>
          </div>
        </div>
    )
}