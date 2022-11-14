import './Main.css';
import HomePage from './Home-Page/Home-Page';
import LeftMenu from '../../Components/Left-Menu/Left-Menu';
import TopMenu from '../../Components/Top-Menu/Top-Menu';
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
      <HomePage/>
    </div>
  );
}

export default Main;
