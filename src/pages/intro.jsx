import React, { useState } from 'react';
// import Login from '../components/login';
import SignUp from '../components/signUp';
// import Guest from '../components/login';
import './intro.css';

const Intro = props => {
  const [showSignUp, setShowSignUp] = useState(false);
  const togglePopUp = () => {
    setShowSignUp(!showSignUp);
  };
  return (
    <div className='intro__bgImg'>
      <button>Log in</button>
      <button onClick={togglePopUp} className='signUP__btn'>
        Sign up
      </button>
      {showSignUp ? <SignUp /> : null}
      <button>Guest</button>
      {/* <Login /> */}
      {/* <Sign-up /> */}
      {/* <Guest /> */}
    </div>
  );
};

export default Intro;
