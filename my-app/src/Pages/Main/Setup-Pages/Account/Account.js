import './Account.css'
import { useState } from 'react';
import { Link } from "react-router-dom";
import {MDBCardBody, MDBCardTitle, MDBCardText, MDBBtn, 
    MDBCard, MDBRow, MDBCol, MDBCardOverlay, MDBCardImage, MDBFooter, 
    MDBInput, MDBTable, MDBTableHead, MDBTableBody, MDBCardHeader, MDBCardFooter} from 'mdb-react-ui-kit';


export default function Account()
{
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [phoneNo, setPhoneNo] = useState("");
    const [restaurantPhoneNo, setRestaurantPhoneNo] = useState("");
    const [restaurantName, setRestaurantName] = useState("");
    const [street, setStreet] = useState("");
    const [city, setCity] = useState("");
    const [provState, setProvState] = useState("");
    const [postalCode, setPostalCode] = useState("");
  
    function account() {
      alert(`${firstName}, ${lastName}, ${phoneNo}, ${restaurantPhoneNo}, ${restaurantName}, ${street}, ${city}, ${provState}, ${postalCode}`)
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
                    <MDBInput className="bg-light" label='Phone Number' id='form1' type='text' onChange={(e) => setPhoneNo(e.target.value)}></MDBInput>
                    <br></br>
                    <br></br>
                    <MDBInput className="bg-light" label='Restaurant Phone Number' id='form1' type='text' onChange={(e) => setRestaurantPhoneNo(e.target.value)}></MDBInput>
                    <br></br>
                    <br></br>
                        <MDBInput className="bg-light" label='Street' id='form1' type='text' onChange={(e) => setStreet(e.target.value)}></MDBInput>
                    <br></br>
                    <br></br>
                        <MDBInput className="bg-light" label='City' id='form1' type='text' onChange={(e) => setCity(e.target.value)}></MDBInput>
                    <br></br>
                    <br></br>
                        <MDBInput className="bg-light" label='Province/State' id='form1' type='text' onChange={(e) => setProvState(e.target.value)}></MDBInput>
                    <br></br>
                    <br></br>
                        <MDBInput className="bg-light" label='Postal Code/Zip' id='form1' type='text' onChange={(e) => setPostalCode(e.target.value)}></MDBInput>
                    <br></br>
                    {/* <MDBCard>
                        <br></br>
                        <MDBInput className="bg-light" label='Street' id='form1' type='text' onChange={(e) => setStreet(e.target.value)}></MDBInput>
                        <br></br>
                    </MDBCard> */}
                    <Link to="/main/setup/confirm">
                        <MDBBtn href='#'>Next</MDBBtn>
                    </Link>
                    
                </MDBCardBody>
                {/* <MDBCardFooter className='text-muted'>2 days ago</MDBCardFooter> */}
            </MDBCard>
        </div>
    );
}