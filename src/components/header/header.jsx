import React from 'react';
import Navbar from './navbar/navbar';
import { Link, useNavigate } from 'react-router-dom';
import { deleteCookie } from '../../library/cookie';
import { isUserState, UserAvataState, nicknameState } from '../../library/atom';
import { useRecoilState } from 'recoil';
import styles from './header.module.css';

const Header = () => {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useRecoilState(isUserState);
  const [avata, setAvata] = useRecoilState(UserAvataState);
  const [nickname, setNickname] = useRecoilState(nicknameState);

  const logOut = async () => {
    deleteCookie();
    setIsLogin(false);
    navigate('/');
  };
  return (
    <header className={styles.header}>
      <img src='/img/logo1.png' alt='logo img' className={styles.logo} />
      <Navbar />
      {isLogin ? (
        <div className={styles.btnContainer}>
          <img
            src={`http://34.168.215.145/${avata}`}
            alt='profile img'
            className={styles.avata}
          />
          <p className={styles.nickname}>{nickname}</p>
          <button className={styles.button} onClick={logOut}>
            로그아웃
          </button>
        </div>
      ) : (
        <div className={styles.btnContainer}>
          <Link to='/signup'>
            <button className={styles.button}>가입하기</button>
          </Link>
          <Link to='/login'>
            <button className={styles.button}>로그인</button>
          </Link>
        </div>
      )}
    </header>
  );
};

export default Header;
