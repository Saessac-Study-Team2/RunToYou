import React, { useState, useEffect } from 'react';
import { Link, Routes, Route } from 'react-router-dom';
import { Tab, Tabs } from '@material-ui/core';

import Profile from '../components/profile';
import MyPost from '../components/myPost';
import EditProfile from '../components/editProfile';
// import Filtering from '../components/filtering';

const MyPage = ({ posts, setPosts }) => {
  const domain = 'http://34.168.215.145';
  const [profile, setProfile] = useState({});

  useEffect(() => {
    getProfile();
  }, []);

  const getProfile = id => {
    return fetch(domain + `/user/1`)
      .then(res => res.json())
      .then(data => {
        setProfile(data);
      });
  };

  const addProfile = ({ nickname, preferPlace, aboutMe }) => {
    const myProfile = {
      nickname,
      preferPlace,
      aboutMe,
    };

    fetch(domain + `/user/asd`, {
      method: 'PUT',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(myProfile),
    }).then(res => {
      if (res.status === 201) {
        getProfile();
      }
    });
    console.log(myProfile, JSON.stringify(myProfile));
  };
  return (
    <>
      <Tabs>
        <Tab component={Link} label='editprofile' to='editprofile' />
      </Tabs>

      <Profile />
      <MyPost />
      <Routes>
        <Route
          path='editprofile'
          element={<EditProfile addProfile={addProfile} />}
        ></Route>
      </Routes>
    </>
  );
};

export default MyPage;
