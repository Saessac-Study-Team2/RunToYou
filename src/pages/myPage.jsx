import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';

import Profile from '../components/profile';
import MyPost from '../components/myPost';
// import Filtering from '../components/filtering';

const MyPage = ({ posts, setPosts }) => {
  return (
    <>
      <h1>Mypage</h1>
      <Routes>
        <Route path='profile' element={<Profile />}></Route>
        <Route path='myPost' element={<MyPost />}></Route>
      </Routes>
    </>
  );
};

export default MyPage;
