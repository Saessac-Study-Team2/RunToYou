import React, { useState, useEffect } from 'react';
import Profile from '../components/profile';
import MyPost from '../components/myPost';
import { getLoginCookie } from '../library/cookie';
const axios = require('axios');

const MyPage = ({ posts, setPosts }) => {
  const [isLogin, setLogin] = useState(false);
  const [list, setList] = useState([]);

  const getProfile = () => {
    return axios
      .get('http://34.168.215.145/user/', {
        headers: { Authorization: getLoginCookie() },
      })
      .then(res => {
        setLogin(res.data.msg);
        if (res.data.msg) {
          setList(Object.values(res.data.data));
        }
      })
      .catch(error => console.log('error', error));
  };

  const addProfile = ({ nickName, info }) => {
    const data = {
      nickname: nickName,
      info,
    };
    console.log(data);
    axios
      .put(`http://34.168.215.145/user`, data, {
        headers: { Authorization: getLoginCookie() },
      })
      .then(getProfile())
      .catch(error => console.log('error', error));
  };

  useEffect(() => {
    getProfile();
  }, []);

  return (
    <>
      {isLogin ? (
        <>
          <Profile list={list} setList={setList} addProfile={addProfile} />
          <MyPost />
        </>
      ) : (
        <p>로그인을 해주세요.</p>
      )}
    </>
  );
};

export default MyPage;
