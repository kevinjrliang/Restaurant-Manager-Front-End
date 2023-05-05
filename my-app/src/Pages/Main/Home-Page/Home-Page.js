import './Home-Page.css';
import {MDBCardBody, MDBCardHeader, MDBBtn, 
  MDBCard, MDBRow, MDBCol} from 'mdb-react-ui-kit';

import { useTranslation } from 'react-i18next';

function HomePage() {
  const { t } = useTranslation();

  // These tables are just temporary for now. We will retrieve them from the back end.
  const tables = Array.from(Array(10).keys());

  const menus = Array.from(Array(4).keys());

  const takeouts = Array.from(Array(4).keys());
  
  return (
    <div className='Home-Page'>
      <MDBCard>
        <MDBCardHeader className='text-center'>
          <h3>
            {t("home_page.title")}
          </h3>
        </MDBCardHeader>
        <MDBCardBody>
          {/* Tables row */}
          <MDBRow>
            <MDBCol className='col-md-1 col-sm-2 column-title'>
              <span>{t("home_page.tables")}</span>
            </MDBCol>
            <MDBCol className='col-md-11 col-sm-10'>
              {
                tables.map(table => (
                  <MDBBtn className='btn btn-sq-responsive'> {t("home_page.table_label")}{table}</MDBBtn>
                ))
              }
            </MDBCol>
          </MDBRow>
          {/* Takeouts  row */}
          <MDBRow>
            <MDBCol className='col-md-1 col-sm-2 column-title'>
              <span>{t("home_page.takeout")}</span>
            </MDBCol>
            <MDBCol className='col-md-11 col-sm-10'>
            {
              takeouts.map(takeout => (
                <MDBBtn className='btn btn-info btn-sq-responsive'> {t("home_page.takeout_label")}{takeout}</MDBBtn>
              ))
            }
            </MDBCol>
          </MDBRow>
          {/* Menus row */}
          <MDBRow>
            <MDBCol className='col-md-1 col-sm-2 column-title'>
              <span>{t("home_page.menus")}</span>
            </MDBCol>
            <MDBCol className='col-md-11 col-sm-10'>
              {
                menus.map(menu => (
                  <MDBBtn className='btn btn-secondary btn-sq-responsive'> {t("home_page.menu_label")}{menu}</MDBBtn>
                ))
              }
            </MDBCol>
          </MDBRow>
        </MDBCardBody>
      </MDBCard>
      
    </div>
  );
}

export default HomePage;
