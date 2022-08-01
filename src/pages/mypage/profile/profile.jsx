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
  const [avata, setAvata] = useRecoilState(UserAvataState);
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
      <Avata avata={avata} setAvata={setAvata} />
      <MyInfo
        aboutMe={aboutMe}
        setAboutMe={setAboutMe}
        nickname={nickname}
        setNickname={setNickname}
      />
      <PreferPlace />
      <div className={styles.btns}>
        <UpdatePW />
        <DeleteAccount />
      </div>
    </section>
  );
};

export default Profile;
