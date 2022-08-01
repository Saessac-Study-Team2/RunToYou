import React from 'react';
import { Link } from 'react-router-dom';
import { isUserState } from '../../../library/atom';
import { useRecoilState } from 'recoil';
import styles from './navbar.module.css';

const Navbar = () => {
  const [isLogin, setIsLogin] = useRecoilState(isUserState);
  return (
    <nav className={styles.navbar}>
      {!isLogin && (
        <Link className={styles.navLink} to='/'>
          <span>Intro</span>
        </Link>
      )}
      <Link className={styles.navLink} to='/mainpage'>
        <span>Main Page</span>
      </Link>

      <Link className={styles.navLink} to='/recommended'>
        <span>hotPlace</span>
      </Link>
      {isLogin && (
        <Link className={styles.navLink} to='/mypage'>
          <span>myPage</span>
        </Link>
      )}
    </nav>
  );
};

export default Navbar;
