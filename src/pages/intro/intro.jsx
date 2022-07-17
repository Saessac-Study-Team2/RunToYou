import React from 'react';
import { useRecoilState } from 'recoil';
import { isUserState } from '../../library/atom';

import { Link } from 'react-router-dom';
import Footer from '../../components/footer/footer';

import './intro.css';

const Intro = ({ isUser }) => {
  const [isLogin, setIsLogin] = useRecoilState(isUserState);

  return (
    <section className='intro__bgImg'>
      <h1>Run To You</h1>
      {isLogin ? (
        <Link to='/mainpage'>
          <button>Main Page</button>
        </Link>
      ) : (
        <>
          <Link to='/login'>
            <button>Log in</button>
          </Link>
          <Link to='/signup'>
            <button className='signUP__btn'>Sign up</button>
          </Link>
          <Link to='/mainpage'>
            <button>Guest</button>
          </Link>
        </>
      )}
      <Footer />
    </section>
  );
};

export default Intro;
