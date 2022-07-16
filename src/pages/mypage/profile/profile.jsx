import React, { useState, useEffect } from 'react';
import { getProfile, getPlace } from '../../../library/axios';
import { useRecoilState } from 'recoil';

import {
  userState,
  userPlaceState,
  userIDState,
  nicknameState,
  aboutMeState,
} from '../../../library/atom';

import Avata from './avata';
import MyInfo from './myInfo';
import PreferPlace from './preferPlace';
import UpdatePW from './updatePW';
import DeleteAccount from './deleteAccount';

const Profile = () => {
  // const [userInfo, setUserInfo] = useState({});
  // const [userPlace, setUserPlace] = useState([]);
  // const [userID, setUserID] = useState(null);
  // const [nickname, setNickname] = useState(null);
  // const [aboutMe, setAboutMe] = useState(null);
  const [avata, setAvata] = useState(null);
  const [places, setPlaces] = useState([]);
  // const [loading, setLoading] = useState(true);

  // recoil
  const [user, setUser] = useRecoilState(userState);
  const [userPlace, setUserPlace] = useRecoilState(userPlaceState);
  const [userID, setUserID] = useRecoilState(userIDState);
  const [nickname, setNickname] = useRecoilState(nicknameState);
  const [aboutMe, setAboutMe] = useRecoilState(aboutMeState);
  const [isOpen, setIsOpen] = useState(false);
  const handleEditBtnClick = () => {
    setIsOpen(!isOpen);
  };

  const getUserInfo = () => {
    getProfile() //
      .then(res => {
        setUser(res);
        setUserPlace(res.favoritLocation);
        setAboutMe(res.info);
        setNickname(res.nickName);
        setUserID(res.userID);
        setAvata(res.userPicture);
      })
      .then(() => {
        console.log('user recoil', user);
      })
      .catch(error => {
        console.log('getUserInfo error', error);
      });
  };

  const getPlaceList = () => {
    getPlace() //
      .then(res => setPlaces(res))
      .catch(error => {
        console.log('getPlaceList error', error);
      });
  };

  useEffect(() => {
    getUserInfo();
    // console.log('recoil user', user);
    getPlaceList();
  }, []);

  return (
    <section className='Profile'>
      <p>id : {userID}</p>
      {/* Avata */}
      <Avata avata={avata} setAvata={setAvata} />
      {/* User Info */}
      <MyInfo
        aboutMe={aboutMe}
        setAboutMe={setAboutMe}
        nickname={nickname}
        setNickname={setNickname}
      />
      {/* Prefer Place */}
      <PreferPlace
        places={places}
        userPlace={userPlace}
        setPlaces={setPlaces}
      />
      {/* 비밀번호 변경 */}
      <UpdatePW />
      {/* 계정 삭제 */}
      <DeleteAccount />
    </section>
  );
};

export default Profile;
