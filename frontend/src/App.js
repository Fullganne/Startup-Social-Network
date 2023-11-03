import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Router from './Pages/Router/Router';
import SignUp from './Components/signUp/signUp';
import Login from './Components/Login/Login';

function App() {
  return (
    <div className="App">
      <Router/>
      {/* <Routes>
        <Route path='/' element={<SignUp></SignUp>}></Route>
        <Route path='/home' element={<Router></Router>}></Route>
        <Route path='/signup' element={<SignUp></SignUp>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
      </Routes> */}
    </div>
  );
}

export default App;
