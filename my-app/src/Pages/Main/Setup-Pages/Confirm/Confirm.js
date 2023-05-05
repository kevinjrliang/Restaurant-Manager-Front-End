import './Confirm.css'
import { Link } from 'react-router-dom';
import {MDBCardBody, MDBCardTitle, MDBCardText, MDBBtn, 
    MDBCard, MDBInput, MDBCardHeader} from 'mdb-react-ui-kit';

import { useTranslation, Trans } from 'react-i18next';

export default function Confirm() {
    const { t } = useTranslation();
    return(
        <div className='Confirm'>
            <MDBCard alignment='center'>
                <MDBCardHeader className='bg-primary'></MDBCardHeader>
                <MDBCardBody>
                    <MDBCardTitle>{t("confirm.title")}</MDBCardTitle>
                    <MDBCardText>{t("confirm.description")}</MDBCardText>
                    <MDBInput className="w-50" type="text"></MDBInput>        
                    <br></br>
                    <br></br>                    
                    <Link to="/main/setup/">
                        <MDBBtn>{t("confirm.back_button")}</MDBBtn>
                    </Link>
                    <br></br>
                    <br></br>
                    <MDBBtn>{t("confirm.confirm_button")}</MDBBtn>
                </MDBCardBody>
            </MDBCard>
        </div>
    );
}