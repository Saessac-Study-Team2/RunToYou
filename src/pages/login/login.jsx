import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { isUserState } from '../../library/atom';
import { useRecoilState } from 'recoil';

import { getLoginCookie, setLoginCookie } from '../../library/cookie';
import Footer from '../../components/footer/footer';
import { login } from '../../library/axios';

const Login = ({ setIsUser }) => {
  const [error, setError] = useState('');
  // const [loading, setLoading] = useState(false);
  const [ID, setID] = useState('');
  const [PW, setPW] = useState('');
  const idRef = useRef();
  const passwordRef = useRef();
  const [isLogin, setIsLogin] = useRecoilState(isUserState);

  const handleSubmit = event => {
    event.preventDefault();
    const id = idRef.current.value;
    const password = passwordRef.current.value;

    if (!id || !password) {
      setError('아이디와 비밀번호를 입력해주세요.');
      return;
    } else {
      setID(id);
      setPW(password);
    }
  };

  const onLogin = (ID, PW) => {
    login(ID, PW)
      .then(res => {
        if (res.msg) {
          setLoginCookie(res.token);
          setIsLogin(Boolean(getLoginCookie()));
        } else {
          setError('아이디와 비밀번호를 확인 해 주세요');
        }
      })
      .then()
      .catch(err => console.log(err));
  };

  useEffect(() => {
    if (ID) onLogin(ID, PW);
  }, [ID]);

  return (
    <section>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          height: '100vh',
        }}
      >
        <img src='images/logo1.png' />
        <h1>로그인</h1>
        <div>
          <div container spacing={2}>
            <input
              onChange={() => {
                setError(null);
              }}
              placeholder='id'
              name='id'
              ref={idRef}
              required
              label='id'
              autoFocus
              autoComplete='off'
            />
            <input
              onChange={() => {
                setError(null);
              }}
              placeholder='password'
              name='password'
              ref={passwordRef}
              required
              label='password'
              type='password'
            />
          </div>
          {error ? <div>{error}</div> : null}
          <button type='submit' onClick={handleSubmit}>
            로그인
          </button>
          <div container justifyContent='flex-end'>
            <Link to='/signup'>계정이 없으신가요? 가입하기</Link>
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default Login;
