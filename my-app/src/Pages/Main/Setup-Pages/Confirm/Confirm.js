import './Confirm.css'
import { Link } from 'react-router-dom';
import {MDBCardBody, MDBCardTitle, MDBCardText, MDBBtn, 
    MDBCard, MDBInput, MDBCardHeader} from 'mdb-react-ui-kit';

export default function Confirm()
{
    return(
        <div className='Confirm'>
            <MDBCard alignment='center'>
                <MDBCardHeader className='bg-primary'></MDBCardHeader>
                <MDBCardBody>
                    <MDBCardTitle>One Last Step!</MDBCardTitle>
                    <MDBCardText>We just sent you a confirmation email along with a code! Please enter the code below!</MDBCardText>
                    <MDBInput className="w-50" type="text"></MDBInput>        
                    <br></br>
                    <br></br>                    
                    <Link to="/main/setup/">
                        <MDBBtn>Back</MDBBtn>
                    </Link>
                    <br></br>
                    <br></br>
                    <MDBBtn>Confirm</MDBBtn>
                </MDBCardBody>
            </MDBCard>
        </div>
    );
}