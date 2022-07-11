import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ isUser }) => {
  return (
    <section className='navbar'>
      <Link to='/'>
        <span>Intro</span>
      </Link>
      <Link to='/mainpage'>
        <span>Main Page</span>
      </Link>

      <Link to='/recommended'>
        <span>hotPlace</span>
      </Link>
      {isUser && (
        <Link to='/mypage'>
          <span>myPage</span>
        </Link>
      )}
    </section>
  );
};

export default Navbar;
