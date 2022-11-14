<<<<<<< HEAD
import './App.css';
import Login from './Login/Login';

function App() {
  return (
    <div className="App">
      <Login/>
    </div>
=======
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
>>>>>>> 7a7016f5b80975de1a715ec73d5293bbf5e2be1a
  );
}

export default App;
