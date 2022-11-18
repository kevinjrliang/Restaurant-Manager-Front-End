import "./WelcomePage.css"
import {MDBCardBody, MDBCardTitle, MDBCardText, MDBBtn, 
    MDBCard, MDBRow, MDBCol, MDBCardOverlay, MDBCardImage, MDBFooter, 
    MDBInput, MDBTable, MDBTableHead, MDBTableBody} from 'mdb-react-ui-kit';

import React, { useState, Component } from 'react';

export default function WelcomePage()
{
    const [data, setData] = useState(null);

    function getData(val)
    {
        setData(val.target.value);
        console.warn(val.target.value);
    }

    function appendText()
    {
        
    }

    function removeText()
    {
        
    }

    function Login()
    {
        //Check Login password with Database
    }

    return(
        <div className ="Welcome">
            <span className="welcomeTitle">Welcome!</span>
            <body className="flex">
                <div className="numpad">
                    <div className="nums">
                        <MDBRow>
                            <MDBInput className="passwordInput" id="passwordID" type="number" step ="0.01" onChange={getData}></MDBInput>
                        </MDBRow>
                        <MDBRow>
                            <MDBCol className="col-4">
                                <MDBBtn className="btn btn-primary btn-sq-responsive" onClick={appendText}>1</MDBBtn>
                            </MDBCol>
                            <MDBCol className="col-4">
                                <MDBBtn className="btn btn-primary btn-sq-responsive" onClick={appendText}>2</MDBBtn>
                            </MDBCol>
                            <MDBCol className="col-4">
                                <MDBBtn className="btn btn-primary btn-sq-responsive" onClick={appendText}>4</MDBBtn>
                            </MDBCol>
                        </MDBRow>
                        <MDBRow>
                            <MDBCol className="col-4">
                                <MDBBtn className="btn btn-primary btn-sq-responsive" onClick={appendText}>4</MDBBtn>
                            </MDBCol>
                            <MDBCol className="col-4">
                                <MDBBtn className="btn btn-primary btn-sq-responsive" onClick={appendText}>4</MDBBtn>
                            </MDBCol>
                            <MDBCol className="col-4">
                                <MDBBtn className="btn btn-primary btn-sq-responsive" onClick={appendText}>4</MDBBtn>
                            </MDBCol>
                        </MDBRow>
                        <MDBRow>
                            <MDBCol className="col-4">
                                <MDBBtn className="btn btn-primary btn-sq-responsive" onClick={appendText}>7</MDBBtn>
                            </MDBCol>
                            <MDBCol className="col-4">
                                <MDBBtn className="btn btn-primary btn-sq-responsive" onClick={appendText}>8</MDBBtn>
                            </MDBCol>
                            <MDBCol className="col-4">
                                <MDBBtn className="btn btn-primary btn-sq-responsive" onClick={appendText}>9</MDBBtn>
                            </MDBCol>
                        </MDBRow>
                        <MDBRow>
                            <MDBCol className="col-4">
                                <MDBBtn className="btn btn-primary btn-sq-responsive" onClick={removeText}>Back</MDBBtn>
                            </MDBCol>
                            <MDBCol className="col-4">
                                <MDBBtn className="btn btn-primary btn-sq-responsive" onClick={appendText}>0</MDBBtn>
                            </MDBCol>
                            <MDBCol className="col-4">
                                <MDBBtn className="btn btn-primary btn-sq-responsive" onClick={Login}>Login</MDBBtn>
                            </MDBCol>
                        </MDBRow>
                    </div>
                </div>
            </body>
        </div>
    )
}