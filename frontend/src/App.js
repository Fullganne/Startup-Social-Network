import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SignUp from './Components/signUp/signUp';
import Login from './Components/Login/Login';
import Router from './Pages/Router/Router';
import Sidebar from './Components/Sidebar/Sidebar';
import Profile from './Pages/Profile/Profile';
import HomePage from './Pages/HomePage/HomePage';

function App() {
  return (
    <div className="App">
     <Sidebar></Sidebar>
    </div>
  );
}

export default App;
