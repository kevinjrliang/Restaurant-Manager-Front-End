import './Main.css';
import HomePage from './Home-Page/Home-Page'
import WelcomePage from './WelcomePage/WelcomePage';
import TopMenu from '../../Components/Top-Menu/Top-Menu';
import Menu from './Menu/Menu';
import { MDBCol, MDBRow } from 'mdb-react-ui-kit';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';


function Main() {
  return (
    <div className='Main'>
      <TopMenu/>
      {/* <Router> */}
        <Routes>
          <Route path='/home' element={<HomePage/>}></Route>
          <Route path= '/' element={<WelcomePage/>}> </Route>
          <Route path= '/menu/*' element={<Menu/>}> </Route>
        </Routes>
      {/* </Router> */}
    </div>
  );
}

export default Main;
