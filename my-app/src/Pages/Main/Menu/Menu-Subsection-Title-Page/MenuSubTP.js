import './MenuSubTP.css';
import {MDBCardBody, MDBCardTitle, MDBCardText, MDBBtn, 
  MDBCard, MDBRow, MDBCol, MDBCardOverlay, MDBCardImage, MDBFooter, 
  MDBInput, MDBTable, MDBTableHead, MDBTableBody, MDBCardHeader} from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';

function MenuSubTP() {
  return (
    <div className='MenuSubTP'>
      <div>
        <title> Restaurant Subsection Menu Title Page </title>
      </div>
      <div className = "header">
        {/* <input type = "button" className = "register" value = "Sign Up"></input> */}
      </div>
      <div>
        <div className = "title">
        </div>
        <MDBCard className='mt-5'>
          <MDBCardHeader>
            <h1 id = "headertext"> Menu Title: Section Title - Sub </h1>
          </MDBCardHeader>
            <MDBCardBody>
                <MDBRow>
                    <MDBBtn className='btn btn-sq-responsive'> Fried Chicken </MDBBtn>
                    <MDBBtn className='btn btn-sq-responsive'> Hamburger </MDBBtn>
                </MDBRow>
                <MDBRow>
                    <MDBBtn className='btn btn-sq-responsive'> Poutine </MDBBtn>
                    <MDBBtn className='btn btn-sq-responsive'> BBQ Ribs </MDBBtn>
                </MDBRow>
                <MDBRow>
                    <MDBBtn className='btn btn-sq-responsive'> Fish and Chips </MDBBtn>
                    <MDBBtn className='btn btn-sq-responsive'> Steak </MDBBtn>
                </MDBRow>
                <MDBRow>
                    <Link className='col-12' to="/main/menu/menu-section-title-page">
                        <MDBBtn className='btn btn-sq-responsive'> Back </MDBBtn>
                    </Link>
                </MDBRow>
            </MDBCardBody>
        </MDBCard>       
      </div>
    </div>
  );
}

export default MenuSubTP;
