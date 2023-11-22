import { BrowserRouter, Route, Routes, Switch } from 'react-router-dom';
import SignUp from './Components/signUp/signUp';
import Login from './Components/Login/Login';
import Router from './Pages/Router/Router';
import Sidebar from './Components/Sidebar/Sidebar';
import Profile from './Pages/Profile/Profile';
import HomePage from './Pages/HomePage/HomePage';
import { AppProvider } from './Context/UserContext';
import ListPost from './Components/ProfileComponents/ListPost';
import ImagePost from './Components/ProfileComponents/ImagePost';


function App() {
  
  return (
    <AppProvider>
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
                <Route path='/user' element={<Profile/>}>

                  {/* <Route path='/posts' element={<ListPost/>} ></Route>
                  <Route path='/images' element={<ImagePost/>} ></Route> */}

                </Route>

            </Routes>
        </div>
    </div>
</div>
</AppProvider>
  );
}

export default App;
