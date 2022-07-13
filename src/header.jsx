import React from 'react';
import Navbar from './navbar';
import { Link, useNavigate } from 'react-router-dom';
import { deleteCookie } from './library/cookie';

const Header = ({ isUser, setIsUser }) => {
  const navigate = useNavigate();

  const logOut = async () => {
    deleteCookie();
    setIsUser(false);
    navigate('/');
  };
  return (
    <section>
      <Navbar isUser={isUser} />
      {isUser ? (
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
