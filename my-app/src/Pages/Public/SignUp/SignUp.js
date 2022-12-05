import logo from '../../../Images/logo.svg';
import './SignUp.css';
import {MDBCardBody, MDBBtn, 
  MDBCard, MDBInput, MDBValidation, MDBValidationItem} from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';
import { createUserAccount, getAllUsers } from '../../../Services/UserAccountService'
import { useState } from 'react';
import { Access_Level } from '../../../Models/User_Accounts/enums';
import toast, { Toaster, ToastBar } from "react-hot-toast";



function SignUp() {
  const usernamesTaken = [];
  getAllUsers().then(response => {
    if (response.error) {

    }
    else {
      const users = response.data
      usernamesTaken.push(...users.map(user => user.username));
    }
    
  });
  const successToast = () => toast.success("Account created! Please check your email to complete your setup.");
  const errorToast = () => toast.error("An error has occured.");
  const usernameTakenToast = () => {toast.error("There is already an account with this name.")};
  const minPasswordLength = 6;

  const [formValue, setFormValue] = useState({
    username: '',
    password: '',
    confirmPassword: ''
  });

  function onChange(e) {
    if (e.target.name === 'username') {
      if (e.target.value !== '' &&  usernamesTaken.includes(e.target.value)) {
        e.target.setCustomValidity('Username already taken');
      }
      else{
        e.target.setCustomValidity('');
      }
    }
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
    const data = {
      username: formValue.username,
      password: formValue.password,
      access_level: Access_Level.owner
    }
    const ret = createUserAccount(data);
    
    createUserAccount(data).then(res => {
      if (!res.error && res.data) {
        successToast();
        setTimeout(() => window.location.href="/", 2000);
      } else {
        usernameTakenToast();
      }
    }, err => {
      errorToast();
      console.log(err);
    });
  }

  return (
    <div>
      <div className = "signup-header">
        <Link to="/">
          <MDBBtn className ="btn btn-primary" type='button'>Log In</MDBBtn>
        </Link>
      </div>
      <div className='SignUp'>
        <div className = "title">
          <h1 id = "headertext"> Order Up! </h1>
        </div>
        <img className = "SignUp-logo" src ={logo} alt="logo"></img>
        <MDBCard className='w-25 mb-5'>
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
              <MDBValidationItem className='col-12' feedback='Please choose a unique and valid email' invalid>
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
              <MDBValidationItem className='col-12' feedback='Password must be a minimum of 6 characters.' invalid>
                <label><b>Password</b></label>
                <br></br>
                <MDBInput 
                  className="bg-light" 
                  label='Password' 
                  id='validationCustomPassword' 
                  minLength={minPasswordLength}
                  type='password'
                  name='password'
                  required
                  onChange={onChange}
                  value={formValue.password}
                />
              </MDBValidationItem>
              <br></br>
              <MDBValidationItem className='col-12' feedback='Password must match.' invalid>
                <label><b>Confirm Password</b></label>
                <br></br>
                <MDBInput 
                  className="bg-light" 
                  label='Confirm Password' 
                  id='validationCustomConfirmPassword' 
                  type='password'
                  pattern = {`${formValue.password}`}
                  name='confirmPassword'
                  required
                  onChange={onChange}
                  value={formValue.confirmPassword}
                />
              </MDBValidationItem>
              <br></br>
              <MDBBtn className="btn btn-primary" type='submit'>Sign up</MDBBtn>
              <br></br> <br></br>
              Already have an account? Login <Link to="/">here</Link>
            </MDBValidation>
          </MDBCardBody>
        </MDBCard>
      </div>
    </div>
  );
}

export default SignUp;
