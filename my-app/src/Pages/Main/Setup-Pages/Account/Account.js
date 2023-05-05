import './Account.css'
import { useState } from 'react';
import { Link } from "react-router-dom";
import {MDBCardBody, MDBCardText, MDBBtn, 
    MDBCard, MDBInput, MDBCardHeader, MDBValidation, MDBValidationItem} from 'mdb-react-ui-kit';
import toast, { Toaster, ToastBar } from "react-hot-toast";

import { useTranslation, Trans } from 'react-i18next';


export default function Account() {
    const { t } = useTranslation();
    // TODO: Finish Toast messages
    // const successToast = () => toast.success(t("account.toast.success"));
    // const errorToast = () => toast.error(t("account.toast.error"));
    const phoneNumberRegex = "^\\(?([0-9]{3})\\)?[-.●]?([0-9]{3})[-.●]?([0-9]{4})$"
    const postalRegex = "^[ABCEGHJ-NPRSTVXY]\\d[ABCEGHJ-NPRSTV-Z][ -]?\\d[ABCEGHJ-NPRSTV-Z]\\d$"
    const [formValue, setFormValue] = useState({
        firstName: '',
        lastName: '',
        phoneNo: '',
        restaurantPhoneNo: '',
        restaurantName: '',
        addressLine: '',
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
                    <h3 className='text-light'>{t("account.title")}</h3>
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
                        <MDBCardText>{t("account.description")}</MDBCardText>
                        <MDBValidationItem className='col-12 mb-5' feedback={t("account.invalid_first_name_message")} invalid>
                            <MDBInput 
                            className="bg-light" 
                            required minLength={2} 
                            label={t("account.first_name")} 
                            id='form1' 
                            type='text' 
                            name='firstName' 
                            onChange={(e) => onChange(e)}></MDBInput>
                        </MDBValidationItem>
                        <MDBValidationItem className='col-12 mb-5' feedback={t("account.invalid_last_name_message")} invalid>
                            <MDBInput 
                            className="bg-light"  
                            required 
                            minLength={2} 
                            label={t("account.last_name")} 
                            id='form1' 
                            type='text' 
                            name='lastName' 
                            onChange={(e) => onChange(e)}></MDBInput>
                        </MDBValidationItem>
                        <MDBValidationItem className='col-12 mb-5' feedback={t("account.invalid_phone_number_message")} invalid>
                            <MDBInput
                            className="bg-light"
                            required
                            label={t("account.phone_number")} 
                            id='form1' 
                            pattern={phoneNumberRegex}
                            type='text' 
                            name='phoneNo' 
                            onChange={(e) => onChange(e)}></MDBInput>
                        </MDBValidationItem>
                        <MDBValidationItem className='col-12 mb-5' feedback={t("account.invalid_restaurant_phone_number_message")} invalid>
                            <MDBInput 
                            className="bg-light" 
                            label={t("account.restaurant_phone_number")} 
                            required
                            pattern={phoneNumberRegex} 
                            id='form1' 
                            type='text' 
                            name='restaurantPhoneNo' 
                            onChange={(e) => onChange(e)}></MDBInput>
                        </MDBValidationItem>
                        <MDBValidationItem className='col-12 mb-5' feedback={t("account.invalid_address_line_message")} invalid>
                            <MDBInput
                             className="bg-light" 
                             label={t("account.address_line")} 
                             id='form1'
                             required 
                             type='text' 
                             name='Address Line' 
                             onChange={(e) => onChange(e)}></MDBInput>   
                        </MDBValidationItem>
                        <MDBValidationItem className='col-12 mb-5' feedback={t("account.invalid_city_message")} invalid>
                            <MDBInput 
                            className="bg-light" 
                            label={t("account.city")} 
                            id='form1'
                            required 
                            type='text' 
                            name='city' 
                            onChange={(e) => onChange(e)}></MDBInput>
                        </MDBValidationItem>
                        <MDBValidationItem className='col-12 mb-5' feedback={t("account.invalid_province_message")} invalid>
                            <MDBInput 
                            className="bg-light" 
                            label={t("account.province")} 
                            id='form1'
                            required 
                            type='text' 
                            name='provState' 
                            onChange={(e) => onChange(e)}></MDBInput>
                        </MDBValidationItem>
                        <MDBValidationItem className='col-12 mb-5' feedback={t("account.invalid_postal_code_message")} invalid>
                             <MDBInput 
                             className="bg-light" 
                             label={t("account.postal_code")} 
                             id='form1'
                             pattern={postalRegex}
                             required 
                             type='text' 
                             name='postalCode' 
                             onChange={(e) => onChange(e)}></MDBInput>
                        </MDBValidationItem>
                        <MDBBtn type='submit'>{t("account.next_button")}</MDBBtn>
                    </MDBValidation>
                </MDBCardBody>
            </MDBCard>
        </div>
    );
}