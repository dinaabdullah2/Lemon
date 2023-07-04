import React, { useRef } from "react";
import { Col, Form, Row } from "react-bootstrap";
import logo from "./../../../assets/icons/addImageIcon.svg"
import "./../../AddCompany/AddCompanyHeader/AddCompanyHeader/AddCompanyHeader.css"
export default function AddCompanyInformationForm({handleChange,previewUploadImage,imageUrl,handleNextForm,formValues,errors,setErrors,setSectionForm}){
    
    function handleLogo(){
        let inputFileEvent = document.querySelector(".input-file-js")
        inputFileEvent.click()
   }
    
   function handleErrors(event,sectionNum){
    if(!formValues.Logo|| !formValues.CompanyNameEn ||
      !formValues.Categories || !formValues.SubCategories || 
      !formValues.DescriptionEn || !formValues.DescriptionAr){
        
        if(!formValues.Logo){
          setErrors(prevValue=>{ 
            return{
              ...prevValue,
              Logo: "please logo is required"
            } 
          })
        }else{
          setErrors(prevValue=>{ 
            return{
              ...prevValue,
              Logo: ""
            } 
          })
        }
        
        if(!formValues.CompanyNameEn){
          setErrors(prevValue=>{ 
            return{
              ...prevValue,
              CompanyNameEn: "this field is required"
            } 
          })
        }else{
          setErrors(prevValue=>{ 
            return{
              ...prevValue,
              CompanyNameEn: ""
            } 
          })
        }
        if(!formValues.Categories){
          setErrors(prevValue=>{ 
            return{
              ...prevValue,
              Categories: "this field is required"
  
            } 
          })
        }else{
          setErrors(prevValue=>{ 
            return{
              ...prevValue,
              Categories: ""
  
            } 
          })
        }
      
        if(!formValues.SubCategories){
          setErrors(prevValue=>{ 
            return{
              ...prevValue,
              SubCategories: "this field is required"
  
            } 
          })
        }else {
          setErrors(prevValue=>{ 
            return{
              ...prevValue,
              SubCategories: ""
  
            } 
          })
        }
        if(!formValues.DescriptionEn){
          setErrors(prevValue=>{ 
            return{
              ...prevValue,
              DescriptionEn: "this field is required"
  
            } 
          })
        }else{
          setErrors(prevValue=>{ 
            return{
              ...prevValue,
              DescriptionEn: ""
  
            } 
          })
        }
        if(!formValues.DescriptionAr){
          setErrors(prevValue=>{ 
            return{
              ...prevValue,
              DescriptionAr: "this field is required"
  
            } 
          })
        }else{
          setErrors(prevValue=>{ 
            return{
              ...prevValue,
              DescriptionAr: ""
  
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
  
    const addFile = useRef(null)
    const addFileInput = useRef(null)
    const imageContentRef = useRef(null);
    const imageFirmRef = useRef(null);
  
    
    return(
        <div className="form-content">
        <h4>Company Information</h4>
          <div className="container-fluid">
          <Form>
              <Form.Group  as={Row} className="form-logo mb-3" controlId="formPlaintextEmail">
                <Form.Label column sm="3">
                  Logo <em>*</em>
                </Form.Label>
                <Col sm="3">
                  <input ref={(e)=>{
                    addFileInput.current = e
                  }}  className="input-file-js" id="input-file"  name="Logo" type="file" onChange={(e)=>{previewUploadImage(e)}} />
                    { 
                    imageUrl == null ? 
                    <>
                    <div className="form-logo__icon" ref={addFile} onClick={()=>{handleLogo()}}>
                        <img className="form__campany__firm-icon" ref={imageFirmRef} src={logo} alt=""/>
                    </div>
                    {errors.Logo && <span className="error-message ">{errors.Logo}</span>}
                    </>
                    :
                    <div className="form-logo__icon form-image-container" ref={addFile} onClick={()=>{handleLogo()}}>
                        <img className="form__campany-image rounded" ref={imageContentRef} src={imageUrl} alt="" />
                    </div>                 
}                
              </Col>
              </Form.Group>
                                
              <Form.Group as={Row} className="mb-3 form-group" controlId="">
                <Form.Label column sm="3">
                Company Name En <em>*</em>
                </Form.Label>
                <Col sm="9">
                  <input onChange={(event)=>{handleChange(event)}} name="CompanyNameEn" value={formValues.CompanyNameEn} className="form__input" type="text"/>
                  {errors.CompanyNameEn && <span className="error-message ">{errors.CompanyNameEn}</span>}
                </Col>
              </Form.Group>

              <Form.Group as={Row} className="mb-3" controlId="">
                <Form.Label column sm="3">
                Categories<em>*</em>
                </Form.Label>
                <Col sm="9">
                  <input onChange={(event)=>{handleChange(event)}} name="Categories" value={formValues.Categories} className="form__input" type="text"  />
                  {errors.Categories && <span className="error-message ">{errors.Categories}</span>}
                </Col>
              </Form.Group>
              <Form.Group as={Row} className="mb-3" controlId="">
                <Form.Label column sm="3">
                  Sub Categories <em>*</em>
                </Form.Label>
                <Col sm="9">
                <select aria-label="Default select example" onChange={(event)=>{handleChange(event)}} value={formValues.SubCategories} name="SubCategories" className="form__input form-select"  >
                  <option></option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
                {errors.SubCategories && <span className="error-message ">{errors.SubCategories}</span>}
                </Col>
              </Form.Group>
              <Form.Group as={Row} className="mb-3 form-group" controlId="">
                <Form.Label column sm="3">
                Description En <em>*</em>
                </Form.Label>
                <Col sm="9">
                  <textarea onChange={(event)=>{handleChange(event)}} name="DescriptionEn" value={formValues.DescriptionEn}  as="textarea" className="form__input__textarea  " type="text"/>
                  {errors.DescriptionEn  && <span className="error-message ">{errors.DescriptionEn}</span>}
                  
                </Col>
              </Form.Group>
              <Form.Group as={Row} className="mb-3 form-group" controlId="">
                <Form.Label column sm="3">
                Description Ar <em>*</em>
                </Form.Label>
                <Col sm="9">
                  <input onChange={(event)=>{handleChange(event)}} name="DescriptionAr" value={formValues.DescriptionAr} as="textarea" className="form__input__textarea" type="text"/>
                  {errors.DescriptionAr  && <span className="error-message ">{errors.DescriptionAr}</span>}
                </Col>
              </Form.Group>
              
              <Form.Group as={Row} className="mb-3" controlId="">
                <Form.Label column sm="3">
                  Authority No.
                </Form.Label>
                <Col sm="9">
                  <input onChange={(event)=>{handleChange(event)}} name="AuthorityNo" value={formValues.AuthorityNo}  className="form__input" type="text"  />
                  {errors.AuthorityNo  && <span className="error-message ">{errors.AuthorityNo}</span>}
                </Col>
              </Form.Group>
              
              <Form.Group as={Row} className="mb-3" controlId="">
                <Form.Label  column sm="3">
                Tax ID
                </Form.Label>
                <Col sm="9">
                  <input onChange={(event)=>{handleChange(event)}} name="TaxID" className="form__input" type="text"  />
                  {errors.TaxID  && <span className="error-message ">{errors.TaxID}</span>}
                </Col>
              </Form.Group>
              <div className="float-end ">
              <button type="button"  onClick={(event)=>{handleErrors(event,"two")}}  className=" form__button-next">Next</button>
              </div>

          </Form>
          </div>
        </div>
    )
}