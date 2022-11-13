<<<<<<< HEAD
import "./Login.css"
import { en } from "../Languages/English"
import { MDBCardBody, MDBCardTitle, MDBCardText, MDBBtn, MDBCard, MDBRow, MDBCol, MDBCardOverlay, MDBCardImage, MDBFooter, MDBInput, MDBTable, MDBTableHead, MDBTableBody} from 'mdb-react-ui-kit';
import logo from '../logo.svg';

export default function Login()
{
    return(
        <div className='App'>
        <img src={logo} className="App-logo" alt="logo" />
            <MDBCard className='w-25'>
            <MDBCardTitle >Sign In</MDBCardTitle>
            <hr></hr>
            <MDBRow alignment='center' className='mb-2'>
                <MDBInput label='Username' id='form1' type='text'></MDBInput>
            </MDBRow>
            <MDBRow alignment='center' className='mb-4'>
                <MDBInput label='Password' id='form1' type='text'></MDBInput>
            </MDBRow>
            <MDBBtn className='btn btn-primary mb-2'>Login</MDBBtn>
            <MDBBtn className='btn btn-secondary'>Sign up</MDBBtn>
            <MDBBtn className="btn btn-light mt-2">Contact Us</MDBBtn>
            </MDBCard>
        </div>
    )
}
=======
import logo from '../logo.svg';
import './Login.css';
import {MDBCardBody, MDBCardTitle, MDBCardText, MDBBtn, 
  MDBCard, MDBRow, MDBCol, MDBCardOverlay, MDBCardImage, MDBFooter, 
  MDBInput, MDBTable, MDBTableHead, MDBTableBody} from 'mdb-react-ui-kit';

function Login() {
  return (
    <div>
      <head>
        <title> Restaurant Login Page </title>
      </head>
      <div class = "header">
        {/* <input type = "button" class = "register" value = "Sign Up"></input> */}
        <MDBBtn class="btn btn-primary">Sign Up</MDBBtn>
      </div>
      <body className='App'>
        <div class = "title">
          <h1 id = "headertext"> Order Up! </h1>
        </div>
        <img class = "App-logo" src ={logo} alt="logo"></img>
        <MDBCard className='w-25'>
          <MDBCardBody>
          <div class = "form">
            <form action = "loginPage.html">
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
            </form>
          </div>
          </MDBCardBody>
        </MDBCard>
      </body>
    </div>
  );
}

export default Login;
>>>>>>> f4b852d93b6a751a9751507593bdb50740b0f56b
