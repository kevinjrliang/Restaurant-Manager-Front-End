import './Menu.css';
import MenuTitlePage from './Menu-Title-Page/MenuTitlePage';
import MenuSecTP from './Menu-Section-Title-Page/MenuSecTP';
import MenuSubTP from './Menu-Subsection-Title-Page/MenuSubTP';
import { MDBCol, MDBRow } from 'mdb-react-ui-kit';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';


function Menu() {
  return (
    <div className='Menu'>
      {/* <Router> */}
        <Routes>
          <Route path= '/menu-title-page' element={<MenuTitlePage/>}> </Route>
          <Route path= '/menu-section-title-page' element={<MenuSecTP/>}> </Route>
          <Route path= '/menu-subsection-title-page' element={<MenuSubTP/>}> </Route>
        </Routes>
      {/* </Router> */}
    </div>
  );
}

export default Menu;
