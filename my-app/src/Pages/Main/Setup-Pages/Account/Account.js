import './Account.css'
import { useState } from 'react';
import { Link } from "react-router-dom";
import {MDBCardBody, MDBCardText, MDBBtn, 
    MDBCard, MDBInput, MDBCardHeader, MDBValidation, MDBValidationItem} from 'mdb-react-ui-kit';
import toast, { Toaster, ToastBar } from "react-hot-toast";


export default function Account() {
    // const successToast = () => toast.success("Success! Logging in...");
    // const errorToast = () => toast.error("An error has occured.");
    // const userDoesNotExistToast = () => {toast.error("Incorrect email or password")};
    const phoneNumberRegex = "^\\(?([0-9]{3})\\)?[-.●]?([0-9]{3})[-.●]?([0-9]{4})$"
    const postalRegex = "^[ABCEGHJ-NPRSTVXY]\\d[ABCEGHJ-NPRSTV-Z][ -]?\\d[ABCEGHJ-NPRSTV-Z]\\d$"
    const [formValue, setFormValue] = useState({
        firstName: '',
        lastName: '',
        phoneNo: '',
        restaurantPhoneNo: '',
        restaurantName: '',
        street: '',
        city: '',
        provState: '',
        postalCode: ''
      });
    
      function onChange(e) {
        setFormValue({ ...formValue, [e.target.name]: e.target.value });
      };
    
      function validateForm(e) {
        const elements = Object.values(e.target.elements)
        for (let i = 0; i < elements.length; i++) {
          if (elements[i].checkValidity && !elements[i].checkValidity()) {
            return false;
          }
        }
        return true;
      }
    
      function onSubmit(e) {
        e.preventDefault();
        if (!validateForm(e)) {
            return;
        }
        alert(`You submitted \n${JSON.stringify(formValue, null, 2)}`);
        setTimeout(() => window.location.href="/main/setup/confirm", 2000);
    }

    return(
        <div className='Account'>
            <MDBCard alignment='center' className='mb-5 mt-2'>
                <MDBCardHeader className='bg-primary'>
                    <h3 className='text-light'>Welcome to Order Up!</h3>
                </MDBCardHeader>
                <MDBCardBody>
                    <MDBValidation className='g-3' onSubmit={(event) => onSubmit(event)} name='form'>
                        <Toaster
                            position="top-right"
                            >
                            {(t) => (
                                <ToastBar toast={t}>
                                {({ icon, message }) => (
                                    <>
                                    {icon}
                                    {message}
                                    {t.type !== 'loading' && (
                                        <MDBBtn type='button' className='text-center' onClick={() => toast.dismiss(t.id)}>
                                        <i className='fas fa-x'/>
                                        </MDBBtn>
                                    )}
                                    </>
                                )}
                                </ToastBar>
                            )}
                        </Toaster>
                        <MDBCardText>To get started, we will first need your details! You will be registered as the owner.</MDBCardText>
                        <MDBValidationItem className='col-12 mb-5' feedback='This field can not be less than 2 characters' invalid>
                            <MDBInput 
                            className="bg-light" 
                            required minLength={2} 
                            label='First Name' 
                            id='form1' 
                            type='text' 
                            name='firstName' 
                            onChange={(e) => onChange(e)}></MDBInput>
                        </MDBValidationItem>
                        <MDBValidationItem className='col-12 mb-5' feedback='This field can not be less than 2 characters' invalid>
                            <MDBInput 
                            className="bg-light"  
                            required 
                            minLength={2} 
                            label='Last Name' 
                            id='form1' 
                            type='text' 
                            name='lastName' 
                            onChange={(e) => onChange(e)}></MDBInput>
                        </MDBValidationItem>
                        <MDBValidationItem className='col-12 mb-5' feedback='Please enter a valid phone number' invalid>
                            <MDBInput
                            className="bg-light"
                            required
                            label='Phone Number'
                            id='form1' 
                            pattern={phoneNumberRegex}
                            type='text' 
                            name='phoneNo' 
                            onChange={(e) => onChange(e)}></MDBInput>
                        </MDBValidationItem>
                        <MDBValidationItem className='col-12 mb-5' feedback='Please enter a valid phone number' invalid>
                            <MDBInput 
                            className="bg-light" 
                            label='Restaurant Phone Number'
                            required
                            pattern={phoneNumberRegex} 
                            id='form1' 
                            type='text' 
                            name='restaurantPhoneNo' 
                            onChange={(e) => onChange(e)}></MDBInput>
                        </MDBValidationItem>
                        <div className='mb-2'>
                            <h5>Address</h5>
                        </div>
                        <MDBValidationItem className='col-12 mb-5' feedback='Please enter a valid street address' invalid>
                            <MDBInput
                             className="bg-light" 
                             label='Street' 
                             id='form1'
                             required 
                             type='text' 
                             name='street' 
                             onChange={(e) => onChange(e)}></MDBInput>   
                        </MDBValidationItem>
                        <MDBValidationItem className='col-12 mb-5' feedback='Please enter a valid city' invalid>
                            <MDBInput 
                            className="bg-light" 
                            label='City' 
                            id='form1'
                            required 
                            type='text' 
                            name='city' 
                            onChange={(e) => onChange(e)}></MDBInput>
                        </MDBValidationItem>
                        <MDBValidationItem className='col-12 mb-5' feedback='Please enter a valid province or state' invalid>
                            <MDBInput 
                            className="bg-light" 
                            label='Province/State' 
                            id='form1'
                            required 
                            type='text' 
                            name='provState' 
                            onChange={(e) => onChange(e)}></MDBInput>
                        </MDBValidationItem>
                        <MDBValidationItem className='col-12 mb-5' feedback='Please enter a valid code' invalid>
                             <MDBInput 
                             className="bg-light" 
                             label='Postal Code/Zip' 
                             id='form1'
                             pattern={postalRegex}
                             required 
                             type='text' 
                             name='postalCode' 
                             onChange={(e) => onChange(e)}></MDBInput>
                        </MDBValidationItem>
                        <MDBBtn type='submit'>Next</MDBBtn>
                    </MDBValidation>
                </MDBCardBody>
            </MDBCard>
        </div>
    );
}