import React, { useState } from 'react';
import Navbar from './navbar/navbar';
import { Link, useNavigate } from 'react-router-dom';
import { deleteCookie } from '../../library/cookie';
import { isUserState, UserAvataState, nicknameState } from '../../library/atom';
import { useRecoilState } from 'recoil';
import styles from './header.module.css';
import ConfirmAlert from '../Modals/confirmAlert';

const Header = () => {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useRecoilState(isUserState);
  const [avata, setAvata] = useRecoilState(UserAvataState);
  const [nickname, setNickname] = useRecoilState(nicknameState);
  const [confirmModal, setConfirmModal] = useState(false);

  const onLogout = () => {
    setConfirmModal(!confirmModal);
  };
  const logOut = async () => {
    deleteCookie();
    setIsLogin(false);
    navigate('/');
  };

  const confirmLogout = res => {
    if (res) {
      onLogout();
      logOut();
    } else {
      onLogout();
    }
  };
  return (
    <header className={styles.header}>
      {confirmModal && (
        <ConfirmAlert
          message={'로그아웃 하시겠습니까?'}
          onComfirm={confirmLogout}
          target={nickname}
        />
      )}
      <img src='/img/logo1.png' alt='logo img' className={styles.logo} />
      <Navbar />
      {isLogin ? (
        <div className={styles.btnContainer}>
          <div className={styles.avataWrapper}>
            <div className={styles.avataCentered}>
              <img
                src={`http://34.168.215.145/${avata}`}
                alt='profile img'
                className={styles.avata}
              />
            </div>
          </div>

          <p className={styles.nickname}>{nickname}</p>
          <button className={styles.button} onClick={onLogout}>
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
