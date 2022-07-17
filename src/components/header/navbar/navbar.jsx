import React from 'react';
import { Link } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { isUserState } from '../../../library/atom';

const Navbar = ({ isUser }) => {
  const [isLogin, setIsLogin] = useRecoilState(isUserState);
  return (
    <section className='navbar'>
      {!isLogin && (
        <Link to='/'>
          <span>Intro</span>
        </Link>
      )}
      <Link to='/mainpage'>
        <span>Main Page</span>
      </Link>

      <Link to='/recommended'>
        <span>hotPlace</span>
      </Link>
      {isLogin && (
        <Link to='/mypage'>
          <span>myPage</span>
        </Link>
      )}
    </section>
  );
};

export default Navbar;
