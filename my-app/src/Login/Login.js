<<<<<<< HEAD
import "./Login.css"

export default function Login()
{
    return(
        <div className ="Login">
            <span className="loginTitle">Order Up!</span>
            <form className="loginForm">
                <label>Email</label>
                <input type ="text" className="loginInput" placeholder="Enter your email"/>
                <label>Password</label>
                <input type ="password" className="passwordInput" placeholder="Enter your password"/>
                <button className="loginButton">Login</button>
            </form>
            <button className="registerButton">Register</button>
        </div>
    )
}
=======
import logo from '../logo.svg';
import './Login.css';
import {MDBCardBody, MDBCardTitle, MDBCardText, MDBBtn, 
  MDBCard, MDBRow, MDBCol, MDBCardOverlay, MDBCardImage, MDBFooter, 
  MDBInput, MDBTable, MDBTableHead, MDBTableBody} from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';

function Login() {
  return (
    <div>
      <head>
        <title> Restaurant Login Page </title>
      </head>
      <div class = "header">
        {/* <input type = "button" class = "register" value = "Sign Up"></input> */}
        <Link to="/signUp"><MDBBtn class="btn btn-primary">Sign Up</MDBBtn></Link>
      </div>
      <body className='App'>
        <div class = "title">
          <h1 id = "headertext"> Order Up! </h1>
        </div>
        <img class = "App-logo" src ={logo} alt="logo"></img>
        <MDBCard className='w-25'>
          <MDBCardBody>
          <div class = "form">
            <form>
              <label for = "email"><b>Email</b></label>
              <br></br>
              {/* <input class = "inputs" type = "text" name = "email" placeholder = "Enter your email"></input> */}
              <MDBInput className="bg-light" label='email' id='form1' type='text'></MDBInput>
              <br></br>
              <label for = "password"><b>Password</b></label>
              <br></br>
              {/* <input class = "inputs" type = "password" name = "password" placeholder = "Enter your password"></input> */}
              <MDBInput className="bg-light" label='password' id='form1' type='text'></MDBInput>
              <br></br>
              <MDBBtn class="btn btn-primary">Login</MDBBtn>
              <br></br><br></br>
              Don't have an account? Sign up <Link to="/signUp">here</Link>
            </form>
          </div>
          </MDBCardBody>
        </MDBCard>
      </body>
    </div>
  );
}

export default Login;
>>>>>>> 7a7016f5b80975de1a715ec73d5293bbf5e2be1a
