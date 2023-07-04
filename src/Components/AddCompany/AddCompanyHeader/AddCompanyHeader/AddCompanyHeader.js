import React, { useState } from "react";
import { Col, Form, Row } from "react-bootstrap";
import 'react-phone-number-input/style.css'
import "./AddCompanyHeader.css"
import AddCompanyInformationForm from "../../AddCompanyInformationForm/AddCompanyInformationForm";
import AddContactsInformations from "../../AddContactsInformation/AddContactsInformation";
import AddAddressInformation from "../../AddAddressInformation/AddAddressInformation";
import AddLoginInformation from "../../AddLoginInformation/AddLoginInformation";
import { Link } from "react-router-dom";
export default function AddCompanyHeader(){
   


  const [formValues, setFormValues] = useState(
    {
    Logo:"",
    CompanyNameEn:"",
    Categories:"",
    SubCategories:"",
    DescriptionEn:"",
    DescriptionAr:"",
    AuthorityNo :"",
    TaxID: "" ,
    PhoneNumber:"",
    EmailAddress:"",
    FaxNumber:"",
    FacebookLink:"",
    TwitterLink:"",
    InstgramLink:"",
    WebsiteLink:"",
    Countries:"",
    Government :"",
    Citites:"",
    AddressEn:"",
    AddressAr:"",
    Location:"",
    FirstName:"",
    LastName:"",
    Password:"",
    ConfirmPassword:"",

  })
  
  function handleChangePhone(data){
    console.log(data,formValues)
    setFormValues(prevValue=>{ 
      return{
        ...prevValue,
        'PhoneNumber': data,
        
      } 
    })
  }
  function handleChangeFax(data){

    setFormValues(prevValue=>{ 
      return{
        ...prevValue,
        'FaxNumber': data
        
      } 
    })
  }
  const [errors,setErrors] = useState({})
  function handleSubmit(event){
   event.preventDefault()
    console.log(formValues)
  }
 const [sectionForm,setSectionForm] = useState("one")
    function handleNextForm(event,sectionNum){
        event.preventDefault();
        setSectionForm(sectionNum)
         
  }
 function handleChange(event){
  event.preventDefault();
  setFormValues(prevValue=>{ 
      return{
        ...prevValue,
       [event.target.name] : event.target.value
      }})
      console.log(formValues)
}
const [imageUrl ,setImage] = useState(null)
let previewUploadImage = (e) => {
      
  let file = e.target.files[0];
  if(!file){
    return;
  }
  let preViewLink = URL.createObjectURL(file);
   setImage(preViewLink)
   setFormValues(prevValue=>{ 
    return{
      ...prevValue,
      'Logo': file
    } 
  })

}

  return(
    <div className="add-company">
        <div className="add-company__header  d-flex">
          <h4>Add Your Company </h4>
        </div>
        <div className="Company-Form">
            <div className="container">
               <div className="form-process mb-3">
                  <ul className="">
                    <li><Link data-section="one" className="form-process__link process-active" href="">Company information</Link></li>
                    <li><a data-section="two" className="form-process__link" href="">Contacts information</a></li>
                    <li><a data-section="three" className="form-process__link" href="">Address information</a></li>
                    <li><a data-section="four" className="form-process__link" href="">Login information</a></li>
                  </ul>
               </div>
               <div className="form-container">
                {sectionForm === "one" ? 
                    <AddCompanyInformationForm handleChange={handleChange}
                      previewUploadImage={previewUploadImage}
                      imageUrl={imageUrl} 
                      handleNextForm={handleNextForm}
                      formValues={formValues}
                      errors={errors}
                      setErrors={setErrors}
                      setSectionForm={setSectionForm}
                      
                      />
                    : sectionForm === "two" ? 
                     <AddContactsInformations 
                        handleChange={handleChange}
                        handleNextForm={handleNextForm}
                        handleChangePhone={handleChangePhone}
                        handleChangeFax={handleChangeFax}
                        formValues={formValues}
                        errors={errors}
                        setErrors={setErrors}
                        setSectionForm={setSectionForm}
                      />
                    :  sectionForm === "three" ? 
                    <AddAddressInformation 
                      handleChange={handleChange}
                      handleNextForm={handleNextForm}
                      formValues={formValues} 
                      errors={errors}
                      setErrors={setErrors}
                      setSectionForm={setSectionForm}
                    />
                    :
                    <AddLoginInformation
                      handleChange={handleChange}
                      handleNextForm={handleNextForm}
                      formValues={formValues} 
                      handleSubmit={handleSubmit}
                      errors={errors}
                      setErrors={setErrors}
                    />
                
                  }
               <div>
     
        </div>
               </div>
            </div>
        </div>
    </div>
  )
  }