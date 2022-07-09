import React from 'react';
import { Link } from 'react-router-dom';

import './intro.css';

const Intro = () => {
  return (
    <div className='intro__bgImg'>
      <h1>Run To You</h1>
      <Link to='/login'>
        <button>Log in</button>
      </Link>

      <Link to='/signup'>
        <button className='signUP__btn'>Sign up</button>
      </Link>

      <Link to='/mainpage'>
        <button>Guest</button>
      </Link>
    </div>
  );
};

export default Intro;
