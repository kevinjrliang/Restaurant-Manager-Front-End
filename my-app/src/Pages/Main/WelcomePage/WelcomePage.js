import "./WelcomePage.css"
import {MDBCardBody, MDBCardTitle, MDBCardText, MDBBtn, 
    MDBCard, MDBRow, MDBCol, MDBCardOverlay, MDBCardImage, MDBFooter, 
    MDBInput, MDBTable, MDBTableHead, MDBTableBody} from 'mdb-react-ui-kit';


export default function WelcomePage()
{
    return(
        <div className ="Welcome">
            <span className="welcomeTitle">Hello 'Name'</span>
            <body className="flex">
                <div className="numpad">
                    <div className="display">
                    </div>
                    <div className="nums">
                        <MDBCard>
                            <MDBCardBody className="m-5">
                                <MDBRow>
                                    <MDBInput type="password"></MDBInput>
                                </MDBRow>
                                <MDBRow>
                                    <MDBCol className="col-4">
                                        <MDBBtn className="btn btn-primary btn-sq-responsive">1</MDBBtn>
                                    </MDBCol>
                                    <MDBCol className="col-4">
                                        <MDBBtn className="btn btn-primary btn-sq-responsive">2</MDBBtn>
                                    </MDBCol>
                                    <MDBCol className="col-4">
                                        <MDBBtn className="btn btn-primary btn-sq-responsive">3</MDBBtn>
                                    </MDBCol>
                                </MDBRow>
                                <MDBRow>
                                    <MDBCol className="col-4">
                                        <MDBBtn className="btn btn-primary btn-sq-responsive">4</MDBBtn>
                                    </MDBCol>
                                    <MDBCol className="col-4">
                                        <MDBBtn className="btn btn-primary btn-sq-responsive">5</MDBBtn>
                                    </MDBCol>
                                    <MDBCol className="col-4">
                                        <MDBBtn className="btn btn-primary btn-sq-responsive">6</MDBBtn>
                                    </MDBCol>
                                </MDBRow>
                                <MDBRow>
                                    <MDBCol className="col-4">
                                        <MDBBtn className="btn btn-primary btn-sq-responsive">7</MDBBtn>
                                    </MDBCol>
                                    <MDBCol className="col-4">
                                        <MDBBtn className="btn btn-primary btn-sq-responsive">8</MDBBtn>
                                    </MDBCol>
                                    <MDBCol className="col-4">
                                        <MDBBtn className="btn btn-primary btn-sq-responsive">9</MDBBtn>
                                    </MDBCol>
                                </MDBRow>
                                <MDBRow>
                                    <MDBCol className="col-4">
                                        <MDBBtn className="btn btn-primary btn-sq-responsive">Back</MDBBtn>
                                    </MDBCol>
                                    <MDBCol className="col-4">
                                        <MDBBtn className="btn btn-primary btn-sq-responsive">0</MDBBtn>
                                    </MDBCol>
                                    <MDBCol className="col-4">
                                        <MDBBtn className="btn btn-primary btn-sq-responsive">Login</MDBBtn>
                                    </MDBCol>
                                </MDBRow>
                            </MDBCardBody>
                        </MDBCard>
                    </div>
                </div>
            </body>
        </div>
    )
}