import logo from './logo.svg';
// import './App.css';
import SignUp from './SignUp/SignUp';
import Login from './Login/Login';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path= '/login' element={<Login></Login>}> </Route>
        <Route exact path= '/signUp' element={<SignUp></SignUp>}> </Route>
      </Routes>
    </Router>
  );
}

export default App;
