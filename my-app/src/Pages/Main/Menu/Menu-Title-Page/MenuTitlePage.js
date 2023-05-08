import './MenuTitlePage.css';
import {MDBCardBody, MDBCardTitle, MDBCardText, MDBBtn, 
  MDBCard, MDBRow, MDBCol, MDBCardOverlay, MDBCardImage, MDBFooter, 
  MDBInput, MDBTable, MDBTableHead, MDBTableBody, MDBCardHeader} from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';

function MenuTitlePage() {
  return (
    <div className='MenuTitlePage'>
      <div>
        <title> Restaurant Menu Title Page </title>
      </div>
      <div className = "header">
        {/* <input type = "button" className = "register" value = "Sign Up"></input> */}
      </div>
      <div>
        <div className = "title">
        </div>
        <MDBCard className='mt-5'>
          <MDBCardHeader>
            <h1 id = "headertext"> Menu Title </h1>
          </MDBCardHeader>
            <MDBCardBody>
                <MDBRow>
                    <Link className='col-6' to="/main/menu/menu-section-title-page">
                        <MDBBtn className='btn btn-sq-responsive'> Appetizer </MDBBtn>
                    </Link> 
                    <Link className='col-6' to="/main/menu/menu-section-title-page">
                        <MDBBtn className='btn btn-sq-responsive'> Entree </MDBBtn>
                    </Link> 
                </MDBRow>
                <MDBRow>
                    <Link className='col-6' to="/main/menu/menu-section-title-page">
                        <MDBBtn className='btn btn-sq-responsive'> Soup </MDBBtn>
                    </Link>
                    <Link className='col-6' to="/main/menu/menu-section-title-page">
                        <MDBBtn className='btn btn-sq-responsive'> Dessert </MDBBtn>
                    </Link>
                </MDBRow>
                <MDBRow>
                    <Link className='col-6' to="/main/menu/menu-section-title-page">
                        <MDBBtn className='btn btn-sq-responsive'> Drinks </MDBBtn>
                    </Link>
                    <Link className='col-6' to="/main/menu/menu-section-title-page">
                        <MDBBtn className='btn btn-sq-responsive'> Snacks </MDBBtn>
                    </Link>
                </MDBRow>
                <MDBRow>
                    <Link className='col-12' to="/">
                        <MDBBtn className='btn btn-sq-responsive'> Back </MDBBtn>
                    </Link>
                </MDBRow>
            </MDBCardBody>
        </MDBCard>       
      </div>
    </div>
  );
}

export default MenuTitlePage;
