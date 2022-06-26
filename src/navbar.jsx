import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
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

      <Link to='/mypage'>
        <span>myPage</span>
      </Link>
    </section>
  );
};

export default Navbar;
