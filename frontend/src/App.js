import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SignUp from './Components/signUp/signUp';
import Login from './Components/Login/Login';
import Router from './Pages/Router/Router';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<SignUp></SignUp>}></Route>
        <Route path='/signup' element={<SignUp></SignUp>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
      </Routes>
    </div>
  );
}

export default App;
