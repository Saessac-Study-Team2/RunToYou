import React, { useState, useRef } from 'react';
import { IsValidPW } from '../../signup/signUp';
import { updatePW } from '../../../library/axios';
import styles from './updatePW.module.css';
const UpdatePW = props => {
  const curPWRef = useRef();
  const newPWRef = useRef();
  const confirmNewPWRef = useRef();
  const [error, setError] = useState([]);
  const [modal, setModal] = useState(false);

  const handleSubmitNewPW = () => {
    const curPW = curPWRef.current.value;
    const newPW = newPWRef.current.value;
    const confirmNewPW = confirmNewPWRef.current.value;
    let countErr = 0;
    console.log(curPW);
    console.log(newPW);
    console.log(confirmNewPW);
    if (!curPW || !newPW || !confirmNewPW) {
      setError(prev => [...prev, '모두 입력해주세요']);
      countErr++;
    }
    if (newPW !== confirmNewPW) {
      setError(prev => [...prev, '비밀번호가 일치하지 않습니다.']);
      countErr++;
    } else if (!IsValidPW(confirmNewPW)) {
      setError(prev => [
        ...prev,
        '비밀번호는 8~16자 영문 대 소문자, 숫자를 사용하세요.',
      ]);
      countErr++;
    }
    if (countErr === 0) {
      console.log(error);
      updatePW(curPW, newPW)
        .then(res => {
          console.log(res);
          if (res !== 'failed') {
            alert('비밀번호가 변경되었습니다.');
            setModal(!modal);
          }
        })
        .then(() => {
          curPWRef.current.value = '';
          newPWRef.current.value = '';
          confirmNewPWRef.current.value = '';
        })
        .catch(err => console.log(err));
    }
  };

  return (
    <section>
      {!modal && (
        <button
          className={styles.modalBtn}
          type='submit'
          onClick={() => {
            setModal(!modal);
          }}
        >
          비밀번호 변경하기
        </button>
      )}
      {modal && (
        <div className={styles.modal}>
          <div>
            <label htmlFor='curPW'>현재 비밀 번호</label>
            <input
              onChange={() => {
                setError([]);
              }}
              ref={curPWRef}
              type='password'
              name='curPW'
            />
            {/* <div> */}
            <label htmlFor='newPW'>변경할 비밀 번호</label>
            <input
              ref={newPWRef}
              onChange={() => {
                setError([]);
              }}
              type='password'
              name='newPW'
            />
            <label htmlFor='confirmNewPW'>비밀 번호 확인</label>
            <input
              onChange={() => {
                setError([]);
              }}
              ref={confirmNewPWRef}
              type='password'
              name='confirmNewPW'
            />
          </div>
          <div>
            {error.length !== 0 &&
              error.map((el, index) => <p key={index}>{el}</p>)}
          </div>
          <div>
            <button className={styles.sandBtn} onClick={handleSubmitNewPW}>
              변경
            </button>
            <button
              className={styles.cancleBtn}
              onClick={() => {
                setModal(!modal);
              }}
            >
              변경 취소
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default UpdatePW;
