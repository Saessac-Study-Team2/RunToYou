import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
// import { Tab, Tabs } from '@material-ui/core';

import Profile from '../components/profile';
import MyPost from '../components/myPost';
import EditProfile from '../components/editProfile';
// import Filtering from '../components/filtering';

const MyPage = ({ posts, setPosts }) => {
  const domain = 'http://34.168.215.145';
  const [user, setUser] = useState({});

  const getProfile = number => {
    // const requestOptions = {
    //   method: 'GET',
    //   redirect: 'follow',
    // };

    return fetch(`http://34.168.215.145/user/${number}`, { method: 'GET' })
      .then(response => response.json())
      .then(result => {
        console.log('getres', result);
        setUser(result);
      })
      .catch(error => console.log('error', error));
  };

  const addProfile = ({ nickname, info }) => {
    const user = {
      nickname,
      info,
    };
    fetch(domain + `/user/1`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    }).then(res => {
      if (res.status === 200) {
        getProfile(1);
      }
    });
  };

  useEffect(() => {
    getProfile(1);
  }, []);
  return (
    <>
      <Profile user={user} />
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
