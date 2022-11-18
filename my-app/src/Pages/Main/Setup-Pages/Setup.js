import './Setup.css'
import Account from './Account/Account';

import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
  } from 'react-router-dom';

function Setup()
{
    return(
        <div className='Setup'>
            <Routes>
                <Route path= '/' element={<Account/>}> </Route>
            </Routes>
        </div>
    );
}

export default Setup;