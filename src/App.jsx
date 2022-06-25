import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navbar from './navbar';
import Intro from './pages/intro';
import MainPage from './pages/mainPage';
import MyPage from './pages/myPage';
import Recommended from './pages/recommended';

import './App.css';

const App = props => {
  return (
    <BrowserRouter>
      <div className='App'>
        <main>
          <Navbar />
          <section className='features'>
            <Routes>
              <Route path='/' element={<Intro />}></Route>
              <Route path='/mainpage' element={<MainPage />}></Route>
              <Route path='/recommended' element={<Recommended />}></Route>
              <Route path='/mypage' element={<MyPage />}></Route>
            </Routes>
          </section>
        </main>
      </div>
    </BrowserRouter>
  );
};

export default App;
