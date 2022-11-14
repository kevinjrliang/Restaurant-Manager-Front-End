import logo from '../../../logo.svg';
import './Login.css';
import {MDBCardBody, MDBCardTitle, MDBCardText, MDBBtn, 
  MDBCard, MDBRow, MDBCol, MDBCardOverlay, MDBCardImage, MDBFooter, 
  MDBInput, MDBTable, MDBTableHead, MDBTableBody} from 'mdb-react-ui-kit';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import { useState } from 'react';

function Login() {
  const [username, setUsername] = useState("");

  const [password, setPassword] = useState("");

  function login() {
    alert(`${username}, ${password}`)
  }

  return (
    <div>
      <title> Restaurant Login Page </title>
      <div className = "header">
        {/* <input type = "button" className = "register" value = "Sign Up"></input> */}
        <MDBBtn className ="btn btn-primary">Sign Up</MDBBtn>
      </div>
      <div className='Login'>
        <div className = "title">
          <h1 id = "headertext"> Order Up! </h1>
        </div>
        <img className = "Login-logo" src ={logo} alt="logo"></img>
        <MDBCard className='w-25'>
          <MDBCardBody>
          <div className = "form">
            <form>
              <label htmlFor = "email"><b>Email</b></label>
              <br></br>
              {/* <input className = "inputs" type = "text" name = "email" placeholder = "Enter your email"></input> */}
              <MDBInput className="bg-light" label='email' id='form1' type='text' onChange={(e) => setUsername(e.target.value)}></MDBInput>
              <br></br>
              <label htmlFor = "password"><b>Password</b></label>
              <br></br>
              {/* <input className = "inputs" type = "password" name = "password" placeholder = "Enter your password"></input> */}
              <MDBInput className="bg-light" label='password' id='form1' type='password' onChange={(e) => setPassword(e.target.value)}></MDBInput>
              <br></br>
              <Link to="/login">
                <MDBBtn className ="btn btn-primary" onClick={() => {login()}}>Login</MDBBtn>
              </Link>
            </form>
          </div>
          </MDBCardBody>
        </MDBCard>
      </div>
    </div>
  );
}

export default Login;
