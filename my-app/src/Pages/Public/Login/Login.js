import logo from '../../../Images/logo.svg';
import './Login.css';
import {MDBCardBody, MDBBtn, 
  MDBCard, MDBInput, MDBValidation, MDBValidationItem} from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';
import { login } from '../../../Services/UserAccountService'
import { useState } from 'react';
import toast, { Toaster, ToastBar } from "react-hot-toast";

function Login() {
  const successToast = () => toast.success("Success! Logging in...");
  const errorToast = () => toast.error("An error has occured.");
  const userDoesNotExistToast = () => {toast.error("Incorrect email or password")};
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
        {/* <input type = "button" className = "register" value = "Sign Up"></input> */}
        <Link to="/signUp">
          <MDBBtn className ="btn btn-primary">Sign Up</MDBBtn>
        </Link>
      </div>
      <div className='Login'>
        <div className = "title">
          <h1 id = "headertext"> Order Up! </h1>
        </div>
        <img className = "Login-logo" src ={logo} alt="logo"></img>
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
            <MDBValidationItem className='col-12' feedback='Please enter a valid email' invalid>
              <label><b>Email</b></label>
              <br></br>
              <MDBInput 
                label='Email'
                id='validationCustomUsername'
                type='email'
                name='username'
                required
                onChange={onChange}
                value={formValue.username}
              />
            </MDBValidationItem>
            <br></br>
            <MDBValidationItem className='col-12' feedback='This field can not be left blank' invalid>
              <label><b>Password</b></label>
              <br></br>
              <MDBInput 
                label='Password'
                id='validationCustomPassword'
                type='password'
                name='password'
                required
                onChange={onChange}
                value={formValue.password}
              />
            </MDBValidationItem>
            <br></br>
            <MDBBtn className ="btn btn-primary" type="submit">Login</MDBBtn>
            <br></br> <br></br>
            Don't have an account? Signup <Link to="/signUp">here</Link>
          </MDBValidation>
          </MDBCardBody>
        </MDBCard>
      </div>
    </div>
  );
}

export default Login;
