import React from 'react';
import Navbar from './navbar/navbar';
import { Link, useNavigate } from 'react-router-dom';
import { deleteCookie } from '../../library/cookie';
import { isUserState, UserAvataState } from '../../library/atom';
import { useRecoilState } from 'recoil';
import styles from './header.module.css';

const Header = () => {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useRecoilState(isUserState);
  const [avata, setAvata] = useRecoilState(UserAvataState);

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
        <>
          <img
            src={`http://34.168.215.145/${avata}`}
            alt='profile img'
            className={styles.avata}
          />
          <button onClick={logOut}>LogOut</button>
        </>
      ) : (
        <div className={styles.btnContainer}>
          <Link to='/signup'>
            <button>Sign up</button>
          </Link>
          <Link to='/login'>
            <button>Log in</button>
          </Link>
        </div>
      )}
    </header>
  );
};

export default Header;
