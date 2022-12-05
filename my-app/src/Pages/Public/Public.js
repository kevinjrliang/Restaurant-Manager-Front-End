import './Public.css';
import SignUp from './/SignUp/SignUp';
import Login from './Login/Login';

import {
  Routes,
  Route
} from 'react-router-dom';


function Public() {
  return (
    <div className='Public'>
        <Routes>
          <Route path='/' element={<Login></Login>}></Route>
          <Route path= '/signUp' element={<SignUp></SignUp>}> </Route>
        </Routes>
    </div>
  );
}

export default Public;
