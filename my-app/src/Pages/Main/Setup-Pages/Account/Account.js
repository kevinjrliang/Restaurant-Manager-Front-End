import './Account.css'
import { useState } from 'react';
import {MDBCardBody, MDBCardTitle, MDBCardText, MDBBtn, 
    MDBCard, MDBRow, MDBCol, MDBCardOverlay, MDBCardImage, MDBFooter, 
    MDBInput, MDBTable, MDBTableHead, MDBTableBody, MDBCardHeader, MDBCardFooter} from 'mdb-react-ui-kit';


export default function Account()
{
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
  
    function account() {
      alert(`${firstName}, ${lastName}, ${phoneNumber}`)
    }

    return(
        <div className='Account'>
            <MDBCard alignment='center'>
                <MDBCardHeader className='bg-primary'></MDBCardHeader>
                <MDBCardBody>
                    <MDBCardTitle>Welcome to Order Up!</MDBCardTitle>
                    <MDBCardText>To get started, we will first need your details! You will be registered as the owner.</MDBCardText>
                    <br></br>
                    {/* <input className = "inputs" type = "text" name = "email" placeholder = "Enter your email"></input> */}
                    <MDBInput className="bg-light" label='First Name' id='form1' type='text' onChange={(e) => setFirstName(e.target.value)}></MDBInput>
                    <br></br>
                    <br></br>
                    <MDBInput className="bg-light" label='Last Name' id='form1' type='text' onChange={(e) => setLastName(e.target.value)}></MDBInput>
                    <br></br>
                    <br></br>
                    <MDBInput className="bg-light" label='Phone Number' id='form1' type='text' onChange={(e) => setPhoneNumber(e.target.value)}></MDBInput>
                    <br></br>
                    <MDBBtn href='#'>Next</MDBBtn>
                </MDBCardBody>
                {/* <MDBCardFooter className='text-muted'>2 days ago</MDBCardFooter> */}
            </MDBCard>
        </div>
    );
}