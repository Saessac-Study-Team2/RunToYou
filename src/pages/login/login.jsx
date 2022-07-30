import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import {
  isUserState,
  UserAvataState,
  userState,
  userPlaceState,
  userIDState,
  nicknameState,
  aboutMeState,
  locationListState,
} from '../../library/atom';
import styles from '../signup/signUp.module.css';
import { getLoginCookie, setLoginCookie } from '../../library/cookie';
import Footer from '../../components/footer/footer';
import { login, getProfile, getPlace } from '../../library/axios';

const Login = ({ setIsUser }) => {
  const [error, setError] = useState([]);
  // const [loading, setLoading] = useState(false);
  const [ID, setID] = useState('');
  const [PW, setPW] = useState('');
  const idRef = useRef();
  const passwordRef = useRef();

  // recoil
  const [isLogin, setIsLogin] = useRecoilState(isUserState);
  const [avata, setAvata] = useRecoilState(UserAvataState);
  const [user, setUser] = useRecoilState(userState);
  const [userPlace, setUserPlace] = useRecoilState(userPlaceState);
  const [userID, setUserID] = useRecoilState(userIDState);
  const [nickname, setNickname] = useRecoilState(nicknameState);
  const [aboutMe, setAboutMe] = useRecoilState(aboutMeState);
  const [locationList, setLocationList] = useRecoilState(locationListState);

  const handleSubmit = event => {
    event.preventDefault();
    const id = idRef.current.value;
    const password = passwordRef.current.value;

    if (!id || !password) {
      setError('아이디와 비밀번호를 모두 입력해주세요');
      return;
    } else {
      setID(id);
      setPW(password);
    }
  };

  const onLogin = async (ID, PW) => {
    await login(ID, PW)
      .then(res => {
        if (res.msg) {
          setLoginCookie(res.token);
          setIsLogin(Boolean(getLoginCookie()));
        } else {
          setError('아이디와 비밀번호를 확인 해 주세요');
        }
      })
      .catch(err => console.log(err));

    await getProfile()
      .then(res => {
        if (res !== undefined) {
          setUser(res);
          setAboutMe(res.info);
          setUserPlace(res.favoritLocation);
          setNickname(res.nickName);
          setUserID(res.userID);
          setAvata(res.userPicture);
        }
      })
      .catch(error => {
        console.log('getUserInfo error', error);
      });
    await getPlace()
      .then(res => setLocationList(res))
      .catch(error => {
        console.log('getPlaceList error', error);
      });
  };

  useEffect(() => {
    if (ID) {
      onLogin(ID, PW);
    }
  }, [ID]);

  return (
    <section className={styles.sectionSignUp}>
      <div className={styles.container}>
        <img className={styles.logo} src='/favicon.ico' />
        <h1 className={styles.title}>로그인</h1>
        <div className={styles.inputContainer}>
          {error ? <div className={styles.error}>{error}</div> : null}
          <input
            className={styles.formInput}
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
            onKeyUp={e => {
              if (e.key === 'Enter') {
                handleSubmit(e);
              }
            }}
          />
          <input
            className={styles.formInput}
            onChange={() => {
              setError(null);
            }}
            placeholder='password'
            name='password'
            ref={passwordRef}
            required
            label='password'
            type='password'
            onKeyUp={e => {
              if (e.key === 'Enter') {
                handleSubmit(e);
              }
            }}
          />
        </div>

        {/* {error ? <div>{error}</div> : null} */}
        <button className={styles.button} type='submit' onClick={handleSubmit}>
          로그인
        </button>
        <div className={styles.link}>
          <Link to='/signup'>
            <p className={styles.notice}>계정이 없으신가요? 가입하기</p>
          </Link>
          <Link to='/mainpage'>
            <p className={styles.notice}>Guest로 둘러보기</p>
          </Link>
        </div>
        <Footer />
      </div>
    </section>
  );
};

export default Login;
