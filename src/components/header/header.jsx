import React from 'react';
import Navbar from './navbar/navbar';
import { Link, useNavigate } from 'react-router-dom';
import { deleteCookie, getLoginCookie } from '../../library/cookie';
import { isUserState } from '../../library/atom';
import { useRecoilState } from 'recoil';

const Header = () => {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useRecoilState(isUserState);

  const logOut = async () => {
    deleteCookie();
    setIsLogin(Boolean(getLoginCookie()));
    navigate('/');
  };
  return (
    <section>
      <Navbar />
      {isLogin ? (
        <button onClick={logOut}>LogOut</button>
      ) : (
        <>
          <Link to='/signup'>
            <button>Sign up</button>
          </Link>
          <Link to='/login'>
            <button>Log in</button>
          </Link>
        </>
      )}
    </section>
  );
};

export default Header;
