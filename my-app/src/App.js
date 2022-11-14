import './App.css';
import Login from './Pages/Public/Login/Login';
// import Main from './Pages/Main/Main';
import WelcomePage from './Pages/Main/WelcomePage/WelcomePage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/login' element={<Login></Login>}></Route>
        {/* <Route exact path='/' element={< Main />}></Route> */}
        <Route exact path='/welcome' element={< WelcomePage />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
