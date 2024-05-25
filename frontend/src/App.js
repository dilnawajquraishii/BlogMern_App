import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

import Login from './pages/Login';
import Signup from './pages/Signup';
// import setting from './pages/setting';

import Home from './pages/Home';
import { ToastContainer } from 'react-toastify';
import YourPost from './pages/YourPost';
import Navbar from './components/Navbar';
import { useContext } from 'react';
import AuthContext from './components/context/AuthContext';
import Singlepost from './pages/Singlepost';
import Setting from './pages/Setting';
function App() {
  let store = useContext(AuthContext)
  console.log(store.userDetails.login)
  let value = store.userDetails.login

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          {value &&  <Route path='/' element={<Home />} />  }
          {!value &&  <Route path='/' element={<Navigate to={'/login'} />} />  }
          <Route path='/register' element={<Signup />} />

          {value &&  <Route path='/login' element={<Navigate to={'/'} />} />  }
         {!value &&  <Route path='/login' element={<Login />} />}

          {value &&  <Route path='/yourpost' element={<YourPost/>} />  }
          {!value &&  <Route path='/yourpost' element={<Navigate to={'/Login'} />} />  }
          <Route path='/singlepost' element={<Singlepost/>} />
          <Route path='/setting' element={<Setting/>} />






        </Routes>
        <ToastContainer />
      </BrowserRouter>
    </div>
  );
}

export default App;
