import './Confirm.css'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import {MDBCardBody, MDBCardTitle, MDBCardText, MDBBtn, 
    MDBCard, MDBRow, MDBCol, MDBCardOverlay, MDBCardImage, MDBFooter, 
    MDBInput, MDBTable, MDBTableHead, MDBTableBody, MDBCardHeader, MDBCardFooter} from 'mdb-react-ui-kit';

export default function Confirm()
{
    return(
        <div className='Confirm'>
            <MDBCard alignment='center'>
                <MDBCardHeader className='bg-primary'></MDBCardHeader>
                <MDBCardBody>
                    <MDBCardTitle>One Last Step!</MDBCardTitle>
                    <MDBCardText>We just sent you a confirmation email along with a code! Please enter the code below!</MDBCardText>
                    <MDBInput className="confirmInput" type="text"></MDBInput>        
                    <br></br>
                    <br></br>                    
                    <Link to="/main/setup/">
                        <MDBBtn href='#'>Back</MDBBtn>
                    </Link>
                    <br></br>
                    <br></br>
                    <MDBBtn href='#'>Confirm</MDBBtn>
                </MDBCardBody>
            </MDBCard>
        </div>
    );
}