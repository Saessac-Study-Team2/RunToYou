import React from 'react';
import Profile from './profile/profile';
import Header from '../../components/header/header';
import styles from './myPage.module.css';
//요청은 한번만 보내

const MyPage = () => {
  return (
    <section className={styles.mypage}>
      <Profile />
      <Header />
    </section>
  );
};

export default MyPage;
