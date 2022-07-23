import React from 'react';
import { useRecoilState } from 'recoil';
import styles from './profile.module.css';

import {
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
  // recoil
  const [avata, setAvata] = useRecoilState(UserAvataState);
  // const [userPlace, setUserPlace] = useRecoilState(userPlaceState);
  const [userID, setUserID] = useRecoilState(userIDState);
  const [nickname, setNickname] = useRecoilState(nicknameState);
  const [aboutMe, setAboutMe] = useRecoilState(aboutMeState);

  return (
    <section className={styles.profile}>
      <div className={styles.decsWrap}>
        <span className={styles.decs1}>{userID}</span>{' '}
        <span className={styles.decs2}>[{nickname}]</span>{' '}
        <span className={styles.decs3}>님 Profile</span>
      </div>

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
      <PreferPlace />
      {/* 비밀번호 변경 */}
      <UpdatePW />
      {/* 계정 삭제 */}
      <DeleteAccount />
    </section>
  );
};

export default Profile;
