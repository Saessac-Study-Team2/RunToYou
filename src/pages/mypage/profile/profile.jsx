import React, { useState, useEffect } from 'react';
import { getPlace } from '../../../library/axios';
import { useRecoilState } from 'recoil';

import {
  userPlaceState,
  userIDState,
  nicknameState,
  aboutMeState,
  UserAvataState,
} from '../../../library/atom';

import Avata from './avata';
import MyInfo from './myInfo';
import PreferPlace from './preferPlace';
import UpdatePW from './updatePW';
import DeleteAccount from './deleteAccount';

const Profile = () => {
  const [places, setPlaces] = useState([]);

  // recoil
  const [avata, setAvata] = useRecoilState(UserAvataState);
  const [userPlace, setUserPlace] = useRecoilState(userPlaceState);
  const [userID, setUserID] = useRecoilState(userIDState);
  const [nickname, setNickname] = useRecoilState(nicknameState);
  const [aboutMe, setAboutMe] = useRecoilState(aboutMeState);

  const getPlaceList = () => {
    getPlace() //
      .then(res => setPlaces(res))
      .catch(error => {
        console.log('getPlaceList error', error);
      });
  };

  useEffect(() => {
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
      <PreferPlace places={places} />
      {/* 비밀번호 변경 */}
      <UpdatePW />
      {/* 계정 삭제 */}
      <DeleteAccount />
    </section>
  );
};

export default Profile;
