import './App.css';
import Main from './Pages/Main/Main';
import Public from './Pages/Public/Public';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';


function App() {
  
  function isLoggedIn() {
    const user = localStorage.getItem('user');
    return !!user;
  }

  return (
    <Router>
      <Routes>
        <Route exact path = '/*' element={ isLoggedIn() ? <Navigate replace to='/main' /> : <Public /> }> </Route>
        <Route exact path= '/main/*' element={ isLoggedIn() ? <Main /> :<Navigate replace to='/'/> }></Route>
      </Routes>
    </Router>
  );
}

export default App;
