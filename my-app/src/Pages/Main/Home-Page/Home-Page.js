import logo from '../../../Images/logo.svg';
import './Home-Page.css';
import {MDBCardBody, MDBCardHeader, MDBCardText, MDBBtn, 
  MDBCard, MDBRow, MDBCol, MDBCardOverlay, MDBCardImage, MDBFooter, 
  MDBInput, MDBTable, MDBTableHead, MDBTableBody} from 'mdb-react-ui-kit';

function HomePage() {
  return (
    <div className='Home-Page'>
      <MDBCard>
        <MDBCardHeader className='text-center'>
          <h3>
            Main Page
          </h3>
        </MDBCardHeader>
        <MDBCardBody>
          {/* Take out row */}
          <MDBRow>
            <MDBCol className='col-md-1 col-sm-2 column-title'>
              <span>Takeout</span>
            </MDBCol>
            <MDBCol className='col-md-11 col-sm-10'>
              <MDBBtn className='btn btn-sq-responsive'> T1</MDBBtn>
              <MDBBtn className='btn btn-sq-responsive'> T2</MDBBtn>
              <MDBBtn className='btn btn-sq-responsive'> T3</MDBBtn>
              <MDBBtn className='btn btn-sq-responsive'> T4</MDBBtn>
              <MDBBtn className='btn btn-sq-responsive'> T1</MDBBtn>
              <MDBBtn className='btn btn-sq-responsive'> T2</MDBBtn>
              <MDBBtn className='btn btn-sq-responsive'> T3</MDBBtn>
              <MDBBtn className='btn btn-sq-responsive'> T4</MDBBtn>
              <MDBBtn className='btn btn-sq-responsive'> T1</MDBBtn>
              <MDBBtn className='btn btn-sq-responsive'> T2</MDBBtn>
              <MDBBtn className='btn btn-sq-responsive'> T3</MDBBtn>
              <MDBBtn className='btn btn-sq-responsive'> T4</MDBBtn>
            </MDBCol>
          </MDBRow>
          {/* Tables row */}
          <MDBRow>
            <MDBCol className='col-md-1 col-sm-2 column-title'>
              <span>Tables</span>
            </MDBCol>
            <MDBCol className='col-md-11 col-sm-10'>
              <MDBBtn className='btn btn-info btn-sq-responsive'> 1</MDBBtn>  
              <MDBBtn className='btn btn-info btn-sq-responsive'> 2</MDBBtn>
              <MDBBtn className='btn btn-info btn-sq-responsive'> 3</MDBBtn>
              <MDBBtn className='btn btn-info btn-sq-responsive'> 4</MDBBtn>
            </MDBCol>
          </MDBRow>
          {/* Menus row */}
          <MDBRow>
            <MDBCol className='col-md-1 col-sm-2 column-title'>
              <span>Menus</span>
            </MDBCol>
            <MDBCol className='col-md-11 col-sm-10'>
              <MDBBtn className='btn btn-secondary btn-sq-responsive'> 1</MDBBtn>  
              <MDBBtn className='btn btn-secondary btn-sq-responsive'> 2</MDBBtn>
              <MDBBtn className='btn btn-secondary btn-sq-responsive'> 3</MDBBtn>
              <MDBBtn className='btn btn-secondary btn-sq-responsive'> 4</MDBBtn>
            </MDBCol>
          </MDBRow>
        </MDBCardBody>
      </MDBCard>
      
    </div>
  );
}

export default HomePage;
