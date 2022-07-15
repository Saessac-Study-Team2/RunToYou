import React, { useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";


import Intro from './pages/intro';
import MainPage from './pages/mainPage';
import MyPage from './pages/myPage';
import Recommended from './pages/recommended';
import SignUp from './pages/signUp';
import Login from './pages/login';

import './App.css';
import { deleteCookie, getLoginCookie } from './library/cookie';


const App = (props) => {
  const [isUser, setIsUser] = useState(Boolean(getLoginCookie()));

  return (
    <BrowserRouter>
      <div className="App">
        <main>

          <Routes>
            <Route path='/' element={<Intro isUser={isUser} />}></Route>

            <Route
              path='/signup'
              element={isUser ? <Navigate to='/mainpage' /> : <SignUp />}
            ></Route>

            <Route
              path='/login'
              element={
                isUser ? (
                  <Navigate to='/mainpage' />
                ) : (
                  <Login isUser={isUser} setIsUser={setIsUser} />
                )
              }
            ></Route>
            <Route path='/mainpage' element={<MainPage />}></Route>
            <Route path='/recommended' element={<Recommended isUser={isUser} setIsUser={setIsUser}/>}></Route>

            <Route
              path='/mypage/*'
              element={
                !isUser ? (
                  <Navigate to='/login' />
                ) : (
                  <MyPage isUser={isUser} setIsUser={setIsUser} />
                )
              }
            ></Route>
          </Routes>

        </main>
      </div>
    </BrowserRouter>
  );
};

export default App;
