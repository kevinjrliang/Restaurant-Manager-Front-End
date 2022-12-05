import "./WelcomePage.css"
import { Link } from "react-router-dom";
import {MDBBtn, 
    MDBRow, MDBCol, MDBInput} from 'mdb-react-ui-kit';

import React, { useState } from 'react';

export default function WelcomePage()
{
    const [data, setData] = useState("");

    function getData(val)
    {
        setData(val.target.value);
    }

    function appendText(val)
    {
        if(data.length < 4)
        {
            setData(data+val);
        }
    }

    function removeText()
    {
        setData(data.slice(0,-1));
    }

    function Login()
    {
        //Check Login password with Database
    }

    return(
        <div className ="Welcome">
            <span className="welcomeTitle">Welcome!</span>
            <div className="numpad">
                <div className="nums">
                    <MDBRow>
                        <MDBInput className="passwordInput" id="passwordID" type="password" value={data} maxLength={4} onChange={getData}></MDBInput>
                    </MDBRow>
                    <MDBRow>
                        <MDBCol className="col-4">
                            <MDBBtn className="btn btn-primary btn-sq-responsive" onClick={() => {appendText(1)}}>1</MDBBtn>
                        </MDBCol>
                        <MDBCol className="col-4">
                            <MDBBtn className="btn btn-primary btn-sq-responsive" onClick={() => {appendText(2)}}>2</MDBBtn>
                        </MDBCol>
                        <MDBCol className="col-4">
                            <MDBBtn className="btn btn-primary btn-sq-responsive" onClick={() => {appendText(3)}}>3</MDBBtn>
                        </MDBCol>
                    </MDBRow>
                    <MDBRow>
                        <MDBCol className="col-4">
                            <MDBBtn className="btn btn-primary btn-sq-responsive" onClick={() => {appendText(4)}}>4</MDBBtn>
                        </MDBCol>
                        <MDBCol className="col-4">
                            <MDBBtn className="btn btn-primary btn-sq-responsive" onClick={() => {appendText(5)}}>5</MDBBtn>
                        </MDBCol>
                        <MDBCol className="col-4">
                            <MDBBtn className="btn btn-primary btn-sq-responsive" onClick={() => {appendText(6)}}>6</MDBBtn>
                        </MDBCol>
                    </MDBRow>
                    <MDBRow>
                        <MDBCol className="col-4">
                            <MDBBtn className="btn btn-primary btn-sq-responsive" onClick={() => {appendText(7)}}>7</MDBBtn>
                        </MDBCol>
                        <MDBCol className="col-4">
                            <MDBBtn className="btn btn-primary btn-sq-responsive" onClick={() => {appendText(8)}}>8</MDBBtn>
                        </MDBCol>
                        <MDBCol className="col-4">
                            <MDBBtn className="btn btn-primary btn-sq-responsive" onClick={() => {appendText(9)}}>9</MDBBtn>
                        </MDBCol>
                    </MDBRow>
                    <MDBRow>
                        <MDBCol className="col-4">
                            <MDBBtn className="btn btn-primary btn-sq-responsive" onClick={removeText}>Back</MDBBtn>
                        </MDBCol>
                        <MDBCol className="col-4">
                            <MDBBtn className="btn btn-primary btn-sq-responsive" onClick={() => {appendText(0)}}>0</MDBBtn>
                        </MDBCol>
                        <MDBCol className="col-4">
                            <Link to="/main/home">
                                <MDBBtn className="btn btn-primary btn-sq-responsive" onClick={Login}>Login</MDBBtn>
                            </Link>
                        </MDBCol>
                    </MDBRow>
                </div>
            </div>
        </div>
    )
}