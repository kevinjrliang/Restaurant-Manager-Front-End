import './App.css';
import Login from './Pages/Public/Login/Login';
import Main from './Pages/Main/Main';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/login' element={<Login></Login>}></Route>
        <Route exact path='/' element={< Main />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
