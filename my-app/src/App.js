import logo from './logo.svg';
import './App.css';
import {MDBCardBody, MDBCardTitle, MDBCardText, MDBBtn, 
  MDBCard, MDBRow, MDBCol, MDBCardOverlay, MDBCardImage, MDBFooter, 
  MDBInput, MDBTable, MDBTableHead, MDBTableBody} from 'mdb-react-ui-kit';

function App() {
  return (
    <div className='App'>
      <head>
        <title> Restaurant Login Page </title>
      </head>
      <body>
        <div class = "header">
          {/* <input type = "button" class = "register" value = "Sign Up"></input> */}
          <MDBBtn type = "button" class="btn btn-primary unsetCase">Sign Up</MDBBtn>
        </div>
        <div class = "title">
          <h1 id = "headertext"> Order Up! </h1>
        </div>
        <img class = "App-logo" src ={logo} alt="logo"></img>
        <MDBCard>
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
              <MDBBtn type = "button" class="btn btn-primary unsetCase">Login</MDBBtn>
            </form>
          </div>
          </MDBCardBody>
        </MDBCard>
      </body>
    </div>
  );
}

export default App;
