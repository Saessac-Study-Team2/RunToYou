import React, { useEffect, useState, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signup, checkID } from "../../library/axios";
import Footer from "../../components/footer/footer";
import styles from "./signUp.module.css";

const IsValidID = id => {
  const ID_REGEX = new RegExp("^[a-z0-9_-]{5,20}$");
  return ID_REGEX.test(id);
};
export const IsValidPW = (password, confirmPassword) => {
  const PW_REGEX = new RegExp("^[a-zA-Z0-9]{8,16}$");
  return PW_REGEX.test(password);
};
const SignUp = () => {
  const [error, setError] = useState([]);
  const [newID, setNewID] = useState("");
  const [newPW, setNewPW] = useState("");
  const IDRef = useRef();
  const PWRef = useRef();
  const confirmPWRef = useRef();
  const navigate = useNavigate();

  const handleSubmit = async event => {
    setNewID("");
    setNewPW("");
    setError([]);

    event.preventDefault();
    const ID = IDRef.current.value;
    const PW = PWRef.current.value;
    const confirmPW = confirmPWRef.current.value;
    console.log(ID, PW, confirmPW);

    let isOK = await checkID(ID);
    console.log(isOK);
    if (!ID || !PW || !confirmPW) {
      setError(prev => [...prev, "모든 항목을 입력해주세요."]);
      return;
    }

    if (!IsValidID(ID)) {
      setError(prev => [
        ...prev,
        "아이디는 5~20자의 영문 소문자, 숫자와 특수기호(_),(-)만 사용 가능합니다.",
      ]);
    } else if (IsValidID(ID)) {
    }

    if (!isOK) {
      setError(prev => [...prev, "중복된 아이디 입니다."]);
    }

    if (PW !== confirmPW) {
      setError(prev => [...prev, "비밀번호가 일치하지 않습니다."]);
    }

    if (!IsValidPW(PW)) {
      setError(prev => [
        ...prev,
        "비밀번호는 8~16자 영문 대 소문자, 숫자를 사용하세요.",
      ]);
    }
    if (IsValidID(ID) && IsValidPW(PW) && isOK && PW === confirmPW) {
      setNewID(prev => ID);
      setNewPW(prev => PW);
    }
  };

  const onSignUp = (ID, PW) => {
    signup(ID, PW) //
      .then(res => {
        if (res === "success") {
          navigate("/login");
        }
      });
  };
  useEffect(() => {
    if (newID) {
      console.log(newID, newPW);
      onSignUp(newID, newPW);
    }
  }, [newID]);

  useEffect(() => {}, [error]);
  return (
    <section className={styles.sectionSignUp}>
      <div className={styles.container}>
        <img
          className={styles.logo}
          src={process.env.PUBLIC_URL + "/favicon.ico"}
        />
        <h1 className={styles.title}>회원가입</h1>
        <div className={styles.inputContainer}>
          {error
            ? error.map(el => <div className={styles.error}>{el}</div>)
            : null}
          <input
            className={styles.formInput}
            placeholder='ID'
            name='id'
            ref={IDRef}
            required
            label='id'
            autoFocus
            autoComplete='off'
          />
          <input
            className={styles.formInput}
            placeholder='password'
            name='password'
            ref={PWRef}
            required
            label='password'
            type='password'
          />
          <input
            className={styles.formInput}
            placeholder='confirm PW'
            name='confirmPW'
            ref={confirmPWRef}
            required
            label='password'
            type='password'
            onKeyUp={e => {
              if (e.key === "Enter") {
                handleSubmit(e);
              }
            }}
          />
        </div>

        <button className={styles.button} type='submit' onClick={handleSubmit}>
          회원 가입
        </button>
        <div className={styles.link}>
          <Link to='/login'>
            <p className={styles.notice}> 계정이 있으신가요? 로그인하기</p>
          </Link>
          <Link to='/mainpage'>
            <p className={styles.notice}>Guest로 둘러보기</p>
          </Link>
        </div>
        <Footer className={styles.footer} />
      </div>
    </section>
  );
};

export default SignUp;
