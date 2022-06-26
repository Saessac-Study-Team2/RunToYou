import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <section className='navbar'>
      <Link to='/'>
        <span>mainPage</span>
      </Link>
      <Link to='/recommended'>
        <span>hotPlace</span>
      </Link>
      <Link to='/mypage'>
        <span>myPage</span>
      </Link>
    </section>
  );
};

export default Navbar;
