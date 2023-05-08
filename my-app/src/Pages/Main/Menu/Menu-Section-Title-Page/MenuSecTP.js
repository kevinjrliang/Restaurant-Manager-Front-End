import './MenuSecTP.css';
import {MDBCardBody, MDBCardTitle, MDBCardText, MDBBtn, 
  MDBCard, MDBRow, MDBCol, MDBCardOverlay, MDBCardImage, MDBFooter, 
  MDBInput, MDBTable, MDBTableHead, MDBTableBody, MDBCardHeader} from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';

function MenuSecTP() {
  return (
    <div className='MenuSecTP'>
      <div>
        <title> Restaurant Section Menu Title Page </title>
      </div>
      <div className = "header">
        {/* <input type = "button" className = "register" value = "Sign Up"></input> */}
      </div>
      <div>
        <div className = "title">
        </div>
        <MDBCard className='mt-5'>
          <MDBCardHeader>
            <h1 id = "headertext"> Menu Title: Section Title </h1>
          </MDBCardHeader>
            <MDBCardBody>
                <MDBRow>
                    <Link className='col-6' to="/main/menu/menu-subsection-title-page">
                        <MDBBtn className='btn btn-sq-responsive'> Pork </MDBBtn>
                    </Link> 
                    <Link className='col-6' to="/main/menu/menu-subsection-title-page">
                        <MDBBtn className='btn btn-sq-responsive'> Chicken </MDBBtn>
                    </Link> 
                </MDBRow>
                <MDBRow>
                    <Link className='col-6' to="/main/menu/menu-subsection-title-page">
                        <MDBBtn className='btn btn-sq-responsive'> Lamb </MDBBtn>
                    </Link>
                    <Link className='col-6' to="/main/menu/menu-subsection-title-page">
                        <MDBBtn className='btn btn-sq-responsive'> Beef </MDBBtn>
                    </Link>
                </MDBRow>
                <MDBRow>
                    <Link className='col-6' to="/main/menu/menu-subsection-title-page">
                        <MDBBtn className='btn btn-sq-responsive'> Halal </MDBBtn>
                    </Link>
                    <Link className='col-6' to="/main/menu/menu-subsection-title-page">
                        <MDBBtn className='btn btn-sq-responsive'> Seafood </MDBBtn>
                    </Link>
                </MDBRow>
                <MDBRow>
                    <Link className='col-12' to="/main/menu/menu-title-page">
                        <MDBBtn className='btn btn-sq-responsive'> Back </MDBBtn>
                    </Link>
                </MDBRow>
            </MDBCardBody>
        </MDBCard>       
      </div>
    </div>
  );
}

export default MenuSecTP;
