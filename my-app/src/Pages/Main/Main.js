import './Main.css';
import HomePage from './Home-Page/Home-Page'
import WelcomePage from './WelcomePage/WelcomePage';
import TopMenu from '../../Components/Top-Menu/Top-Menu';
import Setup from './Setup-Pages/Setup';

import {
  Routes,
  Route} from 'react-router-dom';


function Main() {
  return (
    <div className='Main'>
      <TopMenu/>
      {/* <Router> */}
        <Routes>
          <Route path='/setup/*' element={<Setup/>}></Route>
          <Route path='/home' element={<HomePage/>}></Route>
          <Route path= '/' element={<WelcomePage/>}> </Route>
        </Routes>
      {/* </Router> */}
    </div>
  );
}

export default Main;
