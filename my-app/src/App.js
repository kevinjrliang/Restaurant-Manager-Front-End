import logo from './logo.svg';
import './App.css';
import SignUp from './SignUp/SignUp';
import Login from './Login/Login';
import WelcomePage from './WelcomePage/WelcomePage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path= '/' element={<Login></Login>}> </Route>
        <Route exact path= '/signUp' element={<SignUp></SignUp>}> </Route>
        <Route exact path= '/welcome' element={<WelcomePage></WelcomePage>}> </Route>
      </Routes>
    </Router>
  );
}

export default App;
