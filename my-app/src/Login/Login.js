import logo from './logo.svg';
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
