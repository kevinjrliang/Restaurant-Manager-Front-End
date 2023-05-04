import './Setup.css'
import Account from './Account/Account';
import Confirm from './Confirm/Confirm';

import {
    Routes,
    Route  } from 'react-router-dom';

function Setup()
{
    return(
        <div className='Setup'>
            <Routes>
                <Route path= '/' element={<Account/>}> </Route>
                <Route path= '/confirm' element={<Confirm/>}> </Route>
            </Routes>
        </div>
    );
}

export default Setup;