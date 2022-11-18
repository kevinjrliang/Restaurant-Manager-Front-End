import './App.css';
import Login from './Pages/Public/Login/Login';
// import Main from './Pages/Main/Main';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SignUp from './SignUp/SignUp';
import WelcomePage from './WelcomePage/WelcomePage';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/login' element={<Login></Login>}></Route>
        {/* <Route exact path='/' element={< Main />}></Route> */}
        <Route exact path='/welcome' element={< WelcomePage />}></Route>
        <Route exact path= '/' element={<Login></Login>}> </Route>
        <Route exact path= '/signUp' element={<SignUp></SignUp>}> </Route>
      </Routes>
    </Router>
  );
}

export default App;
