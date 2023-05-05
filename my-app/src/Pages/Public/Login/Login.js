import logo from '../../../Images/logo.svg';
import './Login.css';
import {MDBCardBody, MDBBtn, 
  MDBCard, MDBInput, MDBValidation, MDBValidationItem} from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';
import { login } from '../../../Services/UserAccountService'
import { useState } from 'react';
import toast, { Toaster, ToastBar } from "react-hot-toast";

import {useTranslation, Trans } from 'react-i18next';

function Login() {
  const { t } = useTranslation();

  const successToast = () => toast.success(t("login.toast.login_success"));
  const errorToast = () => toast.error(t("login.toast.error"));
  const userDoesNotExistToast = () => {toast.error(t("login.toast.incorrect_login"))};
  const [formValue, setFormValue] = useState({
    username: '',
    password: ''
  });

  function onChange(e) {
    setFormValue({ ...formValue, [e.target.name]: e.target.value });
  };

  function validateForm(e) {
    const elements = Object.values(e.target.elements)
    for (let i = 0; i < elements.length; i++) {
      if (!elements[i].checkValidity()) {
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
    login(formValue.username, formValue.password).then(res => {
      if (!res.error) {
        console.log(res);
        successToast();
        localStorage.setItem('user', res.data);
        setTimeout(() => window.location.href="/main", 2000);
      } 
      else {
        userDoesNotExistToast();
      }
    }, err => {
      errorToast();
      console.log(err);
    });
  }

  return (
    <div>
      <div className = "login-header">
        <Link to="/signUp">
          <MDBBtn className ="btn btn-primary">{t("login.signup_button")}</MDBBtn>
        </Link>
      </div>
      <div className='Login'>
        <div className = "title">
          <h1 id = "headertext"> {t("login.company_name")} </h1>
        </div>
        <img className = "Login-logo" src ={logo} alt="logo"></img>
        {/* TODO: Add space between the bottom of the card and the screen. See the sign up page for reference*/}
        <MDBCard className='w-25'>
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
            <MDBValidationItem className='col-12' feedback={t("login.invalid_email_message")} invalid>
              <label><b>{t("login.email")}</b></label>
              <br></br>
              <MDBInput 
                label={t("login.email")}
                id='validationCustomUsername'
                type='email'
                name='username'
                required
                onChange={onChange}
                value={formValue.username}
              />
            </MDBValidationItem>
            <br></br>
            <MDBValidationItem className='col-12' feedback={t("login.invalid_password_message")} invalid>
              <label><b>{t("login.password")}</b></label>
              <br></br>
              <MDBInput 
                label={t("login.password")}
                id='validationCustomPassword'
                type='password'
                name='password'
                required
                onChange={onChange}
                value={formValue.password}
              />
            </MDBValidationItem>
            <br></br>
            <MDBBtn className ="btn btn-primary" type="submit">{t("login.login")}</MDBBtn>
            <br></br> <br></br>
            <Trans i18nKey={"login.signup_description"}>
              Don't have an account? Signup <Link to="/signUp">here</Link>
            </Trans>
          </MDBValidation>
          </MDBCardBody>
        </MDBCard>
      </div>
    </div>
  );
}

export default Login;
