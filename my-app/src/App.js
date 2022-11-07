import logo from './logo.svg';
import './App.css';
import { MDBCardBody, MDBCardTitle, MDBCardText, MDBBtn, MDBCard, MDBRow, MDBCol, MDBCardOverlay, MDBCardImage, MDBFooter, MDBInput} from 'mdb-react-ui-kit';

function App() {
  return (
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
          <MDBBtn className="btn btn-light mt-2">
            Contact Us
          </MDBBtn>
        </MDBCard>
    </div>
  );
}

export default App;
