import React from 'react';
import { useRecoilState } from 'recoil';
import { isUserState } from '../../library/atom';
import styles from './intro.module.css';
import { Link } from 'react-router-dom';

const Intro = () => {
  const [isLogin, setIsLogin] = useRecoilState(isUserState);

  return (
    <section className={styles.bgImg}>
      <div className={styles.container}>
        <img className={styles.logo} src='/img/logo1.png' />
        <div className={styles.buttonContainer}>
          {isLogin ? (
            <Link to='/mainpage'>
              <button className={styles.button}>Main Page</button>
            </Link>
          ) : (
            <>
              <Link to='/login'>
                <button className={styles.button}>Log in</button>
              </Link>
              <Link to='/signup'>
                <button className={styles.button}>Sign up</button>
              </Link>
              <Link to='/mainpage'>
                <button className={styles.button}>Guest</button>
              </Link>
            </>
          )}
          {/* <Footer /> */}
        </div>
      </div>
    </section>
  );
};

export default Intro;
