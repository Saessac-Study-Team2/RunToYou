import React, { useState, useRef } from 'react';
import { IsValidPW } from '../../signup/signUp';
import { updatePW } from '../../../library/axios';
const UpdatePW = props => {
  const curPWRef = useRef();
  const newPWRef = useRef();
  const confirmNewPWRef = useRef();
  const [error, setError] = useState([]);
  const [modal, setModal] = useState(false);

  const handleSubmitNewPW = () => {
    // setModal(!modal);
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
          if (res !== 'failed') alert('비밀번호가 변경되었습니다.');
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
      <button
        type='submit'
        onClick={() => {
          setModal(!modal);
        }}
      >
        비밀번호 변경하기
      </button>
      {modal && (
        <section>
          <input
            onChange={() => {
              setError([]);
            }}
            ref={curPWRef}
            type='password'
            name='curPW'
            placeholder='현재 비밀 번호'
          />
          <input
            ref={newPWRef}
            onChange={() => {
              setError([]);
            }}
            type='password'
            name='newPW'
            placeholder='변경할 비밀 번호'
          />
          <input
            onChange={() => {
              setError([]);
            }}
            ref={confirmNewPWRef}
            type='password'
            name='confirmNewPW'
            placeholder='비밀 번호 확인'
          />
          {error.length !== 0 &&
            error.map((el, index) => <p key={index}>{el}</p>)}
          <button onClick={handleSubmitNewPW}>변경</button>
        </section>
      )}
    </section>
  );
};

export default UpdatePW;
