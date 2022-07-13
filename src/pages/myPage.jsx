import React, { useState, useEffect } from 'react';
import Profile from '../components/profile';
import Header from '../header';
import { getLoginCookie } from '../library/cookie';
const axios = require('axios');

const MyPage = ({ isUser, setIsUser }) => {
  const [userList, setUserList] = useState([]);
  const [places, setPlaces] = useState([]);

  const getProfile = () => {
    return axios
      .get('http://34.168.215.145/user/', {
        headers: { Authorization: getLoginCookie() },
      })
      .then(res => {
        if (res.data.msg) {
          setUserList(res.data.data);
        }
      })
      .catch(error => console.log('error', error));
  };

  const getPlace = () => {
    let config = {
      method: 'get',
      url: 'http://34.168.215.145/location/list',
      headers: {},
    };

    axios(config)
      .then(res => setPlaces(res.data))
      .catch(function (error) {
        console.log(error);
      });
  };

  const addPlace = locationid => {
    const data = {
      locationid,
    };
    axios
      .post('http://34.168.215.145/favoritlocation/insert', data, {
        headers: { Authorization: getLoginCookie() },
      })
      .then(getProfile())
      .catch(error => console.log('error', error));
  };

  const deletePlace = locationid => {
    axios
      .delete(`http://34.168.215.145/favoritlocation?lid=${locationid}`, {
        headers: { Authorization: getLoginCookie() },
      })
      .then(getProfile())
      .catch(error => console.log('error', error));
  };

  const deleteImg = () => {
    return axios
      .put(
        'http://34.168.215.145/user/picture',
        {},
        {
          headers: {
            authorization: getLoginCookie(),
          },
        }
      )
      .then(getProfile())
      .then(console.log('delete IMG'))

      .catch(error => console.log('error', error));
  };
  const addProfile = ({ nickname, info }) => {
    const data = {
      nickname,
      info,
    };
    axios
      .put(`http://34.168.215.145/user`, data, {
        headers: { Authorization: getLoginCookie() },
      })
      .then(getProfile())
      .catch(error => console.log('error', error));
  };

  useEffect(() => {
    getProfile();
    getPlace();
  }, []);

  return (
    <>
      <Header isUser={isUser} setIsUser={setIsUser} />
      <Profile
        deletePlace={deletePlace}
        userList={userList}
        setUserList={setUserList}
        places={places}
        getPlace={getPlace}
        addProfile={addProfile}
        getProfile={getProfile}
        addPlace={addPlace}
        deleteImg={deleteImg}
      />
    </>
  );
};

export default MyPage;
