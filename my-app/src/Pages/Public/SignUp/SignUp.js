import logo from '../../../Images/logo.svg';
import './SignUp.css';
import {MDBCardBody, MDBCardTitle, MDBCardText, MDBBtn, 
  MDBCard, MDBRow, MDBCol, MDBCardOverlay, MDBCardImage, MDBFooter, 
  MDBInput, MDBTable, MDBTableHead, MDBTableBody} from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';


function SignUp() {
  return (
    <div>
      <div className = "signup-header">
        {/* <input type = "button" className = "register" value = "Home"></input> */}
        <Link to="/">
          <MDBBtn className ="btn btn-primary">Log In</MDBBtn>
        </Link>
      </div>
      <div className='SignUp'>
        <div className = "title">
          <h1 id = "headertext"> Order Up! </h1>
        </div>
        <img className = "SignUp-logo" src ={logo} alt="logo"></img>
        <MDBCard className='w-25'>
          <MDBCardBody>
          <div className = "form">
            <form>
              <label for = "email"><b>Email</b></label>
              <br></br>
              {/* <input className = "inputs" type = "text" name = "email" placeholder = "Enter your email"></input> */}
              <MDBInput className="bg-light" label='email' id='form1' type='text'></MDBInput>
              <br></br>
              <label for = "password"><b>Password</b></label>
              <br></br>
              {/* <input className = "inputs" type = "password" name = "password" placeholder = "Enter your password"></input> */}
              <MDBInput className="bg-light" label='password' id='form1' type='text'></MDBInput>
              <br></br>
              <label for = "passConfirm"><b>Confirm Password</b></label>
              <br></br>
              {/* <input className = "inputs" type = "passwConfirm" name = "password" placeholder = "Confirm your password"></input> */}
              <MDBInput className="bg-light" label='confirm password' id='form1' type='text'></MDBInput>
              <br></br>
              <MDBBtn className="btn btn-primary">Sign up</MDBBtn>
              <br></br> <br></br>
              Already have an account? Login <Link to="/">here</Link>
            </form>
          </div>
          </MDBCardBody>
        </MDBCard>
      </div>
    </div>
  );
}

export default SignUp;
