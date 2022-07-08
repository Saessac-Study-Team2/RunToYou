import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import Navbar from './navbar';
import Intro from './pages/intro';
import MainPage from './pages/mainPage';
import MyPage from './pages/myPage';
import Recommended from './pages/recommended';
import SignUp from './pages/signUp';
import Login from './pages/login';

import './App.css';

const App = props => {
  const [isUser, setIsUser] = useState(false);
  return (
    <BrowserRouter>
      <div className='App'>
        <main>
          <Navbar />
          <section className='features'>
            <Routes>
              <Route
                path='/'
                element={<Intro isUser={isUser} setIsUser={setIsUser} />}
              ></Route>
              <Route
                path='/signup'
                element={
                  isUser ? (
                    <Navigate to='/mainpage' />
                  ) : (
                    <SignUp isUser={isUser} setIsUser={setIsUser} />
                  )
                }
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
              <Route
                path='/mainpage'
                element={<MainPage isUser={isUser} setIsUser={setIsUser} />}
              ></Route>
              <Route
                path='/recommended'
                element={<Recommended isUser={isUser} setIsUser={setIsUser} />}
              ></Route>
              <Route
                path='/mypage/*'
                element={
                  !isUser ? (
                    <Navigate to='/mainpage' />
                  ) : (
                    <MyPage isUser={isUser} setIsUser={setIsUser} />
                  )
                }
              ></Route>
            </Routes>
          </section>
        </main>
      </div>
    </BrowserRouter>
  );
};

export default App;
