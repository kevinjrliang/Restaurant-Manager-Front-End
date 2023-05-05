import './Public.css';
import SignUp from './/SignUp/SignUp';
import Login from './Login/Login';
import PublicTopMenu from '../../Components/Public-Top-Menu/Public-Top-Menu';

import {
  Routes,
  Route
} from 'react-router-dom';


function Public() {
  return (
    <div className='Public'>
        <PublicTopMenu></PublicTopMenu>
        <Routes>
          <Route path='/' element={<Login></Login>}></Route>
          <Route path= '/signUp' element={<SignUp></SignUp>}> </Route>
        </Routes>
    </div>
  );
}

export default Public;
