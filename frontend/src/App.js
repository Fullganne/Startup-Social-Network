import { BrowserRouter, Route, Routes, Switch } from 'react-router-dom';
import SignUp from './Components/signUp/signUp';
import Login from './Components/Login/Login';
import Router from './Pages/Router/Router';
import Sidebar from './Components/Sidebar/Sidebar';
import Profile from './Pages/Profile/Profile';
import HomePage from './Pages/HomePage/HomePage';

function App() {
  return (
    <div>
    <div className="flex">
       {window.location.href.includes("/router")||window.location.href.includes("/user")?( <div className='w-[18.5%] border border-l-slate-500'>
            <Sidebar/>
        </div>):""}
        <div className='w-full'>
            <Routes>
              <Route path='/' element={<Login/>}></Route>
              <Route path='/login' element={<Login/>}></Route>

              <Route path='/signup' element={<SignUp/>}></Route>

                <Route path='/router' index element={<HomePage/>}>
                </Route>
                <Route path='/user' element={<Profile/>}></Route>

            </Routes>
        </div>
    </div>
</div>
  );
}

export default App;
