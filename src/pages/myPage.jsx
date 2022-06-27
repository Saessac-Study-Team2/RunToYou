import React, { useState } from 'react';
import { Link, Routes, Route } from 'react-router-dom';
import { Tab, Tabs } from '@material-ui/core';

import Profile from '../components/profile';
import MyPost from '../components/myPost';
import EditProfile from '../components/editProfile';
// import Filtering from '../components/filtering';

const MyPage = ({ posts, setPosts }) => {
  return (
    <>
      <Tabs>
        <Tab component={Link} label='editprofile' to='editprofile' />
      </Tabs>

      <Profile />
      <MyPost />
      <Routes>
        <Route path='editprofile' element={<EditProfile />}></Route>
      </Routes>
    </>
  );
};

export default MyPage;
